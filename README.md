# Readable Research Code

[English](README.en.md) · 中文

面向自用科研代码的 Codex 技能，尤其适用于 Python。让研究步骤、数据变化和计算假设容易阅读与修改，同时减少没有实际收益的封装、防御机制和使用门槛。

技能名称：`readable-research-code`。规则和 Python 示例使用中文编写。

## 它关注什么

- **主流程可见。** 相关步骤和状态放在附近，优先使用直白的条件、循环和有意义的中间变量。
- **防御措施有依据。** 添加检查、异常处理或 hash 校验前，考虑实际风险、已有能力、阅读成本，以及后续使用和维护成本。
- **代码有逻辑留白。** 简单语句保持紧凑，不同思考步骤之间空一行，让读者容易辨认代码结构。
- **修改范围明确。** 只处理当前任务涉及的代码，保留必要的计算、失败策略和资源管理语义。

函数、类、循环、异常处理和校验均可在有实际价值时使用。本技能不按函数数量或行数机械简化代码，也不为每一个故障案例追加专用禁令。

## 安装到 Codex

### 使用 Codex 自带的 skill-installer

在 Codex 中发送：

```text
$skill-installer 请安装 https://github.com/Chengyf2004/readable-research-code/tree/main/skills/readable-research-code
```

需要固定首个发布版本时，将链接中的 `main` 换成 `v0.1.0`。

### 使用 skills CLI

如果已安装 Node.js，也可以通过 [skills CLI](https://github.com/vercel-labs/skills) 安装到 Codex 的用户级技能目录：

```bash
npx skills add Chengyf2004/readable-research-code --skill readable-research-code --agent codex --global
```

先查看可安装内容：

```bash
npx skills add Chengyf2004/readable-research-code --list
```

## 使用方式

技能的 description 提醒模型在编写或修改代码时读取，尤其是 Python 科研代码。`agents/openai.yaml` 明确允许自动选择，安装后无需在每次请求中手动点名；实际是否选中仍由 Codex 根据任务判断，不保证每次触发。

需要明确调用时，可以发送：

```text
$readable-research-code 请完成这次 Python 修改，保持主流程清楚，并用空行划分不同逻辑步骤。
```

技能不修改全局 `AGENTS.md`，不更换项目的格式化配置，也不会安装运行时依赖。

## 文件结构

```text
skills/readable-research-code/
├── SKILL.md
├── LICENSE
├── agents/openai.yaml
└── references/python-examples.md
```

[SKILL.md](skills/readable-research-code/SKILL.md) 包含行为规则和完成前自查；[Python 示例](skills/readable-research-code/references/python-examples.md) 展示留白、分支、配置排版、封装及防御取舍。

## 验证范围

初始版本检查了技能元数据、示例语法及 Codex 的技能可见性，并用两个小型任务观察行为：计算分组均值，以及使用本地 SDK 替身恢复会话。后一个任务保留了范围外的校验，没有增加新的恢复门槛。这些检查不代表对所有模型或任务的效果保证。

## 许可

[MIT](LICENSE)。技能目录同时附带许可证，单独安装时也会保留许可文本。
