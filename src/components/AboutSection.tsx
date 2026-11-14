import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Award, 
  Users2, 
  CheckCircle2, 
  ArrowRight, 
  Globe2, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Layers,
  Truck,
  Anchor,
  FileCheck
} from 'lucide-react';

// Import local photography
import mombasaPortImg from '../assets/images/mombasa_port_hero_1785407441582.jpg';
import nairobiHubImg from '../assets/images/nairobi_freight_hub_1785407457130.jpg';
import eastAfricaTruckingImg from '../assets/images/east_africa_trucking_1785407471486.jpg';

interface AboutSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveTab }) => {
  const [activeFacility, setActiveFacility] = useState<'hq' | 'port' | 'corridor'>('hq');

  const facilities = {
    hq: {
      title: 'Nairobi Corporate Headquarters & JKIA AOG Hub',
      location: 'Bellway Business Park, Mombasa Road, Nairobi, Kenya',
      stats: '12,000 sq.ft facility • 24/7 Operations Desk • JKIA Direct Cargo Access',
      details:
        'Strategic headquarters located on the key Mombasa-Nairobi logistics artery. Houses our executive team, multimodal freight planners, customs tariff consultants, and 45-year combined AOG aviation operations command.',
      image: nairobiHubImg,
      tags: ['Bellway Business Park', 'JKIA AOG Desk', 'Executive Headquarters', 'Customer Support']
    },
    port: {
      title: 'Port of Mombasa Operational Command & Gate 18 Desk',
      location: 'Kilindini Harbor Gate 18, Mombasa, Kenya',
      stats: 'Direct KPA Pier Integration • KRA Simba Pre-filing • SGR Rail Connection',
      details:
        'Our dedicated coastal operations base stationed right inside Kilindini Harbor Gate 18. Enables immediate vessel discharge inspection, zero-demurrage KRA Simba clearance, and direct train loading onto SGR rail wagons.',
      image: mombasaPortImg,
      tags: ['Kilindini Harbor', 'Gate 18 Station', 'KPA Wharf Access', 'Zero Demurrage']
    },
    corridor: {
      title: 'Northern Corridor Fleet Haulage & Regional Transit Yards',
      location: 'Transit Corridors to Uganda, Rwanda, South Sudan & Tanzania',
      stats: '60+ Semi-Trailers & Low-Loaders • ECTS Seal Tracking • Bonded Yards',
      details:
        'Modern transport fleet and transit hubs along the Northern Corridor. From heavy haulage industrial project cargo to store-door distribution in Kampala, Kigali, and Juba.',
      image: eastAfricaTruckingImg,
      tags: ['Northern Corridor', 'Cross-Border Trucking', 'Heavy Rigging', 'ECTS GPS Escort']
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-slate-100/70 dark:bg-[#070C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider"
          >
            <Building2 className="w-3.5 h-3.5 text-orange-500" />
            <span>Leader in Freight & Logistics • 19 Years of Experience</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            About Our Company:{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold">
              Tailor-Made Cargo Agility Across Eastern Africa
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Loginest Logistics is a premier freight solutions enterprise with interests in freight forwarding, customs clearing, warehousing, trucking, and commercial distribution across Eastern Africa.
          </motion.p>
        </div>

        {/* Narrative & Leadership Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Narrative Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5" /> 19 Years of Proven Industry Experience
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-snug">
                Customized Logistics Solutions Built Around Your Particular Business Needs
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our dedicated team of professionals strive to provide customers with various cargo requirements with tailor-made logistics solutions, customized to your particular needs. With a deep understanding of our importers’ needs and a trusted network of agents in over 120 countries, we offer reliable, end-to-end cargo solutions at competitive rates.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              From your overseas supplier’s door to your customer’s warehouse door, we manage global deliveries with precision and care. Whether moving consolidated ocean LCL boxes, executing time-critical AOG aircraft part dispatches, or moving out-of-gauge heavy project machinery through complex rigging, Loginest guarantees seamless execution.
            </p>

            {/* Core Competencies Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Zero Demurrage Guarantee
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Licensed KIFWA & FIATA Agent
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Direct KPA Gate 18 Wharf Office
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Real-Time GPS & ECTS Seals
                </span>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActiveTab?.('quote')}
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Partner with Loginest</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab?.('contact')}
                className="px-6 py-3 rounded-xl bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs transition-all cursor-pointer"
              >
                Visit Bellway HQ
              </button>
            </div>
          </div>

          {/* Right Image Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
              <img 
                src={nairobiHubImg} 
                alt="Loginest Logistics Headquarters Nairobi" 
                referrerPolicy="no-referrer"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500 text-white shadow-sm">
                  HEADQUARTERS
                </span>
                <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                  Bellway Business Park, Nairobi
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Commanding logistics strategy across Kenya, Uganda, Rwanda, Tanzania, Nigeria, and South Sudan.
                </p>
              </div>
            </div>

            {/* Overlaid Floating Badge */}
            <div className="absolute -top-4 -right-4 sm:-right-6 p-4 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl hidden sm:flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-orange-500">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-slate-900 dark:text-white block">
                  120+
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Global Partner Nations
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Strategic Facilities Tabbed Switcher */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-wider block">
                Infrastructure & Physical Facilities
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mt-1">
                Explore Our Key Operational Gateways
              </h3>
            </div>

            {/* Tab Buttons */}
            <div className="flex items-center gap-2 p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 self-start md:self-auto">
              <button
                onClick={() => setActiveFacility('hq')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFacility === 'hq'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Nairobi HQ
              </button>
              <button
                onClick={() => setActiveFacility('port')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFacility === 'port'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Mombasa Port
              </button>
              <button
                onClick={() => setActiveFacility('corridor')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFacility === 'corridor'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Regional Corridors
              </button>
            </div>
          </div>

          {/* Selected Facility Card */}
          <div className="rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[380px]">
              <img
                src={facilities[activeFacility].image}
                alt={facilities[activeFacility].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500 text-white shadow-sm">
                  Active Facility
                </span>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {facilities[activeFacility].title}
                </h4>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-wider">
                    Location & Hub Status
                  </span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {facilities[activeFacility].location}
                  </p>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    {facilities[activeFacility].stats}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {facilities[activeFacility].details}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {facilities[activeFacility].tags.map((tag, ti) => (
                    <span key={ti} className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveTab?.('quote')}
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Book Dispatch Through This Hub
                </button>
                <span className="text-[11px] font-mono text-slate-400">24/7 Operations</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
