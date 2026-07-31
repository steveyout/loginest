import React, { useState } from 'react';
import { 
  BarChart3, 
  Building2, 
  Globe2, 
  TrendingUp, 
  PackageCheck, 
  Layers, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { WAREHOUSE_HUBS } from '../data/mockShipments';

export const WarehouseAnalytics: React.FC = () => {
  const [hubs] = useState(WAREHOUSE_HUBS);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold">
          <BarChart3 className="w-4 h-4 text-orange-500" />
          <span>Global Hub Throughput</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
          Warehouse Inventory & Strategic Analytics
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Monitor cross-dock capacity, inventory turnover, and regional logistics fulfillment performance.
        </p>
      </motion.div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-2"
        >
          <span className="text-xs font-mono uppercase text-slate-500">Monthly Freight Volume</span>
          <div className="font-display text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-between">
            <span>48,920 Tons</span>
            <span className="p-2 rounded-2xl bg-orange-500/10 text-orange-500">
              <TrendingUp className="w-5 h-5" />
            </span>
          </div>
          <p className="text-xs text-emerald-500 font-medium">+18.5% YoY Global Growth</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-2"
        >
          <span className="text-xs font-mono uppercase text-slate-500">Fulfillment SLA Success</span>
          <div className="font-display text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-between">
            <span>99.82%</span>
            <span className="p-2 rounded-2xl bg-emerald-500/10 text-emerald-500">
              <ShieldCheck className="w-5 h-5" />
            </span>
          </div>
          <p className="text-xs text-emerald-500 font-medium">0.02% Exception Rate</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-2"
        >
          <span className="text-xs font-mono uppercase text-slate-500">Average Clearance Time</span>
          <div className="font-display text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-between">
            <span>2.4 Hours</span>
            <span className="p-2 rounded-2xl bg-blue-500/10 text-blue-500">
              <PackageCheck className="w-5 h-5" />
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Digital Customs Fast-Track</p>
        </motion.div>
      </div>

      {/* Warehouse Hubs Capacity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Global Hubs Capacity Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
        >
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-orange-500" />
            SuperHub Capacity Utilization
          </h3>

          <div className="space-y-5">
            {hubs.map((hub) => (
              <div key={hub.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{hub.name}</h4>
                    <p className="text-xs text-slate-500">{hub.location}, {hub.country}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold ${
                    hub.status === 'Optimal'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  }`}>
                    {hub.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-500">Occupancy Level</span>
                    <span className="font-bold text-orange-500">{hub.capacityPct}% Capacity</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${hub.capacityPct}%` }}
                      className={`h-full rounded-full ${
                        hub.capacityPct > 85 ? 'bg-amber-500' : 'bg-gradient-brand'
                      }`}
                    />
                  </div>
                </div>

                <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-1">
                  <span>Active Inventory: {hub.totalActiveShipments.toLocaleString()} Units</span>
                  <span className="text-orange-500 font-semibold cursor-pointer flex items-center gap-0.5">
                    View Manifest <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Freight Distribution Chart (SVG Visual) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-orange-500" />
              Modal Freight Breakdown
            </h3>
            <p className="text-xs text-slate-500 mt-1">Percentage share of total active tonnage across transport modes.</p>

            {/* Visual SVG Bar Chart */}
            <div className="mt-8 space-y-4">
              {[
                { label: 'Air Express Freight', pct: 42, color: 'from-orange-500 to-amber-500', amount: '$12.4M Volume' },
                { label: 'Ocean Container Freight', pct: 35, color: 'from-blue-600 to-indigo-600', amount: '$9.8M Volume' },
                { label: 'Highway Truck Corridors', pct: 15, color: 'from-emerald-500 to-teal-600', amount: '$4.1M Volume' },
                { label: 'Rail & Intermodal Cargo', pct: 8, color: 'from-purple-500 to-indigo-500', amount: '$2.2M Volume' },
              ].map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-800 dark:text-slate-200">{item.label}</span>
                    <span className="font-mono text-orange-500">{item.pct}% ({item.amount})</span>
                  </div>
                  <div className="w-full h-4 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.pct}%` }}
                      transition={{ duration: 1, delay: 0.2 * i }}
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-600 dark:text-orange-400 font-mono">
            💡 AI Warehouse Tip: Singapore Terminal cross-dock throughput is operating at 89% capacity. Consider rerouting non-urgent ocean cargo via Rotterdam.
          </div>
        </motion.div>

      </div>

    </div>
  );
};
