import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Building2, 
  Briefcase, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  Calculator, 
  MapPin, 
  Layers, 
  Plane, 
  Truck, 
  Anchor, 
  Compass, 
  Sparkles, 
  PhoneCall, 
  FileText 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme } from '../types';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: Theme;
  toggleTheme: () => void;
  shipmentCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const servicesSubItems = [
    { id: 'services', label: 'All 6 Core Services', desc: 'Overview of our full logistics suite', icon: Layers },
    { id: 'services', label: 'Trucking & Commercial Distribution', desc: 'Regional highway haulage & delivery fleet', icon: Truck },
    { id: 'services', label: 'NVOCC & Consolidation', desc: 'Scheduled LCL & FCL ocean sailings', icon: Layers },
    { id: 'services', label: 'AOG Aviation Logistics', desc: '45+ yrs combined emergency aircraft parts', icon: Plane },
    { id: 'services', label: 'Project Cargo & Complex Rigging', desc: 'Heavy lift & out-of-gauge engineering', icon: Compass },
    { id: 'services', label: 'International Freight Forwarding', desc: 'Global door-to-door network in 120+ countries', icon: Globe },
    { id: 'services', label: 'Customs Clearance & Port Ops', desc: 'Direct KPA Gate 18 & KRA zero-demurrage', icon: ShieldCheck }
  ];

  const handleMouseEnter = (groupId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(groupId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 dark:bg-[#06122e]/95 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo with Official Uploaded Emblem */}
        <div 
          onClick={() => handleNavClick('overview')} 
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-[#06122e] border border-slate-700 shadow-sm group-hover:scale-105 transition-all duration-300 flex items-center justify-center p-1">
            <img 
              src={logoImg} 
              alt="Loginest Logistics Official Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-slate-900 dark:text-white uppercase leading-none">
                LOGINEST
              </span>
            </div>
            <div className="h-[2px] w-full bg-orange-500 rounded-full my-1" />
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold uppercase leading-none">
              LOGISTICS
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-[#0a193d]/90 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
          
          {/* Home / Overview */}
          <button
            onClick={() => handleNavClick('overview')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
            }`}
          >
            Home
          </button>

          {/* About Us */}
          <button
            onClick={() => handleNavClick('about')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'about'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
            }`}
          >
            About Us
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services-group')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services-group' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'services-group' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white dark:bg-[#0a193d] border border-slate-200 dark:border-slate-800 shadow-xl p-2 z-50"
                >
                  <div className="space-y-1">
                    {servicesSubItems.map((sub, idx) => {
                      const SubIcon = sub.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleNavClick('services')}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-3 group cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors mt-0.5">
                            <SubIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-orange-500 transition-colors block">
                              {sub.label}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                              {sub.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regional Footprint */}
          <button
            onClick={() => handleNavClick('regional-footprint')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'regional-footprint'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
            }`}
          >
            Regional Footprint
          </button>

          {/* Our Memberships */}
          <button
            onClick={() => handleNavClick('memberships')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'memberships'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
            }`}
          >
            Memberships
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
            }`}
          >
            Contact
          </button>

        </nav>

        {/* Right Actions: Get a Quote CTA + Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Get a Quote Button */}
          <button
            onClick={() => handleNavClick('quote')}
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:scale-102 active:scale-98 transition-all cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-white" />
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0a193d] text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-[#0a193d] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#06122e] border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto"
          >
            {[
              { id: 'overview', label: 'Home', icon: Globe },
              { id: 'about', label: 'About Our Company', icon: Building2 },
              { id: 'services', label: 'Our 6 Core Services', icon: Layers },
              { id: 'regional-footprint', label: 'Regional Footprint (6 Hubs + 120 Countries)', icon: MapPin },
              { id: 'memberships', label: 'Our Memberships & Certifications', icon: ShieldCheck },
              { id: 'quote', label: 'Get a Personalized Quote', icon: Calculator },
              { id: 'contact', label: 'Contact Us (Nairobi Bellway HQ)', icon: PhoneCall },
              { id: 'faq', label: 'Customs & Port Shipping FAQ', icon: HelpCircle }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors ${
                  activeTab === item.id 
                    ? 'bg-orange-500 text-white shadow-xs' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
