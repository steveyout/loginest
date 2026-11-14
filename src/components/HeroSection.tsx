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
  ChevronRight,
  Calculator,
  Layers,
  Award
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
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold shadow-sm"
          >
            <span className="text-sm">🇰🇪</span>
            <span>HQ: Bellway Business Park, Nairobi</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-400 dark:text-orange-600 font-mono">East Africa Gateway</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold tracking-wide"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>Leader in Freight & Logistics • 19 Years Experience</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium"
          >
            <Globe2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Network in 120+ Countries</span>
          </motion.div>
        </div>

        {/* Main Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto space-y-5"
        >
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Reliable Freight, Global Reach &{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold">
              End-to-End Precision
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            With a deep understanding of our importers’ needs and a trusted network of agents in over 120 countries, we offer reliable, end-to-end cargo solutions at competitive rates. From your overseas door to your customer’s door, we manage global deliveries with precision and care.
          </p>

          {/* Quick Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveTab('quote')}
              className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Get a Personalized Quote</span>
              <ArrowRight className="w-4 h-4 opacity-80" />
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-800 dark:border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-orange-400" />
              <span>Explore 6 Core Services</span>
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 dark:bg-slate-900 text-white font-bold text-sm border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>24/7 WhatsApp Support Desk</span>
            </button>
          </div>
        </motion.div>

        {/* Visual Image Banner Showcase Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        >
          {/* Main Hero Card: Mombasa Port */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group min-h-[320px] sm:min-h-[380px] flex flex-col justify-end">
            <img 
              src={mombasaPortImg} 
              alt="Mombasa Kilindini Container Port Kenya" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-8 space-y-3 text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500 text-white shadow-sm">
                  PORT GATEWAY
                </span>
                <span className="text-xs text-slate-300 font-mono flex items-center gap-1">
                  <Anchor className="w-3.5 h-3.5 text-orange-400" /> Kilindini Harbor Gate 18, Mombasa
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Port of Mombasa Customs Clearing & NVOCC Forwarding
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Direct integration with Kenya Ports Authority (KPA) and KRA Simba/iCMS for zero-demurrage container clearance, LCL/FCL consolidation, and express SGR rail dispatch to Nairobi ICD.
              </p>
            </div>
          </div>

          {/* Secondary Stacked Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Nairobi Hub Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg group flex-1 min-h-[180px] flex flex-col justify-end">
              <img 
                src={nairobiHubImg} 
                alt="Nairobi Logistics Command Hub" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <div className="relative z-10 p-5 text-white space-y-1">
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
                  Nairobi HQ & AOG Desk
                </span>
                <h4 className="font-display font-bold text-base text-white">45 Years Aviation AOG & Freight Hub</h4>
                <p className="text-[11px] text-slate-300">Bellway Business Park & JKIA Cargo Terminal</p>
              </div>
            </div>

            {/* Trucking Corridor Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg group flex-1 min-h-[180px] flex flex-col justify-end">
              <img 
                src={eastAfricaTruckingImg} 
                alt="East Africa Cross Border Trucking" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <div className="relative z-10 p-5 text-white space-y-1">
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
                  Trucking & Commercial Fleet
                </span>
                <h4 className="font-display font-bold text-base text-white">Highway Haulage & Out-of-Gauge Project Rigging</h4>
                <p className="text-[11px] text-slate-300">Kenya, Uganda, Rwanda, Tanzania, South Sudan</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 Unified Key Metric Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Experience</span>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-orange-500 group-hover:scale-105 transition-transform">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              19+ Years
            </div>
            <p className="mt-1 text-xs text-orange-600 dark:text-orange-400 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Industry Leadership
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Global Reach</span>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:scale-105 transition-transform">
                <Globe2 className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              120+ Countries
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Vetted Agency Network
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">AOG Aviation</span>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:scale-105 transition-transform">
                <Plane className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              45 Years
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Combined Experience
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Regional Hubs</span>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              6 African Hubs
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              KE • UG • RW • TZ • SS • NG
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
