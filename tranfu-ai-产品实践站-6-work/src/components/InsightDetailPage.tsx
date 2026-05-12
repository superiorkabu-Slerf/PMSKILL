import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { INSIGHTS, RESOURCES, PRODUCTS, EXPERIMENTS } from '../data';
import { ArrowLeft, ArrowUpRight, Clock, Share2, ArrowRight } from 'lucide-react';

export const InsightDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = INSIGHTS.find(i => i.id === Number(id));

  if (!article) {
    return (
      <div className="pt-32 text-center bg-paper min-h-screen">
        <p className="text-tx-tertiary mb-6">未找到该文章信息</p>
        <Link to="/insights" className="text-accent-brand font-medium">返回资讯列表</Link>
      </div>
    );
  }

  const matchedResources = RESOURCES.filter(r => article.relatedResources?.includes(r.id));
  const matchedProducts = PRODUCTS.filter(p => article.relatedProducts?.includes(p.id));
  const matchedLab = EXPERIMENTS.filter(e => article.relatedLab?.includes(e.id));

  return (
    <div className="bg-paper min-h-screen">
      {/* Editorial Header */}
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-medium text-tx-tertiary hover:text-tx-primary transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            返回资讯页
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="mono-label text-[11px] text-accent-brand uppercase tracking-widest">{article.category}</span>
              <div className="flex items-center gap-1.5 text-tx-tertiary">
                <Clock size={12} />
                <span className="mono-label text-[11px] uppercase tracking-widest">{article.date}</span>
              </div>
            </div>
            
            <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-10 tracking-tighter leading-tight">
              {article.title}
            </h1>
            
            <div className="p-8 bg-surface border-l-4 border-accent-brand rounded-r-radius-card">
              <p className="text-sm font-bold text-tx-tertiary uppercase mono-label mb-3">ABSTRACT</p>
              <p className="text-lg text-tx-secondary italic leading-relaxed">
                “{article.summary}”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Article Full Body */}
          <div className="lg:col-span-8">
            <div className="prose prose-sm md:prose-base max-w-none text-tx-secondary leading-[1.8] space-y-10">
              <div className="aspect-video bg-surface rounded-radius-card overflow-hidden mb-12 border border-border-subtle">
                <img src={article.image} alt="" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
              
              <p>
                在 AI 快速进化的当下，我们认为最有价值的沉淀不是最终的交付物，而是产生那个交付物背后的判断链条。这篇文章记录了我们在推进该项目时的真实复盘，包括那些被最终弃用的逻辑分支。
              </p>
              
              <h3 className="text-tx-primary serif-heading text-2xl font-bold">面对不确定性的决策逻辑</h3>
              <p>
                当我们尝试构建自动化工作流时，最初的直觉是“尽可能减少人的干预”。但在实际应用中，我们发现完全的自动化往往导致了“黑盒化”的恐惧。通过三轮内部对照实验，我们发现：最有效的 Agent 系统不是全自动的，而是“可观测、可中断、可接管”的。
              </p>
              
              <div className="p-8 bg-surface rounded-radius-card border border-border-subtle italic">
                “工程的本质不是追求绝对的效率，而是在效率与可控性之间寻找那个当下最适合的动态平衡点。”
              </div>
              
              <p>
                如果你对该判断背后的技术实现细节感兴趣，可以查看下方的关联资源或实验记录，那里有更原始的代码与 Prompts。
              </p>
            </div>

            <div className="mt-20 pt-10 border-t border-border-subtle flex items-center justify-between">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-xs font-bold text-tx-tertiary hover:text-tx-primary transition-colors">
                  <Share2 size={16} /> SHARE
                </button>
              </div>
              <button onClick={() => navigate('/lab')} className="mono-label text-[11px] text-accent-brand uppercase tracking-widest hover:underline underline-offset-4">
                Watch Development Progress →
              </button>
            </div>
          </div>

          {/* Sidebar Area: Linked Entities */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <h4 className="mono-label text-[10px] text-tx-tertiary uppercase tracking-[0.2em] mb-8 pb-2 border-b border-border-subtle">Linked Assets</h4>
              <div className="space-y-6">
                {matchedProducts.map(p => (
                  <div key={p.id} className="group cursor-pointer" onClick={() => navigate(`/products/${p.id}`)}>
                    <div className="flex items-center gap-2 mb-2 text-accent-brand mono-label text-[9px] uppercase">
                      关联产品 <ArrowUpRight size={10} />
                    </div>
                    <h5 className="text-[15px] font-bold text-tx-primary group-hover:text-accent-brand transition-colors leading-snug">{p.name}</h5>
                  </div>
                ))}

                {matchedResources.map(r => (
                  <div key={r.id} className="group cursor-pointer" onClick={() => navigate(`/resources/${r.id}`)}>
                    <div className="flex items-center gap-2 mb-2 text-accent-alert mono-label text-[9px] uppercase">
                      Reusable Resource <ArrowUpRight size={10} />
                    </div>
                    <h5 className="text-[15px] font-bold text-tx-primary group-hover:text-accent-alert transition-colors leading-snug">{r.name}</h5>
                  </div>
                ))}

                {matchedLab.map(l => (
                  <div key={l.id} className="group cursor-pointer" onClick={() => navigate(`/lab/${l.id}`)}>
                    <div className="flex items-center gap-2 mb-2 text-accent-practical mono-label text-[9px] uppercase">
                      Lab Record <ArrowUpRight size={10} />
                    </div>
                    <h5 className="text-[15px] font-bold text-tx-primary group-hover:text-accent-practical transition-colors leading-snug">{l.name}</h5>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-surface rounded-radius-card border border-border-subtle">
              <h4 className="mono-label text-[10px] text-tx-tertiary uppercase mb-4 tracking-widest">关于这次判断</h4>
              <p className="text-xs text-tx-tertiary leading-relaxed">
                TRANSFU 的所有资讯内容均首发于我们的内部实践周报。我们不提供二手的行业摘要，只提供基于真实构建的一手判断。
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer Nav */}
      <section className="py-24 border-t border-border-subtle bg-surface">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary">继续阅读</h2>
            <Link to="/insights" className="text-sm font-bold text-tx-tertiary hover:text-tx-primary flex items-center gap-2">
              查看全部 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS.filter(i => i.id !== Number(id)).slice(0, 2).map(article => (
              <Link key={article.id} to={`/insights/${article.id}`} className="flex gap-6 items-center p-6 bg-paper border border-border-subtle rounded-radius-card hover:border-border-strong group transition-all">
                <div className="w-24 h-24 flex-shrink-0 bg-surface rounded-lg overflow-hidden border border-border-subtle">
                  <img src={article.image} alt="" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </div>
                <div>
                  <span className="mono-label text-[10px] text-tx-tertiary uppercase mb-2 block">{article.category}</span>
                  <h5 className="text-lg font-bold text-tx-primary leading-tight group-hover:text-accent-brand transition-colors">{article.title}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
