export interface RouteConfig {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

export const SITE_URL = 'https://loginestlogistics.com';

export const ROUTES: Record<string, RouteConfig> = {
  overview: {
    id: 'overview',
    slug: '/',
    title: 'Loginest Logistics Africa | Reliable Freight • Global Reach (120+ Countries)',
    description: "East Africa's premier freight forwarding enterprise headquartered at Bellway Business Park, Mombasa Road, Nairobi. Offering Trucking & Commercial Distribution, NVOCC consolidation, 45-year AOG aviation logistics, project cargo & rigging, worldwide forwarding in 120+ countries, and zero-demurrage Mombasa Port customs clearance.",
    keywords: 'Loginest Logistics Africa, Reliable Freight Global Reach, Bellway Business Park Nairobi, Mombasa Port customs clearing, NVOCC consolidation Kenya, AOG logistics JKIA, project cargo heavy rigging East Africa, trucking commercial distribution',
    canonical: `${SITE_URL}/`
  },
  about: {
    id: 'about',
    slug: '/about',
    title: 'About Us - 19+ Years Freight Leadership | Loginest Logistics Africa',
    description: 'Learn about Loginest Logistics: 19+ years experience, strategic facilities at Bellway Business Park Nairobi & Mombasa Port Gate 18, consultative supply chain problem-solving, and trusted global cargo solutions in 120+ countries.',
    keywords: 'about Loginest Logistics, 19 years freight forwarding experience Kenya, Bellway Business Park Mombasa Road, East Africa logistics leadership, freight audit trail, asset light supply chain',
    canonical: `${SITE_URL}/about`
  },
  services: {
    id: 'services',
    slug: '/services',
    title: 'Our Core Logistics Services | Loginest Logistics Africa',
    description: 'Explore our specialized logistics suite: Trucking & Commercial Distribution, NVOCC & Consolidation, 45-Year AOG Aviation Logistics, Out-of-Gauge Project Cargo Rigging, International Freight Forwarding across 120+ countries, and Mombasa Port Customs Clearance.',
    keywords: 'trucking commercial distribution Kenya, NVOCC consolidation East Africa, AOG aviation logistics JKIA, project cargo rigging Mombasa, international freight forwarding, KPA customs clearance',
    canonical: `${SITE_URL}/services`
  },
  'regional-footprint': {
    id: 'regional-footprint',
    slug: '/regional-footprint',
    title: 'Regional Footprint & 120+ Countries Network | Loginest Logistics Africa',
    description: 'Headquartered at Bellway Business Park in Nairobi, with operational branches in Mombasa, Uganda, Rwanda, Tanzania, Nigeria, and South Sudan, connected to 120+ global partner nations across Asia, Europe, and the Americas.',
    keywords: 'East Africa logistics footprint, Northern Corridor trucking, Nairobi HQ Mombasa Port, Kampala Uganda forwarding, Kigali Rwanda freight, South Sudan Juba transit cargo, Nigeria logistics hub',
    canonical: `${SITE_URL}/regional-footprint`
  },
  memberships: {
    id: 'memberships',
    slug: '/memberships',
    title: 'Our Memberships & Accreditations (KIFWA, FIATA, WCA) | Loginest Logistics Africa',
    description: 'Loginest Logistics is fully certified by KIFWA, FIATA, WCA, Kenya Ports Authority Gate 18 direct integration, KRA Authorized Economic Operator (AEO Green Lane), and IATA Cargo Agent standards.',
    keywords: 'KIFWA licensed member, FIATA freight forwarder Kenya, WCA global cargo alliance, KRA AEO certified customs agent, Kenya Ports Authority authorized partner, IATA air cargo agent',
    canonical: `${SITE_URL}/memberships`
  },
  quote: {
    id: 'quote',
    slug: '/quote',
    title: 'Instant Freight Quote & Tariff Estimation | Loginest Logistics Africa',
    description: 'Request a customized freight quotation for ocean FCL/LCL, air cargo, Mombasa Port clearance, or Northern Corridor trucking with direct WhatsApp dispatch to +254 728 346457.',
    keywords: 'Kenya freight quote, shipping rate calculator East Africa, Mombasa port clearance charges, container trucking tariffs, CBM air cargo quote, instant WhatsApp freight quote',
    canonical: `${SITE_URL}/quote`
  },
  contact: {
    id: 'contact',
    slug: '/contact',
    title: 'Contact Nairobi HQ & 24/7 Operations Desk | Loginest Logistics Africa',
    description: 'Get in touch with our team at Bellway Business Park, Mombasa Road, Nairobi. Call or WhatsApp +254 728 346457 for 24/7 port clearing, AOG aviation freight, and cargo dispatch support.',
    keywords: 'Loginest Logistics contact number, Bellway Business Park Nairobi office, Mombasa Port clearing office, East Africa freight helpline, +254 728 346457, freight WhatsApp support',
    canonical: `${SITE_URL}/contact`
  },
  faq: {
    id: 'faq',
    slug: '/faq',
    title: 'East Africa Shipping & Customs Clearance FAQ | Loginest Logistics Africa',
    description: 'Frequently asked questions on Mombasa Kilindini Port clearance, KRA Simba 2026 filings, KEBS Certificate of Conformity, SGR rail freight tariffs, and EAC cross-border procedures.',
    keywords: 'Kenya customs clearance FAQ, KRA Simba iCMS procedures, KEBS CoC inspection, Mombasa port demurrage rules, SGR rail transit times, EAC electronic cargo seal tracking',
    canonical: `${SITE_URL}/faq`
  }
};

/**
 * Resolves the active tab ID from the current browser URL (supports both pathname and hash).
 */
export function getTabFromUrl(): string {
  if (typeof window === 'undefined') return 'overview';

  // 1. Check hash first (e.g. #/about, #about, #services)
  const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
  if (hash) {
    for (const [id, config] of Object.entries(ROUTES)) {
      if (id === hash || config.slug.replace(/^\//, '') === hash) {
        return id;
      }
    }
  }

  // 2. Check pathname (e.g. /about, /services, /quote)
  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  for (const [id, config] of Object.entries(ROUTES)) {
    if (config.slug === pathname) {
      return id;
    }
  }

  // 3. Check if pathname matches an ID without leading slash
  const pathPart = pathname.replace(/^\//, '');
  if (ROUTES[pathPart]) {
    return pathPart;
  }

  return 'overview';
}

/**
 * Updates browser URL and document SEO meta tags dynamically for each page.
 */
export function updatePageSeo(tabId: string, pushHistory = true) {
  if (typeof window === 'undefined') return;

  const route = ROUTES[tabId] || ROUTES.overview;

  // 1. Update Document Title
  document.title = route.title;

  // 2. Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', route.description);

  // 3. Update Meta Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', route.keywords);

  // 4. Update OpenGraph Tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', route.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', route.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', route.canonical);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute('content', `${SITE_URL}/logo.png`);

  // 5. Update Twitter Card Tags
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', route.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', route.description);

  const twImage = document.querySelector('meta[name="twitter:image"]');
  if (twImage) twImage.setAttribute('content', `${SITE_URL}/logo.png`);

  // 6. Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', route.canonical);

  // 7. Update browser URL bar cleanly with history state
  if (pushHistory) {
    const currentPath = window.location.pathname;
    if (currentPath !== route.slug) {
      window.history.pushState({ tabId }, route.title, route.slug);
    }
  }
}
