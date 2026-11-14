import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Ship, 
  Truck, 
  Plane, 
  Train, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Clock, 
  ShieldCheck,
  Building2,
  MapPin,
  Phone,
  Mail,
  HelpCircle
} from 'lucide-react';

interface QuoteSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ setActiveTab }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    shippingFrom: '',
    shippingTo: '',
    service: 'Sea Freight',
    estimatedWeightKg: '',
    estimatedVolumeCbm: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const servicesList = [
    'Sea Freight (FCL / LCL)',
    'Air Freight Export & Import',
    'Customs Clearance & Port Handling',
    'Freight Forwarding (End-to-End)',
    'Trucking and Commercial Distribution',
    'NVOCC Cargo Consolidation',
    'AOG (Aircraft On Ground) Logistics',
    'Project Logistics and Transit Cargo',
    'SGR Rail Intermodal Transit',
    'Other Specialized Logistics'
  ];

  const popularRoutes = [
    { from: 'Mombasa Port (KE)', to: 'Nairobi ICD (KE)' },
    { from: 'Mombasa Port (KE)', to: 'Kampala (UG)' },
    { from: 'Mombasa Port (KE)', to: 'Kigali (RW)' },
    { from: 'Shanghai / Ningbo (CN)', to: 'Mombasa Port (KE)' },
    { from: 'Dubai / Jebel Ali (UAE)', to: 'Nairobi (KE)' },
    { from: 'JKIA Nairobi (KE)', to: 'London Heathrow (UK)' }
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.phone.trim()) errs.phone = 'Valid phone number is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.shippingFrom.trim()) errs.shippingFrom = 'Origin is required';
    if (!formData.shippingTo.trim()) errs.shippingTo = 'Destination is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    // Prepare formatted WhatsApp dispatch string
    const whatsappMsg = `*LOGINEST LOGISTICS - INSTANT FREIGHT QUOTE REQUEST*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Client:* ${formData.firstName.trim()} ${formData.lastName.trim()}
🏢 *Company:* ${formData.company.trim() || 'N/A'}
📱 *Phone:* ${formData.phone.trim()}
📧 *Email:* ${formData.email.trim()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚢 *Service:* ${formData.service}
📍 *Origin (From):* ${formData.shippingFrom.trim()}
🏁 *Destination (To):* ${formData.shippingTo.trim()}
${formData.estimatedWeightKg ? `⚖️ *Est. Weight:* ${formData.estimatedWeightKg} kg\n` : ''}${formData.estimatedVolumeCbm ? `📦 *Est. Volume:* ${formData.estimatedVolumeCbm} CBM\n` : ''}
📝 *Additional Information / Cargo Specs:*
${formData.additionalInfo.trim() || 'Standard Commercial Consignment'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
_Submitted via Loginest Logistics Instant Portal_`;

    const encodedMsg = encodeURIComponent(whatsappMsg);
    // Loginest Official Kenya WhatsApp Dispatch Desk
    const whatsappUrl = `https://wa.me/254728346457?text=${encodedMsg}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const handleRouteClick = (from: string, to: string) => {
    setFormData(prev => ({
      ...prev,
      shippingFrom: from,
      shippingTo: to
    }));
    if (errors.shippingFrom || errors.shippingTo) {
      setErrors(prev => ({ ...prev, shippingFrom: '', shippingTo: '' }));
    }
  };

  return (
    <section id="quote" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50 dark:bg-[#070C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>Fast-Track Freight Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Get a Personalized Quote:{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold">
              Tailored in Record Time
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Our team would love to connect on what you need and deliver a transparent, itemized quote with zero hidden surcharges or demurrage traps.
          </motion.p>
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm relative"
            >
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                    Quote Request Dispatched!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900 dark:text-white">{formData.firstName}</strong>. We have routed your cargo request to our Nairobi & Mombasa operations desk. You will receive your customized quotation in minutes.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
                    >
                      Submit Another Quote
                    </button>
                    {setActiveTab && (
                      <button
                        onClick={() => setActiveTab('overview')}
                        className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                      >
                        Return to Dashboard
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Fields (First, Last) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        First Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.firstName 
                            ? 'border-red-500 focus:ring-red-500/30' 
                            : 'border-slate-200 dark:border-slate-800 focus:ring-orange-500/30 focus:border-orange-500'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Last Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kamau"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors({ ...errors, lastName: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.lastName 
                            ? 'border-red-500 focus:ring-red-500/30' 
                            : 'border-slate-200 dark:border-slate-800 focus:ring-orange-500/30 focus:border-orange-500'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Industrial Supplies"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Phone Number <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +254 712 345 678"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone 
                            ? 'border-red-500 focus:ring-red-500/30' 
                            : 'border-slate-200 dark:border-slate-800 focus:ring-orange-500/30 focus:border-orange-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Corporate or Personal Email <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. logistics@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500/30' 
                          : 'border-slate-200 dark:border-slate-800 focus:ring-orange-500/30 focus:border-orange-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Shipping From & Shipping To */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Where are you shipping from? <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mombasa Port / Shanghai / Dubai"
                        value={formData.shippingFrom}
                        onChange={(e) => {
                          setFormData({ ...formData, shippingFrom: e.target.value });
                          if (errors.shippingFrom) setErrors({ ...errors, shippingFrom: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.shippingFrom 
                            ? 'border-red-500 focus:ring-red-500/30' 
                            : 'border-slate-200 dark:border-slate-800 focus:ring-orange-500/30 focus:border-orange-500'
                        }`}
                      />
                      {errors.shippingFrom && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.shippingFrom}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Where are you shipping to? <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nairobi / Kampala / Kigali / Juba"
                        value={formData.shippingTo}
                        onChange={(e) => {
                          setFormData({ ...formData, shippingTo: e.target.value });
                          if (errors.shippingTo) setErrors({ ...errors, shippingTo: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.shippingTo 
                            ? 'border-red-500 focus:ring-red-500/30' 
                            : 'border-slate-200 dark:border-slate-800 focus:ring-orange-500/30 focus:border-orange-500'
                        }`}
                      />
                      {errors.shippingTo && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.shippingTo}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Select Service Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Select Service Category <span className="text-orange-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all cursor-pointer"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Weight / Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Approximate Cargo Weight (kg) <span className="text-slate-400 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 5200"
                        value={formData.estimatedWeightKg}
                        onChange={(e) => setFormData({ ...formData, estimatedWeightKg: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Approximate Volume (CBM) <span className="text-slate-400 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 18.5"
                        value={formData.estimatedVolumeCbm}
                        onChange={(e) => setFormData({ ...formData, estimatedVolumeCbm: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Additional Information / Cargo Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify container size (20ft/40ft), fragile goods, temperature constraints, hazardous materials, or target delivery date..."
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Guaranteed Freight Quote</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    By submitting, our dispatch engineers review your itinerary against live port schedules and EAC tariff brackets.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* Quick Route Shortcuts & Corporate Assistance (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Popular Corridors */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Popular Shipping Lanes
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click any corridor to autofill origin and destination:
              </p>

              <div className="space-y-2">
                {popularRoutes.map((route, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleRouteClick(route.from, route.to)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-orange-500/10 border border-slate-200/80 dark:border-slate-800/80 hover:border-orange-500/30 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <span>{route.from} ➔ {route.to}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Urgent Assistance Card */}
            <div className="p-6 rounded-3xl bg-[#0a193d] border border-slate-800 text-white shadow-lg space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-orange-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-base text-white">Need Urgent AOG or Port Clearance?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call or WhatsApp our 24/7 emergency dispatch desk directly for immediate container offloading or aircraft part transport.
                </p>
              </div>

              <div className="pt-2 space-y-2 text-xs font-mono">
                <a 
                  href="tel:+254728346457"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> +254 728 346457
                </a>
                <a 
                  href="mailto:freight@loginestlogistics.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" /> freight@loginestlogistics.com
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                Mon - Fri: 08:00 AM - 5:00 PM (Emergency Desk 24/7)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
