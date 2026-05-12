import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ENTRIES } from '../data';

const ColorIndicatorMap: Record<string, string> = {
  blue: 'bg-accent-brand',
  orange: 'bg-accent-alert',
  green: 'bg-accent-practical',
};

export const EntrySection = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ENTRIES.map((entry, index) => {
          const indicatorColor = ColorIndicatorMap[entry.theme] || 'bg-tx-tertiary';
          const number = (index + 1).toString().padStart(2, '0');
          
          return (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative"
            >
              <Link
                to={entry.path || '/'}
                className="group hover-lift relative z-10 flex flex-col p-8 bg-surface border border-border-subtle rounded-radius-card hover:border-border-strong h-full overflow-hidden"
              >
                <div className="absolute -bottom-2 -left-2 font-mono text-6xl md:text-8xl font-bold text-tx-primary opacity-[0.04] pointer-events-none select-none group-hover:opacity-[0.08] transition-opacity">
                  {number}
                </div>

                <div className={`w-3 h-3 rounded-[2px] mb-8 ${indicatorColor}`} />
                
                <h3 className="text-[24px] serif-heading font-bold text-tx-primary mb-3">
                  {entry.title}
                </h3>
                
                <p className="text-sm text-tx-tertiary leading-relaxed mb-auto pb-8">
                  {entry.description}
                </p>
                
                <div className="flex justify-end uppercase">
                  <div className="hover-arrow flex items-center gap-2 text-xs font-mono font-bold text-tx-primary underline underline-offset-8 decoration-border-bold group-hover:decoration-tx-primary">
                    {entry.buttonText}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
