import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EXPERIMENTS, EXPERIMENT_STAGES, LAB_UPDATES } from '../data';

export const LabPage = () => {
  const [activeStage, setActiveStage] = useState<string>('全部');
  const navigate = useNavigate();

  const filteredExperiments = activeStage === '全部' 
    ? EXPERIMENTS 
    : EXPERIMENTS.filter(e => e.status === activeStage);

  return (
    <div className="bg-paper min-h-screen">
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-4 block">公开实验室 / 进行中项目</span>
          <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter">
            看我们现在正在推进什么
          </h1>
          <p className="text-lg text-tx-secondary max-w-2xl leading-relaxed">
            这里记录还在继续做的方向、已经做出的阶段结果，以及它们后面会不会长成产品、资源或文章。
          </p>
        </div>
      </section>

      <section className="sticky top-[64px] z-30 bg-paper/80 backdrop-blur-md border-b border-border-subtle overflow-x-auto">
        <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center gap-8 whitespace-nowrap">
          <span className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest">阶段</span>
          {EXPERIMENT_STAGES.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStage(s)}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeStage === s ? 'text-tx-primary' : 'text-tx-tertiary hover:text-tx-primary'
              }`}
            >
              {s}
              {activeStage === s && (
                <motion.div layoutId="lab-filter-underline" className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-tx-primary" />
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-[28px] serif-heading font-bold text-tx-primary mb-2">正在推进的实验</h2>
            <p className="text-sm text-tx-tertiary">先看这个方向现在在验证什么，再判断值不值得继续关注。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredExperiments.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => navigate(`/lab/${exp.id}`)}
                className="group cursor-pointer flex flex-col p-8 bg-surface border border-border-subtle rounded-radius-card hover:border-border-strong hover:bg-white transition-all h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-practical/20 text-accent-practical uppercase rounded-radius-badge">
                    {exp.status}
                  </span>
                  <span className="mono-label text-[10px] text-tx-quaternary uppercase">{exp.recentUpdate.split(' / ')[0]}</span>
                </div>
                
                <h3 className="text-[28px] serif-heading font-bold text-tx-primary mb-4 leading-tight group-hover:text-accent-brand transition-colors">
                  {exp.name}
                </h3>
                
                <p className="text-base text-tx-secondary leading-relaxed mb-6">
                  {exp.motivation}
                </p>

                <div className="mb-8 rounded-radius-card border border-border-subtle bg-paper p-5">
                  <div className="mono-label text-[10px] text-tx-quaternary uppercase mb-2">现在在验证什么</div>
                  <p className="text-sm leading-7 text-tx-primary">{exp.currentFocus || exp.phase}</p>
                </div>

                <div className="mb-10">
                  <div className="mono-label text-[10px] text-tx-quaternary uppercase mb-3">已经长出的结果</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.outputs.slice(0, 2).map((o) => (
                      <span key={o} className="mono-label text-[10px] text-tx-tertiary bg-paper border border-border-subtle px-2 py-1 rounded-sm">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border-subtle flex items-center justify-between text-sm font-medium text-tx-primary group-hover:gap-3 transition-all">
                  查看实验记录 <ArrowRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-inverse text-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[32px] serif-heading font-bold text-white mb-4">最近更新</h2>
            <p className="text-tx-quaternary text-lg">只看最近这几次变化，快速知道现在又推进到了哪一步。</p>
          </div>
          
          <div className="border-t border-white/10">
            {LAB_UPDATES.slice(0, 4).map((u, i) => (
              <div 
                key={i} 
                className="group flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-4 -mx-4 cursor-pointer"
                onClick={() => u.labId && navigate(`/lab/${u.labId}`)}
              >
                <div className="md:w-32 flex-shrink-0 mono-label text-[12px] text-tx-quaternary pt-1 uppercase">
                  {u.timestamp}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[12px] font-medium text-accent-practical mono-label">{u.project}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[11px] text-white/40 uppercase tracking-widest mono-label">{u.status}</span>
                  </div>
                  <p className="text-lg text-white group-hover:text-accent-practical transition-colors leading-relaxed">
                    {u.update}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
