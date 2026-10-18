import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Home, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const mockSuburbs = [
  {
    name: "Mocktown",
    medianPrice: "$465,000",
    rentalYield: "5.1%",
    population: "12,400",
    trend: "up",
    growth: "+1.8%",
    description: "A made-up inner suburb used for this demo. The price, yield, and population are placeholder numbers.",
    imageUrl: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=800&h=600&fit=crop"
  },
  {
    name: "Sampleville",
    medianPrice: "$760,000",
    rentalYield: "4.0%",
    population: "6,800",
    trend: "up",
    growth: "+3.2%",
    description: "Another fictional suburb, with houses and townhouses invented for the layout. Numbers are not market data.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
  },
  {
    name: "Example Heights",
    medianPrice: "$980,000",
    rentalYield: "3.6%",
    population: "2,100",
    trend: "down",
    growth: "-0.6%",
    description: "A pretend prestige pocket with a small set of mock listings. Figures are sample only.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
  }
];

export function SuburbInsights() {
  const [activeSuburb, setActiveSuburb] = useState(mockSuburbs[0]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">
            Suburb <span className="text-brand">Market Insights</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mock suburb snapshots. The names and figures are made up so this page can show a market-insights layout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Suburb Selector */}
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="bg-white rounded-sm shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white p-4 font-bold font-outfit text-lg">
              Select an Area
            </div>
            <div className="flex flex-col">
              {mockSuburbs.map(suburb => (
                <button
                  key={suburb.name}
                  onClick={() => setActiveSuburb(suburb)}
                  className={`text-left px-6 py-4 border-b border-slate-100 last:border-0 transition-colors flex items-center justify-between ${
                    activeSuburb.name === suburb.name ? 'bg-slate-50 border-l-4 border-l-brand' : 'hover:bg-slate-50 border-l-4 border-l-transparent'
                  }`}
                >
                  <span className={`font-bold ${activeSuburb.name === suburb.name ? 'text-brand' : 'text-slate-700'}`}>{suburb.name}</span>
                  <MapPin size={18} className={activeSuburb.name === suburb.name ? 'text-brand' : 'text-slate-400'} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Suburb Details */}
          <motion.div 
            key={activeSuburb.name} // Forces re-animation on change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-sm shadow-md border border-slate-200 overflow-hidden">
              <div className="h-64 relative">
                <img src={activeSuburb.imageUrl} alt={activeSuburb.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <h2 className="text-4xl font-bold font-outfit text-white">{activeSuburb.name}</h2>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {activeSuburb.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-4 rounded-sm border border-slate-100">
                    <div className="text-slate-400 mb-2"><Home size={24} /></div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Median Price</div>
                    <div className="text-xl font-bold text-slate-900">{activeSuburb.medianPrice}</div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-sm border border-slate-100">
                    <div className="text-brand mb-2"><TrendingUp size={24} /></div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Rental Yield</div>
                    <div className="text-xl font-bold text-slate-900">{activeSuburb.rentalYield}</div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-sm border border-slate-100">
                    <div className="text-blue-500 mb-2"><Users size={24} /></div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Population</div>
                    <div className="text-xl font-bold text-slate-900">{activeSuburb.population}</div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-sm border border-slate-100">
                    <div className={activeSuburb.trend === 'up' ? 'text-green-500 mb-2' : 'text-red-500 mb-2'}>
                      {activeSuburb.trend === 'up' ? <ArrowUpRight size={24} /> : <ArrowDownRight size={24} />}
                    </div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">12Mo Growth</div>
                    <div className={`text-xl font-bold ${activeSuburb.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {activeSuburb.growth}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
