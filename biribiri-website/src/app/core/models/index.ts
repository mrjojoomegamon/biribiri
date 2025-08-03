export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: 'rehabilitation' | 'sports' | 'wellness';
  image: string;
}

export interface Supplement {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'oils' | 'capsules' | 'liquids' | 'creams' | 'soaps';
  image: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface AppointmentForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}