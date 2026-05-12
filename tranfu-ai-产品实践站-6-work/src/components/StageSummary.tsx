import React from 'react';
import { motion } from 'motion/react';

const RETURN_REASONS = [
  { label: '新产品', value: '持续上线', detail: '新产品上线后会第一时间放到首页。' },
  { label: '新资源', value: '持续补充', detail: '新的 Prompt、Skill、流程和模板会继续增加。' },
  { label: '新文章', value: '持续更新', detail: '经验文章、判断记录和踩坑总结会同步公开。' },
  { label: '新进展', value: '持续公开', detail: '进行中的项目会持续放出阶段更新。' },
];

export const StageSummary = () => {
  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-3">为什么值得持续回来</h2>
        <p className="text-tx-tertiary text-base leading-relaxed">
          这里不会只停在一版首页，而是会继续长出新的产品、资源、文章和项目进展。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {RETURN_REASONS.map((reason, index) => (
          <motion.div
            key={reason.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="p-6 border border-border-subtle rounded-radius-card bg-surface"
          >
            <div className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest mb-4">
              {reason.label}
            </div>
            <div className="text-[28px] serif-heading font-bold text-tx-primary mb-3">
              {reason.value}
            </div>
            <p className="text-sm text-tx-tertiary leading-relaxed">
              {reason.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
