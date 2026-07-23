import type {
  NavLink,
  ServiceItem,
  CountryItem,
  TestimonialItem,
  GalleryItem,
  FaqItem,
} from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'recruitment',
    title: 'Recruitment & Selection',
    description: 'Sourcing and screening candidates matched to your exact requirement.',
    icon: 'Users',
  },
  {
    id: 'visa',
    title: 'Visa Processing',
    description: 'End-to-end work visa filing and follow-up with embassies.',
    icon: 'FileCheck2',
  },
  {
    id: 'documentation',
    title: 'Documentation Assistance',
    description: 'Attestation, passport support, and paperwork handled for you.',
    icon: 'FileText',
  },
  {
    id: 'travel',
    title: 'Travel & Ticketing',
    description: 'Flight booking and travel arrangements for deployment.',
    icon: 'Plane',
  },
  {
    id: 'orientation',
    title: 'Pre-departure Orientation',
    description: 'Briefing candidates on culture, law, and workplace expectations abroad.',
    icon: 'BookOpen',
  },
  {
    id: 'support',
    title: 'Post-placement Support',
    description: 'We stay reachable after deployment for candidates and employers alike.',
    icon: 'LifeBuoy',
  },
];

export const COUNTRIES: CountryItem[] = [
  { id: 'uae', name: 'UAE', flagEmoji: '🇦🇪' },
  { id: 'saudi', name: 'Saudi Arabia', flagEmoji: '🇸🇦' },
  { id: 'qatar', name: 'Qatar', flagEmoji: '🇶🇦' },
  { id: 'kuwait', name: 'Kuwait', flagEmoji: '🇰🇼' },
  { id: 'oman', name: 'Oman', flagEmoji: '🇴🇲' },
  { id: 'singapore', name: 'Singapore', flagEmoji: '🇸🇬' },
  { id: 'malaysia', name: 'Malaysia', flagEmoji: '🇲🇾' },
  { id: 'bahrain', name: 'Bahrain', flagEmoji: '🇧🇭' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Ravi Kumar',
    role: 'Placed in UAE',
    quote:
      'HM International guided me through every step, from documents to my first day at work abroad.',
  },
  {
    id: 't2',
    name: 'Site Manager, Doha',
    role: 'Employer Partner',
    quote:
      'We have sourced skilled workers through HM International for three years running. Reliable every time.',
  },
  {
    id: 't3',
    name: 'Priya S.',
    role: 'Placed in Qatar',
    quote: 'Honest advice and quick visa processing. I felt supported throughout the process.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Placements (3 items)
  {
    id: 'g1',
    title: 'Candidate Departure at Trichy Airport',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    category: 'placement',
  },
  {
    id: 'g2',
    title: 'Successful Gulf Placement Orientation',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    category: 'placement',
  },
  {
    id: 'g3',
    title: 'Deployment Batch Ready for Travel',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    category: 'placement',
  },

  // Events (3 items)
  {
    id: 'g4',
    title: 'Overseas Career Guidance Seminar',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    category: 'event',
  },
  {
    id: 'g5',
    title: 'Employer Interview Drive in Trichy',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    category: 'event',
  },
  {
    id: 'g6',
    title: 'Skill Verification & Assessment Camp',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    category: 'event',
  },

  // Office (3 items)
  {
    id: 'g7',
    title: 'Melapudur Office Consultation Desk',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    category: 'office',
  },
  {
    id: 'g8',
    title: 'Documentation & Visa Support Team',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    category: 'office',
  },
  {
    id: 'g9',
    title: 'Client Welcome & Support Area',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    category: 'office',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'f1',
    question: 'What documents do I need to apply for an overseas job?',
    answer:
      'A valid passport, educational and experience certificates, a medical fitness certificate, and a police clearance certificate. We will tell you the exact list once your job category is confirmed.',
  },
  {
    id: 'f2',
    question: 'How long does the visa process take?',
    answer:
      'It typically takes 4 to 8 weeks depending on the country and job category, once your documents are complete and the employer confirms your offer.',
  },
  {
    id: 'f3',
    question: 'Do I have to pay any fee to apply?',
    answer:
      'Our consultation is free. Any government or processing fee is communicated upfront in writing before you pay anything, with no hidden charges.',
  },
  {
    id: 'f4',
    question: 'Which countries do you place candidates in?',
    answer:
      'We currently place candidates in the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Singapore, Malaysia, and Bahrain, across construction, hospitality, healthcare, and skilled trades.',
  },
  {
    id: 'f5',
    question: 'How do I apply for a job listed on this site?',
    answer:
      'Use the Apply form on the Services or Contact page. It opens your email app with your details pre-filled, ready for you to attach your resume and send to us directly.',
  },
  {
    id: 'f6',
    question: 'Can employers request workers directly through this website?',
    answer:
      'Yes. Employers can send their manpower requirement, including role, headcount, and preferred timeline, through the Contact page and our team will respond within 1-2 business days.',
  },
];