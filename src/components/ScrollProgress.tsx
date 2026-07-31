import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001
  });

  const [hoverPos, setHoverPos] = useState<{ x: number; pct: number } | null>(null);

  const getSectionTitle = (pct: number) => {
    if (pct < 15) return 'Top • Hero Overview';
    if (pct < 30) return 'Services • Port & Highway';
    if (pct < 45) return 'Corporate • Regional Network';
    if (pct < 60) return 'Telemetry • Live Cargo Tracker';
    if (pct < 75) return 'Tariffs • AI Freight Estimator';
    if (pct < 88) return 'Command Center • EAC Fleet';
    return '24/7 Support Desk • Contact HQ';
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const width = window.innerWidth;
    const x = e.clientX;
    const pct = Math.min(Math.max(Math.round((x / width) * 100), 0), 100);
    setHoverPos({ x, pct });
  };

  const handleMouseLeave = () => {
    setHoverPos(null);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="fixed top-0 left-0 right-0 z-[100] h-2.5 sm:h-3 group cursor-pointer pointer-events-auto transition-all"
    >
      {/* Background Track */}
      <div className="w-full h-1 sm:h-1.5 bg-slate-900/20 dark:bg-slate-800/40 backdrop-blur-xs transition-all group-hover:h-2">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-400 via-emerald-400 to-teal-400 origin-left shadow-[0_0_12px_rgba(249,115,22,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Hover-triggered Descriptive Tooltip */}
      <AnimatePresence>
        {hoverPos && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            style={{
              left: `${Math.min(Math.max(hoverPos.x, 90), window.innerWidth - 90)}px`,
              transform: 'translateX(-50%)'
            }}
            className="absolute top-3.5 z-[110] px-3 py-1.5 rounded-xl bg-slate-900/95 dark:bg-slate-950/95 text-white shadow-2xl border border-orange-500/40 backdrop-blur-md pointer-events-none flex items-center gap-2 whitespace-nowrap text-xs font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-bold text-slate-100">{getSectionTitle(hoverPos.pct)}</span>
            <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-extrabold text-[10px] border border-orange-500/30">
              {hoverPos.pct}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


