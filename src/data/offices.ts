import { Office } from '../types';

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=500&q=80`;

export const allOffices: Office[] = [
  { suburb: 'Mocktown', name: 'North Reef Mocktown', state: 'Central', phone: '555 0100', imageUrl: photo('photo-1486406146926-c627a92ad1ab') },
  { suburb: 'Sampleville', name: 'North Reef Sampleville', state: 'Central', phone: '555 0110', imageUrl: photo('photo-1497366216548-37526070297c') },
  { suburb: 'Example Heights', name: 'North Reef Example Heights', state: 'North', phone: '555 0120', imageUrl: photo('photo-1497366811353-6870744d04b2') },
  { suburb: 'Placeholder Park', name: 'North Reef Placeholder Park', state: 'South', phone: '555 0130', imageUrl: photo('photo-1497366754035-f200968a6e72') },
  { suburb: 'Demo Bay', name: 'North Reef Demo Bay', state: 'East', phone: '555 0140', imageUrl: photo('photo-1487958449943-2429e8be8625') },
  { suburb: 'Testwood', name: 'North Reef Testwood', state: 'West', phone: '555 0150', imageUrl: photo('photo-1554469384-e58fac16e23a') },
  { suburb: 'Filler Grove', name: 'North Reef Filler Grove', state: 'West', phone: '555 0151', imageUrl: photo('photo-1448630360428-65456885c650') },
];
