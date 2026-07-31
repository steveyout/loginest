import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Ship, 
  ShieldCheck, 
  Train, 
  Truck, 
  MessageSquare,
  Sparkles,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlights?: string[];
}

interface FAQSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<string[]>(['faq-1', 'faq-2']); // Default first two open

  const categories = [
    'All',
    'Mombasa Port Clearing',
    'KRA Customs & Simba',
    'SGR Rail & Intermodal',
    'EAC Cross-Border',
    'Rates & Payments'
  ];

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'Mombasa Port Clearing',
      question: 'How long does container clearing take at Mombasa Kilindini Port?',
      answer: 'Standard container clearance at Mombasa Kilindini Port takes between 24 to 48 hours once all customs manifest documentation and KRA entry declarations are filed. For AEO (Authorized Economic Operator) pre-cleared cargo, clearing can take under 12 hours.',
      highlights: [
        'KPA Direct Gate 18 clearing desk',
        'Pre-arrival documentation filing to eliminate demurrage',
        'Direct loading onto SGR rail wagons or heavy trucks'
      ]
    },
    {
      id: 'faq-2',
      category: 'KRA Customs & Simba',
      question: 'What documents are required for KRA Customs Clearance in Kenya?',
      answer: 'For imports into Kenya, KRA requires: Original Bill of Lading (B/L) or Airway Bill (AWB), Commercial Invoice, Packing List, Import Declaration Form (IDF) via Kentrade, Certificate of Conformity (CoC) issued by KEBS-approved inspection agents, and KRA PIN.',
      highlights: [
        'Import Declaration Form (IDF) processing',
        'KEBS PVOC (Pre-Export Verification of Conformity)',
        'KRA iTax & Simba System 2026 integration'
      ]
    },
    {
      id: 'faq-3',
      category: 'SGR Rail & Intermodal',
      question: 'How does SGR Rail Freight work from Mombasa to Nairobi or Naivasha Dry Port?',
      answer: 'Once your ocean container is offloaded at Mombasa Kilindini Port, it is directly transferred to the SGR freight terminal. Block trains transport containers to Embakasi ICD in Nairobi (12-hour transit) or Naivasha Inland Container Depot for onward transport to Uganda and Rwanda.',
      highlights: [
        '8 daily scheduled SGR block trains',
        'Fixed non-fluctuating intermodal freight tariffs',
        'Saves up to 35% compared to long-distance road haulage'
      ]
    },
    {
      id: 'faq-4',
      category: 'EAC Cross-Border',
      question: 'Do you handle cross-border freight transit to Uganda, Rwanda, and South Sudan?',
      answer: 'Yes! Loginest Kenya operates heavy haulage trucks along the Great Lakes Northern Corridor. We manage ECTS (Electronic Cargo Tracking System) customs seals, border transit documentation at Busia, Malaba, Elegu, and Kagitumba, ensuring hassle-free cross-border movement.',
      highlights: [
        'ECTS electronic cargo seal tracking',
        'Single Customs Territory (SCT) single-window clearing',
        'Dedicated border agents at Malaba, Busia & Elegu'
      ]
    },
    {
      id: 'faq-5',
      category: 'Rates & Payments',
      question: 'How are freight rate quotes calculated and what payment methods do you accept?',
      answer: 'Freight rates are based on volume (CBM), gross weight (KG), origin/destination corridor, and required handling (e.g., reefer cold-chain, hazardous cargo). We accept M-Pesa Business Till, Bank Wire (KES, USD, EUR), and EAC local currency transfers.',
      highlights: [
        'Instant online rate calculation',
        'Transparent itemized invoices with zero hidden demurrage fees',
        'M-Pesa Express & Corporate Bank Wire options'
      ]
    },
    {
      id: 'faq-6',
      category: 'Mombasa Port Clearing',
      question: 'What is Demurrage and how does Loginest prevent extra storage charges?',
      answer: 'Demurrage occurs when shipping line containers remain at the port terminal beyond the allowed free days (typically 7 to 14 days). Loginest prevents demurrage by initiating pre-arrival customs entry filings up to 5 days before the vessel berths at Mombasa.',
      highlights: [
        '5-day pre-arrival document audit',
        'Guaranteed zero-demurrage dispatch workflow',
        'Free 5-day storage at our Mombasa bonded warehouse'
      ]
    },
    {
      id: 'faq-7',
      category: 'KRA Customs & Simba',
      question: 'Can Loginest handle bonded warehouse storage and duty-free transit?',
      answer: 'Yes. We provide bonded warehousing in Nairobi (JKIA & Industrial Area) and Mombasa (Shimanzi ICD). Transit cargo destined for East African neighbours (Uganda, Rwanda, DRC) is moved under KRA bonded security without paying Kenya import duties.',
      highlights: [
        'KRA Bonded Warehouse License',
        'Duty-suspension transit clearance for EAC destinations',
        'Temperature-controlled pharmaceutical & food storage'
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
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 px-2">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider"
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
            <span className="text-gradient-orange-emerald font-extrabold block sm:inline mt-1 sm:mt-0">
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
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:border-orange-500 shadow-md transition-colors"
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
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
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
                      ? 'bg-white dark:bg-[#0B132B] border-orange-500/40 shadow-xl' 
                      : 'bg-white/80 dark:bg-[#0B132B]/80 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 shrink-0 w-fit">
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
                        <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                          <p className="leading-relaxed mt-3">{faq.answer}</p>

                          {faq.highlights && faq.highlights.length > 0 && (
                            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
                              <span className="text-[10px] font-mono font-bold text-orange-500 uppercase tracking-wider block">
                                Key Standard Operational Procedure
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {faq.highlights.map((h, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
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
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-950 text-white border border-emerald-500/30 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
              className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
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
