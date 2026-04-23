# Verification Protocol

综合完成后，先做 verification，再进入最终结论。

## 一、什么时候运行

- 所有 deliverables 写完之后
- 最终结论之前

## 二、检查目标

### 1. 无来源或无标记断言

所有关键数字、比例、事实性判断都应该被标记为：

- `[Data]`
- `[Estimate]`
- `[Assumption]`
- `[Opinion]`

### 2. 内部矛盾

检查是否存在：

- 同一指标在不同文件里数值不一致
- 一个文件说高置信度，另一个文件的证据却不足
- 结论与前文研究明显脱节

### 3. 置信度一致性

检查：

- 单一弱来源不应标高置信度
- 多个强来源一致时不应标低置信度
- 每个主要结论都应有 confidence

### 4. 数据缺口是否被保留

检查：

- deliverable 是否带 Data Gaps
- raw file 中提到的 gap 有没有在综合后消失
- 是否把“没搜到”假装写成“没有”

### 5. Flags 是否存在

每份 deliverable 建议带：

- Red Flags
- Yellow Flags

### 6. 数据时效

所有超过 18 个月的数据都应标出可能过时。

### 7. 需求结论是否真的被研究支撑

重点检查：

- 市场判断是否由 market-analysis 支撑
- 竞争判断是否由 competitor-landscape 支撑
- 用户结论是否由 target-audience / customer-voice 支撑
- 分发与冷启动判断是否由 distribution-activation 支撑
- 最终建议是否覆盖了主要风险和关键 unknowns

## 三、输出

生成：

- `01-discovery/verification-report.md`

建议结构：

- Summary
- Critical Issues
- Warnings
- Info
- Verification Checklist

## 四、流程控制

- 如果 Critical issues > 0，暂停并让用户决定是否修复
- 如果只有 Warnings / Info，可继续进入 Research Gate
