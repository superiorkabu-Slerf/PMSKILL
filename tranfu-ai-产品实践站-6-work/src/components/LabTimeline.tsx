import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { EXPERIMENTS, LAB_UPDATES, PRODUCTS } from '../data';

export const LabTimeline = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-40 pb-32 bg-inverse text-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="mono-label text-[10px] text-tx-quaternary">─── in progress ─── 持续更新中 ─── 继续推进 ───</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[32px] serif-heading font-bold text-white mb-4">进行中的项目</h2>
            <p className="text-tx-quaternary text-lg leading-relaxed">
              这些项目还在继续推进，后面还会继续长出新产品、新资源和新结论。
            </p>
          </div>
          <Link 
            to="/lab" 
            className="text-sm font-medium text-tx-tertiary hover:text-white transition-colors underline underline-offset-8 decoration-white/10"
          >
            查看全部进展 →
          </Link>
        </div>

        <div className="border-t border-white/10">
          {LAB_UPDATES.slice(0, 3).map((update, idx) => (
            (() => {
              const experiment = update.labId ? EXPERIMENTS.find((item) => item.id === update.labId) : null;
              const productName = experiment?.relatedProducts?.[0]
                ? PRODUCTS.find((product) => product.id === experiment.relatedProducts[0])?.name
                : null;

              return (
                <motion.div 
                  key={update.project + idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => navigate(update.labId ? `/lab/${update.labId}` : '/lab')}
                  className="group cursor-pointer grid grid-cols-1 lg:grid-cols-[120px_minmax(0,1fr)_280px] gap-6 lg:gap-10 py-8 border-b border-white/10 hover:bg-white/[0.02] transition-all px-4 -mx-4"
                >
                  <div className="mono-label text-[12px] text-tx-quaternary pt-1 flex items-center gap-2">
                    {idx === 0 && <span className="w-1.5 h-3 bg-accent-practical terminal-cursor" />}
                    [{update.timestamp}]
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[12px] font-medium text-accent-practical mono-label">
                        {productName || update.project}
                      </span>
                      <span className="w-px h-3 bg-white/10 hidden md:block" />
                      <span className="text-[11px] text-white/40 uppercase tracking-widest mono-label">
                        {update.status}
                      </span>
                    </div>
                    <h4 className="text-xl font-medium text-white group-hover:text-accent-practical transition-colors leading-relaxed">
                      {update.update}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                    <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                      <div className="mono-label text-[10px] text-white/40 uppercase tracking-widest mb-2">
                        当前阶段
                      </div>
                      <div className="text-sm text-white/90 leading-relaxed line-clamp-3">
                        {experiment?.phase || '正在继续推进中'}
                      </div>
                    </div>
                    <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                      <div className="mono-label text-[10px] text-white/40 uppercase tracking-widest mb-2">
                        下一步
                      </div>
                      <div className="text-sm text-white/90 leading-relaxed line-clamp-3">
                        {experiment?.nextSteps?.[0] || '继续公开最新进展'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
};
