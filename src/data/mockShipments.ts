import { Shipment, FleetVehicle, WarehouseHub } from '../types';

export const INITIAL_SHIPMENTS: Shipment[] = [
  {
    id: 'ship-1',
    trackingNumber: 'LN-8923-US',
    senderName: 'AeroTech Dynamics Inc.',
    senderCity: 'Los Angeles',
    senderCountry: 'United States',
    receiverName: 'EuroLogix Gmbh',
    receiverCity: 'Frankfurt',
    receiverCountry: 'Germany',
    originCoords: [34.0522, -118.2437],
    destCoords: [50.1109, 8.6821],
    currentCoords: [48.8566, 2.3522], // near Paris in transit
    mode: 'air',
    status: 'In Transit',
    estimatedDelivery: '2026-07-31 (Tomorrow 14:00 GMT)',
    progressPercent: 72,
    carrier: 'Loginest AirExpress One',
    vesselFlightNo: 'LN-AF904',
    telemetry: {
      temperatureC: 4.5,
      humidityPct: 42,
      shockG: 0.1,
      batteryPct: 94,
      lastUpdated: '12 mins ago'
    },
    cargoItems: [
      { name: 'Precision Avionics Sensors', quantity: 120, weightKg: 340, hsCode: '8526.10' },
      { name: 'Lithium Control Modules', quantity: 45, weightKg: 180, hsCode: '8507.60' }
    ],
    timeline: [
      {
        id: 'ts-1',
        title: 'Order Confirmed & Waybill Generated',
        location: 'Los Angeles Logistics Hub, USA',
        timestamp: '2026-07-28 08:30',
        completed: true,
        description: 'Package received at origin warehouse and scanned into Loginest network.'
      },
      {
        id: 'ts-2',
        title: 'Loaded onto Cargo Aircraft',
        location: 'LAX International Freight Terminal',
        timestamp: '2026-07-29 02:15',
        completed: true,
        description: 'Export clearance complete. Flight LN-AF904 departed for Frankfurt Air Hub.'
      },
      {
        id: 'ts-3',
        title: 'Transatlantic Flight In Progress',
        location: 'Mid-Atlantic Airspace (38,000 ft)',
        timestamp: '2026-07-30 01:10',
        completed: true,
        current: true,
        description: 'Telemetry normal. Climate control set at 4.5°C.'
      },
      {
        id: 'ts-4',
        title: 'EU Customs Clearance',
        location: 'Frankfurt Cargo City South, Germany',
        timestamp: 'Estimated 2026-07-31 06:00',
        completed: false,
        description: 'Awaiting arrival and duty inspection.'
      },
      {
        id: 'ts-5',
        title: 'Out for Final Mile Delivery',
        location: 'Frankfurt Metro Area',
        timestamp: 'Estimated 2026-07-31 12:00',
        completed: false,
        description: 'To be dispatched via Loginest EV Express Van.'
      }
    ]
  },
  {
    id: 'ship-2',
    trackingNumber: 'LN-4019-DE',
    senderName: 'Nordic CleanEnergy Corp',
    senderCity: 'Hamburg',
    senderCountry: 'Germany',
    receiverName: 'Tokyo Solar Tech',
    receiverCity: 'Tokyo',
    receiverCountry: 'Japan',
    originCoords: [53.5511, 9.9937],
    destCoords: [35.6762, 139.6503],
    currentCoords: [1.3521, 103.8198], // Singapore Strait
    mode: 'ocean',
    status: 'In Transit',
    estimatedDelivery: '2026-08-04 (10:00 JST)',
    progressPercent: 58,
    carrier: 'Loginest Ocean Pioneer',
    vesselFlightNo: 'IMO 9823411',
    telemetry: {
      temperatureC: 18.2,
      humidityPct: 55,
      shockG: 0.2,
      batteryPct: 88,
      lastUpdated: '35 mins ago'
    },
    cargoItems: [
      { name: 'Monocrystalline Silicon Wafers', quantity: 500, weightKg: 12500, hsCode: '3818.00' }
    ],
    timeline: [
      {
        id: 'ts-1',
        title: 'Container Loaded & Sealed',
        location: 'Port of Hamburg Terminal 3',
        timestamp: '2026-07-20 11:00',
        completed: true,
        description: '40ft High Cube Container LN-HU-902 checked and sealed.'
      },
      {
        id: 'ts-2',
        title: 'Departed Port of Hamburg',
        location: 'Elbe River Outlet',
        timestamp: '2026-07-21 04:30',
        completed: true,
        description: 'Vessel underway toward Suez Canal transit.'
      },
      {
        id: 'ts-3',
        title: 'Singapore Strait Waypoint Passed',
        location: 'Loginest Singapore Hub',
        timestamp: '2026-07-29 18:00',
        completed: true,
        current: true,
        description: 'Container refueled and automated security scan verified.'
      },
      {
        id: 'ts-4',
        title: 'Docking at Tokyo Port Container Terminal',
        location: 'Tokyo Bay, Japan',
        timestamp: 'Estimated 2026-08-03 08:00',
        completed: false,
        description: 'Scheduled for offloading and local port customs.'
      },
      {
        id: 'ts-5',
        title: 'Final Destination Handover',
        location: 'Chiba Industrial Park',
        timestamp: 'Estimated 2026-08-04 10:00',
        completed: false,
        description: 'Express drayage truck assigned.'
      }
    ]
  },
  {
    id: 'ship-3',
    trackingNumber: 'LN-7731-JP',
    senderName: 'Kyoto Robotics Lab',
    senderCity: 'Kyoto',
    senderCountry: 'Japan',
    receiverName: 'London BioMed Institute',
    receiverCity: 'London',
    receiverCountry: 'United Kingdom',
    originCoords: [35.0116, 135.7681],
    destCoords: [51.5074, -0.1278],
    currentCoords: [51.5074, -0.1278],
    mode: 'truck',
    status: 'Delivered',
    estimatedDelivery: 'Delivered Today at 10:15 GMT',
    progressPercent: 100,
    carrier: 'Loginest UK Courier Fleet',
    vesselFlightNo: 'VAN-UK-88',
    telemetry: {
      temperatureC: 2.1,
      humidityPct: 38,
      shockG: 0.05,
      batteryPct: 100,
      lastUpdated: '1 hour ago'
    },
    cargoItems: [
      { name: 'Surgical Assist Robotic Arms', quantity: 2, weightKg: 420, hsCode: '9018.90' }
    ],
    timeline: [
      {
        id: 'ts-1',
        title: 'Picked up from Kyoto Facility',
        location: 'Kyoto High-Tech Hub',
        timestamp: '2026-07-25 09:00',
        completed: true,
        description: 'White-glove climate packaging applied.'
      },
      {
        id: 'ts-2',
        title: 'Arrived at London Heathrow Air Cargo',
        location: 'LHR Airport Terminal 4 Cargo',
        timestamp: '2026-07-29 20:45',
        completed: true,
        description: 'Fast-track medical equipment clearance.'
      },
      {
        id: 'ts-3',
        title: 'Out for Final Delivery',
        location: 'London Central Dispatch',
        timestamp: '2026-07-30 08:00',
        completed: true,
        description: 'Onboard EV Van UK-88 with biometric signature requirement.'
      },
      {
        id: 'ts-4',
        title: 'Package Successfully Delivered',
        location: 'London BioMed Campus - Gate 2',
        timestamp: '2026-07-30 10:15',
        completed: true,
        current: true,
        description: 'Signed by Dr. H. Vance. Proof of delivery uploaded to Loginest ledger.'
      }
    ]
  }
];

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'v-1',
    code: 'LN-TRK-901',
    type: 'Heavy Truck',
    driverName: 'Marcus Vance',
    status: 'In Transit',
    currentRoute: 'Rotterdam Hub ➔ Berlin Freight Depot',
    fuelPct: 82,
    speedKmh: 88,
    efficiencyRating: 'A+ (98.4%)'
  },
  {
    id: 'v-2',
    code: 'LN-JET-004',
    type: 'Cargo Jet',
    driverName: 'Capt. Sarah Jenkins',
    status: 'In Transit',
    currentRoute: 'Chicago O\'Hare ➔ Frankfurt Air City',
    fuelPct: 65,
    speedKmh: 870,
    efficiencyRating: 'A (95.1%)'
  },
  {
    id: 'v-3',
    code: 'LN-SHP-882',
    type: 'Container Ship',
    driverName: 'Cmdr. Kenji Takahashi',
    status: 'In Transit',
    currentRoute: 'Port of Singapore ➔ Suez Canal ➔ Hamburg',
    fuelPct: 91,
    speedKmh: 38,
    efficiencyRating: 'A+ (99.1%)'
  },
  {
    id: 'v-4',
    code: 'LN-EV-102',
    type: 'EV Delivery Van',
    driverName: 'Elena Rostova',
    status: 'Loading',
    currentRoute: 'London City Gateway ➔ Metro Parcels',
    fuelPct: 100,
    speedKmh: 0,
    efficiencyRating: 'Eco-Max (100%)'
  }
];

export const WAREHOUSE_HUBS: WarehouseHub[] = [
  {
    id: 'wh-1',
    name: 'Rotterdam SuperHub',
    location: 'Rotterdam Port Area',
    country: 'Netherlands',
    capacityPct: 78,
    totalActiveShipments: 4210,
    status: 'Optimal'
  },
  {
    id: 'wh-2',
    name: 'Singapore Gateway Terminal',
    location: 'Changi Logistics Zone',
    country: 'Singapore',
    capacityPct: 89,
    totalActiveShipments: 5890,
    status: 'High Demand'
  },
  {
    id: 'wh-3',
    name: 'Chicago Central Inland Port',
    location: 'Illinois Freight Corridor',
    country: 'United States',
    capacityPct: 64,
    totalActiveShipments: 3120,
    status: 'Optimal'
  },
  {
    id: 'wh-4',
    name: 'Dubai Aerotropolis Hub',
    location: 'Al Maktoum Int Airport',
    country: 'United Arab Emirates',
    capacityPct: 71,
    totalActiveShipments: 2980,
    status: 'Optimal'
  }
];
