import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "She Sparks Ltd",
    tagline: "Female-led electrical experts powering homes across the UK.",
    phone: "[Insert Phone]",
    email: "[Insert Email]",
    address: "[Insert Address]",
    hours: "Mon–Fri 8am–6pm, Sat 9am–2pm",
    logoUrl: "https://files.websitebuilder.prositehosting.co.uk/db/7c/db7cf110-4796-4506-8f4b-2a61db4929c0.png",
    
    
  },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "4.9★", label: "Google Rating" },
    { value: "750+", label: "Happy Customers" },
    { value: "100%", label: "Female-Led Team" }
  ],
  services: [
  {
    name: "Full & Partial Rewires",
    description: "From single-room upgrades to whole-house rewires, we carry out safe, tidy, and fully certified electrical installations. Every rewire is completed to BS 7671 standards with an Electrical Installation Certificate issued upon completion.",
    icon: "Zap",
    imageUrl: "/images/hero.jpg",
  },
  {
    name: "Consumer Unit Upgrades",
    description: "Outdated fuse boards are a fire and safety risk — we replace old units with modern, RCD-protected consumer units that meet current regulations. We handle everything from supply isolation to certification, with minimal disruption to your home.",
    icon: "Settings",
    imageUrl: "/images/consumer-unit-upgrades.jpg",
  },
  {
    name: "Electrical Safety Inspections (EICR)",
    description: "We carry out thorough Electrical Installation Condition Reports for homeowners, landlords, and businesses — identifying potential hazards before they become dangerous. All EICRs are fully documented and compliant with letting legislation and insurance requirements.",
    icon: "Shield",
    imageUrl: "/images/electrical-safety-inspections-eicr.jpg",
  },
  {
    name: "EV Charger Installation",
    description: "Future-proof your home with a professionally installed electric vehicle charging point, fully compliant with OZEV grant requirements. We advise on the best charger for your vehicle and property, then handle installation from start to finish.",
    icon: "Zap",
    imageUrl: "/images/ev-charger-installation.jpg",
  },
  {
    name: "Lighting Design & Installation",
    description: "From recessed downlights and smart lighting systems to garden and security lighting, we transform the look and feel of your home with precision-installed, energy-efficient solutions. We work with you to achieve the perfect ambience while keeping energy bills down.",
    icon: "Star",
    imageUrl: "/images/lighting-design-installation.jpg",
  },
  {
    name: "Emergency Electrical Call-Outs",
    description: "Power failures, tripping circuits, and electrical faults don't keep office hours — and neither do we. Our rapid-response call-out service ensures a qualified electrician reaches you promptly to diagnose and resolve the issue safely.",
    icon: "Clock",
    imageUrl: "/images/emergency-electrical-call-outs.jpg",
  }
  ],
  trustBadges: [
    { name: "NICEIC Approved Contractor" },
    { name: "TrustMark Registered" },
    { name: "Checkatrade Top Rated" },
    { name: "Which? Trusted Trader" },
    { name: "OZEV Authorised Installer" },
    { name: "BS 7671 Compliant" }
  ],
  reviews: [
  { author: "Rachel T., Guildford", rating: 5, text: "She Sparks replaced our entire consumer unit and rewired the upstairs of our 1930s semi. The team were incredibly professional, kept everything spotless, and finished ahead of schedule. It was so refreshing to have a female-led crew — they were thorough, friendly, and explained everything clearly. Highly recommend." },
  { author: "James W., Woking", rating: 5, text: "Called She Sparks after our kitchen circuit kept tripping with no warning. They sent someone out the same day, traced the fault to a faulty socket behind the units, and had it fixed within the hour. Fair price, no drama, brilliant service." },
  { author: "Priya M., Leatherhead", rating: 5, text: "Had an EICR done for my rental property — She Sparks were efficient, thorough, and delivered the report quickly so I could meet the letting deadline. They also quoted very competitively for the remedial work needed. Will be using them for all my properties going forward." },
  { author: "Tom & Sara B., Dorking", rating: 5, text: "We had our EV charger installed last month and the whole experience was seamless. They helped us navigate the OZEV grant paperwork, turned up exactly on time, and the installation looks incredibly neat. Our neighbours have already asked for their details!" }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
