import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Globe2, 
  ShieldCheck, 
  Award, 
  Users, 
  Truck, 
  Ship, 
  Plane, 
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Compass,
  Cpu,
  MessageSquare
} from 'lucide-react';

// Import generated images
import mombasaPortImg from '../assets/images/mombasa_port_hero_1785407441582.jpg';
import nairobiHubImg from '../assets/images/nairobi_freight_hub_1785407457130.jpg';
import eastAfricaTruckingImg from '../assets/images/east_africa_trucking_1785407471486.jpg';

interface AboutSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveTab }) => {
  const [activeFacility, setActiveFacility] = useState<'hq' | 'port' | 'rail' | 'corridor'>('hq');

  const milestones = [
    { year: '2018', title: 'Founded in Nairobi, Kenya', desc: 'Started with 10 haulage trucks connecting Nairobi ICD and Mombasa Port.' },
    { year: '2020', title: 'EAC Northern Corridor Expansion', desc: 'Extended cross-border road express to Uganda, Rwanda, and South Sudan.' },
    { year: '2022', title: 'IoT Telemetry & SGR Rail Integration', desc: 'Integrated real-time GPS & Electronic Cargo Tracking System (ECTS) with Kenya Railways SGR.' },
    { year: '2025', title: 'East Africa Digital Logistics Leader', desc: 'AI-driven route optimization, cold-chain monitoring, and automated KRA iTax clearance.' }
  ];

  const facilities = {
    hq: {
      title: 'Nairobi Global Logistics Command Center',
      location: 'Upper Hill / JKIA Freight Terminal, Nairobi, Kenya',
      stats: '50,000 sq ft Smart Warehouse | 24/7 Control Tower',
      image: nairobiHubImg,
      details: 'Our headquarters serves as the neural hub for East African logistics, deploying AI route optimization, live satellite fleet tracking, and automated client documentation.',
      tags: ['KRA Authorized Economic Operator', 'Cold-Chain Certified', '24/7 Security Tower']
    },
    port: {
      title: 'Mombasa Kilindini Port Clearance Hub',
      location: 'Mombasa Port Gate 18 & Shimanzi ICD, Kenya',
      stats: 'Direct Quay Access | 1,200 TEU Daily Handling',
      image: mombasaPortImg,
      details: 'Direct integration with Kenya Ports Authority (KPA) system ensuring zero-delay clearing, offloading, and immediate loading onto SGR rail wagons or heavy trucks.',
      tags: ['Bonded Warehousing', 'Reefer Power Grid', 'Express Green Lane']
    },
    rail: {
      title: 'Naivasha & Embakasi Inland Container Depots',
      location: 'Embakasi ICD Nairobi & Naivasha Dry Port, Kenya',
      stats: '8 Dedicated Block Trains Daily | 12-Hour Port-to-ICD Transit',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
      details: 'Seamless intermodal transfer connecting Mombasa ocean freight directly to Naivasha for hassle-free transit into Uganda, Rwanda, and DRC.',
      tags: ['Intermodal Crane Terminal', 'EAC Single-Window Duty', 'Zero Road Fatigue']
    },
    corridor: {
      title: 'Great Lakes & Northern Corridor Network',
      location: 'Kenya, Uganda, Rwanda, Tanzania, South Sudan, Ethiopia',
      stats: '3,500+ km Active Freight Corridors | 18 Border Outposts',
      image: eastAfricaTruckingImg,
      details: 'Pre-cleared border check-points with electronic customs seals ensuring under 45-minute border turnaround time across East Africa.',
      tags: ['ECTS Seal Security', 'Multi-Currency Settlement', 'Local Customs Brokers']
    }
  };

