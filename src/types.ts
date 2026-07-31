export type Theme = 'light' | 'dark';

export type TransportMode = 'air' | 'ocean' | 'truck' | 'rail';

export type ShipmentStatus = 
  | 'Order Placed'
  | 'Pickup Scheduled'
  | 'In Warehouse'
  | 'In Transit'
  | 'Customs Clearance'
  | 'Out for Delivery'
  | 'Delivered'
  | 'Exception';

export interface TrackingStep {
  id: string;
  title: string;
  location: string;
  timestamp: string;
  completed: boolean;
  current?: boolean;
  description: string;
}

export interface CargoItem {
  name: string;
  quantity: number;
  weightKg: number;
  hsCode?: string;
}

export interface TelemetryData {
  temperatureC: number;
  humidityPct: number;
  shockG: number;
  batteryPct: number;
  lastUpdated: string;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  senderName: string;
  senderCity: string;
  senderCountry: string;
  receiverName: string;
  receiverCity: string;
  receiverCountry: string;
  originCoords: [number, number]; // [lat, lng]
  destCoords: [number, number];
  currentCoords: [number, number];
  mode: TransportMode;
  status: ShipmentStatus;
  estimatedDelivery: string;
  progressPercent: number;
  cargoItems: CargoItem[];
  telemetry?: TelemetryData;
  timeline: TrackingStep[];
  carrier: string;
  vesselFlightNo: string;
}

export interface QuoteRequest {
  originCountry: string;
  originCity: string;
  destCountry: string;
  destCity: string;
  weightKg: number;
  volumeCbm: number;
  transportMode: TransportMode;
  isTempControlled: boolean;
  isHazardous: boolean;
  includeInsurance: boolean;
  expressProcessing: boolean;
}

export interface QuoteResult {
  basePrice: number;
  fuelSurcharge: number;
  insuranceFee: number;
  taxDuty: number;
  totalPrice: number;
  estimatedDays: string;
  co2Kg: number;
  breakdown: { label: string; amount: number }[];
}

export interface FleetVehicle {
  id: string;
  code: string;
  type: 'Heavy Truck' | 'Cargo Jet' | 'Container Ship' | 'EV Delivery Van';
  driverName: string;
  status: 'In Transit' | 'Loading' | 'Refueling' | 'Maintenance' | 'Idle';
  currentRoute: string;
  fuelPct: number;
  speedKmh: number;
  efficiencyRating: string;
}

export interface WarehouseHub {
  id: string;
  name: string;
  location: string;
  country: string;
  capacityPct: number;
  totalActiveShipments: number;
  status: 'Optimal' | 'High Demand' | 'Maintenance';
}
