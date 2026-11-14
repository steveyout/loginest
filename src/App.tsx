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
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-slate-50 text-slate-900 dark:bg-[#06122e] dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#FF5500] selection:text-white">
      <ScrollProgress />
      <Header 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main className="flex-1 w-full overflow-x-hidden">
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
                title="6 Specialized Capabilities •"
                gradientTitle="Global Freight Solutions"
                description="Audited freight forwarding solutions for enterprise cargo, urgent aviation components, and cross-border commercial transport across East Africa and worldwide trade lanes."
                category="Logistics Services"
                icon={Layers}
                badgeText="KRA Simba / KPA Gate 18"
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
                title="Strategic Logistics Footprint •"
                gradientTitle="6 Hubs in East Africa"
                description="Headquartered at Bellway Business Park Nairobi, operating across Mombasa Port Gate 18, Uganda, Rwanda, Tanzania, Nigeria, and South Sudan with 120+ global partner nations."
                category="Geographic Reach"
                icon={MapPin}
                badgeText="Bellway Business Park Nairobi"
                setActiveTab={handleTabChange}
              />
              <RegionalFootprintSection setActiveTab={handleTabChange} />
              <HowItWorksSection setActiveTab={handleTabChange} />
              <ContactSupport setActiveTab={handleTabChange} />
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
                title="Audited Compliance •"
                gradientTitle="Recognized Memberships"
                description="Fully licensed and certified by KIFWA, FIATA, WCA, KRA AEO Green Lane, and Kenya Ports Authority Gate 18 direct integration."
                category="Accreditations"
                icon={ShieldCheck}
                badgeText="KIFWA • FIATA • WCA Certified"
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
                title="Transparent Pricing •"
                gradientTitle="Instant Freight Quotation"
                description="Calculate estimated tariffs for ocean FCL/LCL, air freight, customs clearance, and Northern Corridor trucking with direct WhatsApp dispatch to +254 728 346457."
                category="Freight Calculator"
                icon={Calculator}
                badgeText="Direct WhatsApp Integration"
                setActiveTab={handleTabChange}
              />
              <QuoteSection setActiveTab={handleTabChange} />
              <FAQSection setActiveTab={handleTabChange} />
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
                title="Headquarters & Desks •"
                gradientTitle="24/7 Operations Desk"
                description="Reach our team at Bellway Business Park Nairobi or our Port of Mombasa Gate 18 desk for real-time clearance, tracking, and rate inquiries."
                category="Get in Touch"
                icon={PhoneCall}
                badgeText="+254 728 346457"
                setActiveTab={handleTabChange}
              />
              <ContactSupport setActiveTab={handleTabChange} />
              <RegionalFootprintSection setActiveTab={handleTabChange} />
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
                title="Frequently Asked Questions •"
                gradientTitle="Customs & Shipping Guide"
                description="Clear answers on Mombasa Port clearance times, KRA Simba filings, KEBS Certificate of Conformity, SGR rail intermodal, and transit procedures."
                category="Knowledge Base"
                icon={HelpCircle}
                badgeText="Port & Customs Guidelines"
                setActiveTab={handleTabChange}
              />
              <FAQSection setActiveTab={handleTabChange} />
              <ContactSupport setActiveTab={handleTabChange} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer setActiveTab={handleTabChange} />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  );
}
