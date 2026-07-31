import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Ship, 
  Truck, 
  Plane, 
  Train, 
  ShieldCheck, 
  Thermometer, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  MapPin, 
  ChevronRight,
  Zap,
  Globe2,
  X,
  MessageSquare
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
      id: 'mombasa-port',
      icon: Ship,
      image: mombasaPortImg,
      title: 'Mombasa Port Clearing & Ocean Forwarding',
      subtitle: 'Kilindini Harbor & KPA Direct Interface',
      badge: 'Most Popular',
      badgeColor: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
      gradient: 'from-blue-600 to-indigo-700',
      description: 'Zero-demurrage clearing at Mombasa Port with instant transfer to Standard Gauge Railway (SGR) rail wagons or heavy haulage trailers.',
      highlights: [
        'KPA & KRA Single Window Direct Integration',
        '24/7 Priority Discharge at Kilindini Gate 18',
        'Bonded Container Storage & Break-Bulk',
        'Direct SGR Rail Wagons to Nairobi & Naivasha'
      ],
      transitTime: '24-48 Hours Port Clear',
      coverage: 'Mombasa Port ➔ Worldwide'
    },
    {
      id: 'cross-border-road',
      icon: Truck,
      image: eastAfricaTruckingImg,
      title: 'East Africa Cross-Border Road Freight',
      subtitle: 'Northern Corridor Highway Network',
      badge: 'EAC Express',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      gradient: 'from-orange-500 to-amber-600',
      description: 'Heavy duty fleet servicing Kenya, Uganda, Rwanda, South Sudan, Tanzania, and DRC with Electronic Cargo Tracking Seals (ECTS).',
      highlights: [
        'Real-time GPS + Electronic Cargo Seal Security',
        '45-Min Border Crossing at Malaba & Busia',
        'Multi-Axle Flatbeds & Container Semi-Trailers',
        'Escorted Out-of-Gauge (OOG) Heavy Machinery'
      ],
      transitTime: '2-4 Days Regional',
      coverage: 'Nairobi ➔ Kampala, Kigali, Juba, Dar'
    },
    {
      id: 'jkia-air-cargo',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      title: 'JKIA Nairobi Air Freight & Perishable Express',
      subtitle: 'East Africa Aviation Cargo Gateway',
      badge: 'Priority Air',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
      gradient: 'from-sky-500 to-blue-600',
      description: 'Express air charter and scheduled cargo handling via Jomo Kenyatta International Airport (JKIA) for high-value & perishable produce.',
      highlights: [
        'Cold-Chain (+2°C to +8°C) Pharma & Flower Vaults',
        'Customs Express Duty Release in 4 Hours',
        'Charter Flights to Europe, Middle East & Asia',
        'HACCP & IATA Certified Cargo Specialists'
      ],
      transitTime: '6-12 Hours Flight Dispatch',
      coverage: 'JKIA Nairobi ➔ Global Destinations'
    },
    {
      id: 'sgr-rail-freight',
      icon: Train,
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
      title: 'SGR Intermodal Rail Freight',
      subtitle: 'Port of Mombasa ➔ Naivasha Dry Port',
      badge: 'Eco-Friendly Rail',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      gradient: 'from-emerald-600 to-teal-700',
      description: 'Fast, secure containerized rail transport eliminating highway congestion between Mombasa Port and Nairobi/Naivasha Inland Container Depots.',
      highlights: [
        '8 Daily Block Trains (Up to 108 TEUs per train)',
        '12-Hour Guaranteed Transit Time from Port',
        'Direct Transfer to Transit Trucks for Uganda/Rwanda',
        '62% Carbon Footprint Reduction vs Road'
      ],
      transitTime: '12 Hours Fixed Schedule',
      coverage: 'Mombasa ➔ Nairobi ICD ➔ Naivasha'
    },
    {
      id: 'eac-customs',
      icon: ShieldCheck,
      image: nairobiHubImg,
      title: 'EAC Customs & Duty Brokerage',
      subtitle: 'KRA SIMBA / iTax Authorized Economic Operator',
      badge: '100% Compliant',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      gradient: 'from-purple-600 to-indigo-800',
      description: 'Fully automated Kenya Revenue Authority (KRA) and East African Single Customs Territory documentation for seamless tariff assessment.',
      highlights: [
        'AEO Status for Expedited Green-Channel Processing',
        'Automated Duty & Tariff Calculator Assistance',
        'Transit Bond Issuance & EAC Tax Exemption Filings',
        'Specialized Import/Export Certificate Approvals'
      ],
      transitTime: 'Instant Automated Filing',
      coverage: 'All EAC Border Outposts & Airports'
    },
    {
      id: 'cold-chain-agri',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      title: 'Cold-Chain Agri-Export Logistics',
      subtitle: 'Kenyan Tea, Flowers, Avocados & Fresh Produce',
      badge: 'Temp-Controlled',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
      gradient: 'from-teal-500 to-cyan-600',
      description: 'End-to-end refrigerated reefer logistics from Rift Valley farms to Mombasa Port reefer racks and JKIA air cargo decks.',
      highlights: [
        'Continuous IoT Temperature Monitoring Loggers',
        'Reefer Trailer Units with Battery Backups',
        'Phytosanitary & KEPHIS Certification Support',
        'Dedicated Flower & Fruit Export Corridors'
      ],
      transitTime: 'Controlled Cold Sequence',
      coverage: 'Farm-Gate ➔ Global Supermarkets'
    }
  ];

  const handleSelectService = (service: any) => {
    if (onBookRate) {
      onBookRate({ serviceType: service.title });
    }
    if (setActiveTab) {
      setActiveTab('calculator');
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50 dark:bg-[#070C18]">
      
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>East Africa Logistics Services</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            End-to-End Solutions Powered From{' '}
            <span className="text-gradient-brand font-extrabold">
              Nairobi & Mombasa
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            From Mombasa ocean clearing to cross-border highway transport across Uganda and Rwanda, explore our full spectrum of logistics capabilities.
          </motion.p>
        </div>

        {/* Enticing Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Banner Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold font-mono border backdrop-blur-md bg-slate-950/60 ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[11px] text-orange-400 font-mono font-semibold uppercase tracking-wider">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Feature Checklist */}
                    <ul className="mt-4 space-y-2">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Info & Action */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                        {service.transitTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        {service.coverage}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSelectService(service)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <span>Calculate Rate</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setSelectedService(service)}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors cursor-pointer"
                        title="View Full Details"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-3xl p-8 sm:p-10 bg-gradient-brand text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="space-y-2 text-center md:text-left relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/20 text-white border border-white/30 uppercase tracking-widest inline-block">
              Custom Logistics Contract
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Need Tailored Logistics for Enterprise EAC Trade?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Connect with our Nairobi Headquarters dedicated logistics architects for bulk fleet reservations, port clearing tenders, and specialized reefer exports.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 shrink-0">
            {setActiveTab && (
              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-all shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Contact HQ on WhatsApp</span>
              </button>
            )}
          </div>
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative space-y-6 text-slate-900 dark:text-white"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {React.createElement(selectedService.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">{selectedService.title}</h3>
                  <p className="text-xs text-orange-500 font-mono font-semibold">{selectedService.subtitle}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Capabilities & SLA</h4>
                <div className="space-y-2">
                  {selectedService.highlights.map((h: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Average Transit Time</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedService.transitTime}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Operating Corridor</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedService.coverage}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    handleSelectService(selectedService);
                    setSelectedService(null);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-brand text-white font-bold text-xs hover:brightness-110 shadow-lg transition-all cursor-pointer"
                >
                  Request Rate Quote
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

