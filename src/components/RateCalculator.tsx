import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Plane, 
  Ship, 
  Truck, 
  Train, 
  ShieldCheck, 
  Thermometer, 
  AlertTriangle, 
  Check, 
  ArrowRight,
  Leaf,
  DollarSign
} from 'lucide-react';
import { motion } from 'motion/react';
import { QuoteRequest, QuoteResult, TransportMode } from '../types';

interface RateCalculatorProps {
  onBookRate: (quoteData: any) => void;
  setActiveTab: (tab: string) => void;
}

export const RateCalculator: React.FC<RateCalculatorProps> = ({
  onBookRate,
  setActiveTab
}) => {
  const [request, setRequest] = useState<QuoteRequest>({
    originCountry: 'United States',
    originCity: 'Los Angeles',
    destCountry: 'Germany',
    destCity: 'Frankfurt',
    weightKg: 250,
    volumeCbm: 1.5,
    transportMode: 'air',
    isTempControlled: true,
    isHazardous: false,
    includeInsurance: true,
    expressProcessing: false
  });

  const countries = [
    'United States', 'Germany', 'Japan', 'Singapore', 'United Kingdom', 
    'United Arab Emirates', 'Netherlands', 'Australia', 'China', 'France'
  ];

  // Real-time calculation engine
  const quoteResult: QuoteResult = useMemo(() => {
    let ratePerKg = 4.5; // base air rate
    let estDays = '2-3 Business Days';
    let co2Factor = 1.2;

    switch (request.transportMode) {
      case 'air':
        ratePerKg = request.expressProcessing ? 8.2 : 5.8;
        estDays = request.expressProcessing ? '24 Hours' : '2-3 Days';
        co2Factor = 1.8;
        break;
      case 'ocean':
        ratePerKg = 1.4;
        estDays = '14-21 Days';
        co2Factor = 0.3;
        break;
      case 'truck':
        ratePerKg = 2.8;
        estDays = '4-6 Days';
        co2Factor = 0.7;
        break;
      case 'rail':
        ratePerKg = 2.1;
        estDays = '8-12 Days';
        co2Factor = 0.4;
        break;
    }

    const basePrice = Math.round(request.weightKg * ratePerKg + request.volumeCbm * 120);
    const fuelSurcharge = Math.round(basePrice * 0.12);
    const insuranceFee = request.includeInsurance ? Math.round(basePrice * 0.05) + 30 : 0;
    const tempFee = request.isTempControlled ? 180 : 0;
    const hazmatFee = request.isHazardous ? 250 : 0;
    const taxDuty = Math.round((basePrice + fuelSurcharge) * 0.08);

    const totalPrice = basePrice + fuelSurcharge + insuranceFee + tempFee + hazmatFee + taxDuty;
    const co2Kg = Math.round(request.weightKg * co2Factor);

    return {
      basePrice,
      fuelSurcharge,
      insuranceFee,
      taxDuty,
      totalPrice,
      estimatedDays: estDays,
      co2Kg,
      breakdown: [
        { label: `Base Freight (${request.transportMode.toUpperCase()})`, amount: basePrice },
        { label: 'Global Fuel Surcharge (12%)', amount: fuelSurcharge },
        ...(request.includeInsurance ? [{ label: 'All-Risk Cargo Insurance', amount: insuranceFee }] : []),
        ...(request.isTempControlled ? [{ label: 'Cold-Chain Telemetry Unit', amount: tempFee }] : []),
        ...(request.isHazardous ? [{ label: 'Hazmat Safe-Handling Permit', amount: hazmatFee }] : []),
        { label: 'Estimated Customs & Import Tax', amount: taxDuty },
      ]
    };
  }, [request]);

  const handleProceedToBooking = () => {
    onBookRate({ ...request, calculatedTotal: quoteResult.totalPrice });
    setActiveTab('booking');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold">
          <Calculator className="w-4 h-4 text-orange-500" />
          <span>Instant Automated Freight Engine</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
          Global Freight Rate Calculator
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
          Calculate door-to-door freight estimates, customs tariffs, carbon footprint, and book instant cargo space in seconds.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form Inputs (7 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
        >
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            1. Origin & Destination Route
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Origin Country */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Origin Country</label>
              <select
                value={request.originCountry}
                onChange={(e) => setRequest({ ...request, originCountry: e.target.value })}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-orange-500"
              >
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Destination Country */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Destination Country</label>
              <select
                value={request.destCountry}
                onChange={(e) => setRequest({ ...request, destCountry: e.target.value })}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-orange-500"
              >
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Transport Mode Selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Transport Speed & Corridor</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'air', label: 'Air Express', icon: Plane, speed: '2-3 Days' },
                { id: 'ocean', label: 'Ocean Container', icon: Ship, speed: '14-21 Days' },
                { id: 'truck', label: 'Road Trucking', icon: Truck, speed: '4-6 Days' },
                { id: 'rail', label: 'Eco Rail', icon: Train, speed: '8-12 Days' },
              ].map((m) => {
                const Icon = m.icon;
                const isSelected = request.transportMode === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setRequest({ ...request, transportMode: m.id as TransportMode })}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-5 h-5 mx-auto mb-1" />
                    <span className="block font-bold text-xs">{m.label}</span>
                    <span className={`text-[10px] block ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>{m.speed}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cargo Weight & Dimensions */}
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 pt-2">
            2. Cargo Weight & Volume
          </h3>

          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700 dark:text-slate-300">Gross Weight (kg)</span>
                <span className="text-orange-500 font-mono font-bold">{request.weightKg} kg</span>
              </div>
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={request.weightKg}
                onChange={(e) => setRequest({ ...request, weightKg: Number(e.target.value) })}
                className="w-full accent-orange-500 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Volume (CBM)</label>
                <input
                  type="number"
                  step="0.1"
                  value={request.volumeCbm}
                  onChange={(e) => setRequest({ ...request, volumeCbm: Number(e.target.value) })}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-mono outline-none focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Priority Processing</label>
                <button
                  type="button"
                  onClick={() => setRequest({ ...request, expressProcessing: !request.expressProcessing })}
                  className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 ${
                    request.expressProcessing
                      ? 'bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400'
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${request.expressProcessing ? 'bg-amber-500' : 'bg-slate-400'}`} />
                  {request.expressProcessing ? 'Express Guaranteed' : 'Standard Queue'}
                </button>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 pt-2">
            3. Specialized Handling
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className={`p-3 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${
              request.isTempControlled ? 'bg-orange-500/10 border-orange-500 text-orange-600 dark:text-orange-400' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}>
              <input
                type="checkbox"
                checked={request.isTempControlled}
                onChange={(e) => setRequest({ ...request, isTempControlled: e.target.checked })}
                className="hidden"
              />
              <Thermometer className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold">Cold-Chain</span>
            </label>

            <label className={`p-3 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${
              request.isHazardous ? 'bg-orange-500/10 border-orange-500 text-orange-600 dark:text-orange-400' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}>
              <input
                type="checkbox"
                checked={request.isHazardous}
                onChange={(e) => setRequest({ ...request, isHazardous: e.target.checked })}
                className="hidden"
              />
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold">Hazmat Permitted</span>
            </label>

            <label className={`p-3 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${
              request.includeInsurance ? 'bg-orange-500/10 border-orange-500 text-orange-600 dark:text-orange-400' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}>
              <input
                type="checkbox"
                checked={request.includeInsurance}
                onChange={(e) => setRequest({ ...request, includeInsurance: e.target.checked })}
                className="hidden"
              />
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold">All-Risk Cargo Insured</span>
            </label>
          </div>

        </motion.div>

        {/* Right Column: Dynamic Price Summary Card (5 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B132B] to-slate-950 text-white border-2 border-orange-500/40 shadow-2xl glow-orange flex flex-col justify-between space-y-6"
        >
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Calculated Freight Quote</span>
                <h3 className="text-xl font-bold font-display">Door-to-Door Estimate</h3>
              </div>
              <div className="p-3 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>

            {/* Big Total Price */}
            <div className="my-6 text-center py-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-xs text-slate-400 font-mono">ESTIMATED TOTAL COST</span>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-orange-400 mt-1">
                ${quoteResult.totalPrice.toLocaleString()}
              </div>
              <p className="text-xs text-emerald-400 mt-1 font-semibold">
                Transit ETA: {quoteResult.estimatedDays}
              </p>
            </div>

            {/* Price Breakdown Itemized */}
            <div className="space-y-2.5 text-xs font-mono">
              {quoteResult.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between text-slate-300 border-b border-white/5 pb-1.5">
                  <span>{item.label}</span>
                  <span className="font-bold text-white">${item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>

            {/* Environmental CO2 Score */}
            <div className="mt-6 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs text-emerald-300">
              <span className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400" />
                Carbon Emissions Estimate
              </span>
              <span className="font-mono font-bold text-white">{quoteResult.co2Kg} kg CO₂e</span>
            </div>
          </div>

          {/* Book Action Button */}
          <button
            onClick={handleProceedToBooking}
            className="w-full py-4 rounded-2xl bg-gradient-brand text-white font-bold text-base hover:brightness-110 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transition-all"
          >
            <span>Lock Rate & Book Shipment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>

    </div>
  );
};
