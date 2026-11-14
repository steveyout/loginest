import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Building2, 
  Briefcase, 
  MapPin, 
  ShieldCheck, 
  Calculator, 
  PhoneCall, 
  HelpCircle,
  Layers
} from 'lucide-react';
import { Theme } from './types';
import { getTabFromUrl, updatePageSeo } from './utils/seo';

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { RegionalFootprintSection } from './components/RegionalFootprintSection';
import { MembershipsSection } from './components/MembershipsSection';
import { QuoteSection } from './components/QuoteSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSupport } from './components/ContactSupport';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollProgress } from './components/ScrollProgress';
import { StatisticsSection } from './components/StatisticsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PageHeaderBanner } from './components/PageHeaderBanner';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('loginest_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Resolve active tab from current URL slug or hash
  const [activeTab, setActiveTab] = useState<string>(() => {
    return getTabFromUrl();
  });

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('loginest_theme', theme);
  }, [theme]);

  // Handle Initial Load and Browser Back/Forward (popstate)
  useEffect(() => {
    const initialTab = getTabFromUrl();
    updatePageSeo(initialTab, false);

    const handlePopState = () => {
      const tab = getTabFromUrl();
      setActiveTab(tab);
      updatePageSeo(tab, false);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    updatePageSeo(tab, true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#06122e] dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#FF5500] selection:text-white">
      <ScrollProgress />
      <Header 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          
          {/* Master Landing Page / Overview */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HeroSection setActiveTab={handleTabChange} />
              <StatisticsSection setActiveTab={handleTabChange} />
              <ValuePropositionSection setActiveTab={handleTabChange} />
              <ServicesSection setActiveTab={handleTabChange} />
              <RegionalFootprintSection setActiveTab={handleTabChange} />
              <HowItWorksSection setActiveTab={handleTabChange} />
              <MembershipsSection setActiveTab={handleTabChange} />
              <QuoteSection setActiveTab={handleTabChange} />
              <TestimonialsSection setActiveTab={handleTabChange} />
              <AboutSection setActiveTab={handleTabChange} />
              <FAQSection setActiveTab={handleTabChange} />
              <ContactSupport setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* Dedicated About Page (/about) */}
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <PageHeaderBanner
                title="Leader in Freight & Logistics •"
                gradientTitle="19 Years of Experience"
                description="Fast-growing logistics enterprise delivering customized freight forwarding, customs clearing, warehousing, trucking, and commercial distribution across Eastern Africa and 120+ global partner nations."
                category="About Our Company"
                icon={Building2}
                badgeText="Nairobi Bellway HQ"
                setActiveTab={handleTabChange}
              />
              <AboutSection setActiveTab={handleTabChange} />
              <ValuePropositionSection setActiveTab={handleTabChange} />
              <MembershipsSection setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* Dedicated Services Page (/services) */}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <PageHeaderBanner
                title="Our Services •"
                gradientTitle="Engineered for Precision"
                description="Explore our specialized suite: Trucking & Commercial Distribution, NVOCC & Consolidation, 45-Year AOG Aviation Logistics, Out-of-Gauge Project Rigging, Freight Forwarding, and Customs Clearance."
                category="Operations Suite"
                icon={Layers}
                badgeText="Services"
                setActiveTab={handleTabChange}
              />
              <ServicesSection setActiveTab={handleTabChange} />
              <ValuePropositionSection setActiveTab={handleTabChange} />
              <QuoteSection setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* Dedicated Regional Footprint Page (/regional-footprint) */}
          {activeTab === 'regional-footprint' && (
            <motion.div
              key="regional-footprint"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <PageHeaderBanner
                title="Eastern Africa Hubs &"
                gradientTitle="Global Network in 120+ Countries"
                description="Headquartered at Bellway Business Park in Nairobi, with operational branches in Mombasa, Uganda, Rwanda, Tanzania, Nigeria, and South Sudan."
                category="Regional Footprint"
                icon={MapPin}
                badgeText="6 Hubs • 120+ Nations"
                setActiveTab={handleTabChange}
              />
              <RegionalFootprintSection setActiveTab={handleTabChange} />
              <StatisticsSection setActiveTab={handleTabChange} />
              <QuoteSection setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* Dedicated Memberships Page (/memberships) */}
          {activeTab === 'memberships' && (
            <motion.div
              key="memberships"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <PageHeaderBanner
                title="Our Memberships &"
                gradientTitle="Regulatory Accreditations"
                description="Full certified compliance with KIFWA, FIATA, WCA, Kenya Ports Authority Gate 18 direct integration, KRA Authorized Economic Operator (AEO Green Lane), and IATA Cargo Agent standards."
                category="Accreditation & Trust"
                icon={ShieldCheck}
                badgeText="Verified Compliance"
                setActiveTab={handleTabChange}
              />
              <MembershipsSection setActiveTab={handleTabChange} />
              <ValuePropositionSection setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* Dedicated Quote Page (/quote) */}
          {activeTab === 'quote' && (
            <motion.div
              key="quote"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <PageHeaderBanner
                title="Instant Freight Pricing &"
                gradientTitle="Personalized Quote Desk"
                description="Submit your cargo itinerary and receive a personalized quote within no time, backed by zero-demurrage guarantees and direct WhatsApp coordination."
                category="Quote Generator"
                icon={Calculator}
                badgeText="Guaranteed Tariffs"
                setActiveTab={handleTabChange}
              />
              <QuoteSection setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* Dedicated Contact Page (/contact) */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <PageHeaderBanner
                title="Connect with Kenya HQ &"
                gradientTitle="24/7 Operations Desk"
                description="Our team at Bellway Business Park, Mombasa Road, Nairobi is ready to support your supply chain across Eastern Africa and worldwide."
                category="Contact Support"
                icon={PhoneCall}
                badgeText="+254 728 346457"
                setActiveTab={handleTabChange}
              />
              <ContactSupport setActiveTab={handleTabChange} />
            </motion.div>
          )}

          {/* Dedicated FAQ Page (/faq) */}
          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <PageHeaderBanner
                title="Kenya & East Africa Shipping"
                gradientTitle="Customs Procedures FAQ"
                description="Find authoritative answers on Mombasa Kilindini Port clearance, KRA Simba filings, KEBS CoC, SGR rail tariffs, and EAC cross-border seals."
                category="Knowledgebase"
                icon={HelpCircle}
                badgeText="FAQ Guidelines"
                setActiveTab={handleTabChange}
              />
              <FAQSection setActiveTab={handleTabChange} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer setActiveTab={handleTabChange} />
      <BackToTop />
      <FloatingWhatsApp onOpenContact={() => handleTabChange('contact')} />
    </div>
  );
}
