/**
 * Single source of truth for all copy and content on the site.
 *
 * To customize the site - change text, swap photos, add/remove a service,
 * add another portfolio project, edit an FAQ - edit the values in this file.
 * You should not need to touch any component to make a content change.
 */

export const business = {
  name: 'Neelaya Design Studio',
  shortName: 'Neelaya',
  tagline: 'Interior Architecture & Design - Pimpri-Chinchwad',
  description:
    'Neelaya Design Studio is an architectural design studio in Pimpri-Chinchwad, Maharashtra, catering to Architectural, Interior, Civil, Visualisation, Liaisoning and Sanctioning services.',
  founder: 'Chandrashekhar Mahant',
  phone: '+91 80070 95102',
  phoneHref: '+918007095102',
  email: null,
  address: {
    line1: 'Lingmudra, Plot No-97, Krishnanagar Rd, behind Chandan Super Market,',
    line2: 'Premsadan Housing Society, Sector No. 20, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019',
    full: 'Lingmudra, Plot No-97, Krishnanagar Rd, behind Chandan Super Market, Premsadan Housing Society, Sector No. 20, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019',
  },
  hours: 'Monday – Saturday, 9:30 AM – 6:30 PM · Closed Sunday',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Neelaya+Design+Studio+Chinchwad+Pimpri-Chinchwad',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
};

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Practice', href: '#services' },
  { label: 'Studio', href: '#studio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: business.tagline,
  heading: 'Spaces that hold their quiet.',
  body: 'Neelaya designs homes and interiors around light, material, and the way a room ought to feel at seven in the morning.',
  cta: { label: 'View Selected Work', href: '#work' },
  image:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=80',
};

export const intro = {
  eyebrow: 'Philosophy',
  lead: [
    'We believe an interior should be edited, not decorated - ',
    { emphasis: 'every material earning its place' },
    ', every room left room to breathe. We design in service of how a household actually moves, not how a photograph should look.',
  ],
};

export const stats = [
  { num: '60+', label: 'Projects Delivered' },
  { num: '5', label: 'Years in Practice' },
  { num: '4', label: 'Cities Served' },
];

export const services = {
  eyebrow: 'The Practice',
  heading: 'Disciplines built\naround your space.',
  intro:
    'From a single room to full architectural renovation, each engagement is shaped around how you actually live.',
  items: [
    {
      num: '01',
      title: 'Architectural Design',
      body: 'Ground-up architectural planning and design, shaped around site, structure, and how a household actually moves.',
    },
    {
      num: '02',
      title: 'Interior & Civil Design',
      body: 'Full-home interiors and civil renovation - reworking flow, light, and volume before a single finish is chosen.',
    },
    {
      num: '03',
      title: 'Visualisation',
      body: "3D visualisation and design presentation, so every decision is seen and approved long before it's built.",
    },
    {
      num: '04',
      title: 'Liaisoning & Sanctioning',
      body: 'End-to-end coordination with local authorities for plan approvals, sanctioning, and statutory compliance.',
    },
  ],
};

export const portfolio = {
  eyebrow: 'Selected Work',
  heading: 'A quiet portfolio.',
  cta: { label: 'View Full Portfolio', href: '#contact' },
  projects: [
    {
      idx: '01',
      tag: 'Residential - Mumbai',
      title: 'The Alaknanda Residence',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sunlit living room with earth-toned upholstery and timber shelving',
    },
    {
      idx: '02',
      tag: 'Residential - Pune',
      title: 'Northlight House',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimalist bedroom with linen bedding and stone accent wall',
    },
    {
      idx: '03',
      tag: 'Residential - Chinchwad',
      title: 'Kitchen in Cedar',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm minimalist kitchen with wood cabinetry and stone counters',
    },
    {
      idx: '04',
      tag: 'Commercial - Delhi',
      title: 'Studio Marigold',
      image:
        'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80',
      alt: 'Studio office interior with muted tones and natural light',
    },
    {
      idx: '05',
      tag: 'Hospitality - Goa',
      title: 'The Tide House',
      image:
        'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80',
      alt: 'Dining space with sculptural pendant lighting and dark timber table',
    },
  ],
};

