# PMSKILL

用于集中管理产品经理工作过程中的技能（skills）仓库。

## 目录设计

本仓库按 `skills/<category>/<skill-name>/SKILL.md` 的结构管理：

```text
skills/
  research/
    user-interview/
      SKILL.md
  planning/
    roadmap-draft/
      SKILL.md
```

这样设计的好处：

- 便于按主题分类管理多个 skill
- 每个 skill 可以独立放说明、示例和资源文件
- 后续扩展时不需要频繁调整仓库结构

## 推荐规范

- `category` 使用清晰的英文分类名，例如 `research`、`planning`、`analysis`
- `skill-name` 使用短横线命名，例如 `user-interview`
- 每个 skill 至少包含一个 `SKILL.md`
- 如果某个 skill 有配套资源，可放在同级目录中

## 快速新增一个 Skill

1. 复制 `skills/_template/` 目录
2. 重命名为目标分类和 skill 名称
3. 修改其中的 `SKILL.md`

## 当前状态

仓库已完成初始化，后续可以按目录持续补充更多产品经理工作流 skill。
