import interfaceResearchMock from './assets/interface-research-mock.svg';

export const NAVIGATION = [
  { name: '首页', href: '首页' },
  { name: '产品', href: '产品' },
  { name: '资源', href: '资源' },
  { name: '资讯', href: '资讯' },
  { name: '公开实验室', href: '公开实验室' },
  { name: '关于我们', href: '关于我们' },
];

export const ENTRIES = [
  {
    title: '用产品',
    description: '已上线和正在更新的 AI 产品。',
    buttonText: '使用产品',
    path: '/products',
    theme: 'green',
  },
  {
    title: '拿走资源',
    description: '可直接复用的 Prompt、Skill、流程和模板。',
    buttonText: '去拿资源',
    path: '/resources',
    theme: 'orange',
  },
  {
    title: '看资讯',
    description: '经验文章、判断记录和踩坑总结。',
    buttonText: '去看资讯',
    path: '/insights',
    theme: 'blue',
  },
];

export const STAGE_STATS = [
  { label: '项目样本', value: 6, detail: '覆盖构思、验证、进行、上线、暂停和放弃等真实状态。' },
  { label: '方法与资源', value: 7, detail: '已经沉淀出可继续复用的方法记录和结构化资产。' },
  { label: '问题专题', value: 4, detail: '围绕真实高频问题组织，不按抽象知识分类堆内容。' },
  { label: '实验入口', value: 2, detail: '已经有可对外展示的阶段性能力入口。' },
];

export const PRODUCT_STATUSES = ['全部', '可直接使用', '验证中', '进行中', '研究中', '已暂停', '已放弃'] as const;

