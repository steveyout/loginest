import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Calculator, 
  FileText, 
  Compass, 
  BarChart3, 
  Globe, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ShieldCheck,
  MessageSquare,
  Building2,
  Briefcase,
  HelpCircle,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: Theme;
  toggleTheme: () => void;
  shipmentCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
  shipmentCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navGroups = [
    {
      id: 'overview',
      label: 'Overview',
      type: 'link',
      icon: Globe,
      tabId: 'overview'
    },
    {
      id: 'services-group',
      label: 'Services & Operations',
      type: 'dropdown',
      icon: Briefcase,
      items: [
        { id: 'services', label: 'Core Freight Services', desc: 'Ocean, Road, Air & SGR Rail Freight', icon: Briefcase },
        { id: 'tracking', label: 'Live Cargo Telemetry', desc: 'Real-time container & truck tracking', icon: Search, badge: shipmentCount },
        { id: 'fleet', label: 'Fleet & EAC Corridors', desc: 'Kenya, Uganda & Rwanda transit routes', icon: Compass },
        { id: 'analytics', label: 'ICD Warehouse Analytics', desc: 'Capacity & terminal metrics', icon: BarChart3 },
      ]
    },
    {
      id: 'tools-group',
      label: 'Tools & Rates',
      type: 'dropdown',
      icon: Calculator,
      items: [
        { id: 'calculator', label: 'Rate Calculator', desc: 'Instant CBM & KG tariff estimator', icon: Calculator },
        { id: 'booking', label: 'Book Consignment', desc: 'Generate digital bill of lading', icon: FileText, highlight: true },
      ]
    },
    {
      id: 'company-group',
      label: 'Company & Support',
      type: 'dropdown',
      icon: Building2,
      items: [
        { id: 'about', label: 'About Kenya HQ', desc: 'Nairobi HQ & Mombasa port setup', icon: Building2 },
        { id: 'contact', label: 'Contact WhatsApp', desc: 'Direct 24/7 clearing assistance', icon: MessageSquare },
        { id: 'faq', label: 'Customs & Shipping FAQ', desc: 'KRA, KEBS & clearing guidelines', icon: HelpCircle },
        { id: 'seo-deploy', label: 'SEO & Deploy Hub', desc: 'Meta tags & static export', icon: ShieldCheck },
      ]
    }
  ];

  // Flat list for mobile menu
  const allMobileNavItems = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'services', label: 'Core Freight Services', icon: Briefcase },
    { id: 'about', label: 'About Kenya HQ', icon: Building2 },
    { id: 'tracking', label: 'Live Tracking', icon: Search, badge: shipmentCount },
    { id: 'calculator', label: 'Rate Calculator', icon: Calculator },
    { id: 'booking', label: 'Ship Now / Book Cargo', icon: FileText, highlight: true },
    { id: 'fleet', label: 'Fleet & Routes', icon: Compass },
    { id: 'analytics', label: 'ICD Analytics', icon: BarChart3 },
    { id: 'contact', label: 'Contact WhatsApp', icon: MessageSquare },
    { id: 'faq', label: 'FAQ & Customs Guide', icon: HelpCircle },
    { id: 'seo-deploy', label: 'SEO & Deploy Hub', icon: ShieldCheck },
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

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 dark:bg-[#070C18]/90 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('overview')} 
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
            {/* Embedded Logo Icon */}
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl tracking-tight">
                <span className="bg-gradient-to-r from-orange-500 via-amber-400 via-emerald-400 to-teal-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent drop-shadow-xs">
                  Loginest
                </span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
              Global Freight & Supply Chain
            </p>
          </div>
        </div>

        {/* Desktop Navigation with Grouped Sub-Dropdowns */}
        <nav className="hidden lg:flex items-center gap-2 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
          {navGroups.map((group) => {
            const GroupIcon = group.icon;

            if (group.type === 'link') {
              const isActive = activeTab === group.tabId;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(group.tabId!)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                    isActive
                      ? 'text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-gradient-brand rounded-xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <GroupIcon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                    {group.label}
                  </span>
                </button>
              );
            }

            // Dropdown Group
            const isAnySubActive = group.items?.some(item => item.id === activeTab);
            const isOpen = activeDropdown === group.id;

            return (
              <div
                key={group.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(isOpen ? null : group.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                    isAnySubActive
                      ? 'text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {isAnySubActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-gradient-brand rounded-xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <GroupIcon className={`w-4 h-4 ${isAnySubActive ? 'text-white' : ''}`} />
                    {group.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {/* Sub Dropdown Menu Card */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200/90 dark:border-slate-800/90 shadow-2xl p-2.5 z-50 backdrop-blur-2xl"
                    >
                      <div className="space-y-1">
                        {group.items?.map((subItem) => {
                          const SubIcon = subItem.icon;
                          const isSubActive = activeTab === subItem.id;
                          return (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                setActiveTab(subItem.id);
                                setActiveDropdown(null);
                              }}
                              className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-start gap-3 group/sub ${
                                isSubActive
                                  ? 'bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/20'
                                  : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                              }`}
                            >
                              <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                                isSubActive 
                                  ? 'bg-orange-500 text-white shadow-sm' 
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover/sub:bg-orange-500/10 group-hover/sub:text-orange-500'
                              }`}>
                                <SubIcon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold truncate">{subItem.label}</span>
                                  {subItem.badge !== undefined && (
                                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-orange-500/20 text-orange-500">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-normal">
                                  {subItem.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Action & Utility Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Ship Now Highlight Action Button (Direct access) */}
          <button
            onClick={() => setActiveTab('booking')}
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'booking'
                ? 'bg-gradient-brand text-white shadow-lg shadow-orange-500/30 ring-2 ring-orange-500/40'
                : 'bg-gradient-brand text-white hover:shadow-lg hover:shadow-orange-500/25 hover:scale-102 active:scale-98'
            }`}
          >
            <FileText className="w-4 h-4 text-white" />
            <span>Ship Now</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#0B132B] border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto"
          >
            {allMobileNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-gradient-brand text-white shadow-md'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  } ${item.highlight && !isActive ? 'border border-orange-500/40 text-orange-600 dark:text-orange-400 bg-orange-500/5' : ''}`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </span>
                  {item.badge !== undefined && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-orange-500/20 text-orange-400">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

