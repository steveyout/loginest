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
  ExternalLink
} from 'lucide-react';

interface ContactSupportProps {
  setActiveTab?: (tab: string) => void;
}

export const ContactSupport: React.FC<ContactSupportProps> = ({ setActiveTab }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Freight Quote & Booking',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Kenya HQ Official WhatsApp Support Number
  const KENYA_WHATSAPP_NUMBER = '254700000000'; // +254 700 000 000

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
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
📧 *Email:* ${formData.email.trim()}
${formData.phone ? `📱 *Phone:* ${formData.phone.trim()}\n` : ''}📌 *Inquiry Category:* ${formData.inquiryType}
━━━━━━━━━━━━━━━━━━
💬 *Message:*
${formData.message.trim()}

_Sent via Loginest Logistics Portal_`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${KENYA_WHATSAPP_NUMBER}?text=${encodedText}`;

    // Mark as submitted and redirect to WhatsApp
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
      
      {/* Background Decorative Blur Highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
            <span>Direct WhatsApp & 24/7 Support Desk</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Get in Touch with Our{' '}
            <span className="text-gradient-orange-emerald font-extrabold">
              Nairobi Logistics Desk
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Have a question regarding Mombasa port clearing, cross-border trucking, or rate quotes? Submit your inquiry below and connect directly with our Kenya HQ team on WhatsApp.
          </motion.p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-[#0B132B] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Customer Support Inquiry</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Directly dispatches to our official WhatsApp helpline</p>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                WhatsApp Live
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Samuel Mwangi"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border transition-colors ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. samuel@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border transition-colors ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

              </div>

              {/* Phone & Category Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone (Optional) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Phone / WhatsApp No. <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +254 712 345 678"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border border-slate-200 dark:border-slate-700 focus:border-emerald-500"
                  />
                </div>

                {/* Category Selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => handleChange('inquiryType', e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border border-slate-200 dark:border-slate-700 focus:border-emerald-500"
                  >
                    <option>Freight Quote & Booking</option>
                    <option>Mombasa Port Clearing Inquiry</option>
                    <option>Shipment Tracking Assistance</option>
                    <option>Cross-Border Transit (EAC)</option>
                    <option>Cold-Chain & Agri-Export</option>
                    <option>General Support / Partnering</option>
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
                  placeholder="Describe your cargo, destination, origin port, or general questions..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm outline-none border transition-colors ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
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
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Send Inquiry via WhatsApp</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>Redirecting to official Kenya HQ WhatsApp chat now...</span>
                </div>
              )}

              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center font-mono">
                ⚡ Average response time: <strong className="text-slate-800 dark:text-slate-200">Under 10 minutes</strong> during East Africa business hours (8 AM - 7 PM EAT).
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
            <div className="p-6 rounded-3xl bg-slate-900 dark:bg-[#0B132B] text-white border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="text-sm">🇰🇪</span> Regional HQ
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  Nairobi, Kenya
                </span>
              </div>

              <div>
                <h4 className="font-display font-bold text-xl text-white">Loginest Logistics Headquarters</h4>
                <p className="text-xs text-slate-400 mt-1">Upper Hill Financial District & JKIA Cargo Terminal, Nairobi, Kenya</p>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400">Hotline & WhatsApp</span>
                    <span className="font-mono font-bold text-white">+254 (0) 700 000 000</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400">Email Desk</span>
                    <span className="font-mono font-bold text-white">support@loginest.co.ke</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400">Hours of Operation</span>
                    <span className="font-mono text-white">Mon - Sat: 07:00 - 20:00 (EAT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Contact Tile */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base">Prefer Direct Chat?</h4>
                  <p className="text-xs text-emerald-100">Click below to bypass form and open WhatsApp directly</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${KENYA_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Loginest Kenya Team, I have a logistics inquiry regarding freight forwarding.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Instant WhatsApp Call / Message</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
              </a>
            </div>

            {/* Mombasa & Regional Corridors Tile */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200/80 dark:border-slate-800/80 shadow-md space-y-3">
              <span className="text-[11px] font-mono font-bold text-orange-500 uppercase tracking-wider block">Port & Coast Operations</span>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 dark:text-white block font-display">Mombasa Kilindini Port Office</strong>
                  <span className="text-slate-500 dark:text-slate-400">Port Gate 18 & Shimanzi ICD, Mombasa, Kenya</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
