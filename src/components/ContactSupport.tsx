import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Globe, 
  Sparkles,
  Headphones,
  ShieldCheck,
  ExternalLink,
  Building2
} from 'lucide-react';

interface ContactSupportProps {
  setActiveTab?: (tab: string) => void;
}

export const ContactSupport: React.FC<ContactSupportProps> = ({ setActiveTab }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Freight Quote & Rate Estimation',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Kenya HQ Official WhatsApp Support Number from Logistics Link
  const KENYA_WHATSAPP_NUMBER = '254728346457'; // +254 728 346457

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Inquiry message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Build formatted WhatsApp message string
    const whatsappText = `*LOGINEST LOGISTICS INQUIRY*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
📧 *Email:* ${formData.email.trim()}
${formData.phone ? `📱 *Phone:* ${formData.phone.trim()}\n` : ''}📌 *Category:* ${formData.inquiryType}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 *Message:*
${formData.message.trim()}

_Sent via Loginest Logistics Customer Portal_`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${KENYA_WHATSAPP_NUMBER}?text=${encodedText}`;

    setSubmitted(true);
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden bg-slate-50 dark:bg-[#070C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>Customer Care & 24/7 Operations Desk</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Contact Our{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold">
              Nairobi HQ & Regional Offices
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Have a question regarding Mombasa port clearing, NVOCC consolidation, AOG emergency freight, or cross-border trucking? Our team would love to connect.
          </motion.p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-[#0B132B] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                Send Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below. When submitted, this inquiry will open directly on our WhatsApp support desk for immediate handling.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. David Mwangi"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border transition-colors ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-slate-200 dark:border-slate-700 focus:border-orange-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +254 712 345 678"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border border-slate-200 dark:border-slate-700 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Email & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. david@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border transition-colors ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-slate-200 dark:border-slate-700 focus:border-orange-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => handleChange('inquiryType', e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border border-slate-200 dark:border-slate-700 focus:border-orange-500 cursor-pointer"
                  >
                    <option>Freight Quote & Rate Estimation</option>
                    <option>Customs Clearance at Port of Mombasa</option>
                    <option>NVOCC & LCL/FCL Cargo Consolidation</option>
                    <option>AOG (Aircraft On Ground) Emergency Logistics</option>
                    <option>Trucking & Northern Corridor Haulage</option>
                    <option>Project Cargo & Heavy Rigging</option>
                    <option>Corporate Partnership / Agency</option>
                  </select>
                </div>

              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Inquiry Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail your shipping route, cargo dimensions, port requirements, or target dates..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border transition-colors resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-slate-200 dark:border-slate-700 focus:border-orange-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Dispatch Inquiry via WhatsApp</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>Redirecting to Loginest official WhatsApp desk (+254 728 346457)...</span>
                </div>
              )}

              <p className="text-[11px] text-center text-slate-400">
                Official working hours: Mon - Fri: 08:00 AM - 5:00 PM. Emergency AOG & transit desks respond 24/7.
              </p>

            </form>
          </motion.div>

          {/* Right Column: Contact Cards & Regional Headquarters */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Headquarters Card */}
            <div className="p-6 rounded-3xl bg-slate-900 dark:bg-[#0B132B] text-white border border-slate-800 shadow-md space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="text-sm">🇰🇪</span> Head Office
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  Nairobi, Kenya
                </span>
              </div>

              <div>
                <h4 className="font-display font-bold text-xl text-white">Loginest Logistics Africa</h4>
                <p className="text-xs text-slate-400 mt-1">Bellway Business Park, Mombasa Rd, P.O Box 451-00521, Nairobi, Kenya</p>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono">Hotline & WhatsApp</span>
                    <a href="tel:+254728346457" className="font-mono font-bold text-white hover:text-orange-400 transition-colors">
                      +254 728 346457
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono">Freight Inquiries</span>
                    <a href="mailto:freight@loginestlogistics.com" className="font-mono font-bold text-white hover:text-orange-400 transition-colors">
                      freight@loginestlogistics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono">General Info</span>
                    <a href="mailto:info@loginestlogistics.com" className="font-mono font-bold text-white hover:text-orange-400 transition-colors">
                      info@loginestlogistics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono">Working Hours</span>
                    <span className="font-mono text-white">Mon - Fri: 08:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Branches List Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Regional Branches & Port Desks
              </span>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                  🇰🇪 Mombasa Port (Gate 18)
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                  🇺🇬 Uganda (Kampala & Malaba)
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                  🇷🇼 Rwanda (Kigali Hub)
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                  🇹🇿 Tanzania (Dar es Salaam)
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                  🇸🇸 South Sudan (Juba / Nimule)
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                  🇳🇬 Nigeria (Lagos Hub)
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Card */}
            <div className="p-6 rounded-3xl bg-[#06122e] border border-slate-800 text-white shadow-md space-y-3">
              <h4 className="font-display font-bold text-base">Instant WhatsApp Chat</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Skip the form and chat with our freight coordinators on WhatsApp right away.
              </p>
              <a
                href={`https://wa.me/${KENYA_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Loginest Kenya Team, I would like to inquire about freight services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-all cursor-pointer shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
