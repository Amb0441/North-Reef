import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { allProperties } from '../data/properties';
import { BedDouble, Bath, Car, Search, MapPin } from 'lucide-react';

export function Properties() {
  const location = useLocation();
  const [filter, setFilter] = useState<'All' | 'Sold' | 'Leased' | 'For Sale' | 'For Lease' | 'OpenHomes' | 'Auctions'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    const qParam = params.get('q');

    if (qParam) {
      setSearchQuery(qParam.toLowerCase());
    } else {
      setSearchQuery('');
    }

    if (tabParam) {
      if (tabParam === 'Buy') setFilter('For Sale');
      else if (tabParam === 'Rent') setFilter('For Lease');
      else if (tabParam === 'Sold') setFilter('Sold');
      else if (tabParam === 'Leased') setFilter('Leased');
      else if (tabParam === 'OpenHomes') setFilter('OpenHomes' as any);
      else if (tabParam === 'Auctions') setFilter('Auctions' as any);
      else setFilter('All');
    } else {
      // Fallback to route-based filtering if no tab is provided
      if (location.pathname.includes('/rent') || location.pathname.includes('/rental')) {
        setFilter('For Lease');
      } else if (location.pathname.includes('/buy') || location.pathname.includes('/sale')) {
        setFilter('For Sale');
      } else {
        setFilter('All');
      }
    }
  }, [location.pathname, location.search]);

  const filteredProperties = allProperties.filter(p => {
    // Check status filter
    let statusMatch = false;
    
    if (filter === 'All') {
      statusMatch = true;
    } else if (filter === 'For Lease') {
      statusMatch = p.status.includes('Leased') || p.status.includes('Rent') || p.status === 'New' || p.status.includes('For Lease');
    } else if (filter === 'For Sale') {
      statusMatch = p.status.includes('Sale') || p.status.includes('Auction');
    } else if (filter === 'OpenHomes' as any) {
      statusMatch = p.status.includes('Open Home');
    } else if (filter === 'Auctions' as any) {
      statusMatch = p.status.includes('Auction');
    } else {
      statusMatch = p.status.includes(filter);
    }

    // Check search query match
    const searchMatch = searchQuery 
      ? p.address.toLowerCase().includes(searchQuery) || 
        p.suburb.toLowerCase().includes(searchQuery)
      : true;

    return statusMatch && searchMatch;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
              Real Estate <span className="text-brand italic">Listings</span>
            </h1>
            <p className="text-lg text-slate-600">Browse our latest properties across all categories.</p>
          </div>
          
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {['All', 'For Sale', 'For Lease', 'Sold', 'Leased', 'OpenHomes', 'Auctions'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-6 py-2 font-outfit font-bold rounded-sm transition-all ${
                  filter === status 
                    ? 'bg-brand text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {status.replace('OpenHomes', 'Open Homes')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProperties.map(property => (
            <Link to={`/property/${property.id}`} key={property.id} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all border border-slate-200 overflow-hidden group flex flex-col h-full block">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={property.imageUrl} 
                  alt={property.address} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-brand text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-md">
                    {property.status}
                  </span>
                  {property.furnished && (
                    <span className="bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-md">
                      Furnished
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-outfit text-slate-900 mb-1">{property.address}</h3>
                <div className="flex items-center text-slate-500 mb-6 gap-1">
                  <MapPin size={16} />
                  <span className="text-sm">{property.suburb}</span>
                </div>
                
                <div className="flex items-center gap-6 text-slate-700 mb-6 mt-auto py-4 border-t border-b border-slate-100">
                  <div className="flex items-center gap-2" title="Bedrooms">
                    <BedDouble size={20} className="text-brand" />
                    <span className="font-bold">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2" title="Bathrooms">
                    <Bath size={20} className="text-brand" />
                    <span className="font-bold">{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-2" title="Car Parks">
                    <Car size={20} className="text-brand" />
                    <span className="font-bold">{property.carparks}</span>
                  </div>
                </div>
                
                <div className="text-lg font-bold font-outfit text-slate-900">
                  {property.priceText}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
