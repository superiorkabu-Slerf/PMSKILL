import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const Marquee = ({ items, direction = 'left', speed = 50, className = "" }: MarqueeProps) => {
  const containerItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className={`overflow-hidden whitespace-nowrap py-12 ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block"
      >
        {containerItems.map((item, idx) => (
          <span
            key={idx}
            className="inline-block text-[4vw] md:text-[2vw] font-serif font-black uppercase tracking-tighter mx-12 text-text-title opacity-10"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
