import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const SITE_URL = 'https://loginestlogistics.com';

interface RouteMetadata {
  slug: string;
  tabId: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  heading: string;
  subheading: string;
  contentHtml: string;
  priority: string;
  changefreq: string;
}

const ROUTES_DATA: RouteMetadata[] = [
  {
    slug: '/',
    tabId: 'overview',
    title: 'Loginest Logistics Africa | Reliable Freight • Global Reach (120+ Countries)',
    description: "East Africa's premier freight forwarding enterprise headquartered at Bellway Business Park, Mombasa Road, Nairobi. Offering Trucking & Commercial Distribution, NVOCC consolidation, 45-year AOG aviation logistics, project cargo & rigging, worldwide forwarding in 120+ countries, and zero-demurrage Mombasa Port customs clearance.",
    keywords: 'Loginest Logistics Africa, Reliable Freight Global Reach, Bellway Business Park Nairobi, Mombasa Port customs clearing, NVOCC consolidation Kenya, AOG logistics JKIA, project cargo heavy rigging East Africa, trucking commercial distribution',
    canonical: `${SITE_URL}/`,
    priority: '1.0',
    changefreq: 'daily',
    heading: 'Reliable Freight • Global Reach Across 120+ Countries',
    subheading: "East Africa's premier freight forwarding and customs clearance enterprise headquartered at Bellway Business Park, Mombasa Road, Nairobi.",
    contentHtml: `
      <section class="prose max-w-5xl mx-auto py-12 px-6">
        <h1 class="text-4xl font-extrabold text-[#06122E] mb-4">Reliable Freight • Global Reach Across 120+ Countries</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-6">
          Loginest Logistics Africa is an industry-leading freight and multi-modal logistics enterprise headquartered at 
          <strong>Bellway Business Park, Mombasa Road, Nairobi, Kenya</strong> with operational harbor desks at <strong>Port of Mombasa Gate 18</strong>.
          We provide audited end-to-end supply chain orchestration across Kenya, Uganda, Rwanda, Tanzania, South Sudan, Nigeria, and over 120 partner nations globally.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 class="text-xl font-bold text-[#06122E] mb-2">19+ Years Leadership</h3>
            <p class="text-slate-600 text-sm">Established operational excellence delivering secure, audited logistics across East Africa and worldwide trade corridors.</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 class="text-xl font-bold text-[#06122E] mb-2">120+ Partner Nations</h3>
            <p class="text-slate-600 text-sm">Direct ocean carrier contracts and IATA air freight networks connecting Asia, Europe, the Americas, and Africa.</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 class="text-xl font-bold text-[#06122E] mb-2">Zero-Demurrage Clearance</h3>
            <p class="text-slate-600 text-sm">KRA Authorized Economic Operator (AEO Green Lane) expedited customs clearance through Kilindini Harbor Gate 18.</p>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-[#06122E] mt-10 mb-4">Our Core Freight Forwarding Capabilities</h2>
        <ul class="list-disc pl-6 space-y-3 text-slate-700">
          <li><strong>Trucking & Commercial Distribution:</strong> GPS-tracked fleet servicing Kenya's Northern Corridor, Uganda, Rwanda, and the EAC hinterland.</li>
          <li><strong>NVOCC & Cargo Consolidation:</strong> Weekly scheduled LCL ocean consolidation with dedicated CFS destuffing and bonded warehousing.</li>
          <li><strong>45-Year AOG Emergency Aviation Logistics:</strong> Round-the-clock priority air freight clearance at JKIA Nairobi for critical aircraft components.</li>
          <li><strong>Project Logistics & Heavy Rigging:</strong> Hydraulic multi-axle trailers, specialized cranes, and escort permits for out-of-gauge industrial machinery.</li>
          <li><strong>International Freight Forwarding:</strong> Full Container Load (FCL), Less than Container Load (LCL), and scheduled air cargo charters across 120+ countries.</li>
          <li><strong>Customs Brokerage & Port Operations:</strong> Direct integration with KPA and KRA Simba/iCMS systems for pre-arrival clearance and tariff compliance.</li>
        </ul>
        <div class="mt-8 p-6 bg-slate-100 rounded-xl border border-slate-200">
          <p class="text-slate-800 font-semibold mb-2">Need an immediate rate quote or customs consultation?</p>
          <p class="text-slate-600 text-sm">Speak directly with our 24/7 Operations Desk at Bellway Business Park Nairobi or reach us via WhatsApp at <a href="https://wa.me/254728346457" class="text-[#FF5500] font-bold underline">+254 728 346457</a>.</p>
        </div>
      </section>
    `
  },
  {
    slug: '/about',
    tabId: 'about',
    title: 'About Us - 19+ Years Freight Leadership | Loginest Logistics Africa',
    description: 'Learn about Loginest Logistics: 19+ years experience, strategic facilities at Bellway Business Park Nairobi & Mombasa Port Gate 18, consultative supply chain problem-solving, and trusted global cargo solutions in 120+ countries.',
    keywords: 'about Loginest Logistics, 19 years freight forwarding experience Kenya, Bellway Business Park Mombasa Road, East Africa logistics leadership, freight audit trail, asset light supply chain',
    canonical: `${SITE_URL}/about`,
    priority: '0.8',
    changefreq: 'monthly',
    heading: 'About Loginest Logistics Africa - 19+ Years Freight Leadership',
    subheading: 'Consultative supply chain architecture, direct port integration, and trusted cargo dispatch spanning 120+ countries.',
    contentHtml: `
      <section class="prose max-w-5xl mx-auto py-12 px-6">
        <h1 class="text-4xl font-extrabold text-[#06122E] mb-4">About Loginest Logistics Africa</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-6">
          With over 19 years of verified operational leadership, Loginest Logistics Africa provides comprehensive freight forwarding,
          customs brokerage, and multi-modal transit solutions throughout East & Central Africa and across 120+ global partner nations.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-3">Headquarters: Bellway Business Park</h2>
            <p class="text-slate-600 text-sm">
              Our central executive headquarters and logistics coordination command are located at 
              <strong>Bellway Business Park, Mombasa Road, P.O Box 451-00521 Nairobi, Kenya</strong>. 
              Equipped with real-time telematics, continuous transit monitoring, and bonded logistics management.
            </p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-3">Port Operations: Mombasa Gate 18</h2>
            <p class="text-slate-600 text-sm">
              Our dedicated harbor desk directly at Kenya Ports Authority Gate 18 in Kilindini Harbor handles 
              immediate container destuffing, pre-arrival vessel clearance, and zero-demurrage cargo dispatch across the Northern Corridor.
            </p>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-[#06122E] mt-8 mb-4">Our Institutional Accreditations</h2>
        <p class="text-slate-700 mb-4">
          Loginest Logistics maintains premier tier credentials with all governing transport and customs authorities:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>KIFWA</strong> — Full Licensed Member of the Kenya International Freight and Warehousing Association.</li>
          <li><strong>FIATA</strong> — International Federation of Freight Forwarders Associations certified standard of trading.</li>
          <li><strong>WCA</strong> — World Cargo Alliance verified global partner network spanning 120+ countries.</li>
          <li><strong>KRA AEO</strong> — Kenya Revenue Authority Authorized Economic Operator Green Lane status for express clearance.</li>
        </ul>
        <div class="mt-8">
          <a href="/services" class="text-[#0077D7] font-semibold underline hover:text-[#06122E]">Explore our specialized logistics services →</a>
        </div>
      </section>
    `
  },
  {
    slug: '/services',
    tabId: 'services',
    title: 'Our Core Logistics Services | Loginest Logistics Africa',
    description: 'Explore our specialized logistics suite: Trucking & Commercial Distribution, NVOCC & Consolidation, 45-Year AOG Aviation Logistics, Out-of-Gauge Project Cargo Rigging, International Freight Forwarding across 120+ countries, and Mombasa Port Customs Clearance.',
    keywords: 'trucking commercial distribution Kenya, NVOCC consolidation East Africa, AOG aviation logistics JKIA, project cargo rigging Mombasa, international freight forwarding, KPA customs clearance',
    canonical: `${SITE_URL}/services`,
    priority: '0.9',
    changefreq: 'weekly',
    heading: 'Core Freight & Supply Chain Services',
    subheading: 'Six specialized disciplines engineered for punctuality, cargo integrity, and total customs compliance.',
    contentHtml: `
      <section class="prose max-w-5xl mx-auto py-12 px-6">
        <h1 class="text-4xl font-extrabold text-[#06122E] mb-4">Our Core Freight & Supply Chain Services</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          From full container loads arriving at Kilindini Port to emergency AOG aircraft parts flown into JKIA, 
          Loginest Logistics Africa delivers audited logistics solutions tailored for multinational corporations, industrial manufacturers, and commercial importers.
        </p>
        <div class="space-y-8">
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold text-[#06122E] mb-2">1. Trucking & Commercial Distribution</h2>
            <p class="text-slate-600 mb-3">
              Comprehensive domestic and cross-border transport connecting Mombasa, Nairobi, Kisumu, Eldoret, Kampala (Uganda), Kigali (Rwanda), 
              and Juba (South Sudan). Our modern fleet features live GPS tracking, digital tamper-evident geo-fencing, and cargo insurance.
            </p>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#FF5500]">Northern Corridor Fleet • Cross-Border Bonded Transit</span>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold text-[#06122E] mb-2">2. NVOCC & Cargo Consolidation</h2>
            <p class="text-slate-600 mb-3">
              Weekly scheduled Less-than-Container Load (LCL) consolidation services from major ports in China, Europe, India, the UAE, and the USA. 
              We offer dedicated Container Freight Station (CFS) destuffing, secure bonded warehousing, and unified cargo tracking.
            </p>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#0077D7]">Weekly LCL Consolidation • Bonded Warehousing</span>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold text-[#06122E] mb-2">3. 45-Year AOG (Aircraft On Ground) Aviation Logistics</h2>
            <p class="text-slate-600 mb-3">
              Mission-critical emergency logistics for commercial airlines, MROs, and charter operators. 
              Our 24/7 aviation desk at Jomo Kenyatta International Airport (JKIA) provides 60-minute customs clearance for engines, avionics, and structural components.
            </p>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#FF5500]">24/7 JKIA Airfield Clearance • 60-Minute Tarmac Handover</span>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold text-[#06122E] mb-2">4. Project Logistics & Heavy Rigging</h2>
            <p class="text-slate-600 mb-3">
              Turnkey solutions for out-of-gauge (OOG) and heavy-lift equipment serving geothermal, wind energy, road construction, 
              and mining infrastructure projects throughout East Africa with full route reconnaissance and specialized multi-axle trailers.
            </p>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#0077D7]">Multi-Axle Hydraulic Trailers • Turnkey Engineering Escorts</span>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold text-[#06122E] mb-2">5. International Freight Forwarding (120+ Countries)</h2>
            <p class="text-slate-600 mb-3">
              Global multi-modal freight covering air, ocean (FCL/LCL), and multimodal rail/road connections with premier shipping lines and airlines. 
              Direct service contracts provide competitive freight rates, space guarantees, and end-to-end visibility.
            </p>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#FF5500]">WCA Verified Network • 120+ Partner Nations</span>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold text-[#06122E] mb-2">6. Mombasa Port Customs Clearance</h2>
            <p class="text-slate-600 mb-3">
              Zero-demurrage customs clearance utilizing KRA AEO Green Lane status and direct integration with Kenya Ports Authority Gate 18. 
              Pre-clearance documentation, KEBS Certificate of Conformity compliance, and automated manifest filings.
            </p>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#0077D7]">KPA Gate 18 Office • KRA AEO Green Lane Priority</span>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: '/regional-footprint',
    tabId: 'regional-footprint',
    title: 'Regional Footprint & 120+ Countries Network | Loginest Logistics Africa',
    description: 'Headquartered at Bellway Business Park in Nairobi, with operational branches in Mombasa, Uganda, Rwanda, Tanzania, Nigeria, and South Sudan, connected to 120+ global partner nations across Asia, Europe, and the Americas.',
    keywords: 'East Africa logistics footprint, Northern Corridor trucking, Nairobi HQ Mombasa Port, Kampala Uganda forwarding, Kigali Rwanda freight, South Sudan Juba transit cargo, Nigeria logistics hub',
    canonical: `${SITE_URL}/regional-footprint`,
    priority: '0.8',
    changefreq: 'monthly',
    heading: 'Regional Footprint & Global Trade Corridors',
    subheading: 'Direct operational control across East Africa, linked to 120+ partner nations worldwide.',
    contentHtml: `
      <section class="prose max-w-5xl mx-auto py-12 px-6">
        <h1 class="text-4xl font-extrabold text-[#06122E] mb-4">Regional Footprint & Global Trade Corridors</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Loginest Logistics Africa bridges regional East African transit with major worldwide shipping corridors.
          Our strategic physical offices and border station operations ensure uninterrupted cargo movement across international boundaries.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-5 bg-white border border-slate-200 rounded-xl">
            <h3 class="text-lg font-bold text-[#06122E] mb-1">Nairobi, Kenya (HQ)</h3>
            <p class="text-sm text-slate-600 mb-2">Bellway Business Park, Mombasa Road</p>
            <p class="text-xs text-slate-500">Corporate HQ, Central Telematics Center, JKIA Air Cargo Operations.</p>
          </div>
          <div class="p-5 bg-white border border-slate-200 rounded-xl">
            <h3 class="text-lg font-bold text-[#06122E] mb-1">Mombasa, Kenya</h3>
            <p class="text-sm text-slate-600 mb-2">Port of Mombasa Gate 18, Kilindini</p>
            <p class="text-xs text-slate-500">Direct Port Clearing Desk, CFS Warehousing, SGR Rail Loading.</p>
          </div>
          <div class="p-5 bg-white border border-slate-200 rounded-xl">
            <h3 class="text-lg font-bold text-[#06122E] mb-1">Kampala, Uganda</h3>
            <p class="text-sm text-slate-600 mb-2">Industrial Area Logistics Hub</p>
            <p class="text-xs text-slate-500">Uganda customs clearance, transit cargo handover via Malaba border.</p>
          </div>
          <div class="p-5 bg-white border border-slate-200 rounded-xl">
            <h3 class="text-lg font-bold text-[#06122E] mb-1">Kigali, Rwanda</h3>
            <p class="text-sm text-slate-600 mb-2">Kigali Special Economic Zone</p>
            <p class="text-xs text-slate-500">Direct transit routing via Gatuna and Cyanika border posts.</p>
          </div>
          <div class="p-5 bg-white border border-slate-200 rounded-xl">
            <h3 class="text-lg font-bold text-[#06122E] mb-1">Juba, South Sudan</h3>
            <p class="text-sm text-slate-600 mb-2">Customs Transit Desk</p>
            <p class="text-xs text-slate-500">EAC Electronic Cargo Tracking System (ECTS) monitored convoys.</p>
          </div>
          <div class="p-5 bg-white border border-slate-200 rounded-xl">
            <h3 class="text-lg font-bold text-[#06122E] mb-1">Worldwide (120+ Countries)</h3>
            <p class="text-sm text-slate-600 mb-2">WCA Global Alliances</p>
            <p class="text-xs text-slate-500">Direct carrier contracts across China, India, Europe, UAE, and the USA.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: '/memberships',
    tabId: 'memberships',
    title: 'Our Memberships & Accreditations (KIFWA, FIATA, WCA) | Loginest Logistics Africa',
    description: 'Loginest Logistics is fully certified by KIFWA, FIATA, WCA, Kenya Ports Authority Gate 18 direct integration, KRA Authorized Economic Operator (AEO Green Lane), and IATA Cargo Agent standards.',
    keywords: 'KIFWA licensed member, FIATA freight forwarder Kenya, WCA global cargo alliance, KRA AEO certified customs agent, Kenya Ports Authority authorized partner, IATA air cargo agent',
    canonical: `${SITE_URL}/memberships`,
    priority: '0.7',
    changefreq: 'monthly',
    heading: 'Accreditations, Compliance & Regulatory Approvals',
    subheading: 'Verified memberships in national and international regulatory bodies safeguarding your cargo.',
    contentHtml: `
      <section class="prose max-w-5xl mx-auto py-12 px-6">
        <h1 class="text-4xl font-extrabold text-[#06122E] mb-4">Accreditations, Compliance & Regulatory Approvals</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Compliance is the foundation of dependable freight operations. Loginest Logistics Africa operates strictly in compliance 
          with international maritime and aviation standards, holding active licenses and certifications from leading bodies:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">KIFWA Membership</h2>
            <p class="text-slate-600 text-sm">Active registered member of the Kenya International Freight and Warehousing Association, upholding industry best practices and ethical standards.</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">FIATA Certification</h2>
            <p class="text-slate-600 text-sm">International Federation of Freight Forwarders Associations adherence, enabling internationally recognized FIATA Bills of Lading and multimodal transport docs.</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">WCA Inter Global Network</h2>
            <p class="text-slate-600 text-sm">Certified member of the World Cargo Alliance, ensuring audited reciprocal partner agents across 120+ countries with financial protection guarantees.</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">KRA Authorized Economic Operator (AEO)</h2>
            <p class="text-slate-600 text-sm">Accredited by the Kenya Revenue Authority as an AEO Green Lane operator, providing priority clearance, reduced inspections, and faster cargo turnaround.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: '/quote',
    tabId: 'quote',
    title: 'Instant Freight Quote & Tariff Estimation | Loginest Logistics Africa',
    description: 'Request a customized freight quotation for ocean FCL/LCL, air cargo, Mombasa Port clearance, or Northern Corridor trucking with direct WhatsApp dispatch to +254 728 346457.',
    keywords: 'Kenya freight quote, shipping rate calculator East Africa, Mombasa port clearance charges, container trucking tariffs, CBM air cargo quote, instant WhatsApp freight quote',
    canonical: `${SITE_URL}/quote`,
    priority: '0.9',
    changefreq: 'weekly',
    heading: 'Instant Freight Rate Estimation & WhatsApp Dispatch',
    subheading: 'Accurate cost projections for air, ocean, trucking, and customs clearance with direct dispatch to our 24/7 Operations Desk.',
    contentHtml: `
      <section class="prose max-w-5xl mx-auto py-12 px-6">
        <h1 class="text-4xl font-extrabold text-[#06122E] mb-4">Instant Freight Rate Estimation & Quotation</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-6">
          Calculate estimated freight shipping charges for ocean FCL/LCL, air cargo, cross-border trucking, or customs clearance. 
          All requests are directly reviewed and confirmed by our senior freight brokers.
        </p>
        <div class="p-8 bg-slate-100 rounded-2xl border border-slate-200 max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold text-[#06122E] mb-3">Speak Directly With Our Freight Desk</h2>
          <p class="text-slate-600 mb-6">For instant cargo rate confirmations and vessel booking schedules, reach our senior logistics coordinator directly on WhatsApp.</p>
          <a href="https://wa.me/254728346457?text=Hello%20Loginest%20Logistics%20team%2C%20I%20would%20like%20to%20request%20an%20instant%20freight%20quotation." class="inline-block px-8 py-4 bg-[#FF5500] text-white font-bold rounded-xl shadow-lg hover:bg-[#e04b00] transition">
            Chat on WhatsApp: +254 728 346457
          </a>
        </div>
      </section>
    `
  },
  {
    slug: '/contact',
    tabId: 'contact',
    title: 'Contact Nairobi HQ & 24/7 Operations Desk | Loginest Logistics Africa',
    description: 'Get in touch with our team at Bellway Business Park, Mombasa Road, Nairobi. Call or WhatsApp +254 728 346457 for 24/7 port clearing, AOG aviation freight, and cargo dispatch support.',
    keywords: 'Loginest Logistics contact number, Bellway Business Park Nairobi office, Mombasa Port clearing office, East Africa freight helpline, +254 728 346457, freight WhatsApp support',
    canonical: `${SITE_URL}/contact`,
    priority: '0.8',
    changefreq: 'monthly',
    heading: 'Contact Nairobi HQ & Operations Desk',
    subheading: '24/7 client dispatch desk, customs inquiry support, and emergency AOG flight line assistance.',
    contentHtml: `
      <section class="prose max-w-5xl mx-auto py-12 px-6">
        <h1 class="text-4xl font-extrabold text-[#06122E] mb-4">Contact Nairobi HQ & 24/7 Operations Desk</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Our logistics coordinators and customs brokerage specialists are on standby around the clock to assist you with active shipment inquiries, emergency clearance, or rate quotes.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">Executive Headquarters</h2>
            <p class="text-slate-700 text-sm mb-1"><strong>Address:</strong> Bellway Business Park, Mombasa Road</p>
            <p class="text-slate-700 text-sm mb-1"><strong>Postal:</strong> P.O Box 451-00521 Nairobi, Kenya</p>
            <p class="text-slate-700 text-sm mb-1"><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/254728346457" class="text-[#FF5500] font-bold underline">+254 728 346457</a></p>
            <p class="text-slate-700 text-sm"><strong>Email:</strong> info@loginestlogistics.com</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">Mombasa Port Branch Desk</h2>
            <p class="text-slate-700 text-sm mb-1"><strong>Location:</strong> Port of Mombasa Gate 18, Kilindini</p>
            <p class="text-slate-700 text-sm mb-1"><strong>Operations:</strong> Vessel destuffing & CFS transfer</p>
            <p class="text-slate-700 text-sm mb-1"><strong>Helpline:</strong> <a href="tel:+254728346457" class="text-[#FF5500] font-bold underline">+254 728 346457</a></p>
            <p class="text-slate-700 text-sm"><strong>Hours:</strong> 24 Hours / 7 Days Port Clearances</p>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: '/faq',
    tabId: 'faq',
    title: 'East Africa Shipping & Customs Clearance FAQ | Loginest Logistics Africa',
    description: 'Frequently asked questions on Mombasa Kilindini Port clearance, KRA Simba 2026 filings, KEBS Certificate of Conformity, SGR rail freight tariffs, and EAC cross-border procedures.',
    keywords: 'Kenya customs clearance FAQ, KRA Simba iCMS procedures, KEBS CoC inspection, Mombasa port demurrage rules, SGR rail transit times, EAC electronic cargo seal tracking',
    canonical: `${SITE_URL}/faq`,
    priority: '0.8',
    changefreq: 'weekly',
    heading: 'Shipping & Customs Clearance FAQ',
    subheading: 'Clear, authoritative answers to common questions about East African freight tariffs, customs filings, and delivery transit times.',
    contentHtml: `
      <section class="prose max-w-5xl mx-auto py-12 px-6">
        <h1 class="text-4xl font-extrabold text-[#06122E] mb-4">Frequently Asked Questions (FAQ)</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Explore answers to the most frequently asked questions regarding customs clearance through Mombasa Port, transit times across the Northern Corridor, and documentation requirements.
        </p>
        <div class="space-y-6">
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">What documents are required to clear cargo at Mombasa Port?</h2>
            <p class="text-slate-600 text-sm">Standard imports require the Commercial Invoice, Packing List, Original Bill of Lading (or Sea Waybill), KEBS Certificate of Conformity (CoC), and the Import Declaration Form (IDF) registered on the KRA iCMS portal.</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">How fast can Loginest Logistics clear cargo to avoid demurrage?</h2>
            <p class="text-slate-600 text-sm">With our KRA Authorized Economic Operator (AEO Green Lane) status and direct desk at Port of Mombasa Gate 18, compliant shipments with pre-filed documentation clear customs within 24 to 48 hours of vessel discharge.</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">What are typical transit times to Kampala and Kigali?</h2>
            <p class="text-slate-600 text-sm">Direct trucking from Mombasa to Kampala typically takes 3 to 4 days, while Mombasa to Kigali takes 5 to 7 days, fully monitored via the East African Community Regional Electronic Cargo Tracking System (RECTS).</p>
          </div>
          <div class="p-6 bg-white border border-slate-200 rounded-xl">
            <h2 class="text-xl font-bold text-[#06122E] mb-2">How do I get an immediate freight quotation?</h2>
            <p class="text-slate-600 text-sm">You can request an instant quote online or message our freight coordinators directly on WhatsApp at <a href="https://wa.me/254728346457" class="text-[#FF5500] font-bold underline">+254 728 346457</a> with your cargo weight, volume (CBM), origin, and destination.</p>
          </div>
        </div>
      </section>
    `
  }
];

function buildHeaderHtml(activeSlug: string): string {
  const navItems = [
    { name: 'Overview', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Regional Footprint', href: '/regional-footprint' },
    { name: 'Memberships', href: '/memberships' },
    { name: 'Instant Quote', href: '/quote' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  return `
    <header class="sticky top-0 z-50 bg-[#06122E] text-white border-b border-slate-800 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="Loginest Logistics Africa Logo" class="h-12 w-auto object-contain rounded" />
          <div class="flex flex-col">
            <span class="font-extrabold text-xl tracking-tight leading-none text-white font-display">LOGINEST</span>
            <span class="text-[10px] tracking-widest text-slate-300 font-semibold uppercase mt-0.5">LOGISTICS AFRICA</span>
          </div>
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          ${navItems.map(item => `
            <a href="${item.href}" class="transition-colors hover:text-[#FF5500] ${item.href === activeSlug ? 'text-[#FF5500] font-bold' : 'text-slate-200'}">
              ${item.name}
            </a>
          `).join('')}
        </nav>
        <div class="flex items-center gap-4">
          <a href="https://wa.me/254728346457" class="px-4 py-2 bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs font-bold rounded-lg transition-colors shadow">
            WhatsApp Support: +254 728 346457
          </a>
        </div>
      </div>
    </header>
  `;
}

function buildFooterHtml(): string {
  return `
    <footer class="bg-[#040C20] text-slate-300 border-t border-slate-800 py-12 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Loginest Logistics Logo" class="h-10 w-auto object-contain" />
            <span class="text-white font-bold text-lg">LOGINEST LOGISTICS</span>
          </div>
          <p class="text-slate-400 text-xs leading-relaxed">
            Reliable Freight • Global Reach. East Africa's leading freight forwarding and customs clearance enterprise.
          </p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Headquarters</h4>
          <p class="text-slate-400 text-xs leading-relaxed mb-2">
            Bellway Business Park, Mombasa Road<br/>
            P.O Box 451-00521 Nairobi, Kenya
          </p>
          <p class="text-slate-400 text-xs">
            Phone / WhatsApp: <a href="https://wa.me/254728346457" class="text-[#FF5500] font-semibold underline">+254 728 346457</a>
          </p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Port Operations</h4>
          <p class="text-slate-400 text-xs leading-relaxed mb-2">
            Port of Mombasa Gate 18, Kilindini Harbor<br/>
            Mombasa, Kenya
          </p>
          <p class="text-slate-400 text-xs">
            24/7 Clearance & Northern Corridor Dispatch
          </p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Accreditations</h4>
          <p class="text-slate-400 text-xs leading-relaxed">
            KIFWA Licensed Member • FIATA Standard • WCA Global Network • KRA Authorized Economic Operator (AEO Green Lane)
          </p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © ${new Date().getFullYear()} Loginest Logistics Africa. All rights reserved. Headquartered at Bellway Business Park, Mombasa Road, Nairobi.
      </div>
    </footer>
  `;
}

function prerender() {
  console.log('[SSR-Prerender] Starting build-time static site generation for GitHub Actions / Pages...');

  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Base template not found at ${templatePath}. Ensure vite build runs first.`);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  // Generate each static page
  for (const route of ROUTES_DATA) {
    let pageHtml = baseHtml;

    // 1. Replace Title
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // 2. Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // 3. Replace Meta Keywords
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']keywords["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="keywords" content="${route.keywords.replace(/"/g, '&quot;')}" />`
    );

    // 4. Replace Canonical Link
    pageHtml = pageHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 5. Replace Open Graph Tags
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // 6. Replace Twitter Card Tags
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // 7. Inject Semantic Content inside <div id="root"></div>
    const semanticContent = `
      <div id="root">
        ${buildHeaderHtml(route.slug)}
        <main class="min-h-screen bg-slate-50 text-slate-900">
          ${route.contentHtml}
        </main>
        ${buildFooterHtml()}
      </div>
    `.trim();

    pageHtml = pageHtml.replace(/<div\s+id=["']root["']\s*><\/div>/i, semanticContent);

    // Determine target output file
    if (route.slug === '/') {
      fs.writeFileSync(templatePath, pageHtml, 'utf-8');
      console.log(`[SSR-Prerender] Rendered root: dist/index.html`);
    } else {
      const targetDir = path.join(DIST_DIR, route.slug.replace(/^\//, ''));
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const targetFile = path.join(targetDir, 'index.html');
      fs.writeFileSync(targetFile, pageHtml, 'utf-8');
      console.log(`[SSR-Prerender] Rendered page: dist${route.slug}/index.html`);
    }
  }

  // 8. Generate sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES_DATA.map(route => `  <url>
    <loc>${route.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml.trim(), 'utf-8');
  console.log(`[SSR-Prerender] Generated: dist/sitemap.xml (with ${ROUTES_DATA.length} indexed URLs)`);

  // 9. Generate robots.txt
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt.trim(), 'utf-8');
  console.log(`[SSR-Prerender] Generated: dist/robots.txt`);

  console.log('[SSR-Prerender] Prerendering complete! Static SSR bundle is fully indexed and ready for GitHub Pages.');
}

prerender();
