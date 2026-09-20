# Python 可读性示例

示例展示取舍，不是完整可执行项目，也不是批量改写规则。变量、依赖和数据契约按各节说明理解。

## 1. 简单语句紧凑，不同逻辑段留白

假设任务已明确输入列和分组规则。下面没有复杂语法，但连续堆放使阶段不容易辨认：

```python
data = pd.read_excel(input_path)
data = data[["sample_id", "group", "value"]]
control = data.loc[data["group"] == "control", "value"]
treated = data.loc[data["group"] == "treated", "value"]
difference = treated.mean() - control.mean()
result = pd.DataFrame({"mean_difference": [difference]})
result.to_csv(output_path, index=False)
```

仅按数据准备、分组、计算和输出分段；计算语义不变：

```python
data = pd.read_excel(input_path)
data = data[["sample_id", "group", "value"]]

control = data.loc[data["group"] == "control", "value"]
treated = data.loc[data["group"] == "treated", "value"]

difference = treated.mean() - control.mean()
result = pd.DataFrame({"mean_difference": [difference]})

result.to_csv(output_path, index=False)
```

不必再为每一步增加复述性注释，也不应给每条语句单独加空行。

## 2. 多种情况用明确分支表达

以下变量均已定义；`message` 可以是空字符串，不能用其真假值替代是否为 None 的判断。

难读：

```python
prompt = message if message is not None else (resume_prompt if resume else prompt_path.read_text())
```

更容易逐步理解，且保留空字符串的含义：

```python
if message is not None:
    prompt = message
elif resume:
    prompt = resume_prompt
else:
    prompt = prompt_path.read_text()
```

一个简单二选一表达式不必机械展开；这里的收益来自三个分支不再嵌套。

## 3. 独立配置项分别呈现

密集写法让一个设置难以单独定位：

```python
settings = {
    "model": model, "reasoning_effort": "medium",
    "max_attempts": 3, "retry_delay_seconds": 10,
}
```

字段各有独立用途，分行更清楚：

```python
settings = {
    "model": model,
    "reasoning_effort": "medium",
    "max_attempts": 3,
    "retry_delay_seconds": 10,
}
```

`data = pd.read_excel(path, sheet_name="results")` 则是一个清楚的动作，可以保持一行。相关值的解包如 `rows, columns = data.shape` 也不需要拆开。

## 4. 防御行为取决于分析需求

任务要求读取指定文件，且没有定义失败后的替代数据。此时下面的新增兜底会将读取失败伪装成可继续计算：

```python
try:
    data = pd.read_excel(input_path)
except Exception:
    data = pd.DataFrame(columns=["sample_id", "value"])
```

按照这一任务契约，直接读取即可让问题清楚暴露：

```python
data = pd.read_excel(input_path)
```

这改变了失败路径，因此不能把它当作任意已有代码的等价风格重构。已有程序若明确允许部分失败，应保留该策略及失败记录。错误脱敏、必要资源释放和真正增加定位信息的异常处理，也需要单独判断。

另一方面，任务若要求两张表按唯一 sample_id 一对一匹配，这个检查直接保护研究假设：

```python
combined = measurements.merge(labels, on="sample_id", validate="one_to_one")
```

不能因“减少防御”删除它。它只检查键的合并关系，不证明所有样本均匹配，也不替代任务另外要求的样本覆盖检查。

## 5. 函数和循环保留实际含义

只转发调用、没有增加任务含义的包装通常可省去：

```python
def read_input(path):
    return pd.read_excel(path)


data = read_input(input_path)
```

在没有其他职责时，直接调用更易追踪：

```python
data = pd.read_excel(input_path)
```

而有明确输入输出的计算可以保留为函数，例如下面假设输入为符合既定形状约定的数组：

```python
def root_mean_square_error(observed, predicted):
    residuals = predicted - observed
    return np.sqrt(np.mean(residuals ** 2))
```

它给计算提供了明确含义和独立检查入口，不以是否只调用一次决定去留。批量处理样本或参数时同样可以使用直白的 for 循环，不需要复制相同步骤或制造通用流水线。

## 6. Hash 的用途必须具体

给一份刚写出的本地结果默认增加写前、写后、读取后多轮 hash 比对，若没有完整性契约或风险依据，通常增加了无收益的步骤。

如果任务明确要求下载文件必须匹配提供的 SHA-256，校验就是输入条件的一部分，应保留；不匹配时不能继续分析。缓存按文件内容失效、记录研究输入版本，也可能需要 hash。是否需要每次重算、使用哪种算法和比较哪份可信记录，依据实际用途决定。

## 7. 异步清理不能按缩进深度删除

主流程同时管理事件流、客户端和信号时，多层 finally 可能在表达“前一个关闭操作失败，仍要尝试后一个”。先识别资源的取得、使用、关闭顺序和失败语义，再整理代码。

上下文管理器只在依赖确实支持且语义匹配时使用。不要为隐藏缩进制造一串小函数，不要删除超时、取消或关闭逻辑来让主流程看起来更直。可以用逻辑分段、局部状态和少量职责明确的函数降低阅读负担，保留原有生命周期保证。
