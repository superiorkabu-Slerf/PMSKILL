import React from 'react';
import { motion } from 'motion/react';
import { Star, PaperPlane, Sparkle } from './Doodles';

export const HeroWorkbenchVisual = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center pointer-events-none select-none">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-orange/15 rounded-full blur-[80px]" />
      
      {/* Main Workbench Panel */}
      <motion.div 
        initial={{ y: 30, opacity: 0, rotate: -2 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-[380px] lg:w-[460px] p-6 bg-bg-warm-white/90 backdrop-blur-2xl rounded-[32px] border border-text-title/10 shadow-float"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-orange-dark/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent-green-dark/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-brand-blue/30" />
          </div>
          <span className="text-[10px] font-bold text-text-hint uppercase tracking-widest bg-text-title/5 px-2 py-0.5 rounded-full">Practice Workbench</span>
        </div>

        <div className="space-y-5">
          <div className="p-4 bg-bg-main/50 rounded-2xl border border-text-title/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-text-title">Active AI Agents</span>
              <span className="text-[10px] text-accent-green-dark bg-accent-green px-2 py-0.5 rounded-full">Running</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-warm-white bg-bg-beige overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=agent${i}`} alt="Agent" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-bg-warm-white bg-brand-blue flex items-center justify-center text-[10px] text-white font-bold">+2</div>
            </div>
          </div>

          <div className="p-4 bg-bg-main/50 rounded-2xl border border-text-title/5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-text-title">Resource Repository</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <div className="w-2 h-2 rounded-full bg-accent-orange-dark" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-bg-warm-white rounded-lg border border-text-title/5 flex items-center gap-2">
                <div className="w-4 h-4 text-brand-blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <span className="text-[10px] font-medium">Skills</span>
              </div>
              <div className="p-2 bg-bg-warm-white rounded-lg border border-text-title/5 flex items-center gap-2">
                <div className="w-4 h-4 text-accent-orange-dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                </div>
                <span className="text-[10px] font-medium">Prompts</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="h-1.5 flex-1 bg-text-title/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '68%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-brand-blue" 
              />
            </div>
            <span className="text-[10px] font-bold text-text-muted">68% Project ROI</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -right-8 z-20 p-4 bg-accent-yellow rounded-2xl shadow-float rotate-3 w-40"
      >
        <p className="text-[13px] font-medium leading-relaxed font-serif text-text-title/80">
          边做边学，<br/>边学边公开。
        </p>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-accent-yellow/50 rounded-full" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 -left-12 z-0 p-3 bg-bg-warm-white rounded-xl border border-text-title/10 shadow-soft -rotate-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-blue-bg rounded-lg flex items-center justify-center text-brand-blue font-bold">A</div>
          <div>
            <p className="text-[10px] font-bold text-text-title">Agent Logic</p>
            <p className="text-[9px] text-text-hint">Iterating v2.4</p>
          </div>
        </div>
      </motion.div>

      {/* Doodles */}
      <Star className="absolute top-20 left-10 text-accent-orange-dark opacity-40 animate-pulse" />
      <PaperPlane className="absolute bottom-1/4 right-0 text-brand-blue opacity-30 -rotate-12" />
      <Sparkle className="absolute top-1/2 left-0 text-accent-green-dark" />
      <Sparkle className="absolute bottom-1/3 left-1/4 text-accent-purple-dark" />

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.05))' }}>
        <motion.path 
          d="M 600,100 C 650,150 700,100 750,200" 
          stroke="var(--color-brand-blue)" 
          strokeWidth="1.5" 
          fill="none" 
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="opacity-20"
        />
        <motion.path 
          d="M 200,400 C 250,380 300,420 350,350" 
          stroke="var(--color-accent-orange-dark)" 
          strokeWidth="1.5" 
          fill="none" 
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="opacity-20"
        />
      </svg>
    </div>
  );
};