export const PRODUCTS = [
  {
    id: 1,
    name: 'AI 中转站',
    status: '可直接使用',
    oneLiner: '把常用 AI 能力整理成更容易测试、切换和进入的使用入口。',
    description: '把多个模型能力整理成一个更稳定、更容易接入的使用入口，减少接模型时的试错成本。适合需要快速验证 AI 功能、又不想被模型接入细节拖慢节奏的团队。',
    suitability: '适合已经明确要用 AI 做事，但不想把时间耗在来回找入口、切换工具和重复试错上的用户。',
    problems: [
      '不知道从哪个入口开始',
      '不同能力分散在不同地方，切来切去很乱',
      '想先快速判断一套入口是否顺手，而不是先研究复杂配置'
    ],
    results: '你现在可以先体验一版经过整理的使用入口，看它是否更符合你的使用习惯。',
    link: '/products/1/use',
    labels: ['多模型入口', '按量调用'],
    tags: ['Stable', 'Efficiency'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    relatedResources: [1, 2, 3], // IDs or names of resources
    relatedInsights: [1, 2],
    relatedLab: [2],
  },
  {
    id: 2,
    name: '生图网站',
    status: '可直接使用',
    oneLiner: '把图像生成这件事做得更直接，让你更快从想法走到第一张能用的图。',
    description: '让不熟悉模型和参数的人，也能更快生成接近需求的图片结果。适合想快速出图、做内容配图、海报草稿或视觉方案的人。',
    suitability: '适合想快速出图、验证视觉方向或做内容试稿的人。',
    problems: [
      '不是每个人都想研究复杂参数',
      '参数配置过于繁琐',
      '出图结果难以预测'
    ],
    results: '当前可作为轻量入口体验，重点验证的是上手效率和出图反馈。',
    link: '/products/2/use',
    labels: ['image-2', '￥0.05一张'],
    tags: ['Creative', 'Visual'],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'AI 社媒工具',
    status: '验证中',
    estimatedLaunch: '预计 2026 年 6 月上线',
    oneLiner: '把选题、草稿、整理和发布前准备串成一个更顺手的内容工作流。',
    description: '帮助团队更快完成选题整理、内容起草、发布协作和复用，让社媒运营不再全靠手工拼接。适合需要持续做内容、但流程分散、素材容易丢、重复劳动很多的小团队。',
    suitability: '适合需要持续做内容输出、运营账号或需要批量整理表达的人。',
    problems: [
      '选题记录零散',
      '素材重复利用率低',
      '不仅仅是写一句话，而是减少从想法到发布前准备之间反复切换工具的成本'
    ],
    results: '当前仍在验证中，适合关注方向、看进展和提前判断是否值得等。',
    link: '/products/3',
    labels: ['内容工作流', '邀请内测'],
    tags: ['Co-working', 'Content'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: '统一接口研究入口',
    status: '研究中',
    estimatedLaunch: '预计 2026 年 7 月开放测试',
    oneLiner: '围绕多模型与多入口的接入方式做统一梳理，目标是减少不同能力之间的切换成本。',
    description: '我们正在研究如何建立一套更标准化的模型调用层，让开发者和产品经理在验证想法时无需关心底层的 API 琐事。',
    suitability: '开发者与产品团队。',
    problems: ['API 门槛高', '多模型切换复杂', '测试环境不统一'],
    results: '这是一个偏底层的研究项目，目前以文档和方案评审为主。',
    link: '/products/4',
    labels: ['多模型路由', '统一 API'],
    tags: ['Standardization', 'API'],
    image: interfaceResearchMock,
  },
  {
    id: 5,
    name: '会议到行动链路整理',
    status: '验证中',
    estimatedLaunch: '预计 2026 年 6 月开启内测',
    oneLiner: '从会议纪要到任务跟进的链路整理，重点不是摘要本身，而是如何让决策不丢。',
    description: '重点解决会后执行力缺失的问题。通过结构化的记录和自动化同步，确保每一个决定都有动作承接。',
    suitability: '管理密集的团队。',
    problems: ['会后无动作', '决策过程不可溯', '任务分解耗时'],
    results: '正在部分真实场景中测试闭环效率。',
    link: '/products/5',
    labels: ['会议闭环', '任务跟进'],
    tags: ['Execution', 'Workflow'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    name: '泛 AI 资讯聚合站',
    status: '已放弃',
    oneLiner: '我们曾尝试做一个更泛的 AI 资讯聚合入口，但最终放弃了。',
    description: '信息很多，但很难形成真正值得反复回来使用的价值，最终不如把精力放在资源、产品和判断本身。',
    suitability: '寻找通用 AI 资讯的用户。',
    problems: ['内容同质化严重', '用户粘性低', '难以建立竞争壁垒'],
    results: '记录了我们为何停止该方向的判断逻辑。',
    link: '#',
    tags: ['Deprioritized', 'Archived'],
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800',
  }
];

export const RESOURCE_CATEGORIES = [
  { name: '全部', desc: '查看所有资源' },
  { name: 'Skill', desc: '把一件常做的事变得更容易上手' },
  { name: 'Agent', desc: '把判断和提问流程结构化' },
  { name: '提示词', desc: '把高频表达固定下来' },
  { name: '任务包', desc: '把一整段执行流程整理好' },
  { name: '方法模板', desc: '把复杂任务拆成能重复使用的结构' },
  { name: '经验文档', desc: '把做过的坑和判断直接讲清楚' },
];

export const PROBLEM_GROUPS = [
  '先判断值不值得做',
  '先把需求讲清楚',
  '先把 Prompt 调稳定',
  '先把会议和决策理顺',
  '先整理成可复用流程',
];

export const RESOURCES = [
  { 
    id: 1,
    name: '项目判断 Agent', 
    type: 'Agent',
    action: '查看 Agent',
    category: 'Agent',
    maturity: '可直接使用',
    problem_group: '先判断值不值得做',
    oneLiner: '在一个方向真正开做之前，帮你先判断它值不值得做、应该先问什么、风险在哪。',
    description: '输入项目想法、目标用户和大致场景后，它会帮你判断这件事值不值得做、最先该验证什么、下一步应该怎么推进。',
    suitability: '适合产品、创始人、运营或任何经常面对“这个想法要不要继续往下推”的人。',
    githubLabel: '查看 GitHub 仓库',
    githubUrl: 'https://github.com/kabu/project-decision-agent',
    agentStatus: '试运行',
    agentVersion: 'V1.0',
    owner: 'Kabu',
    updatedAt: '2026-05',
    agentCapabilities: [
      '帮你先拆清一个方向到底在解决什么问题。',
      '帮你判断现在最值得先验证的是哪一环。',
      '帮你把风险点、信息缺口和下一步问题暴露出来。',
      '帮你快速形成一版可继续讨论的判断结果。'
    ],
    agentSkills: [
      {
        name: '项目判断 Skill',
        role: '负责追问目标、场景、投入和风险，先把判断框架搭起来。 ',
        resourceId: 1
      },
      {
        name: '写 PRD 的 Skill',
        role: '把已经聊清楚的信息继续整理成结构化文档或下一步输入。',
        resourceId: 2
      },
      {
        name: 'Prompt QA Board',
        role: '帮助检查判断提示和输出结构是否足够稳定、可复用。',
        resourceId: 3
      }
    ],
    installMethods: [
      {
        id: 'command',
        label: '复制指令',
        command: 'npx openclaw@latest install project-decision-agent',
        actionLabel: '复制指令'
      },
      {
        id: 'package',
        label: '下载安装包',
        packageName: 'project-decision-agent-v1.0.zip',
        packageMeta: 'ZIP / V1.0 / 412 KB',
        actionLabel: '下载安装包'
      },
      {
        id: 'platform',
        label: '安装到平台',
        platforms: ['OpenClaw', 'Claude Code', 'Cursor'],
        actionLabel: '申请接入'
      }
    ],
    invokeSteps: [
      '先把 Agent 安装到 OpenClaw 或支持的工具里。',
      '打开对话窗口，直接贴入你的项目方向、目标用户和当前问题。',
      '从第一轮追问开始补信息，直到拿到结构化判断结果。'
    ],
    firstPrompt: '我想判断这个方向值不值得继续做：\n\n项目想法：\n目标用户：\n当前场景：\n我最担心的问题：',
    richContent: [
      {
        type: 'paragraph',
        content: '这个 Agent 不是只给你一段 Prompt，而是把一整套“先问什么、先看什么、先判断什么”的工作流装进了对话里。你把一个模糊方向丢进去，它会先帮你收窄问题，再把继续推进前最该确认的信息暴露出来。'
      },
      {
        type: 'heading',
        content: '它适合处理什么问题'
      },
      {
        type: 'list',
        items: [
          '你脑子里已经有一个方向，但不确定值不值得投入。',
          '你和团队对“先做什么”还没有统一判断。',
          '你担心过早推进到错误题目里，想先做一轮收窄和校验。',
          '你需要一版可继续讨论的判断底稿，而不是直接进入执行。'
        ]
      },
      {
        type: 'heading',
        content: '它会怎么和你聊'
      },
      {
        type: 'paragraph',
        content: '它通常会先追问项目目标、目标用户、当前场景、已有方案、限制条件和最担心的问题，然后再回到值不值得做、应该先验证什么、哪里风险最大这些核心判断上。对话不会一次给你结论，而是逐步把问题压实。'
      },
      {
        type: 'image',
        src: 'interface-research-mock',
        alt: 'Agent 对话示例'
      },
      {
        type: 'heading',
        content: '你最终会拿到什么'
      },
      {
        type: 'paragraph',
        content: '一般会拿到一版结构化判断结果，里面会有方向价值、主要风险、待确认问题和建议下一步。需要继续往下走时，你也可以把这轮结果直接转给别的 Skill 或产品流程继续使用。'
      },
      {
        type: 'heading',
        content: '使用前先知道'
      },
      {
        type: 'list',
        items: [
          '它帮助你把问题问对，不替你做最终商业决策。',
          '如果输入过于空泛，输出会更像一份收窄问题的提纲。',
          '它适合在真正开做之前使用，不替代后续的真实验证。'
        ]
      }
    ],
    faqs: [
      { q: '装好以后怎么开始第一轮对话？', a: '安装完成后直接把项目方向、目标用户和你最担心的问题贴进去，就可以开始第一轮追问。' },
      { q: '必须用 OpenClaw 才能装吗？', a: '不用。只要你的本地工具支持这类 Agent 安装方式，也可以接进去使用。' },
      { q: '没有完整想法也能用吗？', a: '可以先用，但信息越少，它给出的结果会越偏向问题收窄，而不是完整判断。' }
    ],
    problems: [
      '不确定一个新方向是否值得投入',
      '在多个方向之间犹豫不决',
      '担心过早投入到错误的题目中'
    ],
    deliverables: [
      '一套判断新项目的提问结构',
      '一版目标与风险梳理框架',
      '适合继续讨论的初步判断底稿'
    ],
    usage: '把你现在想推进的方向丢进去，先回答它给你的问题，再看最终暴露出来的信息缺口和风险点。',
    boundaries: [
      '它帮助你先问对问题，不代表最终结论一定正确',
      '它更适合前期判断，不替代后期执行验证'
    ],
    who: '适合手里有想法，但不想一上来就盲目开发的人。'
  },
  { 
    id: 2,
    name: '写 PRD 的 Skill', 
    type: 'Skill', 
    action: '查看 Skill', 
    category: 'Skill',
    maturity: '可直接使用',
    problem_group: '先把需求讲清楚',
    oneLiner: '帮任何人更轻松地写出一版结构完整、问题清楚、方便继续沟通的 PRD 初稿。',
    description: '根据需求描述、会议纪要、草图或已有想法，快速整理出一版结构完整、可继续细化的 PRD 初稿。',
    suitability: '适合产品、运营、创始人、要校验需求的人群。',
    problems: [
      '知道方向但很难落实到文档',
      '文档空白期太长，不知道怎么起头',
      '需要快速与研发、设计对齐初版想法'
    ],
    deliverables: [
      '一套写 PRD 的提问结构',
      '一版可直接套用的需求骨架',
      '适合继续补充的字段提示'
    ],
    usage: '先把你当前想解决的问题写出来，再顺着 Skill 给出的结构补目标、用户、流程、范围和边界。先把文档写出来，再去做第二轮细化。',
    boundaries: [
      '它适合帮你起草，不负责替你判断需求真假',
      '如果输入信息过少，输出也会偏空',
      '更适合先快速成稿，再结合真实项目继续改'
    ],
    who: '适合产品、运营、创始人或任何需要先把需求讲清楚的人。',
    githubLabel: '查看 GitHub 仓库',
    githubUrl: 'https://github.com/kabu/write-prd-skill',
    skillStatus: '试运行',
    skillVersion: 'V1.0',
    owner: 'Kabu',
    updatedAt: '2026-05',
    installMethods: [
      {
        id: 'command',
        label: '复制指令',
        hint: '适合已经在本地使用 Skill 的人',
        command: 'npx clawhub@latest install write-prd-skill',
        actionLabel: '复制指令'
      },
      {
        id: 'package',
        label: '下载安装包',
        hint: '适合先拿到文件再自行导入',
        packageName: 'write-prd-skill-v1.0.zip',
        packageMeta: 'ZIP / V1.0 / 248 KB',
        actionLabel: '下载安装包'
      },
      {
        id: 'platform',
        label: '一键安装到平台',
        hint: '适合直接装到常用工作台里',
        platforms: ['Manus', 'Qclaw', 'Claude Code', 'Cursor'],
        actionLabel: '申请接入'
      }
    ],
    richContent: [
      {
        type: 'paragraph',
        content: '这条 Skill 适合在需求还没有成文、但你已经知道自己想解决什么问题的时候使用。它不会替你做最终判断，但会帮你把一堆零散信息快速整理成可以继续讨论、继续修改、继续评审的 PRD 初稿。'
      },
      {
        type: 'heading',
        content: '适合什么时候用'
      },
      {
        type: 'list',
        items: [
          '你已经有一个方向，但还没整理成正式需求文档。',
          '开完会之后，想把纪要、想法和讨论结果尽快沉淀下来。',
          '需要让产品、运营、设计和研发先对同一个需求有同一版理解。',
          '项目准备继续往下推进，但还缺一个能拿去讨论的起始版本。'
        ]
      },
      {
        type: 'heading',
        content: '你可以怎么给它信息'
      },
      {
        type: 'paragraph',
        content: '你不需要一次性把所有字段都准备完整。通常只要把项目或功能名称、需求背景、目标用户、想解决的问题、功能范围和现有参考资料先丢进去，它就能先生成一版结构化初稿。信息不完整时，它会更偏向帮你搭骨架，而不是替你补全事实。'
      },
      {
        type: 'heading',
        content: '它会帮你整理成什么样'
      },
      {
        type: 'paragraph',
        content: '生成结果通常会覆盖项目背景、产品目标、用户场景、功能说明、页面结构、交互规则、异常状态、验收标准和待确认问题。重点不是一次写到最终版，而是先把该问的问题、该写的结构和该继续确认的缺口暴露出来。'
      },
      {
        type: 'heading',
        content: '一个简单例子'
      },
      {
        type: 'image',
        src: 'interface-research-mock',
        alt: 'Skill 输出示例'
      },
      {
        type: 'quote',
        content: '输入一句“我想做一个官网项目展示页，用来展示团队已经上线的基础项目”，它会继续往下整理页面目标、用户路径、模块结构、项目卡片字段、CTA、异常状态和验收标准。'
      },
      {
        type: 'heading',
        content: '使用前先知道'
      },
      {
        type: 'list',
        items: [
          '它适合帮你起草，不负责替你判断需求真假。',
          '如果输入信息太少，输出会更像一份提纲，而不是完整方案。',
          '它更适合先快速成稿，再结合真实项目继续改。',
          '如果你需要复杂技术方案判断，还是要回到人工分析。'
        ]
      }
    ],
    sourcePreview: [
      { name: 'SKILL.md', size: '4.8 KB' },
      { name: 'examples/', size: '2 items' },
      { name: 'references/', size: '3 items' }
    ],
    filePreview: {
      name: 'SKILL.md',
      readonly: '只读',
      rows: [
        { label: '名称', value: 'write-prd-skill' },
        { label: '描述', value: '帮助任何人更轻松地写出一版结构完整、问题清楚、方便继续沟通的 PRD 初稿。' },
        { label: '输入', value: '需求描述、会议纪要、草图、已有 PRD、产品想法。' },
        { label: '输出', value: '结构完整、方便继续细化和协作对齐的 PRD 初稿。' }
      ]
    },
    faqs: [
      { q: '信息不完整也能用吗？', a: '可以先用，但更适合先快速成稿，再补细节。' },
      { q: '它会直接帮我判断需求对不对吗？', a: '不会，它更擅长把需求写清楚，不替代真假判断。' },
      { q: '适合和研发或设计一起用吗？', a: '适合，这类 Skill 的价值就在于先把沟通骨架搭出来。' }
    ],
    notFor: [
      '需求完全不清晰',
      '想直接生成最终上线版本',
      '需要复杂技术方案判断',
      '需要替代产品负责人做最终决策'
    ],
    score: {
      overall: 8.7,
      dimensions: [
        { label: '结构完整度', value: '9.2/10' },
        { label: '上手速度', value: '8.8/10' },
        { label: '复用稳定性', value: '8.4/10' }
      ]
    }
  },
  { 
    id: 3,
    name: 'Prompt QA Board', 
    type: '方法模板', 
    action: '查看结构', 
    category: '方法模板',
    maturity: '拿去后需自行调整',
    problem_group: '先把 Prompt 调稳定',
    oneLiner: '帮你检查一个 Prompt 到底清不清楚、稳不稳定、能不能交给别人继续用。',
    description: '把 prompt 的目标、版本、修改原因和结果表现放进同一套记录结构里，方便团队持续优化，而不是反复从头试。',
    suitability: '适合已经在写 Prompt，但总觉得结果忽好忽坏、难以复用的人。',
    problems: [
      'Prompt 结果不稳定且难以优化',
      '多版本迭代混乱，不记得为什么改',
      'Prompt 难以在团队内有效复用'
    ],
    deliverables: [
      'Prompt 评审核对表',
      '结构化 Prompt 管理模板',
      'QA 记录日志格式'
    ],
    usage: '你可以用它来评审现有 Prompt，发现信息缺口、表达歧义和不稳定环节。',
    boundaries: [
      '它更适合评审和修正，不是自动替你生成最佳 Prompt',
      '如果你的目标本身不清楚，再好的评审也只能帮你发现问题',
      '更适合团队协作时统一检查口径'
    ],
    who: '适合经常写 prompt、改 prompt、协作调 prompt 的团队或个人。'
  },
  { 
    id: 4,
    name: '会议记忆引擎', 
    type: '任务包', 
    action: '查看进展', 
    category: '任务包',
    maturity: '整理中',
    problem_group: '先把会议和决策理顺',
    oneLiner: '把多轮会议纪要整理成可以追踪的决策脉络，减少“开过会，但没人记得最后怎么定的”这种情况。',
    description: '把一场会议里的结论、待办、风险和后续动作整理成可检索、可继续使用的项目记忆。',
    suitability: '适合需要反复讨论、多人协作、决策容易丢失上下文的团队。',
    problems: [
      '会议结论难以沉淀为动作',
      '多人协作导致信息严重断层',
      '决策背景在时间推移中丢失'
    ],
    deliverables: [
      '会议决策追踪模板',
      '行动项自动化同步流程',
      '结构化项目记忆索引'
    ],
    usage: '你可以把会议内容从单次摘要，升级成可继续追踪的事项、判断和待办线索。',
    boundaries: [
      '它更适合持续协作，不适合只开一次就结束的临时讨论',
      '如果团队没有明确的后续责任人，再好的结构也会断掉',
      '当前更适合用来搭建方法，不是即插即用的完整系统'
    ],
    who: '适合会议很多、信息容易散、会后经常忘记为什么这样决定的团队。'
  },
  {
    id: 5,
    name: '资讯聚合 MCP',
    type: 'MCP',
    action: '查看 MCP',
    category: 'MCP',
    maturity: '可直接使用',
    problem_group: '先整理成可复用流程',
    oneLiner: '把新闻站点、RSS 和公开页面接进同一条采集链路，方便 Agent 或工作流持续取用。',
    description: '适合把固定的信息源接进本地工具，让 Agent 在调用时不只靠人工复制粘贴，而是直接读取结构化资讯输入。',
    suitability: '适合已经在本地搭 Agent、想把外部信息源稳定接进工作流的人。',
    githubLabel: '查看 GitHub 仓库',
    githubUrl: 'https://github.com/kabu/news-source-mcp',
    mcpStatus: '试运行',
    mcpVersion: 'V1.0',
    owner: 'Kabu',
    updatedAt: '2026-05',
    mcpCapabilities: [
      '把 RSS、网页和公开页面整理成统一输入结构。',
      '给 Agent 提供更稳定的外部信息来源，而不是每次手工复制内容。',
      '适合接到新闻、竞品、追踪类工作流里持续复用。'
    ],
    invokeSteps: [
      '先在你的本地工具里添加这一条 MCP 配置。',
      '配置你想接入的 RSS、网页或公开信息源。',
      '把它接到 Agent 或工作流里，让后续调用直接读取这些输入。'
    ],
    configSnippet: '[mcp.news_source]\nenabled = true\nsources = [\n  "https://example.com/rss",\n  "https://example.com/news"\n]\nfields = ["title", "summary", "url", "published_at"]\nuse_for = ["news-daily-agent", "competitor-tracking-agent"]',
    richContent: [
      {
        type: 'paragraph',
        content: '这个 MCP 不是直接替你完成日报或判断，而是把原本分散的信息源整理成更稳定的输入接口。你可以把它理解成 Agent 前面的输入层，负责先把公开内容拉进来，再交给后面的 Agent 或 Skill 继续处理。'
      },
      {
        type: 'heading',
        content: '它更适合接在哪里'
      },
      {
        type: 'list',
        items: [
          '新闻日报 Agent 前面，作为固定资讯来源输入。',
          '竞品追踪 Agent 前面，持续拉取公开更新信息。',
          '任何需要稳定网页、RSS 或公开页面输入的本地工作流。'
        ]
      },
      {
        type: 'image',
        src: 'interface-research-mock',
        alt: 'MCP 接入示例'
      },
      {
        type: 'heading',
        content: '它提供的不是结论，而是输入能力'
      },
      {
        type: 'paragraph',
        content: '接入完成后，你可以让后面的 Agent 直接读取这些来源，而不是每次手工复制链接、正文和摘要。这样更适合做持续追踪、定期整理和可复用工作流。'
      },
      {
        type: 'heading',
        content: '使用前先知道'
      },
      {
        type: 'list',
        items: [
          '它负责接入和整理输入，不替你完成最终判断。',
          '如果原始来源不稳定，后面的输出质量也会波动。',
          '更适合接到固定主题、固定来源的长期流程里。'
        ]
      }
    ],
    problems: [
      '新闻和公开信息来源分散，人工整理很费时间',
      'Agent 缺少稳定的信息输入源',
      '同一类资讯每天都要重复采集和清洗'
    ],
    deliverables: [
      '可复用的信息源接入配置',
      '统一的采集字段结构',
      '适合继续接 Agent 的输入链路'
    ],
    usage: '把你常看的信息源接进来之后，就可以让 Agent 直接读取和整理这些内容，而不是每次手动整理。',
    boundaries: [
      '它负责接入和整理输入，不替你完成最终判断',
      '如果原始信息源质量不稳定，输出也会受影响'
    ],
    who: '适合已经开始搭建 Agent 工作流、需要稳定外部输入源的人。'
  },
  {
    id: 6,
    name: '新闻日报 Agent',
    type: 'Agent',
    action: '查看 Agent',
    category: 'Agent',
    maturity: '可直接使用',
    problem_group: '先整理成可复用流程',
    oneLiner: '每天自动整理你关心的新闻来源，输出一版可直接阅读和继续转发的日报。',
    suitability: '适合想固定跟进 AI、产品、行业动态的人，也适合需要给团队同步日报的人。',
    githubLabel: '查看 GitHub 仓库',
    githubUrl: 'https://github.com/kabu/news-daily-agent',
    agentStatus: '试运行',
    agentVersion: 'V1.0',
    owner: 'Kabu',
    updatedAt: '2026-05',
    agentCapabilities: [
      '帮你从多个来源抓取当天最值得看的新闻。',
      '帮你去重、归类并整理成更好读的日报结构。',
      '帮你补一句为什么这条值得看，减少纯链接堆积。',
      '帮你把结果转成适合发群、发飞书或自己存档的版本。'
    ],
    agentSkills: [
      {
        name: '资讯聚合 MCP',
        role: '负责把 RSS、网页和公开信息源接进来，提供稳定输入。',
        resourceId: 5
      },
      {
        name: 'Prompt QA Board',
        role: '负责检查摘要和分类输出是否足够稳定，避免日报风格跑偏。',
        resourceId: 3
      },
      {
        name: '写 PRD 的 Skill',
        role: '在需要把日报延伸成专题判断或整理报告时继续承接。',
        resourceId: 2
      }
    ],
    installMethods: [
      {
        id: 'command',
        label: '复制指令',
        command: 'npx openclaw@latest install news-daily-agent',
        actionLabel: '复制指令'
      },
      {
        id: 'package',
        label: '下载安装包',
        packageName: 'news-daily-agent-v1.0.zip',
        packageMeta: 'ZIP / V1.0 / 436 KB',
        actionLabel: '下载安装包'
      },
      {
        id: 'platform',
        label: '安装到平台',
        platforms: ['OpenClaw', 'Claude Code', 'Cursor'],
        actionLabel: '申请接入'
      }
    ],
    invokeSteps: [
      '先把 Agent 安装到 OpenClaw 或支持的工具里。',
      '配置你想跟踪的新闻来源、关键词或站点列表。',
      '直接发起对话，让它生成今天的新闻日报。'
    ],
    firstPrompt: '请帮我生成今天的 AI 新闻日报：\n\n重点来源：\n重点主题：\n希望输出形式：\n是否需要适合转发的版本：',
    richContent: [
      {
        type: 'paragraph',
        content: '这个 Agent 适合每天都要看一轮新闻、但又不想把时间花在手动筛选和整理上的人。它会先把来源拉齐，再按你关心的主题做归类和摘要，最后输出成一版更像“可直接用的日报”。'
      },
      {
        type: 'heading',
        content: '它适合怎么用'
      },
      {
        type: 'list',
        items: [
          '每天给自己生成一版重点新闻摘要。',
          '给团队同步 AI、产品或行业日报。',
          '把多个公开来源整理成一份能继续沉淀的素材池。'
        ]
      },
      {
        type: 'image',
        src: 'interface-research-mock',
        alt: '新闻日报 Agent 示例'
      },
      {
        type: 'heading',
        content: '使用前先知道'
      },
      {
        type: 'list',
        items: [
          '它更适合帮你整理和归类，不替你判断新闻真假。',
          '如果来源本身太杂，摘要质量也会波动。',
          '更适合固定主题、固定来源的持续使用。'
        ]
      }
    ],
    faqs: [
      { q: '可以只看某几个站点吗？', a: '可以。你可以在开始对话时直接限定来源、关键词和主题。' },
      { q: '能输出成适合发群的版本吗？', a: '可以。你可以在第一轮就指定需要简版、长版或适合转发的格式。' },
      { q: '它会自动定时跑吗？', a: '当前更适合手动发起；后续可以继续接自动任务或定时工作流。' }
    ],
    problems: [
      '每天要看很多来源，但很难快速抓重点',
      '新闻很多，却很难整理成可复用素材',
      '想做日报，但不想手工整理一遍'
    ],
    deliverables: [
      '一版可直接阅读的新闻日报',
      '归类后的重点新闻摘要',
      '适合继续转发或沉淀的输出版本'
    ],
    usage: '把来源、主题和想要的输出形式告诉它，它会帮你整理成一版日报。',
    boundaries: [
      '它适合整理和摘要，不替你完成事实核验',
      '如果输入来源过多，结果需要你再做一轮筛选'
    ],
    who: '适合每天都要跟新闻，但不想重复手工整理的人。'
  },
  {
    id: 7,
    name: '用户反馈归纳 Agent',
    type: 'Agent',
    action: '查看 Agent',
    category: 'Agent',
    maturity: '可直接使用',
    problem_group: '先把需求讲清楚',
    oneLiner: '把零散评论、客服记录和访谈内容整理成可以继续判断的用户反馈结论。',
    suitability: '适合需要持续看用户声音、但不想每次都手工归纳的人。',
    githubLabel: '查看 GitHub 仓库',
    githubUrl: 'https://github.com/kabu/user-feedback-agent',
    agentStatus: '试运行',
    agentVersion: 'V1.0',
    owner: 'Kabu',
    updatedAt: '2026-05',
    agentCapabilities: [
      '帮你把分散的反馈按主题和问题类型归类。',
      '帮你标出高频问题、典型情绪和待确认信号。',
      '帮你整理成适合继续做需求判断的一版摘要。'
    ],
    agentSkills: [
      {
        name: '写 PRD 的 Skill',
        role: '把已经归纳出的反馈继续整理成需求输入或 PRD 初稿。',
        resourceId: 2
      },
      {
        name: 'Prompt QA Board',
        role: '帮助检查归纳结构和标签口径是否稳定。',
        resourceId: 3
      }
    ],
    installMethods: [
      {
        id: 'command',
        label: '复制指令',
        command: 'npx openclaw@latest install user-feedback-agent',
        actionLabel: '复制指令'
      },
      {
        id: 'package',
        label: '下载安装包',
        packageName: 'user-feedback-agent-v1.0.zip',
        packageMeta: 'ZIP / V1.0 / 398 KB',
        actionLabel: '下载安装包'
      },
      {
        id: 'platform',
        label: '安装到平台',
        platforms: ['OpenClaw', 'Claude Code', 'Cursor'],
        actionLabel: '申请接入'
      }
    ],
    invokeSteps: [
      '先把 Agent 安装到本地工具里。',
      '贴入你这轮想整理的评论、访谈记录或客服反馈。',
      '让它先归类，再继续追问高频问题和值得跟进的信号。'
    ],
    firstPrompt: '请帮我整理这一轮用户反馈：\n\n反馈来源：\n原始内容：\n我最想知道的问题：',
    richContent: [
      {
        type: 'paragraph',
        content: '这个 Agent 适合把原本很碎、很杂、很难直接判断的用户声音，整理成一版可以继续做需求判断的结果。它不会替你拍板要不要做，但会先把高频问题、情绪方向和待确认点捞出来。'
      },
      {
        type: 'heading',
        content: '适合什么时候打开'
      },
      {
        type: 'list',
        items: [
          '你刚做完一轮访谈，想先归纳重点。',
          '你手里有很多客服记录或评论截图，想先看高频问题。',
          '你想把用户声音变成更明确的需求输入。'
        ]
      }
    ],
    faqs: [
      { q: '可以直接贴很长的原始反馈吗？', a: '可以，越完整越容易整理出高频问题和典型信号。' },
      { q: '它会替我直接下需求结论吗？', a: '不会。它更适合先归纳和暴露信号，再交给你继续判断。' }
    ],
    problems: [
      '反馈太散，不好直接看出重点',
      '很难判断哪些问题是高频、哪些只是个例',
      '用户声音很多，但很难继续转成需求输入'
    ],
    deliverables: [
      '按主题归类后的反馈摘要',
      '高频问题和待确认信号',
      '适合继续做需求判断的一版输入'
    ],
    usage: '贴入原始反馈后，它会先帮你归类，再把值得继续看的问题拉出来。',
    boundaries: [
      '它负责归纳和暴露信号，不替你做最终优先级排序'
    ],
    who: '适合要看评论、访谈、客服反馈，但不想每次手工归纳的人。'
  },
  {
    id: 8,
    name: '竞品追踪 Agent',
    type: 'Agent',
    action: '查看 Agent',
    category: 'Agent',
    maturity: '可直接使用',
    problem_group: '先判断值不值得做',
    oneLiner: '持续跟踪竞品更新、功能变化和定价动作，帮你更快判断一个方向还有没有机会。',
    suitability: '适合产品、创始人或需要长期盯竞品动作的人。',
    githubLabel: '查看 GitHub 仓库',
    githubUrl: 'https://github.com/kabu/competitor-tracking-agent',
    agentStatus: '试运行',
    agentVersion: 'V1.0',
    owner: 'Kabu',
    updatedAt: '2026-05',
    agentCapabilities: [
      '帮你记录竞品最近有什么更新和动作。',
      '帮你把更新按功能、定价、定位变化做归类。',
      '帮你判断哪些变化值得继续跟进，哪些只是噪音。'
    ],
    agentSkills: [
      {
        name: '资讯聚合 MCP',
        role: '负责拉取公开更新信息和站点内容。',
        resourceId: 5
      },
      {
        name: '项目判断 Agent',
        role: '把竞品动作进一步转成方向判断和后续问题。',
        resourceId: 1
      }
    ],
    installMethods: [
      {
        id: 'command',
        label: '复制指令',
        command: 'npx openclaw@latest install competitor-tracking-agent',
        actionLabel: '复制指令'
      },
      {
        id: 'package',
        label: '下载安装包',
        packageName: 'competitor-tracking-agent-v1.0.zip',
        packageMeta: 'ZIP / V1.0 / 401 KB',
        actionLabel: '下载安装包'
      },
      {
        id: 'platform',
        label: '安装到平台',
        platforms: ['OpenClaw', 'Claude Code', 'Cursor'],
        actionLabel: '申请接入'
      }
    ],
    invokeSteps: [
      '先把 Agent 安装到本地工具里。',
      '输入你想长期跟踪的竞品名单和重点维度。',
      '发起一轮追踪，让它先整理最近更新，再继续判断哪些值得看。'
    ],
    firstPrompt: '请帮我跟踪这些竞品：\n\n竞品名单：\n重点维度：\n我最想知道的问题：',
    richContent: [
      {
        type: 'paragraph',
        content: '这个 Agent 更适合长期跟着几个核心竞品看，而不是一次性看完就结束。它会把更新、动作和变化拉成一条更容易比较的线，方便你持续判断方向有没有变化。'
      }
    ],
    faqs: [
      { q: '它适合一次性竞品分析吗？', a: '也可以用，但它更适合持续跟踪和周期性整理。' }
    ],
    problems: [
      '竞品变化很多，但很难持续跟住',
      '功能、定价和定位变化分散在不同地方',
      '很难判断哪些竞品动作真的值得继续看'
    ],
    deliverables: [
      '竞品更新摘要',
      '按维度归类的变化记录',
      '值得继续关注的动作提示'
    ],
    usage: '输入竞品名单和关注维度后，它会帮你整理近期动作和变化。',
    boundaries: [
      '它适合持续跟踪，不替你完成最终战略判断'
    ],
    who: '适合要长期看竞品动向、但不想手工追踪的人。'
  },
];

export const INSIGHT_CATEGORIES = [
  { name: '全部', desc: '查看所有判断与记录' },
  { name: '学习记录', desc: '我们在研究 AI 过程中真实记录的笔记' },
  { name: '方法总结', desc: '适合想直接拿判断框架的人' },
  { name: '项目复盘', desc: '适合想看一个方向为什么这样做的人' },
  { name: '技巧经验', desc: '在真实操作中沉淀的小切片' },
  { name: '阶段观察', desc: '对行业或项目的阶段性看法' },
  { name: '养成记切片', desc: '网站与产品的生长记录' },
];

export const INSIGHTS = [
  { 
    id: 1,
    title: '为什么我们把 Prompt 评审从“感觉”改成“看板”', 
    date: '2024.03.15', 
    category: '方法总结',
    oneLiner: 'Prompt 写得不稳，不一定是模型问题，很多时候是输入结构和检查方式的问题。',
    summary: '我们一度认为 Prompt 的好坏全靠模型悟性。后来发现，如果评审流程不透明、版本不追踪，优化就成了盲打。这篇总结了我们建立看板的判断逻辑。',
    relatedResources: [3],
    relatedProducts: [3],
    relatedLab: [2],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 2,
    title: '做会议记忆引擎时，我们先解决的不是摘要，而是决策追踪', 
    date: '2024.03.10', 
    category: '项目复盘',
    oneLiner: '如果会议只生成摘要，信息还是会丢。我们真正想解决的是：这个决定是谁提的、为什么定、后面有没有改。',
    summary: '单次摘要解决不了长期决策链条的断层。我们在复盘中发现，追溯“为什么这么定”比“今天说了啥”对小团队更有价值。',
    relatedResources: [4],
    relatedProducts: [5],
    relatedLab: [2],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 3,
    title: '为什么我们放弃了做泛 AI 资讯聚合站', 
    date: '2024.03.02', 
    category: '阶段观察',
    oneLiner: '信息可以很多，但未必值得留下。放弃这个方向，反而让网站主线更清楚。',
    summary: '我们一度想做一个更泛的 AI 资讯聚合入口，但很快发现：信息变多，并不等于价值变强。对真正要做事的人来说，更重要的是能不能拿走资源、用上产品、看到真实判断。',
    relatedResources: [1, 2],
    relatedProducts: [6],
    relatedLab: [1],
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: '网站结构与内容主线调整观察',
    date: '2024.03.20',
    category: '养成记切片',
    oneLiner: '网站不只是展示，它本身就是一个不断验证“什么内容对用户真正有用”的实验。',
    summary: '从 V1 到 V1.1，我们砍掉了抽象方法论，强化了“带走资源”和“直达产品”。这是我们近一月的调整观察。',
    relatedLab: [1],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPERIMENT_STAGES = ['全部', '进行中', '刚开始', '暂停观察', '已归档'] as const;

export const EXPERIMENTS = [
  {
    id: 1,
    name: '中转站入口整理实验',
    status: '进行中',
    motivation: '我们发现，入口很多不等于更好用。这个实验的目标，是把“能不能顺利开始使用”拆成更容易判断的步骤。',
    phase: '已完成第一轮入口梳理，正在继续验证状态反馈与使用顺序。',
    recentUpdate: '05.08 / 中转站补了一轮入口状态提示，重点观察第一次进入时是否更容易判断下一步。',
    currentFocus: '现在重点验证的是：第一次进入时，用户能不能更快判断现在该点哪里。',
    outputs: [
      '一版入口结构整理',
      '相关状态提示规则',
      '一条对应方法记录'
    ],
    process: [
      { title: '入口收拢', desc: '先把入口收拢，再看哪些地方重复、哪些地方容易让人犹豫。' },
      { title: '目标重排', desc: '开始把入口按使用目标重排' },
      { title: '状态提示', desc: '补充状态提示，降低第一次判断成本' },
      { title: '顺序测试', desc: '继续测试不同入口顺序对使用意愿的影响' }
    ],
    decisionShift: '一开始我们更关注“入口全不全”，后来发现真正影响使用的是“用户能不能马上判断下一步”。于是重点从堆能力，转成了先整理进入顺序。',
    pitfalls: '一开始我们更关注“入口全不全”，后来发现真正影响使用的是“用户能不能马上判断下一步”。于是重点从堆能力，转成了先整理进入顺序。',
    nextSteps: [
      '继续观察不同入口顺序的使用深度',
      '补全主要入口的快速上手指南',
      '测试一键切换不同模型入口的反馈'
    ],
    relatedResources: [3],
    relatedProducts: [1],
    relatedInsights: [3]
  },
  {
    id: 2,
    name: '会议记忆链路实验',
    status: '进行中',
    motivation: '单次会议摘要很快会失效，我们真正想解决的是决策、判断和后续动作怎么在多轮讨论里不丢。',
    phase: '已跑通基础整理流程，正在补“决策变更”和“后续追踪”的衔接。',
    recentUpdate: '05.07 / 会议记忆链路增加了“决策变化”标注，避免后续只看到结论看不到变化原因。',
    currentFocus: '现在重点验证的是：一场会的结论，能不能在后续多轮讨论里继续被追踪。',
    outputs: [
      '一套会议记忆整理结构',
      '一版决策追踪字段',
      '会议记忆引擎初版方法'
    ],
    process: [
      { title: '摘要验证', desc: '先测试单次会议摘要是否够用' },
      { title: '结构拆解', desc: '开始把纪要拆成议题、判断、结论、后续动作' },
      { title: '关联建立', desc: '继续补多轮会议之间的关联关系' }
    ],
    decisionShift: '一开始我们以为“总结得更好”就够了，后来发现真正的问题不是语言组织，而是上下文记忆和后续追踪。',
    pitfalls: '一开始我们以为“总结得更好”就够了，后来发现真正的问题不是语言组织，而是上下文记忆和后续追踪。',
    nextSteps: [
      '补多轮会议之间的议题关联',
      '补责任人与后续动作的衔接字段',
      '测试这套结构能不能更顺滑地接到任务整理'
    ],
    relatedResources: [4],
    relatedProducts: [5],
    relatedInsights: [2]
  },
  {
    id: 3,
    name: '项目判断结构实验',
    status: '进行中',
    motivation: '很多方向不是做不出来，而是一开始就没判断清楚值不值得做。这个实验想把前期判断拆成更稳定的提问结构。',
    phase: '已形成第一版判断框架，正在补边界情况和反例验证。',
    recentUpdate: '05.06 / 项目判断结构补了两条反例，用来测试在信息不足时是否会给出误导性建议。',
    currentFocus: '现在重点验证的是：信息不完整时，这套结构会不会给出误导性的判断。',
    outputs: [
      '项目判断 Agent',
      '相关提问结构',
      '一篇阶段观察记录'
    ],
    process: [
      { title: '框架形成', desc: '已形成第一版判断框架' },
      { title: '边界探索', desc: '正在补边界情况 and 反例验证' }
    ],
    decisionShift: '我们发现过度依赖 AI 的打分会让人忽略核心风险。于是将“结论”弱化，将“暴露信息缺口”作为主要产出。',
    pitfalls: '我们发现过度依赖 AI 的打分会让人忽略核心风险。于是将“结论”弱化，将“暴露信息缺口”作为主要产出。',
    nextSteps: [
      '引入更多真实失败案例进行测试',
      '优化低信息量输入的提示逻辑',
      '输出一份关于前期判断陷阱的复盘'
    ],
    relatedResources: [1],
    relatedProducts: [1, 4],
    relatedInsights: [3]
  }
];

export const LAB_UPDATES = [
  {
    project: '中转站入口整理实验',
    status: '进行中',
    update: '补了一轮入口状态提示，重点观察第一次进入时是否更容易判断下一步。',
    timestamp: '05.08',
    labId: 1
  },
  {
    project: '会议记忆链路实验',
    status: '进行中',
    update: '增加了“决策变化”标注，避免后续只看到结论看不到变化原因。',
    timestamp: '05.07',
    labId: 2
  },
  {
    project: '项目判断结构实验',
    status: '进行中',
    update: '补了两条反例，用来测试在信息不足时是否会给出误导性建议。',
    timestamp: '05.06',
    labId: 3
  },
  {
    project: '公开实验室',
    status: '已上线',
    update: '页面结构初步对齐，开始进入内容细化阶段。',
    timestamp: '05.05',
    labId: null
  }
];

export const FAQS = [
  { question: 'Tranfu 是什么？', answer: 'Tranfu 是一个持续上线 AI 产品、并同步公开资源和经验的网站。你可以先找到现在能用的产品，也可以直接拿走已经整理好的资源。' },
  { question: '这里的产品现在都能直接用吗？', answer: '不是全部都能直接用。首页优先展示的是已经上线、可以直接使用的产品；还在推进中的内容会放在后面的进展区持续更新。' },
  { question: '资源区里能拿到什么？', answer: '你可以拿到可直接复制、下载和复用的 Prompt、Skill、流程、模板和方法记录。这些资源都来自真实产品实践，不是单纯整理出来凑数的内容。' },
  { question: '资讯和资源有什么区别？', answer: '资源更偏“拿走就能用”，比如 Prompt、Skill、流程和模板；资讯更偏“看完就能理解为什么这么做”，包括经验文章、判断记录和踩坑总结。' },
  { question: '如果我现在没找到合适的产品怎么办？', answer: '你可以先看资源和经验内容，找到能直接复用的方法；如果你有明确问题，也可以通过需求共建入口提交，我们会继续判断是否适合进入后续沟通或共建。' },
];
