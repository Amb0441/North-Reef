import { Property } from '../types';

const photo = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const homes = [
  'photo-1568605114967-8130f3a36994',
  'photo-1570129477492-45c003edd2be',
  'photo-1600585154340-be6161a56a0c',
  'photo-1600596542815-ffad4c1539a9',
  'photo-1600585154526-990dced4db0d',
  'photo-1600047509358-9dc75507daeb',
  'photo-1600566753190-17f0baa2a6c3',
  'photo-1600573472592-401b489a3cdc',
  'photo-1613490493576-7fde63acd811',
  'photo-1613977257363-707ba9348227',
  'photo-1564013799919-ab600027ffc6',
  'photo-1576941089067-2de3c901e126',
  'photo-1512917774080-9991f1c4c750',
  'photo-1580587771525-78b9dba3b914',
  'photo-1449844908441-8829872d2607',
  'photo-1518780664697-55e3ad937233',
  'photo-1416331108676-a22ccb276e35',
  'photo-1430285561322-7808604715df',
  'photo-1480074568708-e7b720bb3f09',
  'photo-1475855581690-80accde3ae2b',
  'photo-1523217582562-09d0def993a6',
  'photo-1513584684374-8bab748fbf90',
  'photo-1502005229762-cf1b2da7c5d6',
  'photo-1460317442991-0ec209397118',
  'photo-1572120360610-d971b9d7767c',
  'photo-1598228723793-52759bba239c',
  'photo-1605276374104-dee2a0ed3cd6',
  'photo-1592595896551-12b371d546d5',
  'photo-1583608205776-bfd35f0d9f83',
  'photo-1560184897-ae75f418493e',
  'photo-1560185007-cde436f6a4d0',
  'photo-1600607687939-ce8a6c25118c',
];

const rooms = [
  'photo-1600210492486-724fe5c67fb0',
  'photo-1600121848594-d8644e57abab',
  'photo-1600566753086-00f18fb6b3ea',
  'photo-1600585153490-76fb20a32601',
  'photo-1556912173-46c336c7fd55',
  'photo-1554995207-c18c203602cb',
  'photo-1560448204-e02f11c3d0e2',
  'photo-1502672260266-1c1ef2d93688',
  'photo-1522708323590-d24dbb6b0267',
  'photo-1493809842364-78817add7ffb',
  'photo-1484154218962-a197022b5858',
  'photo-1560185127-6ed189bf02f4',
  'photo-1616594039964-ae9021a400a0',
  'photo-1615874959474-d609969a20ed',
  'photo-1598928506311-c55ded91a20c',
  'photo-1586023492125-27b2c045efd7',
  'photo-1600489000022-c2086d79f9d4',
  'photo-1600210491892-03d54c0aaf87',
  'photo-1618221195710-dd6b41faaea6',
  'photo-1631679706909-1844bbd07221',
].map((id) => photo(id, 800, 800));

let homeIndex = 0;
const home = () => photo(homes[homeIndex++]);

export function galleryFor(imageUrl: string, seed: string) {
  const start = [...seed].reduce((total, char) => total + char.charCodeAt(0), 0);
  const extras = Array.from({ length: 5 }, (_, index) => rooms[(start + index * 3) % rooms.length]);
  return [imageUrl, ...extras];
}

export const propertiesSold: Property[] = [
  { id: '1', status: 'Sold', address: '123 Sample Street', suburb: 'Mocktown', bedrooms: 3, bathrooms: 2, carparks: 2, priceText: 'Sold for $890,000', imageUrl: home() },
  { id: '2', status: 'Sold', address: '8 Placeholder Lane', suburb: 'Sampleville', bedrooms: 2, bathrooms: 2, carparks: 1, priceText: 'Sold for $640,000', imageUrl: home() },
  { id: '3', status: 'Sold', address: '22 Example Avenue', suburb: 'Example Heights', bedrooms: 3, bathrooms: 2, carparks: 2, priceText: 'Sold for $735,000', imageUrl: home() },
  { id: '4', status: 'Sold', address: '5 Demo Close', suburb: 'Placeholder Park', bedrooms: 4, bathrooms: 2, carparks: 2, priceText: 'Sold for $812,000', imageUrl: home() },
  { id: '6', status: 'Sold', address: '90 Testwood Road', suburb: 'Demo Bay', bedrooms: 5, bathrooms: 3, carparks: 3, priceText: 'Sold for $1,240,000', imageUrl: home() },
  { id: '7', status: 'Sold', address: '3 Mock Walk', suburb: 'Mocktown', bedrooms: 2, bathrooms: 1, carparks: 1, priceText: 'Sold for $515,000', imageUrl: home() },
  { id: '8', status: 'Sold', address: '11 Doe Avenue', suburb: 'Sampleville', bedrooms: 3, bathrooms: 1, carparks: 1, priceText: 'Sold for $548,000', imageUrl: home() },
  { id: '9', status: 'Sold', address: '17 Template Drive', suburb: 'Example Heights', bedrooms: 4, bathrooms: 2, carparks: 2, priceText: 'Sold for $690,000', imageUrl: home() },
];

