import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  TrendingDown, 
  FileCheck, 
  Users2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  BarChart3,
  Scale,
  Clock,
  Layers
} from 'lucide-react';

interface ValuePropositionSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const ValuePropositionSection: React.FC<ValuePropositionSectionProps> = ({ setActiveTab }) => {
  const valuePropositions = [
    {
      id: 'consultative',
      badge: 'Consultative Partnership',
      title: 'Beyond Pick & Drop: Supply Chain Advisory',
      quote: 'We are not the traditional transport company that simply picks and drops cargo.',
      description:
        'We immerse ourselves in your operational reality. Our logistics engineers sit down with your commercial teams to analyze chokepoints, predict seasonal port congestions, and structure end-to-end route optimization that ensures your products arrive on market shelf on schedule.',
      icon: Users2,
      benefits: [
        'Dedicated account logistics managers for tailored routing',
        'Direct consultation on EAC cross-border duty tariffs & exemptions',
        'Dynamic contingency dispatching during border or port delays'
      ]
    },
    {
      id: 'audit-trail',
      badge: 'Financial Reconciliation',
      title: 'Complete Audit Trail & Milestone Documentation',
      quote: 'We provide a delivery service with an unbroken, tamper-proof audit trail.',
      description:
        'We understand that for corporate enterprises, a delivery is incomplete without exact documentation to close off accounting cycles. We provide instantaneous digital Proof of Delivery (POD), validated customs discharge vouchers, and itemized billing to facilitate rapid payment processing.',
      icon: FileCheck,
      benefits: [
        'Digital POD with biometric timestamp & GPS sign-off',
        'Immediate KRA Simba/iCMS clearance release certificates',
        'Automated monthly reconciliations matching your ERP invoices'
      ]
    },
    {
      id: 'asset-light',
      badge: 'Balance Sheet Optimization',
      title: 'Asset-Light Agility: Eliminating Fleet Burden',
      quote: 'We remove the need for non-core transport assets to sit on your balance sheet.',
      description:
        'Owning and maintaining heavy haulage trucks, bonded yards, and repair bays drains corporate working capital. We take over the entire capital expenditure, giving you instant on-demand capacity while drastically driving down your total cost of doing business.',
      icon: TrendingDown,
      benefits: [
        'Zero fleet depreciation, insurance, and mechanic maintenance overhead',
        'Demonstrable 22% to 35% reduction in recurring distribution expenditure',
        'Scalable seasonal capacity from single LCL boxes to multi-trailer fleets'
      ]
    }
  ];

  return (
    <section id="value-proposition" className="py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#06122e] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>The Loginest Distinction</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Our Core Value Proposition:{' '}
            <span className="text-orange-600 dark:text-orange-500">
              Engineered for Bottom-Line Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            We bridge the gap between traditional freight hauling and modern enterprise logistics, delivering strategic advisory, total financial accountability, and measurable cost reductions.
          </motion.p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {valuePropositions.map((prop, idx) => {
            const PropIcon = prop.icon;
            return (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group"
              >
                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700">
                      {prop.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-orange-500 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                      <PropIcon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Callout Quote */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-snug">
                      {prop.title}
                    </h3>
                    <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border-l-4 border-orange-500 text-xs sm:text-sm font-medium italic text-slate-700 dark:text-slate-300">
                      "{prop.quote}"
                    </div>
                  </div>

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {prop.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="pt-2 space-y-2.5">
                    {prop.benefits.map((benefit, bi) => (
                      <div key={bi} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-8 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveTab?.('quote')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 group/btn transition-colors cursor-pointer"
                  >
                    <span>Request Strategic Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">ROI-Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-6 sm:p-8 bg-[#0a193d] border border-slate-800 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white flex items-center justify-center md:justify-start gap-2">
              <Scale className="w-5 h-5 text-orange-400" />
              <span>We can demonstrate measurable savings on your freight spend</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Provide your last 3 months of shipping bills, and our freight analysts will prepare a side-by-side cost reduction breakdown showing lower landed costs, zero demurrage, and accelerated delivery cycles.
            </p>
          </div>

          <button
            onClick={() => setActiveTab?.('quote')}
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md hover:scale-102 active:scale-98 transition-all whitespace-nowrap cursor-pointer"
          >
            Get Free Cost Audit
          </button>
        </motion.div>

      </div>
    </section>
  );
};
