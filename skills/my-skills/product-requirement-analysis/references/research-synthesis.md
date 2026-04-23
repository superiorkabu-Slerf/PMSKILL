# Research Synthesis Protocol

在所有 waves 完成后，再开始综合。综合的价值不在于复制信息，而在于连接。

## 一、综合原则

1. 先读完 `01-discovery/raw/` 下所有 raw 文件
2. 找重复出现的模式和主题
3. 识别来源之间的矛盾
4. 把市场、竞争、用户和需求信号连起来
5. 给出战略含义，而不是只罗列事实
6. 为每个主要结论标 High / Medium / Low confidence
7. 汇总所有 data gaps

## 二、输出文件

### `01-discovery/market-analysis.md`

来源：

- `raw/market-size.md`
- `raw/trends.md`
- `raw/regulatory.md`

建议结构：

- Executive summary
- Market / problem size
- Growth trajectory
- Market maturity
- Timing assessment
- Constraint summary
- Data gaps

### `01-discovery/competitor-landscape.md`

来源：

- `raw/direct-competitors.md`
- `raw/indirect-competitors.md`
- `raw/competitor-gtm.md`

建议结构：

- Competitive overview
- Competitor comparison matrix
- Positioning map
- GTM summary
- Platform risk
- Switching cost analysis
- Strategic recommendations
- Vulnerability analysis
- Data gaps

### `01-discovery/target-audience.md`

来源：

- `raw/customer-voice.md`
- `raw/target-audience.md`

建议结构：

- Primary persona
- Secondary persona
- Anti-persona
- Customer pain hierarchy
- Jobs-to-be-done
- Language map
- Buying behavior
- Reach channels
- Data gaps

### `01-discovery/demand-validation.md`

来源：

- `raw/demand-signals.md`
- `raw/customer-voice.md`
- `raw/target-audience.md`

建议结构：

- Search demand
- WTP evidence
- Pricing landscape summary
- Demand validation score
- Requirement strength assessment
- Critical unknowns
- Data gaps

### `01-discovery/distribution-activation.md`

来源：

- `raw/distribution-channels.md`
- `raw/activation-risks.md`

建议结构：

- Primary channels
- Channel opportunity ranking
- Activation requirements
- Cold-start risks
- Key activation metrics
- Distribution feasibility assessment
- Data gaps

### `01-discovery/confidence-dashboard.md`

来源：

- 所有 raw 文件和所有综合文件

建议结构：

- Overview
- Claim-level confidence table
- Highest confidence findings
- Lowest confidence findings
- Critical unknowns
- Verification priorities

## 三、跨文件连接

每份综合文件最后都建议加入一段“Strategic Connections”，把它和其他文件的关键发现连起来。

例如：

- 市场趋势如何影响竞争格局
- 用户语言如何影响定位
- 定价证据如何影响需求成立性判断
- 分发渠道与冷启动风险如何影响最终可行性判断

## 四、综合后的下一步

综合完成后，必须进入 verification，而不是直接下最终结论。

## 五、最终结论的引用要求

最终推荐不能脱离 discovery deliverables 单独存在。

在 `requirement-conclusion.md` 中，至少要显式引用以下文件各 1 个关键发现：

- `market-analysis.md`
- `competitor-landscape.md`
- `target-audience.md`
- `demand-validation.md`
- `distribution-activation.md`
