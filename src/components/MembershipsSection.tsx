import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Building2, 
  Globe2, 
  FileCheck, 
  Anchor, 
  Lock,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface MembershipsSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const MembershipsSection: React.FC<MembershipsSectionProps> = ({ setActiveTab }) => {
  const memberships = [
    {
      id: 'kifwa',
      acronym: 'KIFWA',
      name: 'Kenya International Freight & Warehousing Association',
      type: 'National Industry Federation',
      badge: 'Active Licensed Member',
      description:
        'The apex national body representing licensed customs clearing and freight forwarding agents in Kenya. Loginest operates under strict ethical trade standards and bonded security.',
      verification: 'License #KIFWA-KE-0482',
      scope: 'National Regulatory Standing'
    },
    {
      id: 'fiata',
      acronym: 'FIATA',
      name: 'International Federation of Freight Forwarders Associations',
      type: 'Global Freight Forwarding Authority',
      badge: 'FIATA Recognized Agent',
      description:
        'Representing the global freight forwarding industry across 150+ countries. Ensures our bills of lading (FBL) and multimodal transport documents are internationally legally binding.',
      verification: 'FIATA Verified Multimodal',
      scope: 'Worldwide Legal Recourse'
    },
    {
      id: 'wca',
      acronym: 'WCA',
      name: 'World Cargo Alliance (WCA World)',
      type: 'Independent Freight Forwarder Alliance',
      badge: 'Certified Agency Member',
      description:
        'The world’s largest and most powerful network of independent freight forwarders with over 10,000 member offices across 190+ countries, offering $100,000 transaction security guarantees.',
      verification: 'WCA Financial Protection',
      scope: '120+ Partner Nations'
    },
    {
      id: 'kpa',
      acronym: 'KPA Gate 18',
      name: 'Kenya Ports Authority Direct Integration',
      type: 'Port Authority Harbor Pass',
      badge: 'Kilindini Gate 18 Pass',
      description:
        'Direct physical office presence inside Mombasa Port Gate 18 and Kilindini Harbor terminal gates. We have unhindered, real-time access to berth aprons, container yards, and vessel manifests.',
      verification: 'Gate 18 Physical Operations',
      scope: 'Port of Mombasa & ICD Nairobi'
    },
    {
      id: 'kra-aeo',
      acronym: 'KRA AEO',
      name: 'Authorized Economic Operator (Green Lane)',
      type: 'Customs & Border Protection Status',
      badge: 'AEO Green Channel Filing',
      description:
        'Compliant customs status under the World Customs Organization (WCO) SAFE Framework. Grants Loginest pre-clearance, minimal physical customs inspection, and expedited cargo release.',
      verification: 'KRA AEO Certified Status',
      scope: 'East Africa Single Customs'
    },
    {
      id: 'iata',
      acronym: 'IATA Cargo',
      name: 'International Air Transport Association Agent',
      type: 'Global Aviation Cargo Standard',
      badge: 'IATA Air Cargo Standards',
      description:
        'Fully qualified to issue master airway bills (AWBs), reserve priority cargo belly space on global carriers, and manage specialized perishables and AOG aviation emergency logistics.',
      verification: 'IATA CASS Cargo Desk',
      scope: 'JKIA Nairobi & Global Airlines'
    }
  ];

  return (
    <section id="memberships" className="py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#070C18] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>Accreditations & Compliance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Our Memberships &{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold">
              Industry Certifications
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            We operate in strict compliance with Kenyan customs legislation, East African Community treaties, and global maritime and aviation forwarding protocols.
          </motion.p>
        </div>

        {/* 6 Grid Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {memberships.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header with Acronym Badge */}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight group-hover:text-orange-500 transition-colors">
                    {item.acronym}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-slate-800 dark:text-slate-100 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {item.type}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Verification */}
              <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {item.verification}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {item.scope}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Compliance Assurance Bar */}
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-orange-500">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block sm:inline mr-2">
                Bonded Transit Guarantee & Marine Insurance:
              </span>
              All high-value and transit consignments are covered under our comprehensive multi-corridor transit bonds.
            </div>
          </div>

          <button
            onClick={() => setActiveTab?.('contact')}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-700 hover:border-orange-500 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            Request Compliance Dossier
          </button>
        </div>

      </div>
    </section>
  );
};
