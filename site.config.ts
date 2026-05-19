import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Smith's Plumbing",
    tagline: "Leicester's Trusted Emergency Plumbers",
    phone: "0116 123 4567",
    email: "hello@smithsplumbing.co.uk",
    address: "Leicester, Leicestershire",
    hours: "Mon–Fri 8am–6pm, Emergency 24/7",
  },
  stats: [
    { value: "20+", label: "Years Experience" },
    { value: "4.9★", label: "Google Rating" },
    { value: "24/7", label: "Emergency Cover" },
    { value: "500+", label: "Jobs Completed" },
  ],
  services: [
    {
      name: "Emergency Plumbing",
      description: "Fast response to burst pipes and leaks.",
      icon: "Wrench",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Boiler Installation",
      description: "New boiler supply and installation.",
      icon: "Flame",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Bathroom Fitting",
      description: "Full bathroom design and installation.",
      icon: "Droplets",
      imageUrl: "/images/hero.jpg",
    },
  ],
  trustBadges: [
    { name: "Gas Safe Registered" },
    { name: "Which? Trusted Trader" },
  ],
  reviews: [
    {
      author: "Sarah M., Leicester",
      rating: 5,
      text: "Brilliant service. Fixed our burst pipe within the hour. Highly recommended.",
    },
    {
      author: "James T., Loughborough",
      rating: 5,
      text: "Professional and fairly priced. Would not hesitate to call again.",
    },
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
