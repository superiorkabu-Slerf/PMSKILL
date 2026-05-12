import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { EXPERIMENTS, PRODUCTS, RESOURCES, INSIGHTS } from '../data';
import { 
  ArrowLeft, 
  Activity,
  ExternalLink,
  Milestone,
  Lightbulb
} from 'lucide-react';

export const LabDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experiment = EXPERIMENTS.find(e => e.id === Number(id));

  if (!experiment) {
    return (
      <div className="pt-32 text-center bg-paper min-h-screen">
        <p className="text-tx-tertiary mb-6">未找到该实验信息</p>
        <Link to="/lab" className="text-accent-brand font-medium">返回实验室列表</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => experiment.relatedProducts?.includes(p.id));
  const relatedResources = RESOURCES.filter(r => experiment.relatedResources?.includes(r.id));
  const relatedInsights = INSIGHTS.filter(i => experiment.relatedInsights?.includes(i.id));

  return (
    <div className="bg-paper min-h-screen">
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to="/lab" className="inline-flex items-center gap-2 text-xs font-medium text-tx-tertiary hover:text-tx-primary transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            返回实验室
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-practical/20 text-accent-practical uppercase rounded-radius-badge">
                实验项目
              </span>
              <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                当前状态：{experiment.status}
              </span>
            </div>
            <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-8 tracking-tighter leading-tight">
              {experiment.name}
            </h1>
            <p className="text-lg text-tx-secondary leading-relaxed max-w-3xl">
              {experiment.motivation}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            <div className="space-y-6">
              <h3 className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest pb-4 border-b border-border-subtle flex items-center gap-2">
                <Activity size={14} /> 现在在验证什么
              </h3>
              <div className="text-2xl serif-heading font-bold text-tx-primary leading-relaxed">
                {experiment.currentFocus || experiment.phase}
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest pb-4 border-b border-border-subtle flex items-center gap-2">
                <Milestone size={14} /> 过程记录
              </h3>
              <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-border-subtle">
                {experiment.process.map((p, idx) => (
                  <div key={idx} className="flex gap-10 relative">
                    <div className="w-[24px] h-[24px] rounded-full bg-paper border border-tx-primary flex items-center justify-center flex-shrink-0 z-10 text-[10px] font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-tx-primary mb-3 leading-tight">{p.title}</h4>
                      <p className="text-sm text-tx-secondary leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <aside className="lg:col-span-4 space-y-10">
            <div className="p-8 border border-border-subtle rounded-radius-card bg-surface sticky top-24">
              <h4 className="mono-label text-[10px] text-tx-tertiary uppercase tracking-widest mb-10">相关信息</h4>
              
              <div className="space-y-12">
                {relatedProducts.length > 0 && (
                  <div>
                    <h5 className="mono-label text-[9px] text-tx-quaternary uppercase mb-6 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent-brand rounded-full" /> 关联产品
                    </h5>
                    <div className="space-y-4">
                      {relatedProducts.map(p => (
                        <Link key={p.id} to={`/products/${p.id}`} className="flex items-center justify-between group">
                          <span className="text-sm font-bold text-tx-primary group-hover:text-accent-brand transition-colors">{p.name}</span>
                          <ExternalLink size={14} className="text-tx-quaternary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {relatedResources.length > 0 && (
                  <div>
                    <h5 className="mono-label text-[9px] text-tx-quaternary uppercase mb-6 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent-alert rounded-full" /> 关联资源
                    </h5>
                    <div className="space-y-4">
                      {relatedResources.map(r => (
                        <Link key={r.id} to={`/resources/${r.id}`} className="flex items-center justify-between group">
                          <span className="text-sm font-bold text-tx-primary group-hover:text-accent-alert transition-colors">{r.name}</span>
                          <ExternalLink size={14} className="text-tx-quaternary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {relatedInsights.length > 0 && (
                  <div>
                    <h5 className="mono-label text-[9px] text-tx-quaternary uppercase mb-6 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent-brand rounded-full" /> 相关文章
                    </h5>
                    <div className="space-y-4">
                      {relatedInsights.map(i => (
                        <Link key={i.id} to={`/insights/${i.id}`} className="flex items-center justify-between group">
                          <span className="text-sm font-bold text-tx-primary group-hover:text-accent-brand transition-colors">{i.title}</span>
                          <ExternalLink size={14} className="text-tx-quaternary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
