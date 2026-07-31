import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Truck, 
  Plane, 
  Ship, 
  Thermometer, 
  Droplets, 
  Zap, 
  Share2, 
  Printer, 
  Copy, 
  Check, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Shipment } from '../types';

interface LiveTrackerProps {
  shipments: Shipment[];
  selectedTrackingCode: string;
  setSelectedTrackingCode: (code: string) => void;
}

export const LiveTracker: React.FC<LiveTrackerProps> = ({
  shipments,
  selectedTrackingCode,
  setSelectedTrackingCode
}) => {
  const [copied, setCopied] = useState(false);
  const [showWaybillModal, setShowWaybillModal] = useState(false);
  const [searchInput, setSearchInput] = useState(selectedTrackingCode || '');

  // Find selected shipment or default to first
  const activeShipment = shipments.find(
    (s) => s.trackingNumber.toLowerCase() === selectedTrackingCode.toLowerCase()
  ) || shipments[0];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSelectedTrackingCode(searchInput.trim());
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://loginest.logistics/track/${activeShipment.trackingNumber}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case 'air': return Plane;
      case 'ocean': return Ship;
      default: return Truck;
    }
  };

  const ModeIcon = getModeIcon(activeShipment.mode);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Search Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-500">
                <ModeIcon className="w-6 h-6" />
              </span>
              Live Freight Telemetry Command
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Real-time satellite GPS tracking & IoT sensor telemetry for high-value cargo.
            </p>
          </div>

          {/* Search & Selector */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-md w-full">
            <div className="relative w-full">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search tracking ID..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-mono border border-slate-200 dark:border-slate-800 outline-none focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-gradient-brand text-white text-sm font-semibold hover:brightness-110 shrink-0"
            >
              Locate
            </button>
          </form>
        </div>

        {/* Quick Tabs for Available Shipments */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1">
          {shipments.map((s) => (
            <button
              key={s.trackingNumber}
              onClick={() => {
                setSelectedTrackingCode(s.trackingNumber);
                setSearchInput(s.trackingNumber);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeShipment.trackingNumber === s.trackingNumber
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <span>{s.trackingNumber}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                activeShipment.trackingNumber === s.trackingNumber ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-800'
              }`}>
                {s.status}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Shipment Route & Timeline */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Status & Progress Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">Tracking Code</span>
                <h3 className="font-mono text-2xl sm:text-3xl font-extrabold text-orange-500 flex items-center gap-3">
                  {activeShipment.trackingNumber}
                  <span className="text-xs font-sans px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Live GPS
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-orange-500 text-xs font-semibold flex items-center gap-1.5 border border-slate-200 dark:border-slate-800"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Share URL'}</span>
                </button>

                <button
                  onClick={() => setShowWaybillModal(true)}
                  className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 text-xs font-semibold flex items-center gap-1.5 border border-orange-500/30"
                >
                  <Printer className="w-4 h-4" />
                  <span>View Waybill</span>
                </button>
              </div>
            </div>

            {/* Origin -> Destination Route Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
              <div className="space-y-1">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Origin Shipper</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{activeShipment.senderName}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  {activeShipment.senderCity}, {activeShipment.senderCountry}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Destination Consignee</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{activeShipment.receiverName}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  {activeShipment.receiverCity}, {activeShipment.receiverCountry}
                </p>
              </div>
            </div>

            {/* Route Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-600 dark:text-slate-400">Route Completion ({activeShipment.progressPercent}%)</span>
                <span className="text-orange-500 font-mono">ETA: {activeShipment.estimatedDelivery}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${activeShipment.progressPercent}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-brand rounded-full relative"
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md animate-ping" />
                </motion.div>
              </div>
            </div>

            {/* Interactive Route Map Visualizer (SVG Simulation) */}
            <div className="relative h-64 w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 p-4 flex flex-col justify-between">
              {/* Grid Lines Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              {/* World Map Overlay Text */}
              <div className="relative z-10 flex justify-between items-start text-xs text-slate-400 font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700">
                  Carrier: {activeShipment.carrier} ({activeShipment.vesselFlightNo})
                </span>
                <span className="px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  GPS Signal Strong
                </span>
              </div>

              {/* Simulated Flight/Ship Path Arc */}
              <div className="relative z-10 my-auto px-8 py-4 flex items-center justify-between">
                {/* Origin Pin */}
                <div className="text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center text-orange-400 mx-auto">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-white">{activeShipment.senderCity}</p>
                </div>

                {/* Animated Path Arc */}
                <div className="flex-1 mx-6 relative">
                  <div className="w-full h-0.5 bg-slate-700 border-dashed border-slate-600" />
                  <motion.div
                    animate={{ left: [`0%`, `${activeShipment.progressPercent}%`] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/50"
                  >
                    <ModeIcon className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Destination Pin */}
                <div className="text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-white">{activeShipment.receiverCity}</p>
                </div>
              </div>

              {/* Lat/Long Telemetry Bar */}
              <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-slate-400 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                <span>Lat: {activeShipment.currentCoords[0]}° N</span>
                <span>Lng: {activeShipment.currentCoords[1]}° E</span>
                <span className="text-emerald-400 font-semibold">Speed: {activeShipment.mode === 'air' ? '820 km/h' : '24 knots'}</span>
              </div>
            </div>

            {/* Detailed Event Timeline */}
            <div className="space-y-4 pt-4">
              <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Audit Trail & Milestone Log
              </h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {activeShipment.timeline.map((step) => (
                  <div key={step.id} className="relative group">
                    {/* Circle Node */}
                    <div className={`absolute -left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      step.completed
                        ? 'bg-orange-500 border-orange-500 text-white'
                        : 'bg-white dark:bg-[#0B132B] border-slate-300 dark:border-slate-700'
                    }`}>
                      {step.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className={`font-semibold text-sm ${step.completed ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                          {step.title}
                        </h5>
                        <span className="text-xs font-mono text-slate-500">{step.timestamp}</span>
                      </div>
                      <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">{step.location}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Right 1 Column: Telemetry Gauge & Cargo Items */}
        <div className="space-y-8">
          
          {/* Real-Time IoT Sensors */}
          {activeShipment.telemetry && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500 animate-bounce" />
                  IoT Sensor Telemetry
                </h3>
                <span className="text-[10px] font-mono text-slate-500">Updated {activeShipment.telemetry.lastUpdated}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Temp */}
                <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-slate-900 dark:text-white">
                  <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400 font-medium">
                    <Thermometer className="w-4 h-4" /> Temp
                  </div>
                  <div className="mt-2 font-mono text-xl font-bold">
                    {activeShipment.telemetry.temperatureC}°C
                  </div>
                  <p className="text-[10px] text-slate-500">Target: 2°C - 8°C</p>
                </div>

                {/* Humidity */}
                <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-slate-900 dark:text-white">
                  <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                    <Droplets className="w-4 h-4" /> Humidity
                  </div>
                  <div className="mt-2 font-mono text-xl font-bold">
                    {activeShipment.telemetry.humidityPct}%
                  </div>
                  <p className="text-[10px] text-slate-500">Dry Storage</p>
                </div>

                {/* Shock G */}
                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-slate-900 dark:text-white">
                  <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-medium">
                    <AlertTriangle className="w-4 h-4" /> Shock
                  </div>
                  <div className="mt-2 font-mono text-xl font-bold">
                    {activeShipment.telemetry.shockG} G
                  </div>
                  <p className="text-[10px] text-emerald-500">Normal Range</p>
                </div>

                {/* Battery */}
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-900 dark:text-white">
                  <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <Zap className="w-4 h-4" /> Beacon Power
                  </div>
                  <div className="mt-2 font-mono text-xl font-bold">
                    {activeShipment.telemetry.batteryPct}%
                  </div>
                  <p className="text-[10px] text-slate-500">Solar Backed</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Cargo Manifest */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4"
          >
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
              Manifest & Cargo Items
            </h3>

            <div className="space-y-3">
              {activeShipment.cargoItems.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 dark:text-white">{item.name}</h5>
                    <span className="text-[10px] font-mono text-slate-500">HS Code: {item.hsCode || 'N/A'}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-semibold text-orange-500">{item.weightKg} kg</span>
                    <p className="text-[10px] text-slate-500">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Waybill Modal Popover */}
      <AnimatePresence>
        {showWaybillModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl bg-white text-slate-900 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative border-4 border-orange-500"
            >
              <button
                onClick={() => setShowWaybillModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                ✕
              </button>

              {/* Waybill Title */}
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4">
                <div>
                  <h2 className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
                    LOGINEST WAYBILL
                  </h2>
                  <p className="text-xs font-mono text-slate-600">INTERNATIONAL AIR & SEA FREIGHT</p>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-slate-500">WAYBILL NO.</span>
                  <div className="text-lg font-bold text-orange-600">{activeShipment.trackingNumber}</div>
                </div>
              </div>

              {/* Shipper & Consignee Box */}
              <div className="grid grid-cols-2 gap-4 text-xs font-sans border-b border-slate-200 pb-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-500 uppercase tracking-wider block">SHIPPER / EXPORTER</span>
                  <p className="font-bold text-slate-900 mt-1">{activeShipment.senderName}</p>
                  <p className="text-slate-600">{activeShipment.senderCity}, {activeShipment.senderCountry}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-500 uppercase tracking-wider block">CONSIGNEE / RECEIVER</span>
                  <p className="font-bold text-slate-900 mt-1">{activeShipment.receiverName}</p>
                  <p className="text-slate-600">{activeShipment.receiverCity}, {activeShipment.receiverCountry}</p>
                </div>
              </div>

              {/* Simulated Barcode */}
              <div className="text-center py-4 bg-slate-100 rounded-2xl space-y-2 border border-slate-200">
                <div className="h-14 bg-repeat-x bg-contain mx-auto max-w-xs" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Crect x='0' width='4' height='50' fill='%23000'/%3E%3Crect x='6' width='2' height='50' fill='%23000'/%3E%3Crect x='10' width='8' height='50' fill='%23000'/%3E%3Crect x='22' width='3' height='50' fill='%23000'/%3E%3Crect x='28' width='6' height='50' fill='%23000'/%3E%3Crect x='38' width='2' height='50' fill='%23000'/%3E%3Crect x='44' width='10' height='50' fill='%23000'/%3E%3C/svg%3E")`
                }} />
                <span className="font-mono text-sm tracking-widest font-bold text-slate-800">{activeShipment.trackingNumber}</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold text-sm hover:bg-orange-700 flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" /> Print Label
                </button>
                <button
                  onClick={() => setShowWaybillModal(false)}
                  className="w-full py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
