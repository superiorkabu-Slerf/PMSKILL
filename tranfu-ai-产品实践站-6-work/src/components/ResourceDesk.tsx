import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RESOURCES } from '../data';

export const ResourceDesk = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-2">可直接复用的资源</h2>
          <p className="text-tx-tertiary text-base">可直接复制、下载和复用的 Prompt、Skill、流程和模板。</p>
        </div>
        <Link to="/resources" className="text-sm font-medium text-tx-primary hover:underline underline-offset-4 flex items-center gap-2">
          查看所有资源 <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {RESOURCES.slice(0, 4).map((res, idx) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => navigate(`/resources/${res.id}`)}
            className="group hover-lift flex flex-col p-6 bg-elevated border border-border-subtle rounded-radius-card hover:border-border-strong cursor-pointer"
          >
            <div className="mono-label text-[11px] text-accent-practical uppercase mb-4">
              {res.type}
            </div>
            
            <h3 className="text-lg font-bold text-tx-primary mb-3 leading-snug group-hover:text-accent-brand transition-colors">
              {res.name}
            </h3>
            
            <p className="text-xs text-tx-tertiary mb-6 line-clamp-2 leading-relaxed">
              {res.oneLiner || '查看详情了解这个资源可以怎么使用。'}
            </p>

            <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between">
              <span className="text-[11px] font-medium text-tx-primary group-hover:underline underline-offset-4">立即查看</span>
              <ArrowRight size={14} className="text-tx-quaternary group-hover:text-tx-primary group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
