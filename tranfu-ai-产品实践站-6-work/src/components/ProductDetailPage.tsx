import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PRODUCTS, RESOURCES, INSIGHTS, EXPERIMENTS, LAB_UPDATES } from '../data';
import { ArrowLeft, CheckCircle2, AlertCircle, PlayCircle, ExternalLink, ArrowRight, Clock3, Sparkles, Package, X } from 'lucide-react';

const getPrimaryAction = (status: string) => {
  if (status === '可直接使用') return '立即使用';
  if (['验证中', '进行中', '研究中'].includes(status)) return '查看进展';
  return '看判断记录';
};

const getSecondaryAction = (status: string) => {
  return null;
};

const getStatusMode = (status: string) => {
  if (status === '可直接使用') return 'available';
  if (['验证中', '进行中', '研究中'].includes(status)) return 'progress';
  return 'archived';
};

const buildTimeline = (product: (typeof PRODUCTS)[number], experiment?: (typeof EXPERIMENTS)[number]) => {
  if (product.status === '可直接使用') {
    return [
      { time: '2024.01', title: '开始整理第一版入口', detail: '先把最常用的能力收进一个更容易开始使用的入口里。' },
      { time: '2024.01', title: '补了第一次使用路径', detail: '把第一次进入后最容易卡住的步骤先做成默认路径。' },
      { time: '2024.02', title: '加入状态提示', detail: '开始让用户更快判断当前入口能不能直接用。' },
      { time: '2024.02', title: '重排功能顺序', detail: '把最常用、最容易上手的功能放到前面，减少第一次使用成本。' },
      { time: '2024.03', title: '补了快速试用反馈', detail: '让用户在很短时间里知道这套入口是不是适合自己。' },
      { time: '2024.03', title: '压缩了操作步骤', detail: '把几段重复操作收掉，尽量让关键动作更短。' },
      { time: '2024.04', title: '开始观察真实使用路径', detail: '不再只看功能有没有，而是看用户会不会真的点下去。' },
      { time: '2024.04', title: '增加价格和能力标签', detail: '让用户在进入前先知道模型、价格或能力边界。' },
      { time: '2024.05', title: '补齐当前可用能力', detail: '把已经能稳定提供的功能先整理成对外可用版本。' },
      { time: '2024.05', title: '形成当前公开版本', detail: '现在这版已经可以直接上手，也方便继续观察后续使用反馈。' },
    ];
  }

  const updates = LAB_UPDATES.filter((update) => {
    if (experiment?.id && update.labId === experiment.id) return true;
    return update.project.includes(product.name);
  });

  if (experiment) {
    const processNodes = experiment.process.map((item, index) => ({
      time: `节点 ${index + 1}`,
      title: item.title,
      detail: item.desc,
    }));

    const updateNodes = updates.map((item) => ({
      time: item.timestamp,
      title: item.project,
      detail: item.update,
    }));

    return [...updateNodes, ...processNodes];
  }

  return [
    {
      time: '起点',
      title: '方向提出',
      detail: product.oneLiner,
    },
    {
      time: '判断',
      title: '核心问题暴露',
      detail: product.description,
    },
    {
      time: '结论',
      title: '为什么停下',
      detail: product.results,
    },
  ];
};

