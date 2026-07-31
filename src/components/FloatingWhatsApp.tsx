import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MessageSquare, X, Send, PhoneCall, ShieldCheck } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenContact?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '254700000000'; // Kenya HQ number format
  const defaultMessage = 'Hello Loginest Kenya, I would like to inquire about freight rates and Mombasa port clearing.';

  // 3D Tilt Motion setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['18deg', '-18deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-18deg', '18deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleDirectChat = (customMsg?: string) => {
    const text = encodeURIComponent(customMsg || defaultMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {/* Quick Action Interactive Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-80 sm:w-88 rounded-3xl bg-slate-900 text-white border border-emerald-500/40 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-2xl bg-white text-emerald-600 flex items-center justify-center font-bold text-lg shadow-md">
                  <MessageSquare className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    Loginest Kenya HQ
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  </h4>
                  <p className="text-[11px] text-emerald-200 font-mono">Replies in ~5 minutes • 24/7 Desk</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-slate-950/40 hover:bg-slate-950/60 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 bg-[#0B132B]">
              
              {/* Live Typing Indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-emerald-500/30 text-[11px] text-slate-300 w-fit shadow-inner">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '300ms' }} />
                </div>
                <span className="font-mono text-emerald-400 font-bold text-[10px] tracking-wider uppercase">Nairobi Desk typing...</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200 space-y-1">
                <p className="font-semibold text-emerald-400">👋 Jambo! Welcome to Loginest Logistics.</p>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Need an instant quote for Mombasa Port clearance, SGR Rail booking, or EAC cross-border haulage?
                </p>
              </div>

              {/* Quick Option Buttons */}
              <div className="space-y-1.5 pt-1">
                <button
                  onClick={() => handleDirectChat('Hi, I need an urgent rate quote for Mombasa Port container clearance.')}
                  className="w-full p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600/30 text-left text-xs font-medium text-slate-200 hover:text-white border border-slate-700/60 hover:border-emerald-500/50 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span>🚢 Mombasa Port Clearing Quote</span>
                  <Send className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleDirectChat('Hello, I want to book SGR rail container transport from Mombasa to Nairobi ICD.')}
                  className="w-full p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600/30 text-left text-xs font-medium text-slate-200 hover:text-white border border-slate-700/60 hover:border-emerald-500/50 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span>🚂 SGR Rail Freight Tariff</span>
                  <Send className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleDirectChat('Hi, I need cross-border truck transport to Uganda / Rwanda / South Sudan.')}
                  className="w-full p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600/30 text-left text-xs font-medium text-slate-200 hover:text-white border border-slate-700/60 hover:border-emerald-500/50 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span>🚛 EAC Cross-Border Trucking</span>
                  <Send className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Direct Open Button */}
              <button
                onClick={() => handleDirectChat()}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Open Direct WhatsApp Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Animated WhatsApp Button with 3D Tactile Tilt */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group perspective-1000"
        style={{ perspective: 600 }}
      >
        {/* Pulsing Outer Rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75 pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-sm pointer-events-none" />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          aria-label="Open WhatsApp Chat"
          className="relative z-10 p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white shadow-2xl border border-emerald-300/40 transition-shadow duration-300 hover:shadow-emerald-500/40 flex items-center justify-center cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageSquare className="w-6 h-6 text-white fill-white" />
          )}

          {/* Unread badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-slate-900 text-[9px] font-bold text-slate-950 items-center justify-center">
                1
              </span>
            </span>
          )}
        </motion.button>

        {/* Hover Label on Desktop */}
        {!isOpen && (
          <span className="hidden sm:inline-block absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800">
            💬 WhatsApp 24/7 Desk
          </span>
        )}
      </div>
    </div>
  );
};
