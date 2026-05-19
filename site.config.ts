import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Brockleby's Pies",
    tagline: "Award-Winning Handmade Pies from Melton Mowbray",
    phone: "[Insert Phone]",
    email: "[Insert Email]",
    address: "Melton Mowbray, Leicestershire",
    hours: "Mon–Sat 9am–5pm",
    logoUrl: "https://www.brocklebys.co.uk/wp-content/uploads/2022/05/mum-daughter.jpg",
    socialInstagram: "omit",
    socialFacebook: "omit",
  },
  stats: [
    { value: "48+", label: "British Pie Awards Won" },
    { value: "4.6★", label: "Google Rating" },
    { value: "Supreme", label: "Champion Pie Makers" },
    { value: "100%", label: "Handmade in Melton Mowbray" }
  ],
  services: [
  {
    name: "Authentic Melton Mowbray Pork Pies",
    description: "Crafted using a centuries-old uncured pork recipe and hand-raised hot water crust pastry, our Melton Mowbray Pork Pies carry Protected Geographical Indication status — the only kind that can truly call themselves the real thing. Each pie is made on our Leicestershire farm and delivered nationwide, straight to your door.",
    icon: "Star",
    imageUrl: "/images/authentic-melton-mowbray-pork-pies.jpg",
  },
  {
    name: "Award-Winning Signature Savoury Pies",
    description: "From our Supreme Champion 'Moo & Blue' steak and stilton to bold wild game and hearty chicken fillings, our signature range has been celebrated across 48 British Pie Award wins. Every pie is packed with generous, locally sourced fillings and encased in rich, buttery short-crust or hot water pastry.",
    icon: "HardHat",
    imageUrl: "/images/award-winning-signature-savoury-pies.jpg",
  },
  {
    name: "Gluten-Free & Vegetarian Pies",
    description: "We believe exceptional flavour should be accessible to everyone — our gluten-free and vegetarian pies are made with exactly the same care and quality ingredients as our award-winning classics, with zero compromise on taste. Clearly labelled and safely prepared, they make the perfect choice for mixed-dietary households and gatherings.",
    icon: "Shield",
    imageUrl: "/images/gluten-free-vegetarian-pies.jpg",
  },
  {
    name: "Hands-On Pie & Bread Making Workshops",
    description: "Learn to hand-raise your own authentic Melton Mowbray Pork Pie or craft artisan sourdough under the guidance of our award-winning bakers in a fully equipped farm kitchen. Workshops make an unforgettable gift and sell out fast — with pizza making, ultimate bread, and pie making experiences all available to book online.",
    icon: "Hammer",
    imageUrl: "/images/hands-on-pie-bread-making-workshops.jpg",
  },
  {
    name: "Pie Bundles, Gift Packs & Hampers",
    description: "Treat someone special — or yourself — with a curated selection of our most-loved pies, packaged beautifully and ready to give. From Father's Day specials to Christmas hampers and bespoke corporate gifting, our pie bundles arrive chilled and gift-ready, making them one of the most memorable food gifts you can send.",
    icon: "CheckCircle",
    imageUrl: "/images/pie-bundles-gift-packs-hampers.jpg",
  },
  {
    name: "Nationwide Chilled Delivery",
    description: "Every Brockleby's pie is carefully packed in insulated chilled packaging and despatched directly from our Melton Mowbray farm, ensuring it arrives in perfect condition wherever you are in the UK. Order before our weekly cut-off and receive your pies fresh, ready to heat and enjoy — with no supermarket detours required.",
    icon: "Clock",
    imageUrl: "/images/nationwide-chilled-delivery.jpg",
  }
  ],
  trustBadges: [
    { name: "48x British Pie Awards Winner" },
    { name: "Great Taste Award Holder" },
    { name: "Authentic Melton Mowbray PGI Certified" },
    { name: "TripAdvisor Travellers' Choice 2025" },
    { name: "Virgin Experience Days 5-Star Rated" },
    { name: "Google 4.6★ Customer Rated" }
  ],
  reviews: [
  { author: "Bev T., Pie Taster Panel", rating: 5, text: "The Wild Deer pie was absolutely sensational — the venison was cooked to perfection and just melted in your mouth. I'd never tried venison in a pie before and now I can't imagine not having it. Every mouthful left me wanting more." },
  { author: "James R., Leicester", rating: 5, text: "Ordered the Trio of Champions bundle as a birthday gift for my dad and he was absolutely blown away — the pastry is like nothing you get in a supermarket. The Moo & Blue steak and stilton pie in particular was rich, generous and genuinely award-worthy. Will be ordering again for Christmas without a doubt." },
  { author: "Sarah M., Nottingham", rating: 5, text: "Attended the Ultimate Pie Making Workshop with my daughter as a birthday treat and it was the most fun we've had in years. The team were so knowledgeable, patient and passionate — we came home with our own hand-raised pork pies and a huge amount of pride. Highly recommend as a gift experience." },
  { author: "David P., Sheffield", rating: 5, text: "I've been ordering Brockleby's pork pies for over three years now and they never disappoint. The authentic Melton Mowbray recipe is the real deal — proper uncured pork, hand-raised pastry and delivered ice-cold and perfectly packaged every single time. Nothing else comes close." },
  { author: "Claire W., Cambridge", rating: 5, text: "Bought the gluten-free selection pack for a family get-together and even our non-GF guests were reaching for them over the regular pies. The pastry is incredible and the fillings are just as hearty and flavourful as you'd hope. So refreshing to find a producer that genuinely doesn't compromise on the free-from range." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
