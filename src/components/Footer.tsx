import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Send, 
  Building2, 
  Layers, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleLink = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050e24] dark:bg-[#030917] text-slate-300 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Narrative with Official Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => handleLink('overview')} 
              className="flex items-center gap-3 cursor-pointer select-none group"
            >
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#06122e] border border-slate-700 shadow-sm flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={logoImg} 
                  alt="Loginest Logistics Official Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl tracking-wider text-white uppercase block leading-none">
                  LOGINEST
                </span>
                <div className="h-[2px] w-full bg-orange-500 rounded-full my-1" />
                <span className="text-[11px] tracking-[0.25em] text-slate-400 font-bold uppercase block leading-none">
                  LOGISTICS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Leader in freight forwarding, customs clearance, bonded warehousing, trucking, and commercial distribution across Eastern Africa. Powered by 19+ years of industry pedigree and a trusted partner network in over 120 countries worldwide.
            </p>

            <div className="pt-2 space-y-1.5 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Mon - Fri: 08:00 AM - 5:00 PM</span>
              </div>
              <p className="text-[11px] text-slate-500 pl-5.5">24/7 Operations Desk for Active In-Transit Cargo</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-orange-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-orange-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-orange-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-orange-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => handleLink('overview')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Home / Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('about')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  About Our Company
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Our 6 Core Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('regional-footprint')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Regional Footprint
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('memberships')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Our Memberships
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('quote')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Get a Quote
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('faq')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Customs FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Logistics Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  Trucking & Commercial Distribution
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  NVOCC & LCL/FCL Consolidation
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  AOG (Aircraft On Ground) Logistics
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  Project Logistics & Transit Cargo
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  International Freight Forwarding
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  Customs Clearance & Port Operations
                </button>
              </li>
            </ul>
          </div>

          {/* Company Info & HQ (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Company Info</h4>
            <div className="space-y-3 text-xs text-slate-400 font-mono">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Bellway Business Park, Mombasa Rd, P.O Box 451-00521, Nairobi, Kenya
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Branches: Mombasa, Uganda, Rwanda, Tanzania, Nigeria, South Sudan</span>
              </div>

              <div className="pt-1 space-y-1.5">
                <a href="mailto:freight@loginestlogistics.com" className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span>freight@loginestlogistics.com</span>
                </a>
                <a href="mailto:info@loginestlogistics.com" className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span>info@loginestlogistics.com</span>
                </a>
                <a href="tel:+254728346457" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+254 728 346457</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Loginest Logistics Africa. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Reliable Freight</span>
            <span>•</span>
            <span>Global Reach</span>
            <span>•</span>
            <span className="text-slate-400">120+ Partner Nations</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
