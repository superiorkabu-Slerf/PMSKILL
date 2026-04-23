# Output Guidelines

## 标准文件头

每个输出文件建议都带统一头部：

```markdown
# [文档标题]

**Phase:** [阶段名称]
**Project:** [project-name]
**Date:** [生成日期]
**Confidence:** [High / Medium / Low]

---
```

## 标准文件尾

每个输出文件建议都以以下结构收尾：

```markdown
---

## Flags

**Red Flags:**
- [列出关键红旗，或写 None identified]

**Yellow Flags:**
- [列出关键黄旗，或写 None identified]

## Sources
- [本文件引用的关键来源，并标注来源层级]
```

## 跨文件引用

当某个结论依赖其他研究文件时，要显式引用文件路径和具体发现。

好的写法：

> “目标用户对价格高度敏感（见 `01-discovery/target-audience.md`，Buying Behavior 节），这与竞品定价区间 `$X-Y`（见 `01-discovery/competitor-landscape.md`）一致。”

不要写成：

> “如前文所述，用户对价格比较敏感。”

## 最终输出建议

最终结论前，先在对话中给用户一个简短的 Final Assessment Summary：

- 当前判断
- 结论置信度
- 市场 / 用户 / 竞争的主要结论
- 最大风险
- 下一步建议

然后再生成最终文件。

## 过程中的阶段性汇报

在研究阶段，不要一直沉默到最终结论。建议在以下节点发送阶段性汇报：

- Intake 完成后
- Wave 1 完成后
- Wave 2 完成后
- Wave 3 完成后
- Wave 4 完成后
- Research Gate 前

每次汇报建议包含：

- 本阶段研究了什么
- 当前最强发现
- 当前最大疑点
- 最适合用户补充的内容

汇报要短，但必须让用户感到自己仍在共同参与研究，而不是被系统抛下。
