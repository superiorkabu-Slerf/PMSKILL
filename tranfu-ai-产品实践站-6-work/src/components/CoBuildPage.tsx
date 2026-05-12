import React from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const CoBuildPage = () => {
  return (
    <div className="bg-paper min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-4 block">需求共建 / 提交入口</span>
          <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter">
            没有现成的工具入口？<br />让我们一起构建它。
          </h1>
          <p className="text-lg text-tx-secondary max-w-2xl leading-relaxed">
            这里的共建是面向真实场景的深度协作。如果你面临具体的工程痛点，且愿意与我们共同迭代产品或实验，欢迎提交你的需求。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar: Mechanism */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">共建机制</h3>
              <p className="text-sm text-tx-secondary mb-8 leading-relaxed">
                我们会优先评估问题的真实感、场景的封闭性以及是否符合当前的实验室方向。
              </p>
              <ul className="space-y-4">
                {[
                  '真实场景优先',
                  '小范围闭环优先',
                  '适合公开实验优先',
                  '可复用性优先'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-tx-secondary">
                    <CheckCircle2 size={16} className="text-accent-practical" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-surface rounded-radius-card border border-border-subtle">
              <div className="flex items-center gap-2 mb-4 text-accent-alert uppercase mono-label text-xs font-bold">
                <AlertCircle size={14} /> 边界说明
              </div>
              <ul className="text-xs text-tx-tertiary space-y-3 list-disc pl-4 leading-relaxed">
                <li>这不是无限制的免费外包入口</li>
                <li>我们会基于题目价值进行筛选，无法承诺全部实现</li>
                <li>共建过程中的关键逻辑可能会进入公开实验记录</li>
              </ul>
            </div>
          </div>

          {/* Main Form */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-8 bg-elevated border border-border-subtle rounded-radius-card p-8 md:p-12 shadow-workshop"
          >
            <h2 className="text-[28px] serif-heading font-bold text-tx-primary mb-10">需求描述与沟通</h2>
            
            <form className="space-y-10">
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-bold text-tx-primary">1. 具体要解决什么工程问题？</label>
                  <span className="text-[10px] mono-label text-tx-quaternary uppercase">Required</span>
                </div>
                <textarea 
                  rows={4}
                  placeholder="请尽可能用真实的业务场景来描述..."
                  className="w-full bg-surface border border-border-subtle rounded-radius-button p-4 text-sm outline-none focus:border-border-bold transition-all resize-none"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-bold text-tx-primary">2. 目前是如何尝试解决的？</label>
                  <span className="text-[10px] mono-label text-tx-quaternary uppercase">Optional</span>
                </div>
                <textarea 
                  rows={3}
                  placeholder="现在的工具组合或绕路方案..."
                  className="w-full bg-surface border border-border-subtle rounded-radius-button p-4 text-sm outline-none focus:border-border-bold transition-all resize-none"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-bold text-tx-primary">3. 联系方式（如微信号）</label>
                  <span className="text-[10px] mono-label text-tx-quaternary uppercase">Required</span>
                </div>
                <input 
                  type="text"
                  placeholder="方便我们确认细节并邀请加入共建组..."
                  className="w-full bg-surface border border-border-subtle rounded-radius-button p-4 text-sm outline-none focus:border-border-bold transition-all"
                />
              </div>

              <div className="pt-6">
                <button 
                  type="button"
                  className="w-full h-12 flex items-center justify-center gap-3 bg-inverse text-white rounded-radius-button font-bold text-sm hover:bg-black transition-all group"
                >
                  提交需求共建
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="mt-6 text-center text-[11px] text-tx-tertiary">
                  提交后我们会进行内部评估，并在 48 小时内通过微信与你沟通后续可能性。
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
