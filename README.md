# PMSKILL

用于集中管理产品经理工作过程中的技能（skills）仓库。

## 目录设计

本仓库按“来源与用途”分为 3 类 skill 目录：

```text
skills/
  my-skills/
    product-requirement-analysis/
      SKILL.md
  product-related-external/
    some-product-skill/
      SKILL.md
  useful-skills/
    some-useful-skill/
      SKILL.md
  _template/
    SKILL.md
```

这样设计的好处：

- 便于按来源管理 skill，减少“这个 skill 到底是谁写的”带来的混乱
- 便于区分你自己的核心资产与外部参考 skill
- 便于把好用但非产品专用的 skill 单独沉淀
- 每个 skill 可以独立放说明、示例和资源文件
- 后续扩展时不需要频繁调整仓库结构

## 目录说明

- `skills/my-skills/`：存放你自己创建和持续维护的 skill
- `skills/product-related-external/`：存放其他人创建、但和产品经理工作直接相关的 skill
- `skills/useful-skills/`：存放其他通用但值得保留的 skill
- `skills/_template/`：公共模板目录，用于快速创建新 skill

## 推荐规范

- `skill-name` 使用短横线命名，例如 `user-interview`
- 每个 skill 至少包含一个 `SKILL.md`
- 如果某个 skill 有配套资源，可放在同级目录中

## 快速新增一个 Skill

1. 复制 `skills/_template/` 目录
2. 选择放入 `my-skills`、`product-related-external` 或 `useful-skills`
3. 重命名为目标 skill 名称
4. 修改其中的 `SKILL.md`

## 当前状态

仓库已完成初始化，并已按 3 类目录拆分，后续可以持续补充更多 skill。
