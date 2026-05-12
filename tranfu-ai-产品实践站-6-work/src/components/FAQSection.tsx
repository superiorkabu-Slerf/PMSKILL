import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-4">常见疑问</h2>
          <p className="text-tx-tertiary text-base leading-relaxed">
            关于 Tranfu 实践站，这里有一些你可能想了解的答案。如果仍有疑问，欢迎通过需求共建与我们联系。
          </p>
        </div>

        <div className="md:col-span-8 divide-y divide-border-subtle">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="py-6 first:pt-0">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-tx-primary group-hover:text-accent-brand transition-colors">
                  {faq.question}
                </span>
                <div className="shrink-0 ml-4 text-tx-quaternary group-hover:text-tx-primary transition-colors">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 text-tx-secondary text-base leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
