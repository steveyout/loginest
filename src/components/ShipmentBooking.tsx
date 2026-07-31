import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Printer, 
  ArrowRight,
  ShieldCheck,
  Package,
  MapPin,
  QrCode
} from 'lucide-react';
import { motion } from 'motion/react';
import { Shipment, TransportMode } from '../types';

interface ShipmentBookingProps {
  onAddNewShipment: (newShipment: Shipment) => void;
  setActiveTab: (tab: string) => void;
  prefillQuoteData?: any;
}

export const ShipmentBooking: React.FC<ShipmentBookingProps> = ({
  onAddNewShipment,
  setActiveTab,
  prefillQuoteData
}) => {
  const [senderName, setSenderName] = useState('Global Tech Systems');
  const [senderCity, setSenderCity] = useState(prefillQuoteData?.originCity || 'Los Angeles');
  const [senderCountry, setSenderCountry] = useState(prefillQuoteData?.originCountry || 'United States');
  
  const [receiverName, setReceiverName] = useState('Tokyo Digital Hub');
  const [receiverCity, setReceiverCity] = useState(prefillQuoteData?.destCity || 'Tokyo');
  const [receiverCountry, setReceiverCountry] = useState(prefillQuoteData?.destCountry || 'Japan');

  const [transportMode, setTransportMode] = useState<TransportMode>(prefillQuoteData?.transportMode || 'air');
  const [carrier, setCarrier] = useState('Loginest Express Cargo');

  const [cargoItems, setCargoItems] = useState([
    { name: 'Industrial Controller Units', quantity: 10, weightKg: 120, hsCode: '8537.10' }
  ]);

  const [isSuccess, setIsSuccess] = useState(false);
  const [createdTrackingCode, setCreatedTrackingCode] = useState('');

  const handleAddItem = () => {
    setCargoItems([
      ...cargoItems,
      { name: 'Spare Parts Module', quantity: 1, weightKg: 20, hsCode: '8409.91' }
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (cargoItems.length > 1) {
      setCargoItems(cargoItems.filter((_, i) => i !== index));
    }
  };

  const handleCreateShipment = (e: React.FormEvent) => {
    e.preventDefault();

    const newCode = `LN-${Math.floor(1000 + Math.random() * 9000)}-${senderCountry.substring(0, 2).toUpperCase()}`;

    const totalWeight = cargoItems.reduce((acc, item) => acc + item.weightKg, 0);

    const newShipment: Shipment = {
      id: `ship-${Date.now()}`,
      trackingNumber: newCode,
      senderName,
      senderCity,
      senderCountry,
      receiverName,
      receiverCity,
      receiverCountry,
      originCoords: [34.0522, -118.2437],
      destCoords: [35.6762, 139.6503],
      currentCoords: [34.0522, -118.2437],
      mode: transportMode,
      status: 'Order Placed',
      estimatedDelivery: '3 Days from Dispatch',
      progressPercent: 10,
      carrier,
      vesselFlightNo: `LN-${transportMode.toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      telemetry: {
        temperatureC: 5.0,
        humidityPct: 40,
        shockG: 0.0,
        batteryPct: 100,
        lastUpdated: 'Just now'
      },
      cargoItems,
      timeline: [
        {
          id: 'ts-1',
          title: 'Order Placed & Digital Waybill Issued',
          location: `${senderCity} Loginest Depot`,
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
          completed: true,
          current: true,
          description: 'Package booking verified and dispatched to courier assignment.'
        },
        {
          id: 'ts-2',
          title: 'Scheduled Port Terminal Dispatch',
          location: `${senderCity} International Cargo City`,
          timestamp: 'Scheduled Today 18:00',
          completed: false,
          description: 'Customs declaration & barcode seal application.'
        }
      ]
    };

    onAddNewShipment(newShipment);
    setCreatedTrackingCode(newCode);
    setIsSuccess(true);
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
          <FileText className="w-4 h-4 text-orange-500" />
          <span>Automated Shipping Label & Waybill Dispatch</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
          Book New Freight Shipment
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Generate official international waybill barcodes, book cargo space, and obtain instant digital proof of dispatch.
        </p>
      </motion.div>

      {/* Booking Success Screen */}
      {isSuccess ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto p-8 rounded-3xl bg-white dark:bg-[#0B132B] border-2 border-emerald-500/50 shadow-2xl text-center space-y-6"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 border-2 border-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">Booking Confirmed</span>
            <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Shipment Successfully Dispatched
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Your official Loginest waybill has been created and assigned to the active telemetry network.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <span className="text-xs text-slate-500 block">ASSIGNED TRACKING ID</span>
            <span className="text-2xl font-extrabold text-orange-500">{createdTrackingCode}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => {
                setActiveTab('tracking');
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-brand text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              <span>View in Live Telemetry Tracker</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setIsSuccess(false);
              }}
              className="w-full py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Book Another Shipment
            </button>
          </div>
        </motion.div>
      ) : (
        /* Form & Label Preview Layout */
        <form onSubmit={handleCreateShipment} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
          >
            {/* Shipper Section */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                Shipper (Origin Party)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1 sm:col-span-3">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Company / Shipper Name</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Origin City</label>
                  <input
                    type="text"
                    required
                    value={senderCity}
                    onChange={(e) => setSenderCity(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Origin Country</label>
                  <input
                    type="text"
                    required
                    value={senderCountry}
                    onChange={(e) => setSenderCountry(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Consignee Section */}
            <div className="space-y-4 pt-2">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <MapPin className="w-5 h-5 text-emerald-500" />
                Consignee (Receiver Party)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1 sm:col-span-3">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Receiver Name / Entity</label>
                  <input
                    type="text"
                    required
                    value={receiverName}
                    onChange={(e) => setReceiverName(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Destination City</label>
                  <input
                    type="text"
                    required
                    value={receiverCity}
                    onChange={(e) => setReceiverCity(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Destination Country</label>
                  <input
                    type="text"
                    required
                    value={receiverCountry}
                    onChange={(e) => setReceiverCountry(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Cargo Items Manager */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Package className="w-5 h-5 text-purple-500" />
                  Cargo Item Manifest
                </h3>
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="px-3 py-1.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold flex items-center gap-1 border border-orange-500/20"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Item
                </button>
              </div>

              {cargoItems.map((item, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[10px] font-semibold text-slate-500">Item Description</label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => {
                        const updated = [...cargoItems];
                        updated[index].name = e.target.value;
                        setCargoItems(updated);
                      }}
                      className="w-full py-2 px-2.5 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs border border-slate-200 dark:border-slate-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-slate-500">Weight (kg)</label>
                    <input
                      type="number"
                      value={item.weightKg}
                      onChange={(e) => {
                        const updated = [...cargoItems];
                        updated[index].weightKg = Number(e.target.value);
                        setCargoItems(updated);
                      }}
                      className="w-full py-2 px-2.5 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs font-mono border border-slate-200 dark:border-slate-800 outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {cargoItems.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(index)}
                        className="p-2 rounded-lg bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 text-xs font-bold"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-brand text-white font-bold text-base hover:brightness-110 shadow-xl shadow-orange-500/20 transition-all"
            >
              Issue Waybill & Dispatch Shipment
            </button>
          </motion.div>

          {/* Right Label Live Preview (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 p-6 rounded-3xl bg-white text-slate-900 border-4 border-slate-900 shadow-2xl space-y-4"
          >
            <div className="flex justify-between items-center border-b-2 border-slate-900 pb-3">
              <div>
                <span className="font-extrabold text-xl tracking-tight">LOGINEST CARGO</span>
                <p className="text-[10px] font-mono font-bold text-slate-600">AIR & SEA FREIGHT LABEL</p>
              </div>
              <div className="text-right">
                <span className="px-2 py-0.5 bg-slate-900 text-white font-mono text-[10px] font-bold rounded">
                  {transportMode.toUpperCase()} FREIGHT
                </span>
              </div>
            </div>

            <div className="p-3 bg-slate-100 rounded-xl space-y-1 font-mono text-xs border border-slate-300">
              <span className="text-[10px] text-slate-500 font-bold">FROM:</span>
              <p className="font-bold text-slate-900">{senderName}</p>
              <p className="text-slate-700">{senderCity}, {senderCountry}</p>
            </div>

            <div className="p-3 bg-slate-100 rounded-xl space-y-1 font-mono text-xs border border-slate-300">
              <span className="text-[10px] text-slate-500 font-bold">TO:</span>
              <p className="font-bold text-slate-900">{receiverName}</p>
              <p className="text-slate-700">{receiverCity}, {receiverCountry}</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 text-center space-y-2">
              <QrCode className="w-16 h-16 mx-auto text-slate-900" />
              <div className="font-mono text-xs font-bold tracking-widest text-slate-800">
                SCANNABLE TELEMETRY QR
              </div>
            </div>

            <div className="text-center pt-2">
              <span className="text-[10px] font-mono text-slate-500">Official Waybill Specification ISO-9001</span>
            </div>
          </motion.div>

        </form>
      )}

    </div>
  );
};
