import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Ship, 
  Truck, 
  Plane, 
  Train, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Zap, 
  Globe2, 
  X, 
  Package, 
  Layers, 
  AlertTriangle, 
  Anchor, 
  Compass,
  FileText
} from 'lucide-react';

// Import generated images
import mombasaPortImg from '../assets/images/mombasa_port_hero_1785407441582.jpg';
import nairobiHubImg from '../assets/images/nairobi_freight_hub_1785407457130.jpg';
import eastAfricaTruckingImg from '../assets/images/east_africa_trucking_1785407471486.jpg';

interface ServicesSectionProps {
  setActiveTab?: (tab: string) => void;
  onBookRate?: (data: any) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  setActiveTab,
  onBookRate
}) => {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      id: 'trucking-distribution',
      icon: Truck,
      title: 'Trucking & Commercial Distribution',
      image: eastAfricaTruckingImg,
      subtitle: 'Cost-efficient fleet haulage without breaking the bank',
      badge: 'Core Fleet',
      quote: 'Use our trucks to get your cargo to your destination without breaking the bank. We have the perfect truck for your exact payload.',
      description:
        'From high-cube container semi-trailers to agile urban distribution fleets, we provide dependable road freight across Kenya and the Northern Corridor. Every truck is equipped with real-time GPS telemetry and Electronic Cargo Tracking Seals (ECTS).',
      highlights: [
        'Versatile fleet: Flatbeds, Skeletals, Box-bodies, and Low-loaders',
        'Northern Corridor express routes to Uganda, Rwanda, South Sudan & Tanzania',
        'Real-time GPS tracking & tamper-proof electronic cargo seals',
        'Store-door final mile deliveries with verified digital POD'
      ],
      transitTime: '24 - 72 Hours Regional',
      coverage: 'Kenya ➔ Uganda, Rwanda, Tanzania, South Sudan'
    },
    {
      id: 'nvocc-consolidation',
      icon: Layers,
      title: 'NVOCC & Cargo Consolidation',
      image: mombasaPortImg,
      subtitle: 'Specialized LCL & FCL consolidation with regular sailings',
      badge: 'NVOCC Leader',
      quote: 'We offer consolidated service packages like LCL (Less than Container Load), FCL (Full Container Load), stuffing and sailing.',
      description:
        'As a licensed Non-Vessel Operating Common Carrier, we consolidate consignments for multiple shippers to optimize container volume, drastically lowering ocean tariffs for small-to-medium businesses and high-frequency traders.',
      highlights: [
        'Dedicated LCL consolidation hubs in Shanghai, Ningbo, Dubai & Rotterdam',
        'Weekly scheduled container sailings to Port of Mombasa',
        'Professional container stuffing, securing, and deconsolidation at ICD Nairobi',
        'Single Combined Transport Bill of Lading (FBL) issuing'
      ],
      transitTime: 'Scheduled Weekly Sailings',
      coverage: 'Global Hubs ➔ Mombasa Port & ICD Embakasi'
    },
    {
      id: 'aog-logistics',
      icon: Plane,
      title: 'AOG (Aircraft On Ground) Logistics',
      image: nairobiHubImg,
      subtitle: 'Critical 24/7 emergency aviation supply chain',
      badge: 'Aviation Critical',
      quote: 'Our team has a combined experience of 45 years managing AOG logistics for the busiest airlines in this region.',
      description:
        'When an aircraft is grounded, every hour costs thousands of dollars. Our specialized AOG division provides round-the-clock emergency dispatch for jet engines, avionics, landing gears, and flight-critical replacement components.',
      highlights: [
        '45+ years combined aviation freight leadership at JKIA Nairobi',
        '24/7/365 immediate emergency response desk & tarmac escorts',
        'Priority air charter space & express customs tarmac clearance',
        'Hand-carry courier (On-Board Courier) for urgent avionics'
      ],
      transitTime: '2 - 6 Hours Emergency Release',
      coverage: 'JKIA Nairobi ➔ Global Airline Network'
    },
    {
      id: 'project-logistics',
      icon: Compass,
      title: 'Project Logistics & Transit Cargo',
      image: eastAfricaTruckingImg,
      subtitle: 'Heavy lift, out-of-gauge & complex industrial rigging',
      badge: 'Heavy Lift',
      quote: 'We have developed capacity to handle out-of-gauge project cargo in East Africa, backed by complex rigging expertise.',
      description:
        'Custom engineering solutions for oversized and ultra-heavy cargo supporting energy, mining, power generation, and infrastructural developments across Eastern Africa. Full civil route surveys and hydraulic modular trailers.',
      highlights: [
        'Hydraulic multi-axle modular trailers & specialized low-bed carriers',
        'Comprehensive route surveys: Bridge stress checks & overhead obstacle clearance',
        'Industrial rigging, jacking, and skidding for turbines & heavy transformers',
        'Government permits, police escorts, and cross-border transit bonding'
      ],
      transitTime: 'Project-Specific Staged Dispatch',
      coverage: 'Mombasa Port ➔ Regional Infrastructure Sites'
    },
    {
      id: 'freight-forwarding',
      icon: Globe2,
      title: 'International Freight Forwarding',
      image: mombasaPortImg,
      subtitle: 'Global door-to-door network across 120+ countries',
      badge: 'Global Forwarding',
      quote: 'We understand importer needs through years of engagement with overseas partners and a trusted network of agents in 120+ countries.',
      description:
        'Comprehensive multi-modal freight management. From point of manufacture in China, Europe, India, or the USA, we manage ocean vessel chartering, priority air cargo allocations, and seamless overland connections.',
      highlights: [
        'Vetted agency representation in 120+ countries worldwide',
        'Direct contracts with leading ocean liners: Maersk, CMA CGM, MSC',
        'IATA-certified air freight allocations at major international airports',
        'End-to-end cargo insurance, letter of credit (LC) compliance & tracking'
      ],
      transitTime: 'Ocean: 18 - 30 Days | Air: 2 - 4 Days',
      coverage: 'Worldwide Origin ➔ Port of Mombasa & East Africa'
    },
    {
      id: 'customs-clearance',
      icon: ShieldCheck,
      title: 'Customs Clearance & Port Operations',
      image: nairobiHubImg,
      subtitle: 'Direct KPA Gate 18 desk & KRA iCMS zero-demurrage clearance',
      badge: 'Port Specialist',
      quote: 'With our experienced staff and strong stakeholder relationships, we handle all types of Customs clearance at the ports with precision.',
      description:
        'Decades of operational alignment with Kenya Ports Authority (KPA), Kenya Revenue Authority (KRA), KEBS, and Port Health. We pre-file entry documentation to clear cargo before vessel discharge, eliminating demurrage charges.',
      highlights: [
        'Pre-arrival electronic manifest filing on KRA Simba 2026 / iCMS',
        'Dedicated operational offices inside Mombasa Port Gate 18 & ICD Embakasi',
        'Expedited handling of KEBS Certificate of Conformity (CoC) & IDF permits',
        'Immediate direct loading onto SGR rail wagons or heavy haulage trailers'
      ],
      transitTime: '24 - 48 Hours Port Release',
      coverage: 'Port of Mombasa, ICD Embakasi, Naivasha, JKIA Cargo'
    }
  ];

  const handleSelectService = (service: any) => {
    setSelectedService(service);
  };

  const handleBookSelected = (service: any) => {
    setSelectedService(null);
    if (setActiveTab) {
      setActiveTab('quote');
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50 dark:bg-[#070C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>Comprehensive Freight Operations</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Our Core Services:{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold">
              Engineered for Velocity & Reliability
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            From specialized aviation AOG logistics and consolidated NVOCC sailings to heavy project rigging and fast-track Mombasa port clearance.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header with Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md bg-slate-900/80 text-white border border-slate-700/80">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700 text-orange-400 flex items-center justify-center shadow-md">
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20">
                        {service.transitTime}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-orange-600 dark:text-orange-400 font-mono">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Quotation highlight */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 italic">
                      "{service.quote}"
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Bullet Highlights Preview */}
                    <div className="pt-2 space-y-2">
                      {service.highlights.slice(0, 2).map((hl, hli) => (
                        <div key={hli} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleSelectService(service)}
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      if (setActiveTab) setActiveTab('quote');
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-orange-500 text-slate-800 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-orange-500 dark:hover:text-white font-bold text-xs transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
                  >
                    Get Quote
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/80 border border-slate-700 text-white">
                    {selectedService.badge}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-l-4 border-orange-500 text-sm font-medium italic text-slate-700 dark:text-slate-300">
                  "{selectedService.quote}"
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">Operational Overview</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">Detailed Capabilities & Guarantees</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.highlights.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-500 font-mono block">Standard Transit SLA</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedService.transitTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono block">Active Routing Corridor</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedService.coverage}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Close Window
                </button>
                <button
                  onClick={() => handleBookSelected(selectedService)}
                  className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Rate for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
