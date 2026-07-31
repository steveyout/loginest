import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Github
} from 'lucide-react';

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

  return (
    <footer className="bg-slate-900 dark:bg-[#050812] text-slate-300 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => setActiveTab('overview')} 
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Log<span className="text-orange-500">inest</span> Logistics
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Next-generation smart supply chain and global freight management platform featuring real-time tracking, rate calculator, waybill generator, and fleet analytics.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ISO 27001 Certified
              </span>
              <span>•</span>
              <span className="font-mono text-orange-400">Carbon Neutral Corridors</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Platform Views</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => setActiveTab('overview')} className="hover:text-orange-400 transition-colors">
                  Overview & Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tracking')} className="hover:text-orange-400 transition-colors">
                  Live Satellite Tracking
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('calculator')} className="hover:text-orange-400 transition-colors">
                  Freight Rate Calculator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('booking')} className="hover:text-orange-400 transition-colors">
                  Waybill & Label Generator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('fleet')} className="hover:text-orange-400 transition-colors">
                  Fleet & Route Optimizer
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('faq')} className="hover:text-orange-400 transition-colors">
                  Kenya Customs FAQ
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Contact WhatsApp Support</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </button>
              </li>
            </ul>
          </div>

          {/* Global Hubs */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Global SuperHubs</h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-500" /> Rotterdam, NL</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-500" /> Singapore Hub</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-500" /> Chicago Inland Port</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-500" /> Frankfurt Airport</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-500" /> Dubai Aerotropolis</li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Supply Chain Intelligence</h4>
            <p className="text-xs text-slate-400">Receive weekly freight tariff updates and global corridor alerts.</p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="enter.email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-800 text-white placeholder-slate-500 text-xs font-mono outline-none border border-slate-700 focus:border-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-gradient-brand text-white font-bold text-xs hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-1"
              >
                <span>Subscribe Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
              </p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Loginest Logistics Platform. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('seo-deploy')} className="hover:text-orange-400 flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> GitHub Pages Deploy
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('seo-deploy')} className="hover:text-orange-400">
              SEO Schema Validated
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
