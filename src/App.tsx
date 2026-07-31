import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, Shipment } from './types';
import { INITIAL_SHIPMENTS } from './data/mockShipments';

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { LiveTracker } from './components/LiveTracker';
import { RateCalculator } from './components/RateCalculator';
import { ShipmentBooking } from './components/ShipmentBooking';
import { FleetManager } from './components/FleetManager';
import { WarehouseAnalytics } from './components/WarehouseAnalytics';
import { ContactSupport } from './components/ContactSupport';
import { FAQSection } from './components/FAQSection';
import { SEOAndDeployHub } from './components/SEOAndDeployHub';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollProgress } from './components/ScrollProgress';
import { PageHeaderBanner } from './components/PageHeaderBanner';
import { 
  Briefcase, 
  Building2, 
  Search, 
  Calculator, 
  FileText, 
  Compass, 
  BarChart3, 
  MessageSquare, 
  HelpCircle, 
  ShieldCheck 
} from 'lucide-react';

export default function App() {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('loginest_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [activeTab, setActiveTab] = useState<string>('overview');
  const [shipments, setShipments] = useState<Shipment[]>(INITIAL_SHIPMENTS);
  const [selectedTrackingCode, setSelectedTrackingCode] = useState<string>('LN-8923-US');
  const [prefillQuoteData, setPrefillQuoteData] = useState<any>(null);

  // Sync dark class on document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('loginest_theme', theme);
  }, [theme]);

  // Dynamic SEO metadata update based on active tab
  useEffect(() => {
    const seoTitles: Record<string, { title: string; desc: string }> = {
      overview: {
        title: 'Loginest Logistics Kenya | East Africa Freight & Mombasa Port Clearing',
        desc: "East Africa's leading freight logistics provider headquartered in Nairobi, Kenya. Mombasa Port clearing, SGR rail freight, EAC cross-border haulage, and air cargo."
      },
      services: {
        title: 'Core Freight & Clearing Services | Loginest Logistics Kenya',
        desc: 'Comprehensive ocean freight, air cargo, SGR rail intermodal transport, and EAC cross-border haulage backed by KRA AEO certification.'
      },
      about: {
        title: 'About Kenya HQ & EAC Corridors | Loginest Logistics Kenya',
        desc: 'Headquartered in Nairobi & Mombasa, connecting global trade corridors across Kenya, Uganda, Rwanda, South Sudan, DRC, and Tanzania.'
      },
      tracking: {
        title: 'Live Cargo Telemetry & GPS Tracking | Loginest Logistics Kenya',
        desc: 'Track ocean containers, air airway bills, or SGR rail wagons with live GPS checkpoint monitoring and customs clearing milestones.'
      },
      calculator: {
        title: 'AI Freight Rate Tariff Calculator | Loginest Logistics Kenya',
        desc: 'Calculate accurate CBM/KG tariffs across ocean, air, rail, and road corridors with instant itemized invoices and zero demurrage guarantees.'
      },
      booking: {
        title: 'Book Cargo Consignment & Digital Waybill | Loginest Logistics Kenya',
        desc: 'Book container consignments, generate digital bills of lading, and schedule KRA customs clearance in one seamless workflow.'
      },
      fleet: {
        title: 'EAC Transit Fleet & Command Telematics | Loginest Logistics Kenya',
        desc: 'Monitor active heavy trucks, SGR rail freight block trains, and bonded transit corridors across Kenya, Uganda, and Rwanda.'
      },
      analytics: {
        title: 'Nairobi & Mombasa ICD Warehouse Analytics | Loginest Logistics Kenya',
        desc: 'Monitor throughput volume, bonded warehouse space utilization, and demurrage prevention metrics across East Africa hubs.'
      },
      contact: {
        title: '24/7 Logistics Desk & Direct WhatsApp | Loginest Logistics Kenya',
        desc: 'Connect directly with our Nairobi HQ clearing officers, Mombasa port agents, and airport cargo teams for immediate assistance.'
      },
      faq: {
        title: 'Kenya Customs Guide & Shipping FAQ | Loginest Logistics Kenya',
        desc: 'Authoritative answers on Mombasa Kilindini Port clearance, KRA Simba 2026 filings, KEBS CoC, SGR rail tariffs, and EAC cross-border seals.'
      },
      'seo-deploy': {
        title: 'SEO Metadata & Static Deployment Hub | Loginest Logistics Kenya',
        desc: 'Inspect production meta tags, social share previews, structured JSON-LD schema, and GitHub Pages automated export setup.'
      }
    };

    const currentSeo = seoTitles[activeTab] || seoTitles.overview;
    document.title = currentSeo.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc);
    }
  }, [activeTab]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleAddNewShipment = (newShipment: Shipment) => {
    setShipments(prev => [newShipment, ...prev]);
    setSelectedTrackingCode(newShipment.trackingNumber);
  };

  const handleBookRate = (quoteData: any) => {
    setPrefillQuoteData(quoteData);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#070C18] dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Scroll / Navigation Progress Bar */}
      <ScrollProgress />

      {/* Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        theme={theme}
        toggleTheme={toggleTheme}
        shipmentCount={shipments.length}
      />

      {/* Main Content Area with Motion Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          
          {/* Overview / Dashboard */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <HeroSection
                onSearchTracking={(code) => {
                  setSelectedTrackingCode(code);
                }}
                setActiveTab={handleTabChange}
                shipments={shipments}
              />

              <div className="border-t border-slate-200 dark:border-slate-800">
                <ServicesSection
                  setActiveTab={handleTabChange}
                  onBookRate={handleBookRate}
                />
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800">
                <AboutSection setActiveTab={handleTabChange} />
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800">
                <LiveTracker
                  shipments={shipments}
                  selectedTrackingCode={selectedTrackingCode}
                  setSelectedTrackingCode={setSelectedTrackingCode}
                />
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30">
                <RateCalculator
                  onBookRate={handleBookRate}
                  setActiveTab={handleTabChange}
                />
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800">
                <FAQSection setActiveTab={handleTabChange} />
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800">
                <ContactSupport setActiveTab={handleTabChange} />
              </div>
            </motion.div>
          )}

          {/* Dedicated Services Tab */}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="East Africa Freight &"
                gradientTitle="Clearing Solutions"
                description="Comprehensive ocean freight, air cargo, SGR rail intermodal transport, and EAC cross-border haulage backed by KRA AEO certification."
                category="Core Services"
                icon={Briefcase}
                setActiveTab={handleTabChange}
              />
              <ServicesSection
                setActiveTab={handleTabChange}
                onBookRate={handleBookRate}
              />
            </motion.div>
          )}

          {/* Dedicated About Kenya HQ Tab */}
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="Pioneering Smart Logistics Across"
                gradientTitle="East Africa & Beyond"
                description="Headquartered in Nairobi & Mombasa, connecting global trade corridors across Kenya, Uganda, Rwanda, South Sudan, DRC, and Tanzania."
                category="Corporate Identity"
                icon={Building2}
                setActiveTab={handleTabChange}
              />
              <AboutSection setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* Live Tracking Standalone Tab */}
          {activeTab === 'tracking' && (
            <motion.div
              key="tracking"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="Real-time Multi-modal"
                gradientTitle="Shipment Telemetry"
                description="Track ocean containers, air airway bills, or SGR rail wagons with live GPS checkpoint monitoring and customs clearing milestones."
                category="Live Telemetry"
                icon={Search}
                badgeText={`${shipments.length} Active Cargo`}
                setActiveTab={handleTabChange}
              />
              <LiveTracker
                shipments={shipments}
                selectedTrackingCode={selectedTrackingCode}
                setSelectedTrackingCode={setSelectedTrackingCode}
              />
            </motion.div>
          )}

          {/* Rate Calculator Tab */}
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="Instant AI Freight Rate"
                gradientTitle="Tariff Estimator"
                description="Calculate accurate CBM/KG tariffs across ocean, air, rail, and road corridors with instant itemized invoices and zero demurrage guarantees."
                category="Cost Estimator"
                icon={Calculator}
                setActiveTab={handleTabChange}
              />
              <RateCalculator
                onBookRate={handleBookRate}
                setActiveTab={handleTabChange}
              />
            </motion.div>
          )}

          {/* Booking & Waybill Generator Tab */}
          {activeTab === 'booking' && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="Cargo Consignment Booking &"
                gradientTitle="Digital Waybill Desk"
                description="Book container consignments, generate digital bills of lading, and schedule KRA customs clearance in one seamless workflow."
                category="Cargo Dispatch"
                icon={FileText}
                setActiveTab={handleTabChange}
              />
              <ShipmentBooking
                onAddNewShipment={handleAddNewShipment}
                setActiveTab={handleTabChange}
                prefillQuoteData={prefillQuoteData}
              />
            </motion.div>
          )}

          {/* Fleet & Route Command Center */}
          {activeTab === 'fleet' && (
            <motion.div
              key="fleet"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="Great Lakes Northern Corridor"
                gradientTitle="Fleet Telematics Desk"
                description="Monitor active heavy trucks, SGR rail freight block trains, and bonded transit corridors across Kenya, Uganda, and Rwanda."
                category="Command Center"
                icon={Compass}
                setActiveTab={handleTabChange}
              />
              <FleetManager />
            </motion.div>
          )}

          {/* Warehouse Inventory & Analytics */}
          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="Nairobi & Mombasa Bonded ICD"
                gradientTitle="Operations Intelligence"
                description="Monitor throughput volume, bonded warehouse space utilization, and demurrage prevention metrics across East Africa hubs."
                category="Warehouse Intelligence"
                icon={BarChart3}
                setActiveTab={handleTabChange}
              />
              <WarehouseAnalytics />
            </motion.div>
          )}

          {/* Contact & WhatsApp Support Tab */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="24/7 Logistics Desk &"
                gradientTitle="Direct WhatsApp Desk"
                description="Connect directly with our Nairobi HQ clearing officers, Mombasa port agents, and airport cargo teams for immediate assistance."
                category="Customer Helpdesk"
                icon={MessageSquare}
                setActiveTab={handleTabChange}
              />
              <ContactSupport setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* FAQ Standalone Tab */}
          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="Kenya & East Africa Shipping"
                gradientTitle="Customs Procedures FAQ"
                description="Find authoritative answers on Mombasa Kilindini Port clearance, KRA Simba 2026 filings, KEBS CoC, SGR rail tariffs, and EAC cross-border seals."
                category="Customs Knowledgebase"
                icon={HelpCircle}
                setActiveTab={handleTabChange}
              />
              <FAQSection setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* SEO & GitHub Pages Deployment Hub */}
          {activeTab === 'seo-deploy' && (
            <motion.div
              key="seo-deploy"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <PageHeaderBanner
                title="SEO Metadata &"
                gradientTitle="Static Deployment Hub"
                description="Inspect production meta tags, social share previews, structured JSON-LD schema, and GitHub Pages automated export setup."
                category="Platform Operations"
                icon={ShieldCheck}
                setActiveTab={handleTabChange}
              />
              <SEOAndDeployHub />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Floating Animated WhatsApp Support Desk */}
      <FloatingWhatsApp onOpenContact={() => handleTabChange('contact')} />

    </div>
  );
}

