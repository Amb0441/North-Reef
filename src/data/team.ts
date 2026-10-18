import { TeamMember, NewsArticle, Testimonial } from '../types';

export const teamMembers: TeamMember[] = [
  { name: 'John Doe', role: 'Principal', phone: '555 0100', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop' },
  { name: 'Jane Doe', role: 'Head of Sales', phone: '555 0101', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
  { name: 'Alex Doe', role: 'Sales Consultant', phone: '555 0102', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
  { name: 'Sam Doe', role: 'Residential Sales', phone: '555 0103', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
  { name: 'Jamie Doe', role: 'Office Manager', phone: '555 0100', imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop' },
  { name: 'Taylor Doe', role: 'Property Manager', phone: '555 0104', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
  { name: 'Riley Doe', role: 'Senior Property Manager', phone: '555 0105', imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop' },
  { name: 'Casey Doe', role: 'Leasing Consultant', phone: '555 0106', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
  { name: 'North Reef Property Management', role: 'Leasing desk', phone: '555 0100', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' },
];

export const latestNews: NewsArticle[] = [
  { date: '9th June 2026', title: 'Sample story: when to list a mock home', summary: 'Placeholder article about timing a sale. Figures and suburbs on this site are not a real market.', imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop' },
  { date: '1st June 2026', title: 'How to read a sample rental appraisal', summary: 'A short mock guide so the news layout has something to show.', imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop' },
  { date: '1st June 2026', title: 'Open homes, written as demo copy', summary: 'Notes for a pretend Saturday of inspections in Mocktown and Sampleville.', imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop' },
  { date: '1st June 2026', title: 'Mocktown versus Example Heights', summary: 'Two made-up suburbs, used only to fill the insights cards.', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop' },
];

export const testimonials: Testimonial[] = [
  { author: 'Pat Example', role: 'Buyer', date: 'July 31st 2026', content: 'Jane Doe walked us through the sample listings and kept the process simple. This quote is placeholder text.', rating: 5.0 },
  { author: 'Chris Sample', role: 'Seller', date: 'July 16th 2026', content: 'Alex Doe ran a calm mock campaign. Updates were clear, and the result matched the sample appraisal.', rating: 5.0 },
  { author: 'Morgan Placeholder', role: 'Seller', date: 'July 15th 2026', content: 'John Doe and the Mocktown desk sold our demo unit without fuss. We always knew the next step.', rating: 5.0 },
  { author: 'Robin Demo', role: 'Landlord', date: 'July 12th 2026', content: 'Riley Doe placed a sample tenant quickly. The inspection notes were specific enough for a demo.', rating: 5.0 },
  { author: 'Jordan Test', role: 'Seller', date: 'June 30th 2026', content: 'Sam Doe talked us through presentation and the two pretend offers. No pressure, just a clear recommendation.', rating: 5.0 },
  { author: 'Avery Mock', role: 'Renter', date: 'June 22nd 2026', content: 'Casey Doe lined up three sample rentals that matched the brief.', rating: 5.0 },
];
