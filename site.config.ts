import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "She Sparks Ltd",
    tagline: "Female-Led Electrical Experts You Can Trust",
    phone: "[Insert Phone]",
    email: "[Insert Email]",
    address: "[Insert Address]",
    hours: "Mon–Fri 7:30am–6pm, Sat 8am–2pm, Emergency cover available",
    logoUrl: "https://files.websitebuilder.prositehosting.co.uk/db/7c/db7cf110-4796-4506-8f4b-2a61db4929c0.png",
    socialInstagram: "https://instagram.com/shesparksltd",
    socialFacebook: "https://facebook.com/shesparksltd",
  },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "4.9★", label: "Google Rating" },
    { value: "800+", label: "Jobs Completed" },
    { value: "NICEIC", label: "Approved Contractor" }
  ],
  services: [
  {
    name: "Full & Partial Rewires",
    description: "From single-room upgrades to complete whole-house rewires, we bring your property's wiring up to current 18th Edition standards. Every job is finished with a thorough inspection and a BS 7671 Electrical Installation Certificate for your peace of mind.",
    icon: "Zap",
    imageUrl: "/images/hero.jpg",
  },
  {
    name: "Consumer Unit & Fuse Board Upgrades",
    description: "An outdated fuse board is a safety risk and can invalidate your home insurance. We replace old fuse boxes with modern RCD-protected consumer units, ensuring your home meets current regulations and your family stays protected.",
    icon: "Settings",
    imageUrl: "/images/consumer-unit-fuse-board-upgrades.jpg",
  },
  {
    name: "EV Charging Point Installation",
    description: "Future-proof your home with a fully certified EV charger installation, compatible with all major electric vehicle brands. We handle everything from survey to sign-off, including OZEV grant paperwork, so your charge point is ready the same day.",
    icon: "Zap",
    imageUrl: "/images/ev-charging-point-installation.jpg",
  },
  {
    name: "Electrical Safety Inspections (EICR)",
    description: "Landlords, homeowners and businesses trust us to carry out thorough Electrical Installation Condition Reports that comply with UK regulations. We identify faults, code every issue clearly and provide a certified report you can share with letting agents or insurers immediately.",
    icon: "Shield",
    imageUrl: "/images/electrical-safety-inspections-eicr.jpg",
  },
  {
    name: "Lighting Design & Installation",
    description: "From recessed LED downlighting and smart dimmer circuits to outdoor security and garden feature lighting, we design and install lighting schemes that transform how your space looks and feels. All work is fully Part P certified and notified to your local authority.",
    icon: "Star",
    imageUrl: "/images/lighting-design-installation.jpg",
  },
  {
    name: "Emergency Electrical Call-Outs",
    description: "Power failure, tripping circuits or a burning smell from a socket — electrical emergencies can't wait. Our rapid-response team covers the local area and aims to be with you within two hours, diagnosing and making safe any fault quickly and safely.",
    icon: "Clock",
    imageUrl: "/images/emergency-electrical-call-outs.jpg",
  }
  ],
  trustBadges: [
    { name: "NICEIC Approved Contractor" },
    { name: "Part P Registered" },
    { name: "TrustMark Registered" },
    { name: "Checkatrade Top Rated" },
    { name: "Which? Trusted Trader" },
    { name: "18th Edition Qualified" }
  ],
  reviews: [
  { author: "Sarah M, Guildford", rating: 5, text: "She Sparks rewired our entire three-bed house and the standard of work was exceptional. Every cable was neatly run, the new consumer unit looks immaculate, and the engineer explained each stage as she went. Couldn't recommend more highly." },
  { author: "James T, Woking", rating: 5, text: "Called them out after our kitchen sockets started tripping the board. They arrived within 90 minutes, found a faulty connection behind the cooker and had everything safe and sorted within the hour. Brilliant service and really fair pricing." },
  { author: "Priya L, Guildford", rating: 5, text: "Had an EICR done for my rental flat — She Sparks were professional from first call to handing over the certificate. The report was thorough, clearly written and my letting agent was impressed. Will be using them for all future electrical work." },
  { author: "Mark D, Farnham", rating: 5, text: "They installed two EV chargers at our business premises, sorted the OZEV grant paperwork for us and had both units live on the same day. Genuinely seamless — I wouldn't hesitate to use She Sparks again." },
  { author: "Claire B, Reigate", rating: 5, text: "As a woman living alone I've always felt a bit uneasy having tradespeople in my home, but She Sparks were absolutely brilliant. Polite, tidy, on time and the new lighting installation looks stunning. Exactly the kind of company I'll always call first." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
