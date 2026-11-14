import React from 'react';
import { motion } from 'motion/react';
import { 
  Ship, 
  Truck, 
  Globe2, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles,
  Layers,
  Plane
} from 'lucide-react';

interface StatisticsSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({ setActiveTab }) => {
  const stats = [
    {
      icon: Award,
      title: 'Industry Experience',
      value: '19+ Years',
      subtitle: 'Continuous logistics leadership in Eastern Africa',
      badge: 'Proven Pedigree'
    },
    {
      icon: Globe2,
      title: 'Global Partner Network',
      value: '120+ Nations',
      subtitle: 'Worldwide door-to-door forwarding network',
      badge: 'Global Reach'
    },
    {
      icon: Ship,
      title: 'Mombasa Port Throughput',
      value: '125K+ TEU',
      subtitle: 'Zero-demurrage container clearance & SGR rail',
      badge: 'Port Gateway'
    },
    {
      icon: ShieldCheck,
      title: 'Guaranteed SLA Rate',
      value: '99.8%',
      subtitle: 'On-time milestone delivery across 6 EAC hubs',
      badge: 'Reliability'
    }
  ];

  return (
    <section id="stats" className="py-16 lg:py-24 relative overflow-hidden bg-white dark:bg-[#0B132B] border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>Real-Time Performance Metrics</span>
            </span>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Backed by Data, Pedigree &{' '}
              <span className="text-orange-600 dark:text-orange-500">
                East African Trust
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
            From Kilindini Harbor vessel offloading to cross-border delivery across the Northern Corridor, our operations deliver measurable efficiency and zero demurrage.
          </p>
        </div>

        {/* 4 Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Brand Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-orange-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {stat.badge}
                    </span>
                  </div>

                  {/* Figure & Title */}
                  <div className="space-y-1">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight block">
                      {stat.value}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {stat.title}
                    </h3>
                  </div>

                  {/* Subtitle / Context */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {stat.subtitle}
                  </p>
                </div>

                {/* Footer Link / Verification */}
                <div className="pt-5 mt-5 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>

                  <button
                    onClick={() => setActiveTab?.('quote')}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