const buildStatusSections = (
  product: (typeof PRODUCTS)[number],
  relatedResources: typeof RESOURCES,
  experiment?: (typeof EXPERIMENTS)[number]
) => {
  const mode = getStatusMode(product.status);

  if (mode === 'available') {
    return {
      cards: [
        { title: '适合谁', body: product.suitability, icon: CheckCircle2, tone: 'text-accent-brand' },
        { title: '解决的核心问题', body: product.problems.join(' / '), icon: AlertCircle, tone: 'text-accent-alert' },
      ],
      spotlightTitle: '功能与特点',
      featureText: `${product.description} 目前这版已经能让你先完成核心动作，再根据结果判断要不要继续深入使用。${
        experiment ? ` 当前已经整理出的能力重点包括：${experiment.outputs.join('、')}。` : ''
      }`,
    };
  }

  if (mode === 'progress') {
    return {
      summary: '现在还不能直接用，但已经有阶段性产出可以先看。',
      cards: [
        { title: '适合谁现在先关注', body: product.suitability, icon: CheckCircle2, tone: 'text-accent-brand' },
        { title: '预计上线时间', body: product.estimatedLaunch || '预计时间待确认', icon: Clock3, tone: 'text-accent-practical' },
        { title: '当前重点问题', body: product.problems.join(' / '), icon: AlertCircle, tone: 'text-accent-alert' },
      ],
      spotlightTitle: '功能与特点',
      spotlightLeftTitle: '你现在能直接看到',
      spotlightLeftBody: experiment ? experiment.outputs.join(' / ') : product.results,
      spotlightRightTitle: '这些产出现在有什么用',
      spotlightRightBody: product.description,
    };
  }

  return {
    summary: '这个方向已经停下来了，留下来的价值主要是判断和可复用资产。',
    cards: [
      { title: '当时想解决什么', body: product.oneLiner, icon: CheckCircle2, tone: 'text-accent-brand' },
      { title: '放弃原因', body: product.description, icon: AlertCircle, tone: 'text-accent-alert' },
    ],
  };
};

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-32 text-center bg-paper min-h-screen">
        <p className="text-tx-tertiary mb-6">未找到该产品信息</p>
        <Link to="/products" className="text-accent-brand font-medium">返回产品页</Link>
      </div>
    );
  }

  const relatedResources = RESOURCES.filter((resource) => product.relatedResources?.includes(resource.id));
  const relatedInsights = INSIGHTS.filter((insight) => product.relatedInsights?.includes(insight.id));
  const relatedExperiment = EXPERIMENTS.find((lab) => product.relatedLab?.includes(lab.id) || lab.relatedProducts?.includes(product.id));
  const primaryAction = getPrimaryAction(product.status);
  const secondaryAction = getSecondaryAction(product.status);
  const statusSections = buildStatusSections(product, relatedResources, relatedExperiment);
  const timeline = buildTimeline(product, relatedExperiment);
  const statusMode = getStatusMode(product.status);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const hasCollapsedTimeline = timeline.length > 5;
  const visibleTimeline = hasCollapsedTimeline ? [timeline[0], ...timeline.slice(-4)] : timeline;

  const handleSecondaryAction = () => {
    if (statusMode === 'available') {
      document.getElementById('details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-paper min-h-screen">
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs font-medium text-tx-tertiary hover:text-tx-primary transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO PRODUCTS
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-brand/20 text-accent-brand uppercase rounded-radius-badge">
                  {product.status}
                </span>
                {product.estimatedLaunch && (
                  <span className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                    {product.estimatedLaunch}
                  </span>
                )}
                {product.labels?.map((label: string) => (
                  <span key={label} className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                    {label}
                  </span>
                ))}
              </div>
              <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-tx-secondary leading-relaxed mb-4">
                {product.oneLiner}
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  type="button"
                  onClick={() => navigate(product.link)}
                  className="h-[48px] px-8 bg-inverse text-white text-sm font-bold rounded-radius-button hover:bg-black transition-all flex items-center gap-2 group"
                >
                  {primaryAction}
                  <ExternalLink size={16} />
                </button>
                {(secondaryAction || statusMode !== 'available') && (
                  <button
                    type="button"
                    onClick={handleSecondaryAction}
                    className="h-[48px] px-8 border border-border-default text-tx-primary text-sm font-bold rounded-radius-button hover:bg-surface transition-all"
                  >
                    {secondaryAction || '查看进展'}
                  </button>
                )}
              </div>
            </div>
            <div className="aspect-[16/9] bg-surface rounded-radius-card overflow-hidden border border-border-subtle">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover brightness-95" />
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="py-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {statusSections.cards.map((card) => {
              const Icon = card.icon;

              return (
                <div key={card.title} className="p-8 bg-surface rounded-radius-card border border-border-subtle hover:border-border-strong transition-colors">
                  <div className={`w-10 h-10 rounded-lg bg-paper border border-border-subtle flex items-center justify-center mb-6 ${card.tone}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-tx-primary mb-4">{card.title}</h3>
                  <p className="text-sm text-tx-secondary leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>

          {(statusMode === 'available' || statusMode === 'progress') && (
            <div className="mt-20 border-t border-border-subtle pt-12">
              <h3 className="text-[24px] serif-heading font-bold text-tx-primary mb-8">{statusSections.spotlightTitle}</h3>
              {statusMode === 'available' ? (
              <div className="max-w-3xl">
                <p className="text-base text-tx-secondary leading-relaxed">{statusSections.featureText}</p>
              </div>
            ) : (
              <div className="space-y-8 max-w-3xl">
                <div>
                  <div className="mono-label text-[10px] text-tx-quaternary uppercase tracking-widest mb-3">{statusSections.spotlightLeftTitle}</div>
                  <p className="text-base text-tx-secondary leading-relaxed">{statusSections.spotlightLeftBody}</p>
                </div>
                <div>
                  <div className="mono-label text-[10px] text-tx-quaternary uppercase tracking-widest mb-3">{statusSections.spotlightRightTitle}</div>
                  <p className="text-base text-tx-secondary leading-relaxed">{statusSections.spotlightRightBody}</p>
                </div>
              </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center justify-between mb-8 group cursor-pointer" onClick={() => navigate('/resources')}>
                <h4 className="mono-label text-xs text-tx-tertiary uppercase tracking-widest border-b border-tx-quaternary pb-1">可直接带走的资源</h4>
                <ArrowRight size={14} className="text-tx-quaternary group-hover:text-tx-primary transition-all" />
              </div>
              <div className="space-y-4">
                {relatedResources.map((resource) => (
                  <Link key={resource.id} to={`/resources/${resource.id}`} className="block p-5 bg-paper border border-border-subtle rounded-radius-card hover:border-accent-brand transition-colors group">
                    <span className="mono-label text-[10px] text-accent-brand uppercase block mb-2">{resource.type}</span>
                    <h5 className="text-[15px] font-bold text-tx-primary mb-1 group-hover:text-accent-brand transition-colors">{resource.name}</h5>
                    <p className="text-xs text-tx-tertiary line-clamp-1">{resource.oneLiner}</p>
                  </Link>
                ))}
                {relatedResources.length === 0 && (
                  <div className="p-5 bg-paper border border-border-subtle rounded-radius-card text-sm text-tx-tertiary">
                    暂时还没有公开可拿走的资源。
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-8 group cursor-pointer" onClick={() => navigate('/insights')}>
                <h4 className="mono-label text-xs text-tx-tertiary uppercase tracking-widest border-b border-tx-quaternary pb-1">帮你少踩坑的文章</h4>
                <ArrowRight size={14} className="text-tx-quaternary group-hover:text-tx-primary transition-all" />
              </div>
              <div className="space-y-4">
                {relatedInsights.map((insight) => (
                  <Link key={insight.id} to={`/insights/${insight.id}`} className="flex items-center gap-4 p-4 bg-paper border border-border-subtle rounded-radius-card hover:border-accent-brand transition-colors group">
                    <img src={insight.image} alt="" className="w-12 h-12 rounded bg-surface object-cover opacity-90" />
                    <div>
                      <h5 className="text-sm font-bold text-tx-primary leading-tight mb-1 group-hover:text-accent-brand transition-colors">{insight.title}</h5>
                      <span className="mono-label text-[9px] text-tx-tertiary uppercase tracking-widest">{insight.date}</span>
                    </div>
                  </Link>
                ))}
                {relatedInsights.length === 0 && (
                  <div className="p-5 bg-paper border border-border-subtle rounded-radius-card text-sm text-tx-tertiary">
                    暂时还没有公开相关文章。
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-24 border-t border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-3">关键节点</h2>
            <p className="text-tx-tertiary text-base leading-relaxed">
              这个产品一路是怎么走到现在这一步的，这里按重要节点整理出来。
            </p>
          </div>

          <div className="space-y-0 border-t border-border-subtle">
            {visibleTimeline.map((item, index) => (
              <React.Fragment key={`${item.time}-${item.title}-${index}`}>
                {hasCollapsedTimeline && index === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-[120px_minmax(0,1fr)] gap-6 py-6 border-b border-border-subtle">
                    <div className="mono-label text-[11px] text-tx-quaternary uppercase pt-1">...</div>
                    <div className="text-sm text-tx-tertiary">中间还有 {timeline.length - 5} 个关键节点已折叠</div>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-[120px_minmax(0,1fr)] gap-6 py-8 border-b border-border-subtle">
                  <div className="mono-label text-[11px] text-tx-quaternary uppercase pt-1">
                    {item.time}
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[23px] top-2 hidden md:block w-2.5 h-2.5 rounded-full bg-tx-primary" />
                    <h3 className="text-lg font-bold text-tx-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-tx-secondary leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          {hasCollapsedTimeline && (
            <div className="pt-8 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setTimelineOpen(true)}
                className="text-sm font-medium text-tx-primary hover:underline underline-offset-4"
              >
                查看全部节点
              </button>
            </div>
          )}
        </div>
      </section>

      {timelineOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-6" onClick={() => setTimelineOpen(false)}>
          <div
            className="w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-paper rounded-[28px] border border-border-subtle shadow-overlay"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 bg-paper border-b border-border-subtle px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-tx-primary">全部关键节点</h3>
                <p className="text-sm text-tx-tertiary mt-1">{product.name}</p>
              </div>
              <button type="button" onClick={() => setTimelineOpen(false)} className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-tx-primary">
                <X size={16} />
              </button>
            </div>
            <div className="px-6 py-2">
              {timeline.map((item, index) => (
                <div key={`modal-${item.time}-${item.title}-${index}`} className="grid grid-cols-1 md:grid-cols-[120px_minmax(0,1fr)] gap-6 py-6 border-b border-border-subtle last:border-0">
                  <div className="mono-label text-[11px] text-tx-quaternary uppercase pt-1">{item.time}</div>
                  <div>
                    <h4 className="text-base font-bold text-tx-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-tx-secondary leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
