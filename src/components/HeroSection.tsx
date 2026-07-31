import React from 'react';
import { 
  ArrowRight, 
  Globe2, 
  ShieldCheck, 
  Sparkles,
  Plane,
  Ship,
  Truck,
  MapPin,
  Building2,
  Anchor,
  CheckCircle2,
  MessageSquare,
  Zap,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

// Import generated images
import mombasaPortImg from '../assets/images/mombasa_port_hero_1785407441582.jpg';
import nairobiHubImg from '../assets/images/nairobi_freight_hub_1785407457130.jpg';
import eastAfricaTruckingImg from '../assets/images/east_africa_trucking_1785407471486.jpg';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-orange-500/10 dark:bg-orange-500/15 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold shadow-md"
          >
            <span className="text-sm">🇰🇪</span>
            <span>Headquarters: Nairobi, Kenya</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-400 dark:text-orange-600 font-mono">East Africa Logistics Gateway</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>Mombasa Port Clearing • SGR Rail • EAC Corridors</span>
          </motion.div>
        </div>

        {/* Main Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            East Africa’s Premier{' '}
            <span className="text-gradient-brand font-extrabold">
              Smart Freight & Supply Chain
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Headquartered in Kenya, Loginest Logistics seamlessly connects Port of Mombasa, JKIA Air Cargo, and the Great Lakes Northern Corridor across Uganda, Rwanda, South Sudan & Tanzania.
          </p>

          {/* Quick Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('calculator')}
              className="px-6 py-3.5 rounded-xl bg-gradient-brand text-white font-bold text-sm hover:brightness-110 shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Instant Rate Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Support Desk</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-orange-400" />
              <span>Nairobi HQ & Network</span>
            </button>
          </div>
        </motion.div>

        {/* Visual Image Banner Showcase Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        >
          {/* Main Hero Card: Mombasa Port */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-2xl group min-h-[320px] sm:min-h-[380px] flex flex-col justify-end">
            <img 
              src={mombasaPortImg} 
              alt="Mombasa Kilindini Container Port Kenya" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-8 space-y-3 text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500 text-white shadow-md">
                  PORT GATEWAY
                </span>
                <span className="text-xs text-orange-300 font-mono flex items-center gap-1">
                  <Anchor className="w-3.5 h-3.5" /> Kilindini Harbor, Mombasa
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Port of Mombasa Ocean Clearing & SGR Rail Intermodal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Direct integration with Kenya Ports Authority (KPA) and KRA Simba System for zero-demurrage container clearance and express 12-hour SGR rail transit to Nairobi & Naivasha dry ports.
              </p>
            </div>
          </div>

          {/* Secondary Stacked Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Nairobi Hub Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xl group flex-1 min-h-[180px] flex flex-col justify-end">
              <img 
                src={nairobiHubImg} 
                alt="Nairobi Logistics Command Hub" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <div className="relative z-10 p-5 text-white space-y-1">
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
                  Nairobi HQ Terminal
                </span>
                <h4 className="font-display font-bold text-base text-white">Smart Warehouse & Control Tower</h4>
                <p className="text-[11px] text-slate-300">50,000 sq ft automated sorting at JKIA Freight Terminal</p>
              </div>
            </div>

            {/* Trucking Corridor Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xl group flex-1 min-h-[180px] flex flex-col justify-end">
              <img 
                src={eastAfricaTruckingImg} 
                alt="East Africa Cross Border Trucking" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <div className="relative z-10 p-5 text-white space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                  Cross-Border Express
                </span>
                <h4 className="font-display font-bold text-base text-white">Northern Corridor Heavy Haulage</h4>
                <p className="text-[11px] text-slate-300">Kenya ➔ Uganda, Rwanda, South Sudan & Tanzania</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Key Metric Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200/80 dark:border-slate-800/80 shadow-md group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">East Africa HQ</span>
              <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Nairobi, KE
            </div>
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> 24/7 Command Tower
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200/80 dark:border-slate-800/80 shadow-md group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Port & Hubs</span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                <Anchor className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Mombasa Port
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              SGR Rail & ICD Embakasi
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200/80 dark:border-slate-800/80 shadow-md group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">On-Time Rate</span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              99.6%
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Guaranteed SLA Backed
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200/80 dark:border-slate-800/80 shadow-md group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Regional Reach</span>
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500 group-hover:scale-110 transition-transform">
                <Globe2 className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              6 EAC States
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              KE • UG • RW • SS • TZ • ET
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};


