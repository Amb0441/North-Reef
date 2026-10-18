import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allOffices } from '../data/offices';
import { MapPin, Phone, Printer } from 'lucide-react';

export function Offices() {
  const [activeState, setActiveState] = useState<string>('Central');

  const states = ['Central', 'North', 'South', 'East', 'West'];
  
  const filteredOffices = allOffices.filter(office => office.state === activeState);

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">
            Offices in <span className="text-brand italic">{activeState}</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These offices are made up. Pick a region to see the North Reef mock locations.
          </p>
        </div>

        {/* State Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {states.map((st) => (
            <button
              key={st}
              onClick={() => setActiveState(st)}
              className={`px-8 py-3 font-outfit font-bold text-lg rounded-sm transition-all ${
                activeState === st 
                  ? 'bg-brand text-white shadow-md' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Offices Grid */}
        {filteredOffices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredOffices.map((office, idx) => (
              <div key={idx} className="bg-white rounded-sm border border-slate-200 hover:shadow-xl transition-shadow flex flex-col overflow-hidden">
                <div className="aspect-[16/10] bg-slate-100">
                  <img src={office.imageUrl} alt={office.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4 text-brand">
                  <MapPin size={24} />
                  <h3 className="text-xl font-bold font-outfit text-slate-900">{office.suburb}</h3>
                </div>
                
                <p className="font-semibold text-slate-700 mb-4">{office.name}</p>
                
                <div className="mt-auto space-y-3">
                  <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-slate-600 hover:text-brand transition-colors">
                    <Phone size={18} className="text-slate-400" />
                    <span>{office.phone}</span>
                  </a>
                  
                  {office.fax && (
                    <div className="flex items-center gap-3 text-slate-500">
                      <Printer size={18} className="text-slate-400" />
                      <span>{office.fax}</span>
                    </div>
                  )}
                </div>

                <Link to="/contact" className="mt-6 w-full py-3 border-2 border-brand text-brand font-bold rounded-sm hover:bg-brand hover:text-white transition-colors font-outfit uppercase tracking-wide text-sm flex items-center justify-center">
                  View Office
                </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-400 mb-2">Sorry, no offices could be located in {activeState}.</h3>
            <p className="text-slate-500">Please try selecting another state.</p>
          </div>
        )}

      </div>
    </div>
  );
}
