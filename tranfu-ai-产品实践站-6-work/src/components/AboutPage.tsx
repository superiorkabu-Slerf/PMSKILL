import React from 'react';
import { motion } from 'motion/react';
import { STAGE_STATS } from '../data';

export const AboutPage = () => {
  return (
    <div className="bg-paper min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-4 block">关于我们 / 实践站说明</span>
          <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter leading-tight">
            如果你想了解 Tranfu 是什么、<br />
            为什么公开，以及我们在练什么。
          </h1>
          <p className="text-xl text-tx-secondary max-w-2xl leading-relaxed">
            我们不仅仅是在做 AI 产品，更是在探索一套“不仅能把事做完，还能让过程变得可沉淀、可复用、可公开”的工作方式。
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-6">实践而非口号</h2>
            <div className="space-y-6 text-tx-secondary leading-relaxed">
              <p>
                Tranfu（望船夫）是一个致力于 AI 产品深度实践的工作坊。我们不仅关注最终的产品交付，更关注在构建过程中形成的思维模型、Prompt 技能和工程闭环。
              </p>
              <p>
                在这个网站上，你看到的不只是漂亮的 Demo，还有真实的决策记录。我们会公开那些甚至还没有结果的尝试，因为产品构建的真实感恰恰隐藏在这些“断片”的过程里。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-6">Build in Public 的中国叙事</h2>
            <div className="space-y-6 text-tx-secondary leading-relaxed">
              <p>
                我们相信，“准备好了再展示”会过滤掉 90% 有价值的信息。真正的共鸣和信任，来自于对他人在处理复杂问题、面对不确定性、甚至在遭遇失败时的真实观察。
              </p>
              <p>
                这套公开构建的策略被我们称为“养成记”。它让一支团队的成长轨迹，变成用户可以追踪的项目叙事，并最终沉淀为可被他人直接带走的工程资源。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-24 bg-surface border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-6">我们现在的坐标</h2>
              <p className="text-lg text-tx-secondary leading-relaxed mb-8">
                现在的 Tranfu 仍然处在能力建设阶段。我们正在用 Agent 和 Skill 重构产品开发流，但这仍是一个寻找平衡点的旅程。
              </p>
              <div className="p-6 border border-tx-primary/10 rounded-radius-card bg-paper italic text-tx-tertiary">
                “我们不追求完美的开始，我们只追求真实的演进。”
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {STAGE_STATS.map((stat) => (
                <div key={stat.label} className="p-6 bg-paper border border-border-subtle rounded-radius-card">
                  <div className="text-[32px] font-mono font-bold text-tx-primary mb-1">{stat.value}</div>
                  <div className="mono-label text-[11px] text-accent-brand uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-6">保持连接</h2>
          <p className="text-tx-tertiary mb-12 max-w-xl mx-auto">
            你可以通过以下平台追踪我们的实验进展，或者加入私域社群进行更深度的技术交流。
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
            {[
              { label: '小红书', sub: 'RED', color: 'hover:text-[#ff2442]' },
              { label: '抖音', sub: 'DOUYIN', color: 'hover:text-[#fe2c55]' },
              { label: 'Bilibili', sub: 'B站', color: 'hover:text-[#00aeec]' },
              { label: '知乎', sub: 'ZHIHU', color: 'hover:text-[#0084ff]' },
              { label: 'X', sub: 'TWITTER', color: 'hover:text-tx-primary' },
              { label: 'Github', sub: 'REPO', color: 'hover:text-tx-primary' },
              { label: '私域社群', sub: 'WECHAT', color: 'hover:text-[#07c160]' },
            ].map((social) => (
              <a 
                key={social.label}
                href="#"
                className={`p-6 bg-surface border border-border-subtle rounded-radius-card transition-all group ${social.color}`}
              >
                <div className="text-[15px] font-bold mb-1">{social.label}</div>
                <div className="mono-label text-[9px] text-tx-quaternary tracking-widest uppercase group-hover:text-inherit transition-colors">{social.sub}</div>
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button className="h-[44px] px-8 bg-inverse text-white text-sm font-medium rounded-radius-button hover:bg-black transition-colors">
              加入微信群
            </button>
            <button className="h-[44px] px-8 border border-border-default text-tx-primary text-sm font-medium rounded-radius-button hover:bg-surface transition-colors">
              发送邮件
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
