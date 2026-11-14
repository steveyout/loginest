import React from 'react';
import { 
  FileText, 
  Ship, 
  Train, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface HowItWorksSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ setActiveTab }) => {
  const steps = [
    {
      id: '01',
      title: 'Quote & Booking',
      description: 'Submit your cargo details online or via WhatsApp. Receive a transparent, itemized quote with zero demurrage guarantees within 15 minutes.',
      icon: FileText,
      steps: ['Select mode (Sea, Air, Road)', 'Instant tariff estimation', 'Dedicated account manager assigned']
    },
    {
      id: '02',
      title: 'Mombasa Port Clearance',
      description: 'Our Gate 18 operations team handles KRA Simba & iCMS filings, KEBS CoC verification, and wharf vessel discharge coordination.',
      icon: Ship,
      steps: ['Pre-arrival manifest filing', 'KRA Simba duty assessment', 'Gate 18 direct wharf release']
    },
    {
      id: '03',
      title: 'SGR Rail / Road Haulage',
      description: 'Seamless intermodal transfer from Mombasa Kilindini Port to Nairobi ICD via SGR rail wagons, or direct haulage across EAC corridors.',
      icon: Train,
      steps: ['Priority SGR freight loading', 'GPS & ECTS seal tracking', 'Malaba & Busia border clearance']
    },
    {
      id: '04',
      title: 'Final-Mile Delivery',
      description: 'Store-door delivery to your warehouse in Kenya, Uganda, Rwanda, Tanzania, South Sudan, or Nigeria with digital Proof of Delivery.',
      icon: MapPin,
      steps: ['Verified electronic POD', 'Post-clearance tax reconciliation', 'Complete audit trail archive']
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50 dark:bg-[#070C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            End-to-End Logistics Process
          </span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Your Freight Journey{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold ml-2">From Port to Door</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Four simple steps from Mombasa Port clearance to delivery at your destination across East Africa's trade corridors.
          </motion.p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-800 border border-slate-700 text-orange-400 font-mono font-bold text-xs shadow-sm">
                {step.id}
              </div>

              {/* Content */}
              <div className="p-8 pt-16 space-y-5 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-orange-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">{step.title}</h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 space-y-2">
                  {step.steps.map((s, si) => (
                    <div 
                      key={si}
                      className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connection Line (on desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-2 w-24 h-[1px] bg-slate-200 dark:bg-slate-800" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 sm:p-10 bg-[#06122e] border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="space-y-2 text-center md:text-left relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono uppercase tracking-wider">
              Free Quote in Seconds
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">Ready to Ship Across East Africa?</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto md:mx-0 mt-1">
              Get an instant rate quote for Mombasa Port clearing, SGR rail freight, or EAC cross-border road transport.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 shrink-0">
            {setActiveTab && (
              <button 
                onClick={() => setActiveTab('quote')}
                className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Ship className="w-4 h-4" />
                <span>Get Free Quote</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