export const propertiesLeased: Property[] = [
  { id: '10', status: 'Leased', address: '6 Filler Place', suburb: 'Placeholder Park', bedrooms: 3, bathrooms: 2, carparks: 1, priceText: 'Leased', imageUrl: home() },
  { id: '11', status: 'Leased', address: '12/40 Sample Court', suburb: 'Mocktown', bedrooms: 2, bathrooms: 2, carparks: 1, priceText: 'Leased', imageUrl: home() },
  { id: '12', status: 'Leased', address: '9 Dummy Street', suburb: 'Sampleville', bedrooms: 2, bathrooms: 1, carparks: 1, priceText: 'Leased', imageUrl: home() },
  { id: '13', status: 'Leased', address: '2/15 Practice Road', suburb: 'Example Heights', bedrooms: 2, bathrooms: 1, carparks: 1, priceText: 'Leased', imageUrl: home() },
  { id: '14', status: 'Leased', address: '28 Stand-in Close', suburb: 'Demo Bay', bedrooms: 3, bathrooms: 2, carparks: 2, priceText: 'Leased', imageUrl: home() },
  { id: '15', status: 'Leased', address: '4 Studio Lane', suburb: 'Mocktown', bedrooms: 1, bathrooms: 1, carparks: 1, priceText: 'Leased', imageUrl: home() },
  { id: '16', status: 'Leased', address: '19 Blank Avenue', suburb: 'Placeholder Park', bedrooms: 4, bathrooms: 2, carparks: 2, priceText: 'Leased', imageUrl: home() },
  { id: '18', status: 'Leased', address: '7 Mock Terrace', suburb: 'Sampleville', bedrooms: 3, bathrooms: 1, carparks: 1, priceText: 'Leased', imageUrl: home() },
];

export const propertiesForRent: Property[] = [
  { id: '19', status: 'For Lease | Open Home Sat 10am', address: '31 Sample Street', suburb: 'Mocktown', bedrooms: 3, bathrooms: 1, carparks: 2, priceText: '$620 per week', imageUrl: home() },
  { id: '20', status: 'For Lease', address: '18/2 Placeholder Way', suburb: 'Sampleville', bedrooms: 1, bathrooms: 1, carparks: 1, priceText: '$480 per week', imageUrl: home(), furnished: true },
  { id: '21', status: 'For Lease', address: '1/9 Example Lane', suburb: 'Example Heights', bedrooms: 2, bathrooms: 1, carparks: 1, priceText: '$560 per week', imageUrl: home() },
  { id: '22', status: 'For Lease', address: '44 Demo Court', suburb: 'Demo Bay', bedrooms: 2, bathrooms: 2, carparks: 1, priceText: '$710 per week', imageUrl: home() },
  { id: '23', status: 'For Lease | Open Home Sun 11am', address: '6 Mock Path', suburb: 'Placeholder Park', bedrooms: 2, bathrooms: 1, carparks: 1, priceText: '$540 per week', imageUrl: home() },
  { id: '24', status: 'For Lease', address: '12 Doe Drive', suburb: 'Sampleville', bedrooms: 4, bathrooms: 2, carparks: 2, priceText: '$780 per week', imageUrl: home() },
  { id: '25', status: 'For Lease', address: '3/8 Template Lane', suburb: 'Mocktown', bedrooms: 1, bathrooms: 1, carparks: 1, priceText: '$410 per week', imageUrl: home(), furnished: true },
];

export const propertiesForSale: Property[] = [
  { id: '30', status: 'Auction On-Site', address: '2/50 Sample Arcade', suburb: 'Mocktown', bedrooms: 2, bathrooms: 1, carparks: 1, priceText: 'Buyers in the mid $400,000s', imageUrl: home() },
  { id: '35', status: 'For Sale', address: '88 Doe Crescent', suburb: 'Example Heights', bedrooms: 5, bathrooms: 3, carparks: 2, priceText: 'Offers over $1,150,000', imageUrl: home() },
  { id: '27', status: 'For Sale | Open Home Sat 1pm', address: '16 Placeholder Street', suburb: 'Sampleville', bedrooms: 1, bathrooms: 1, carparks: 1, priceText: 'Buyers from $380,000', imageUrl: home() },
  { id: '28', status: 'For Sale', address: '9/21 Mock Walk', suburb: 'Placeholder Park', bedrooms: 2, bathrooms: 1, carparks: 1, priceText: 'High $300,000s', imageUrl: home() },
  { id: '29', status: 'Auction May 12th', address: '4 Demo Road', suburb: 'Demo Bay', bedrooms: 4, bathrooms: 2, carparks: 3, priceText: 'Buyers in the early $1 millions', imageUrl: home() },
  { id: '31', status: 'For Sale', address: '27 Example Street', suburb: 'Example Heights', bedrooms: 3, bathrooms: 2, carparks: 2, priceText: 'Buyers in the mid $700,000s', imageUrl: home() },
  { id: '32', status: 'For Sale | Open Home Sun 10am', address: '5/21 Mock Walk', suburb: 'Placeholder Park', bedrooms: 2, bathrooms: 1, carparks: 1, priceText: 'High $300,000s', imageUrl: home() },
  { id: '33', status: 'For Sale', address: '41 Sample Close', suburb: 'Sampleville', bedrooms: 4, bathrooms: 2, carparks: 2, priceText: 'Offers over $920,000', imageUrl: home() },
  { id: '34', status: 'For Sale', address: '10 Doe Lane', suburb: 'Mocktown', bedrooms: 3, bathrooms: 2, carparks: 2, priceText: 'Buyers in the mid $800,000s', imageUrl: home() },
];

export const allProperties = [...propertiesSold, ...propertiesLeased, ...propertiesForRent, ...propertiesForSale];
