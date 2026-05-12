import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-40 bg-paper overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 relative z-10 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-6 block">
            TRANFU / AI Product Practice Workbench
          </span>
          
          <h1 className="text-[48px] md:text-[64px] leading-[1.05] serif-heading font-bold text-tx-primary mb-8 tracking-tighter">
            把 AI 从「看过」变成「用上」
          </h1>


          
          <p className="text-lg md:text-xl text-tx-secondary mb-12 max-w-2xl leading-relaxed">
            持续产出可用的 AI 产品、资源和经验，帮助你快速试用、复制和复用。
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to="/products"
              className="h-[44px] px-8 flex items-center justify-center bg-inverse text-white text-base font-medium rounded-radius-button hover:bg-black transition-colors"
            >
              先看产品
            </Link>
            <Link 
              to="/resources"
              className="h-[44px] px-8 flex items-center justify-center border border-border-default text-tx-primary text-base font-medium rounded-radius-button hover:border-border-strong hover:bg-surface transition-all"
            >
              拿走资源
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
