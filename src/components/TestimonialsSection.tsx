import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Ship
} from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'James Kariuki',
    role: 'Supply Chain Director',
    company: 'East African Agro-Processors Ltd',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    tagline: 'Zero Demurrage Guaranteed',
    testimonial:
      'We clear over 40 containers per month through Mombasa Port. Since switching to Loginest, our average wharf dwell time dropped from 8 days to under 36 hours. Their pre-filing on KRA Simba is flawless and saved our company over KES 3.2M in annual demurrage.'
  },
  {
    name: 'Sarah Akol',
    role: 'Operations Head',
    company: 'Kampala Pharmaceutical Importers',
    location: 'Kampala, Uganda',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    tagline: 'Northern Corridor Transit Speed',
    testimonial:
      'Moving temperature-sensitive medical consignments across the Malaba border requires extreme precision. Loginest\'s cross-border trucking with real-time ECTS seal monitoring gives our executive board complete peace of mind.'
  },
  {
    name: 'Capt. Emmanuel Ochieng',
    role: 'Fleet Maintenance Director',
    company: 'Regional Aviation Services',
    location: 'JKIA Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    tagline: '45-Year AOG Aviation Pedigree',
    testimonial:
      'When an engine component grounds an aircraft, every hour lost costs tens of thousands of dollars. Loginest\'s 24/7 emergency AOG desk at JKIA delivers airside releases in under 4 hours consistently. They are unmatched in this region.'
  },
  {
    name: 'Jean-Paul Habimana',
    role: 'Procurement Specialist',
    company: 'Great Lakes Infrastructure Works',
    location: 'Kigali, Rwanda',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    tagline: 'Heavy Rigging & Project Cargo',
    testimonial:
      'Moving 65-ton transformers across two international borders seemed daunting. Loginest coordinated hydraulic multi-axle trailers, police escorts, and bridge stress clearances seamlessly from Kilindini Port to our sub-station in Masaka.'
  }
];

export const TestimonialsSection: React.FC<{ setActiveTab?: (tab: string) => void }> = ({ setActiveTab }) => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#070C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            Client Success Stories
          </span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Trusted By{' '}
            <span className="text-orange-600 dark:text-orange-500 font-extrabold ml-2">
              East Africa's Leading Freight Companies
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Hear from our East African logistics partners about their experience with Loginest's Mombasa Port clearing, SGR rail freight, and EAC cross-border services.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Card Header with Image */}
              <div className="flex items-center gap-4 mb-5">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
                  />
                )}

                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}, {testimonial.company}</p>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                "{testimonial.testimonial}"
              </p>

              {/* Tags / Badges */}
              {testimonial.tagline && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                    {testimonial.tagline}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 sm:p-10 bg-[#06122e] border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="space-y-2 text-center md:text-left relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono uppercase tracking-wider">
              Join 5,000+ East African Shippers Daily
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">Ready to Experience Loginest Logistics?</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto md:mx-0 mt-1">
              Get instant rate quotes, real-time tracking, and 24/7 WhatsApp support from our Nairobi HQ team.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 shrink-0">
            {setActiveTab && (
              <button 
                onClick={() => setActiveTab('quote')}
                className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Ship className="w-4 h-4" />
                <span>Get Free Quote</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