  const values = [
    {
      icon: Compass,
      title: 'East African Logistics Mastery',
      description: 'Unmatched deep regional knowledge of EAC customs regulations, Northern & Central corridors, and East African border logistics.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Satellite Telemetry',
      description: 'Every container, truck, and reefer wagon is tracked in real-time with live temperature, humidity, and tamper detection alerts.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldCheck,
      title: 'Port-to-Door SLA Guarantee',
      description: '100% bonded cargo insurance, AEO tax compliance, and guaranteed delivery timelines from Mombasa Port to Kigali & Kampala.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Decarbonized SGR Rail Freight',
      description: 'Leveraging Kenya’s Standard Gauge Railway to cut heavy transport carbon emissions by over 62% across the region.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-slate-100/60 dark:bg-[#070C18]">
      
      {/* Decorative background glow elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider"
          >
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>Headquartered in Nairobi, Kenya</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Pioneering Smart Logistics Across{' '}
            <span className="text-gradient-brand font-extrabold">
              East Africa & Beyond
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Loginest Logistics is East Africa’s premier technology-driven freight logistics operator. 
            Headquartered in Kenya, we connect the ocean gateway of Mombasa to Uganda, Rwanda, South Sudan, Ethiopia, and Tanzania with precision.
          </motion.p>
        </div>

        {/* East Africa Map & Headquarters Interactive Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: -35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0B132B] text-white border border-slate-700/80 shadow-2xl overflow-hidden group">
              {/* Background Map Graphic Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">East Africa Headquarters</h3>
                      <p className="text-xs text-orange-400 font-mono">Nairobi, Kenya • East Africa Gateway</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    HQ LIVE
                  </span>
                </div>

                {/* Kenya Flag & Regional Badge */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                      <span className="text-base">🇰🇪</span> Primary Operating Hub (Kenya)
                    </span>
                    <span className="text-xs text-slate-400 font-mono">UTC+3 East Africa Time</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Connecting <strong className="text-white">Port of Mombasa</strong>, <strong className="text-white">JKIA Airport Hub</strong>, and the <strong className="text-white">SGR Naivasha Dry Port</strong> to facilitate East African Community (EAC) zero-tariff corridors.
                  </p>
                </div>

                {/* Country Corridor Tags */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Cross-Border Corridors</div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                    <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200">
                      <span className="block text-base">🇰🇪 ➔ 🇺🇬</span>
                      <span className="text-[10px] text-orange-400">Nairobi-Kampala</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200">
                      <span className="block text-base">🇰🇪 ➔ 🇷🇼</span>
                      <span className="text-[10px] text-orange-400">Mombasa-Kigali</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200">
                      <span className="block text-base">🇰🇪 ➔ 🇸accumulator</span>
                      <span className="text-[10px] text-orange-400">Eldoret-Juba</span>
                    </div>
                  </div>
                </div>

                {/* CTA inside Card */}
                {setActiveTab && (
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Contact Headquarters via WhatsApp</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Facility Tabs & Details */}
          <motion.div 
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest">Regional Infrastructure</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Kenya Operations & East African Hub Network
              </h3>
            </div>

            {/* Interactive Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/60 dark:border-slate-700/60">
              <button
                onClick={() => setActiveFacility('hq')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFacility === 'hq' 
                    ? 'bg-gradient-brand text-white shadow-md' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Nairobi HQ
              </button>

              <button
                onClick={() => setActiveFacility('port')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFacility === 'port' 
                    ? 'bg-gradient-brand text-white shadow-md' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Mombasa Port
              </button>

              <button
                onClick={() => setActiveFacility('rail')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFacility === 'rail' 
                    ? 'bg-gradient-brand text-white shadow-md' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                SGR Dry Ports
              </button>

              <button
                onClick={() => setActiveFacility('corridor')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFacility === 'corridor' 
                    ? 'bg-gradient-brand text-white shadow-md' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                EAC Corridor
              </button>
            </div>

            {/* Facility Details Box */}
            <motion.div 
              key={activeFacility}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
            >
              <div className="h-44 w-full relative">
                <img 
                  src={facilities[activeFacility].image} 
                  alt={facilities[activeFacility].title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h4 className="font-display font-bold text-lg">{facilities[activeFacility].title}</h4>
                  <p className="text-xs text-orange-300 flex items-center gap-1 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    {facilities[activeFacility].location}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                  {facilities[activeFacility].stats}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {facilities[activeFacility].details}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {facilities[activeFacility].tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[11px] font-semibold border border-orange-500/20 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* 4 Pillars / Core Values Cards */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest">Our Competitive Advantage</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Why Global Brands Trust Loginest Kenya
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:border-orange-500/40 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Milestones / Growth Story */}
        <div className="p-8 rounded-3xl bg-slate-900 dark:bg-[#0B132B] text-white border border-slate-800 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">Journey of Excellence</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">East Africa Logistics Expansion Timeline</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Award className="w-4 h-4 text-orange-400" /> Recognized by East African Business Council (EABC)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {milestones.map((ms, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
                className="relative space-y-2 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/50 transition-colors"
              >
                <div className="font-mono text-2xl font-extrabold text-orange-400">
                  {ms.year}
                </div>
                <h4 className="font-display font-bold text-sm text-white">{ms.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{ms.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
