import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  CheckCircle2, 
  Ship, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export const FAQSection: React.FC<{ setActiveTab?: (tab: string) => void }> = ({ setActiveTab }) => {
  const [openItems, setOpenItems] = useState<string[]>(['faq-1', 'faq-3']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mombasa Port', 'Customs Clearance', 'Trucking & Transit', 'AOG & Air Freight', 'Pricing & Tariffs'];

  const faqs = [
    {
      id: 'faq-1',
      category: 'Mombasa Port',
      question: 'How do you guarantee zero-demurrage clearance at Mombasa Kilindini Port?',
      answer: 'Our direct integration with Kenya Ports Authority (KPA) Gate 18 and Kenya Revenue Authority (KRA) Simba/iCMS enables us to pre-file entries prior to vessel arrival. By lodging import declarations, duty payment assessments, and KEBS CoC verifications before the container touches the wharf, cargo is moved within the free period directly onto SGR rail wagons or bonded haulage trucks.',
      highlights: [
        'Pre-arrival manifest submission on KRA iCMS',
        'Direct wharf access at Kilindini Gate 18',
        '24/7 port operational clearance team'
      ]
    },
    {
      id: 'faq-2',
      category: 'Mombasa Port',
      question: 'What documents are required to clear commercial cargo at the Port of Mombasa?',
      answer: 'Standard commercial imports into Kenya require: (1) Original Commercial Invoice & Packing List, (2) Clean Bill of Lading (B/L) or Air Waybill (AWB), (3) Import Declaration Form (IDF) approved on KRA Simba, (4) KEBS Certificate of Conformity (CoC) issued by PVoC inspection agents at origin, and (5) Cargo Cargo Tracking Note (where applicable).',
      highlights: [
        'Electronic IDF approval processing',
        'PVoC / KEBS compliance facilitation',
        'Digital Bill of Lading endorsement'
      ]
    },
    {
      id: 'faq-3',
      category: 'AOG & Air Freight',
      question: 'How fast can Loginest deliver urgent Aircraft on Ground (AOG) spare parts?',
      answer: 'With over 45 years combined aviation logistics experience based at JKIA Nairobi, our 24/7 emergency dispatch desk executes emergency tarmac clearances and on-board courier hand-carries within 2 to 6 hours of flight arrival. We maintain direct access to airside bonded warehouses and coordinate immediately with the Kenya Civil Aviation Authority (KCAA).',
      highlights: [
        '24/7/365 dedicated AOG emergency hotline',
        '2 - 6 hours tarmac release SLA at JKIA',
        'On-Board Courier (OBC) capability worldwide'
      ]
    },
    {
      id: 'faq-4',
      category: 'Customs Clearance',
      question: 'What is KRA AEO (Authorized Economic Operator) status and how does it help my business?',
      answer: 'Loginest operates under KRA Authorized Economic Operator (AEO Green Lane) protocols. This elite status allows our shipments to bypass regular customs physical inspection chokepoints, enjoy expedited post-clearance audits, and experience zero port storage delays, cutting transit times by up to 60%.',
      highlights: [
        'Green Channel direct clearance',
        'Priority vessel discharge and loading',
        'Reduced customs inspection intervention'
      ]
    },
    {
      id: 'faq-5',
      category: 'Trucking & Transit',
      question: 'Do you provide cross-border transport across Uganda, Rwanda, South Sudan, and Tanzania?',
      answer: 'Yes. We operate a fleet of flatbeds, skeletal semi-trailers, low-loaders, and box bodies operating across the Northern Corridor (Mombasa ➔ Nairobi ➔ Malaba ➔ Kampala ➔ Kigali ➔ Juba) and Central Corridor to Tanzania. Every vehicle is fitted with certified Electronic Cargo Tracking Seals (ECTS) with GPS telemetry.',
      highlights: [
        'ECTS real-time EAC satellite tracking',
        'Single Customs Territory transit bonds',
        'Digital Proof of Delivery (POD) upon arrival'
      ]
    },
    {
      id: 'faq-6',
      category: 'Pricing & Tariffs',
      question: 'How does NVOCC consolidation save costs for small and medium enterprises?',
      answer: 'Through our NVOCC consolidation hubs in Shanghai, Ningbo, Dubai, and Rotterdam, we combine LCL (Less than Container Load) shipments from multiple importers into shared containers. You only pay for the exact volume (CBM) or weight you utilize, avoiding the prohibitive cost of chartering an entire 20ft or 40ft container.',
      highlights: [
        'Pay strictly per CBM utilized',
        'Regular weekly sailings from global ports',
        'Direct deconsolidation at ICD Nairobi'
      ]
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 lg:py-24 relative overflow-hidden bg-slate-50 dark:bg-[#070C18]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 px-2">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider"
          >
            <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight break-words"
          >
            Kenya & East Africa Shipping{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold block sm:inline mt-1 sm:mt-0">
              Customs Guide
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed"
          >
            Everything you need to know about Mombasa Port clearing, KRA Simba documentation, SGR rail intermodal transport, and EAC cross-border haulage.
          </motion.p>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="space-y-4">
          
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. KRA, Mombasa, SGR, Demurrage)..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:border-orange-500 shadow-sm transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openItems.includes(faq.id);

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white dark:bg-[#0B132B] border-orange-500/50 shadow-sm' 
                      : 'bg-white/80 dark:bg-[#0B132B]/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 w-fit">
                        {faq.category}
                      </span>
                      <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-orange-500' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 space-y-4">
                          <p className="leading-relaxed mt-3">{faq.answer}</p>

                          {faq.highlights && faq.highlights.length > 0 && (
                            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="text-[10px] font-mono font-bold text-orange-500 uppercase tracking-wider block">
                                Key Standard Operational Procedure
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {faq.highlights.map((h, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                    <span>{h}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 p-6 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">No matching questions found for "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-xs font-bold text-orange-500 hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* WhatsApp Helpdesk Callout Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#06122e] text-white border border-slate-800 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              Have a Specific Logistics or Customs Inquiry?
            </div>
            <h3 className="font-display text-xl font-bold text-white">Ask Our Kenya Customs Desk Direct on WhatsApp</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Connect directly with our Nairobi HQ clearing officers for custom Tariff codes, tax estimations, and port status updates.
            </p>
          </div>

          {setActiveTab && (
            <button
              onClick={() => setActiveTab('contact')}
              className="py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact WhatsApp Support</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
