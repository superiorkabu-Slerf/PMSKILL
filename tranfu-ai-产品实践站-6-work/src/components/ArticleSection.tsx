import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { INSIGHTS } from '../data';

export const ArticleSection = ({ onNavigate, onSelectInsight }: {
  onNavigate: (page: string) => void,
  onSelectInsight: (id: number) => void
}) => {
  const featured = INSIGHTS[0];
  const others = INSIGHTS.slice(1, 4);

  if (!featured) {
    return null;
  }

  return (
    <section id="insights" className="py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-2">最近值得先看的经验</h2>
          <p className="text-tx-tertiary text-base">
            看经验文章、判断记录和踩坑总结，也能顺着找到相关产品和资源。
          </p>
        </div>
        <button
          onClick={() => onNavigate('资讯')}
          className="text-sm font-medium text-tx-primary hover:underline underline-offset-4 flex items-center gap-2"
        >
          查看全部资讯
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 group cursor-pointer"
          onClick={() => onSelectInsight(featured.id)}
        >
          <div className="hover-lift aspect-[16/10] rounded-radius-card overflow-hidden border border-border-subtle mb-8 bg-surface">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover opacity-95 group-hover:scale-[1.02] transition-all duration-700"
            />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="mono-label text-[11px] px-2 py-0.5 border border-tx-tertiary/20 text-tx-tertiary uppercase rounded-radius-badge">
              重点经验
            </span>
            <span className="mono-label text-[11px] text-tx-quaternary uppercase">
              {featured.date}
            </span>
          </div>
          <h3 className="text-[30px] serif-heading font-bold text-tx-primary mb-4 group-hover:text-accent-brand transition-colors leading-tight">
            {featured.title}
          </h3>
          <p className="text-tx-secondary text-lg max-w-2xl leading-relaxed">
            {featured.oneLiner || featured.summary}
          </p>
        </motion.div>

        <div className="md:col-span-5 flex flex-col gap-8 pt-0 md:pt-2">
          {others.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer border-b border-border-subtle pb-8 last:border-0"
              onClick={() => onSelectInsight(article.id)}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="mono-label text-[11px] text-accent-brand uppercase">{article.category}</span>
                <span className="mono-label text-[11px] text-tx-quaternary uppercase">{article.date}</span>
              </div>
              <h4 className="text-[22px] serif-heading font-bold text-tx-primary mb-3 group-hover:text-accent-brand transition-colors leading-snug">
                {article.title}
              </h4>
              <p className="text-sm text-tx-tertiary leading-relaxed line-clamp-2">
                {article.oneLiner || article.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
