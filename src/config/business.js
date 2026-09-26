/**
 * ALL business content, colors, services, and image URLs.
 * A non-technical owner can edit this one file to customize the whole site.
 */

import heroImage from '../assets/images/hero_bespoke_kitchen_1790436010687.jpg';
import kitchenServiceImage from '../assets/images/service_custom_kitchens_1790436030288.jpg';
import joineryServiceImage from '../assets/images/service_built_in_joinery_1790436046811.jpg';
import furnitureServiceImage from '../assets/images/service_bespoke_furniture_1790436060447.jpg';
import workshopAboutImage from '../assets/images/about_artisan_workshop_1790436074506.jpg';

export const business = {
  name: 'Morrow & Finch',
  legalName: 'Morrow & Finch Cabinetmakers Ltd',
  type: 'Bespoke Kitchens & Architectural Joinery',
  tagline: 'Thoughtful design. Enduring timber craftsmanship.',
  cityArea: 'Bath & Somerset',
  fullAddress: '14 Walcot Yard, Walcot Street, Bath, BA1 5BG',
  phoneNumber: '+44 1225 892 410',
  phoneRaw: '+441225892410',
  whatsAppNumber: '+44 7700 900 382',
  whatsAppRaw: '447700900382',
  emailAddress: 'studio@morrowandfinch.co.uk',
  googleMapsLink: 'https://maps.google.com/?q=14+Walcot+Yard+Bath+BA1+5BG',
  brandStyle: 'Refined heritage craft, calm editorial warmth, timeless architectural precision',

  colors: {
    primary: '#243329', // Deep Forest Sage
    primaryHover: '#1A261E',
    secondary: '#9B7E58', // Warm Oak Honey
    accent: '#C47B46', // Burnished Terracotta
    neutralCanvas: '#FAF9F5', // Calico off-white
    neutralSurface: '#F3EFEA', // Parchment sand
    cardBg: '#FFFFFF',
    ink: '#1C201D',
    inkMuted: '#56615A',
    inkSubtle: '#7A857F',
    border: 'rgba(36, 51, 41, 0.1)',
  },

  ctas: {
    main: 'Book Design Consultation',
    secondary: 'Call Our Workshop',
    inquire: 'Send Project Details',
    directions: 'Find Our Workshop',
    whatsapp: 'Message on WhatsApp',
  },

  hero: {
    eyebrow: 'Bath & Somerset · Cabinetmakers & Joiners',
    title: 'Kitchens and cabinetry crafted to endure for generations.',
    description: 'We design, hand-build, and install bespoke architectural kitchens, library suites, and fine joinery from our Walcot workshop.',
    image: heroImage,
    trustNote: 'Walcot Yard Workshop · Showroom & Design Studio by Appointment',
  },

  about: {
    eyebrow: 'Our Workshop',
    title: 'Crafted by hand, measured by millimeter, built for longevity.',
    description: 'Morrow & Finch is an independent workshop of career cabinetmakers based in Bath. We believe a home’s built-in timberwork should outlast temporary trends and withstand everyday life with quiet grace. Every drawer box is dovetail-jointed, every timber plank is chosen for grain harmony, and every commission is installed by the craftspeople who cut the timber.',
    quote: 'Good woodwork never shouts. It sits quietly within its architecture and improves with every passing decade.',
    image: workshopAboutImage,
    imageCaption: 'The hand joinery bench at our Walcot Yard workshop',
    stats: [
      { value: '100%', label: 'Solid timber face-frames and dovetailed drawers' },
      { value: 'FSC', label: 'Certified European oak, walnut, and sweet chestnut' },
      { value: 'Lifetime', label: 'Mechanical guarantee on all runner hardware' },
    ],
  },

  services: {
    eyebrow: 'Our Craft',
    title: 'Architectural joinery for discerning private residences.',
    description: 'From initial architectural sketches to final on-site installation, our small team handles every detail in-house without subcontractors.',
    items: [
      {
        id: 'kitchens',
        title: 'Bespoke Architectural Kitchens',
        description: 'Solid hardwood in-frame cabinetry, hand-cut dovetail drawers, custom pantry larders, and durable natural finishes tailored to your home’s exact architecture.',
        features: [
          'Full in-frame solid timber construction',
          'Integrated breakfast and pantry larders',
          'Custom cutlery dividers and spice racks',
          'Hand-buffed oils or low-VOC eggshell lacquer',
        ],
        image: kitchenServiceImage,
        tag: 'Core Commission',
      },
      {
        id: 'libraries',
        title: 'Architectural Libraries & Built-ins',
        description: 'Floor-to-ceiling book shelving, rolling brass ladders, media suites, and dressing rooms designed to integrate seamlessly with existing cornice and skirting.',
        features: [
          'Integrated warm dimmable LED shelf illumination',
          'Period-matched timber architraves and mouldings',
          'Concealed audio-visual wire management',
          'Solid antiqued brass hardware and shelf supports',
        ],
        image: joineryServiceImage,
        tag: 'Interior Joinery',
      },
      {
        id: 'furniture',
        title: 'Commissioned Furniture & Dining Tables',
        description: 'Singular statement dining tables, console benches, and architectural credenzas crafted from sustainably harvested English oak and European walnut.',
        features: [
          'Hand-selected continuous grain timber slabs',
          'Traditional pinned mortise-and-tenon joints',
          'Tactile, food-safe organic hardwax oil finish',
          'Hand-stamped workshop maker’s hallmark',
        ],
        image: furnitureServiceImage,
        tag: 'Fine Furniture',
      },
    ],
    secondaryServices: [
      'Heritage window and door joinery restoration',
      'Architectural wine cellars and tasting displays',
      'Bespoke bathroom vanities and linen presses',
      'Solid timber utility and boot room cabinetry',
    ],
  },

  whyChooseUs: {
    eyebrow: 'The Workshop Standard',
    title: 'Why architects and private homeowners trust our workshop.',
    description: 'We run a traditional craft studio with modern architectural precision — no middlemen, no flat-pack compromises.',
    points: [
      {
        number: '01',
        title: 'Built in our Walcot workshop',
        description: 'Every cabinet carcass, drawer box, and moulding is made under one roof in Bath by the makers who install it.',
      },
      {
        number: '02',
        title: 'Sustainably sourced timber',
        description: 'We work exclusively with certified European oak, walnut, and ash, seasoned to proper indoor moisture equilibrium.',
      },
      {
        number: '03',
        title: 'Transparent architectural tenders',
        description: 'Clear, itemized quotes with material schedules and realistic lead times. No surprise variations or hidden fees.',
      },
      {
        number: '04',
        title: 'Lifetime mechanical guarantee',
        description: 'We use top-tier Austrian concealed runners and solid brass fittings backed by our workshop lifetime warranty.',
      },
    ],
  },

  testimonials: [
    {
      quote: 'Morrow & Finch designed and built the kitchen and library for our Georgian townhouse. Their sensitivity to the room’s proportions and the tactile feel of the timber is extraordinary.',
      author: 'Eleanor & Mark Campbell',
      location: 'Lansdown Crescent, Bath',
      project: 'Full Townhouse Commission',
    },
    {
      quote: 'From the initial timber samples to the final hand-buffed wax finish, working with the workshop was an absolute pleasure. Solid, quiet, and timeless.',
      author: 'David Hetherington',
      location: 'Bradford-on-Avon',
      project: 'Bespoke Walnut Library',
    },
    {
      quote: 'Rarely do you find craftspeople who listen so carefully. The bespoke larder and central kitchen island are the true centerpieces of our home.',
      author: 'Sophie Tremayne',
      location: 'Combe Down, Somerset',
      project: 'Bespoke In-Frame Kitchen',
    },
  ],

  faq: [
    {
      question: 'How does the design and consultation process work?',
      answer: 'We begin with a conversation at our Walcot workshop or at your home to review drawings and space dimensions. We then prepare hand-drawn concepts and timber samples. Once approved, we provide a fixed tender and build schedule.',
    },
    {
      question: 'What is your typical commission lead time?',
      answer: 'Because every piece is handcrafted in our workshop, our lead time typically ranges between 8 to 12 weeks from finalized design approval to installation. We agree on fixed installation dates well in advance.',
    },
    {
      question: 'Do you collaborate with independent architects and interior designers?',
      answer: 'Yes, a significant portion of our work is commissioned by architects and interior studios across Somerset, Wiltshire, and the Cotswolds. We can build directly from your architectural DWG or PDF plans.',
    },
    {
      question: 'Can I view timber species and finish samples prior to commissioning?',
      answer: 'Yes. Our Walcot Street workshop houses sample drawer boxes, timber flitches, hardware finishes (aged brass, blackened bronze, brushed nickel), and painted samples available during your consultation.',
    },
  ],

  openingHours: [
    { days: 'Monday – Friday', hours: '08:30 – 17:30' },
    { days: 'Saturday', hours: '09:30 – 14:00 (Consultations by Appointment)' },
    { days: 'Sunday', hours: 'Closed' },
  ],

  navLinks: [
    { label: 'Our Craft', href: '#services' },
    { label: 'The Workshop', href: '#about' },
    { label: 'Standards', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
};