export const process = {
  eyebrow: 'How We Work',
  heading: 'Four stages, one point of view.',
  steps: [
    {
      idx: '01',
      title: 'Discovery',
      body: 'We spend time in the space, and time with you - understanding light, routine, and the life the room needs to hold.',
    },
    {
      idx: '02',
      title: 'Concept',
      body: 'Spatial planning, material direction, and mood are developed together and presented as a single, coherent vision.',
    },
    {
      idx: '03',
      title: 'Execution',
      body: 'In-house project management coordinates architecture, contractors, and craftsmen through to final finish.',
    },
    {
      idx: '04',
      title: 'Styling & Handover',
      body: 'Furniture, art, and final styling are placed by hand before the space is handed back to you, ready to live in.',
    },
  ],
};

export const studio = {
  eyebrow: 'The Studio',
  heading: 'Design, held to a slower standard.',
  lead: '"Neelaya" means blue sky - the idea that a well-made room should feel as unforced as open air.',
  paragraphs: [
    'A professional design studio based in Pimpri-Chinchwad, Maharashtra, catering to architectural, interior, and civil design, visualisation, and liaisoning & sanctioning services - working with a small, deliberately limited team that takes on only the projects it can give full attention.',
    'We work closely with local artisans, timber workshops, and stone masons, favouring material honesty over trend. The result is interiors that read as inevitable rather than styled.',
  ],
  founderRole: 'Founder & Principal Designer',
  image:
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  imageAlt: 'Portrait of the Neelaya Design Studio founder in the studio space',
};

export const reviews = {
  eyebrow: 'Client Reviews',
  rating: '4.9',
  count: 16,
  source: 'Google reviews',
  items: [
    {
      quote: 'Special mention for building a dream kitchen within a really small space.',
      author: 'Rohit Jagtap Patil',
    },
    {
      quote: 'Extremely satisfied with quality of work and your work ethics.',
      author: 'Ramchandra Desai',
    },
    {
      quote: "I appreciate Chandrashekhar's honesty, work ethic, and modest communication.",
      author: 'Pranav Gosavi',
    },
  ],
  cta: { label: 'View all Google reviews', href: business.mapsSearchUrl },
};

export const faq = {
  eyebrow: 'Good to Know',
  heading: 'Frequently asked\nquestions.',
  items: [
    {
      q: 'How long does a typical project take?',
      a: 'A single room usually takes 6–10 weeks from concept to handover. Full-home projects and renovations typically run 4–9 months, depending on structural scope and site conditions - we give you a firm timeline at the end of the discovery stage.',
    },
    {
      q: 'What is the typical budget range?',
      a: 'Every project is quoted individually based on scope, materials, and site condition. As a general guide, full-home interior fit-outs typically start upward of ₹25 lakh; we share a detailed estimate before any design work begins, with no surprises later.',
    },
    {
      q: 'Do you work outside Pimpri-Chinchwad?',
      a: 'Yes - alongside Pimpri-Chinchwad, we currently take on projects across Pune and the wider Maharashtra region, and consider select engagements elsewhere in India on a case-by-case basis.',
    },
    {
      q: 'Can you work with furniture or pieces we already own?',
      a: "Absolutely. We often design around a client's existing furniture, art, or family pieces - restyling and reworking them into the new plan rather than starting from a blank slate.",
    },
    {
      q: 'Do you offer styling-only services without full design?',
      a: 'Yes. If your space is already built and simply needs furniture selection, layout, and final styling, our Styling & Furniture service is scoped and priced separately from full interior design.',
    },
  ],
};

export const ctaBand = {
  eyebrow: "Let's Begin",
  heading: "Tell us about the space you're imagining.",
  cta: { label: 'Start a Conversation', href: '#contact' },
  image:
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=2000&q=80',
};

export const contact = {
  eyebrow: 'Get in Touch',
  heading: 'Begin your project.',
  lead: 'Share a little about your space and where you are in the process - we typically respond within two business days with next steps.',
  projectTypes: ['Residential', 'Renovation', 'Commercial / Hospitality', 'Styling Only'],
  formNote: "We'll get back to you within two business days.",
};

export const footer = {
  brandBlurb:
    'Architectural and interior design studio based in Pimpri-Chinchwad, Maharashtra, working across the Pune region.',
  columns: [
    {
      heading: 'Studio',
      links: [
        { label: 'Selected Work', href: '#work' },
        { label: 'Practice', href: '#services' },
        { label: 'About', href: '#studio' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Residential', href: '#services' },
        { label: 'Renovation', href: '#services' },
        { label: 'Commercial', href: '#services' },
        { label: 'Styling', href: '#services' },
      ],
    },
  ],
  newsletterNote: 'Occasional notes on new projects. No spam.',
  copyright: `© ${new Date().getFullYear()} ${business.name}. All rights reserved.`,
};
