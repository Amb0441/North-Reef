export interface Office {
  name: string;
  suburb: string;
  state: string;
  phone: string;
  fax?: string;
  imageUrl: string;
}

export interface Property {
  id: string;
  status: string;
  address: string;
  suburb: string;
  bedrooms: number;
  bathrooms: number;
  carparks: number;
  priceText: string;
  imageUrl: string;
  furnished?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  imageUrl: string;
}

export interface NewsArticle {
  date: string;
  title: string;
  summary: string;
  imageUrl: string;
}

export interface Testimonial {
  author: string;
  role: string;
  date: string;
  content: string;
  rating: number;
}
