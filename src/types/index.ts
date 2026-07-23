export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

export interface CountryItem {
  id: string;
  name: string;
  flagEmoji: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: 'placement' | 'event' | 'office';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ApplyFormValues {
  fullName: string;
  email: string;
  phone: string;
  jobCategory: string;
  countryPreference: string;
  message: string;
}
