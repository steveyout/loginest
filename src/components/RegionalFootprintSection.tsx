import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe2, 
  MapPin, 
  Building2, 
  Ship, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  Anchor,
  Truck,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface RegionalFootprintProps {
  setActiveTab?: (tab: string) => void;
}

export const RegionalFootprintSection: React.FC<RegionalFootprintProps> = ({ setActiveTab }) => {
  const [activeRegion, setActiveRegion] = useState<string>('kenya');

  const hubs = [
    {
      id: 'kenya',
      country: 'Kenya (Headquarters)',
      flag: '🇰🇪',
      city: 'Nairobi & Mombasa',
      location: 'Bellway Business Park, Mombasa Road, Nairobi',
      portDesk: 'Kilindini Port Gate 18, Mombasa',
      description:
        'Our primary operations command hub. Direct rail link connecting Mombasa Kilindini Port to Nairobi Inland Container Depot (ICD Embakasi) and Naivasha Dry Port with zero demurrage clearing.',
      capabilities: [
        'Corporate Headquarters at Bellway Business Park',
        'Direct customs office inside Mombasa Port Gate 18',
        '45-year combined AOG aviation desk at JKIA Cargo Terminal',
        'Fleet depot with 60+ trucks and low-loaders'
      ],
      leadTime: 'Same Day - 24 Hours Clearing',
      badge: 'Headquarters & Port Command'
    },
    {
      id: 'uganda',
      country: 'Uganda',
      flag: '🇺🇬',
      city: 'Kampala',
      location: 'Kampala Logistics Yard & Jinja Corridor',
      portDesk: 'Malaba & Busia One-Stop Border Posts (OSBP)',
      description:
        'Key transit corridor connecting Mombasa Port via Malaba border to Kampala, Entebbe Airport, and interior industrial zones. Full EAC single customs territory processing.',
      capabilities: [
        'Dedicated customs release team at Malaba OSBP',
        'Door-to-door bonded cargo haulage from Mombasa',
        'Break-bulk distribution center in industrial Kampala',
        'Transit bonding and electronic seal escort'
      ],
      leadTime: '3 - 5 Days from Mombasa',
      badge: 'Northern Corridor Link'
    },
    {
      id: 'rwanda',
      country: 'Rwanda',
      flag: '🇷🇼',
      city: 'Kigali',
      location: 'Kigali Logistics Platform (KLP), Masaka',
      portDesk: 'Gatuna / Katuna & Kagitumba OSBP',
      description:
        'Strategic inland terminal connection. Expedited cross-border transit handling for commercial cargo, electronics, project materials, and fast-moving consumer goods.',
      capabilities: [
        'Fast-track transit clearance via Gatuna/Katuna border',
        'Direct connection to Kigali Logistics Platform (Masaka)',
        'GPS electronic cargo seal tracking to destination store',
        'Consolidated LCL cargo release in Kigali'
      ],
      leadTime: '5 - 7 Days from Mombasa',
      badge: 'Central Rwanda Hub'
    },
    {
      id: 'tanzania',
      country: 'Tanzania',
      flag: '🇹🇿',
      city: 'Dar es Salaam & Arusha',
      location: 'Dar es Salaam Port Corridor & Namanga OSBP',
      portDesk: 'Port of Dar es Salaam & Namanga Border Desk',
      description:
        'Dual-port accessibility offering importers flexibility between Mombasa Port and Port of Dar es Salaam for East and Central African cargo routing.',
      capabilities: [
        'Border clearing at Namanga & Holili/Taveta OSBP',
        'Port of Dar es Salaam clearing integration',
        'Cross-border transit connection to Southern Africa corridor',
        'Inland haulage to Arusha, Moshi, and Mwanza'
      ],
      leadTime: '3 - 6 Days Regional',
      badge: 'Southern Trade Gate'
    },
    {
      id: 'south-sudan',
      country: 'South Sudan',
      flag: '🇸🇸',
      city: 'Juba',
      location: 'Juba Customs Yard & Northern Transit Desk',
      portDesk: 'Elegu / Nimule One-Stop Border Post',
      description:
        'Specialized humanitarian, relief, project, and commercial freight forwarding via the Nimule border directly to Juba and upper provinces.',
      capabilities: [
        'Experienced Nimule border customs documentation',
        'Convoy and security escort management for high-value cargo',
        'Humanitarian and NGO specialized tariff exemptions',
        'Heavy rigging haulage for infrastructure and energy supplies'
      ],
      leadTime: '6 - 9 Days from Mombasa',
      badge: 'Humanitarian & Commercial'
    },
    {
      id: 'nigeria',
      country: 'Nigeria',
      flag: '🇳🇬',
      city: 'Lagos & Port Harcourt',
      location: 'Apapa Port Corridor & Ikeja Cargo Terminal',
      portDesk: 'Apapa & Tin Can Island Port Terminals',
      description:
        'West African commercial gateway connecting East African trade with the largest market in Africa. Multi-modal air and ocean freight forwarding.',
      capabilities: [
        'Apapa & Tin Can Island port customs clearance',
        'Air cargo consolidation via Murtala Muhammed Airport (LOS)',
        'Inter-regional East-West Africa trade lanes',
        'Commercial distribution and warehousing in Lagos'
      ],
      leadTime: 'Air: 24-48h | Ocean: 14 Days',
      badge: 'West Africa Gateway'
    }
  ];

  const activeHub = hubs.find(h => h.id === activeRegion) || hubs[0];

  return (
    <section id="regional-footprint" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50 dark:bg-[#070C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>Pan-African & Global Connectivity</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Regional Footprint &{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold">
              Global Network Across 120+ Countries
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Strategically headquartered at Bellway Business Park on Mombasa Road, Nairobi, with owned operational branches across Kenya, Uganda, Rwanda, Tanzania, Nigeria, and South Sudan—supported by a vetted partner network in 120+ nations worldwide.
          </motion.p>
        </div>

        {/* Global Network High-Impact Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Global Coverage</span>
            <div className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              <span className="text-orange-500">120+</span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Partner countries worldwide</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">African Presence</span>
            <div className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">6 Nations</div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Direct operational branches</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Headquarters</span>
            <div className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Nairobi, KE</div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Bellway Business Park, Mombasa Rd</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Port Gateways</span>
            <div className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Mombasa & Dar</div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Zero-demurrage vessel clear</p>
          </div>
        </motion.div>

        {/* Interactive Hub Selection & Detail Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Hub Buttons List */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-2">
              Select Regional Branch & Corridor
            </h4>
            
            <div className="space-y-2">
              {hubs.map((hub) => {
                const isSelected = hub.id === activeRegion;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setActiveRegion(hub.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                      isSelected
                        ? 'bg-white dark:bg-[#0B132B] border-l-4 border-l-orange-500 border-slate-200 dark:border-slate-700 shadow-sm ring-1 ring-orange-500/20'
                        : 'bg-white dark:bg-[#0B132B] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{hub.flag}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                            {hub.country}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          {hub.city}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium ${
                        isSelected 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        {hub.badge.split(' ')[0]}
                      </span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'text-orange-500 translate-x-1' : 'text-slate-400 opacity-60'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Hub Expanded Detailed Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHub.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 p-7 sm:p-9 shadow-md space-y-6 relative overflow-hidden"
              >
                {/* Hub Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-inner">
                      {activeHub.flag}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                          {activeHub.country}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {activeHub.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        Operational Hub: {activeHub.city}
                      </p>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-bold font-mono">
                    {activeHub.leadTime}
                  </div>
                </div>

                {/* Hub Location & Port Desks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-orange-500" /> Physical Address
                    </span>
                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {activeHub.location}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase flex items-center gap-1.5">
                      <Ship className="w-3.5 h-3.5 text-orange-500" /> Customs & Border Desk
                    </span>
                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {activeHub.portDesk}
                    </p>
                  </div>
                </div>

                {/* Overview Text */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeHub.description}
                </p>

                {/* Core Capabilities */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Core Capabilities & Infrastructure
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeHub.capabilities.map((cap, ci) => (
                      <div key={ci} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-100/60 dark:bg-slate-800/50 p-2.5 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span className="font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dispatch / Quote Action */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveTab?.('quote')}
                    className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Ship to / from {activeHub.country.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveTab?.('contact')}
                    className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
                  >
                    Contact {activeHub.city.split(' ')[0]} Office
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Global 120+ Countries Partner Network Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 sm:p-10 bg-[#06122e] border border-slate-800 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-2xl text-center md:text-left relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-orange-400" /> Worldwide Freight Reach
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Importing From China, Europe, UAE, or the Americas?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              With our trusted partner network spanning over 120 countries, Loginest handles your freight from overseas factory floor, manages international port export documentation, coordinates sea or air transit, and delivers directly to your East African warehouse.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab?.('quote')}
              className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Get International Door-to-Door Quote
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
