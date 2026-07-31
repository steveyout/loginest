import React, { useState } from 'react';
import { 
  Compass, 
  Truck, 
  Plane, 
  Ship, 
  Fuel, 
  Gauge, 
  UserCheck, 
  Navigation, 
  Zap, 
  Sparkles,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { FLEET_VEHICLES } from '../data/mockShipments';

export const FleetManager: React.FC = () => {
  const [vehicles] = useState(FLEET_VEHICLES);
  const [filterType, setFilterType] = useState('all');

  // Route Optimizer state
  const [optimizing, setOptimizing] = useState(false);
  const [optimized, setOptimized] = useState(false);

  const filteredVehicles = vehicles.filter(v => {
    if (filterType === 'all') return true;
    return v.type.toLowerCase().includes(filterType.toLowerCase());
  });

  const handleRunOptimizer = () => {
    setOptimizing(true);
    setOptimized(false);
    setTimeout(() => {
      setOptimizing(false);
      setOptimized(true);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold">
            <Compass className="w-4 h-4 text-orange-500" />
            <span>Autonomous Route Dispatch</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
            Fleet Telemetry & Route Command Center
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time telemetry, driver performance metrics, and AI corridor optimization.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {['all', 'Truck', 'Jet', 'Ship', 'EV'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                filterType === type
                  ? 'bg-gradient-brand text-white shadow-md shadow-orange-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {type === 'all' ? 'All Fleet' : `${type}s`}
            </button>
          ))}
        </div>
      </motion.div>

      {/* AI Route Optimizer Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-slate-900 to-slate-950 text-white border border-orange-500/30 shadow-2xl relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> AI Corridors & Weather Rerouting
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Simulate Dynamic Route Optimization
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Run real-time predictive satellite modeling across Rotterdam, Singapore, and LAX airlanes to save fuel and bypass weather turbulence.
            </p>
          </div>

          <button
            onClick={handleRunOptimizer}
            disabled={optimizing}
            className="px-6 py-3.5 rounded-2xl bg-gradient-brand hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-orange-500/30 shrink-0 flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {optimizing ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Running Algorithms...</span>
              </>
            ) : (
              <>
                <Navigation className="w-4 h-4" />
                <span>Optimize Active Corridors</span>
              </>
            )}
          </button>
        </div>

        {/* Optimization Output Banner */}
        {optimized && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono"
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block">FUEL CONSUMPTION SAVED</span>
              <span className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> -18.4%
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block">TRANSIT TIME REDUCTION</span>
              <span className="text-orange-400 font-bold text-lg">-4.2 Hours</span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block">CORRIDOR RE-ROUTING</span>
              <span className="text-white font-bold text-sm flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Optimal Path Lock
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Fleet Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVehicles.map((v, idx) => (
          <motion.div 
            key={v.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
                  {v.type.includes('Truck') && <Truck className="w-6 h-6" />}
                  {v.type.includes('Jet') && <Plane className="w-6 h-6" />}
                  {v.type.includes('Ship') && <Ship className="w-6 h-6" />}
                  {v.type.includes('EV') && <Zap className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className="font-mono text-lg font-bold text-slate-900 dark:text-white">{v.code}</h4>
                  <span className="text-xs text-slate-500 font-medium">{v.type}</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {v.status}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono uppercase">ASSIGNED ROUTE</span>
              <p className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                {v.currentRoute}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                <span className="text-slate-500 text-[10px] block">COMMANDER</span>
                <span className="font-bold text-slate-900 dark:text-white text-xs">{v.driverName}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                <span className="text-slate-500 text-[10px] block">ENERGY/FUEL</span>
                <span className="font-bold text-orange-500 text-xs">{v.fuelPct}%</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                <span className="text-slate-500 text-[10px] block">SPEED</span>
                <span className="font-bold text-emerald-500 text-xs">{v.speedKmh} km/h</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
