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
