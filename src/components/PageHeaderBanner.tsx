import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, LucideIcon, ArrowLeft } from 'lucide-react';

interface PageHeaderBannerProps {
  title: string;
  gradientTitle?: string;
  description: string;
  category: string;
  icon: LucideIcon;
  badgeText?: string;
  setActiveTab: (tab: string) => void;
}

export const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  title,
  gradientTitle,
  description,
  category,
  icon: Icon,
  badgeText,
  setActiveTab
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#0B132B] to-[#070C18] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      {/* Background Radial Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-4">
        
        {/* Navigation Breadcrumb & Back to Home */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <button
              onClick={() => setActiveTab('overview')}
              className="hover:text-orange-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-orange-400 font-semibold">{category}</span>
          </div>

          <button
            onClick={() => setActiveTab('overview')}
            className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-700/60 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-orange-400" />
            <span>Back to Overview</span>
          </button>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
          <div className="space-y-2 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold"
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{category}</span>
              {badgeText && (
                <span className="ml-1 px-1.5 py-0.2 rounded bg-orange-500 text-slate-950 text-[10px] font-extrabold">
                  {badgeText}
                </span>
              )}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              {title}{' '}
              {gradientTitle && (
                <span className="text-gradient-brand font-extrabold">
                  {gradientTitle}
                </span>
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          </div>
        </div>

      </div>
    </div>
  );
};
