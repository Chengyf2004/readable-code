# 原则来源

这里列出可直接核查的作者材料、出版社预览与官方工程规范。正文和八维标准为中文意译及应用设计；没有复制书籍长段落。书籍原则不提供本评审skill的0—3量表。

## 书籍与作者讲义

- **Dustin Boswell、Trevor Foucher，《The Art of Readable Code》**：[出版社目录与预览](https://www.oreilly.com/library/view/the-art-of/9781449318482/)。以读者理解为目标，关注名称、控制流、表达式和文字信息；主要对应D1、D2、D7、D8。
- **John Ousterhout，《A Philosophy of Software Design》**：[作者书籍页](https://web.stanford.edu/~ouster/cgi-bin/book.php)、[复杂性](https://web.stanford.edu/~ouster/cgi-bin/cs190-winter18/lecture.php?topic=complexity)、[抽象](https://web.stanford.edu/~ouster/CS349W/lectures/abstraction.html)、[注释](https://web.stanford.edu/~ouster/cgi-bin/cs190-winter18/lecture.php?topic=comments)、[异常](https://web.stanford.edu/~ouster/cgi-bin/cs190-spring16/lecture.php?topic=exceptions)。降低认知负担、隐藏重要实现细节、让依赖可发现，支持D2—D7。
- **Robert C. Martin，《Clean Code》**：[出版社](https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884)、[与Ousterhout的直接讨论](https://github.com/johnousterhout/aposd-vs-clean-code)。采用意图命名、职责聚焦和接手者视角；函数长度、注释与过度拆分的分歧保留为取舍，主要对应D1、D4、D7。
- **Martin Fowler，《Refactoring》第二版**：[作者书籍页](https://martinfowler.com/books/refactoring.html)、[在线目录](https://refactoring.com/catalog/index.html)、[提取函数](https://refactoring.com/catalog/extractFunction.html)、[内联函数](https://refactoring.com/catalog/inlineFunction.html)、[分阶段](https://refactoring.com/catalog/splitPhase.html)。根据理解收益选择整理方向，支持D1—D4、D8。
- **David Thomas、Andrew Hunt，《The Pragmatic Programmer》20周年版**：[DRY官方节选](https://media.pragprog.com/titles/tpp20/dry.pdf)、[作者与出版社建议](https://pragprog.com/tips/)。同一知识的多份维护表达与外观相同的独立规则分开，主要支持D3、D5、D6。
- **Kent Beck，《Tidy First?》**：[Guard Clauses](https://www.oreilly.com/library/view/tidy-first/9781098151232/ch01.html)、[Reading Order](https://www.oreilly.com/library/view/tidy-first/9781098151232/ch05.html)、[声明与初始化](https://www.oreilly.com/library/view/tidy-first/9781098151232/ch07.html)、[One Pile](https://www.oreilly.com/library/view/tidy-first/9781098151232/ch13.html)、[作者关于结构与行为改动的说明](https://newsletter.kentbeck.com/p/distinctions-with-a-difference)。把信息放在需要的位置，分清结构整理与行为改动，支持D2—D4、D8。
- **David L. Parnas，On the Criteria To Be Used in Decomposing Systems into Modules（1972）**：[大学托管原论文文本](https://www.cs.lafayette.edu/~gexia/cs301/resources/parnas.html)。按隐藏的知识与设计决定考虑模块边界，主要支持D3—D5；按处理阶段看主流程与按信息隐藏分解模块是不同问题。

## 作者博客与官方规范

- **Martin Fowler / Eric Evans，领域语言**：[Ubiquitous Language](https://martinfowler.com/bliki/UbiquitousLanguage.html)。术语贯穿业务与源码，支持D1、D5。
- **Martin Fowler，流式接口与函数长度**：[Fluent Interface](https://martinfowler.com/bliki/FluentInterface.html)、[Function Length](https://martinfowler.com/bliki/FunctionLength.html)。短名称按完整使用语境判断；长度不能替代语义收益，支持D1、D4、D8。
- **Carson Gross，行为局部性**：[Locality of Behaviour](https://htmx.org/essays/locality-of-behaviour/)。关注读者需要怎样补全调用关系；原文是界面场景，用于Python时只借鉴关系可见性，不要求全部内联，支持D2—D5。
- **Casey Muratori，语义压缩**：[Semantic Compression](https://caseymuratori.com/blog_0015)。从实际共同步骤和数据提炼抽象；案例来自C++编辑器，不把其范式偏好当普遍规则，支持D3—D6。
- **Dan McKinley，机制的总体成本**：[Choose Boring Technology](https://mcfunley.com/choose-boring-technology)。借鉴注意力和理解成本的取舍，不把其组织技术选择比喻变成代码计数阈值，主要支持D6。
- **Google工程评审指南**：[What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)。设计、复杂性、命名、注释和上下文阅读方法支持八维检查；功能、测试、安全项目不自动进入本评审skill评分。
- **Python官方规范**：[PEP 8](https://peps.python.org/pep-0008/)、[PEP 20](https://peps.python.org/pep-0020/)。以可读性、项目一致性和明确关系为目标，结合场景采用惯用表达，不按规则符合率直接打分。

## 采用原则

作者之间存在真实取舍。短函数、深模块、集中规则、局部表达与详细说明各自有收益，也各自有成本。评审应说明当前任务下的净阅读收益，不能只贴“违反DRY”“不够模块化”一类标签。

评分模型是否准确，需要通过源码核对和人工校准验证。来源可信证明原则有出处，不证明某次自动评分正确。
