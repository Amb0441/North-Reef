import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { allProperties, galleryFor } from '../data/properties';
import { teamMembers } from '../data/team';
import { BedDouble, Bath, CarFront, MapPin, ArrowLeft, Phone, Mail, CheckCircle2 } from 'lucide-react';

export function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const property = allProperties.find(p => p.id === id);
  const agent = teamMembers.find((member) => member.name === 'John Doe');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="w-full bg-slate-50 min-h-screen py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Property Not Found</h2>
        <button onClick={() => navigate(-1)} className="text-brand font-bold flex items-center gap-2">
          <ArrowLeft size={20} /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[65vh] bg-slate-900">
        <img 
          src={property.imageUrl} 
          alt={property.address} 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <button onClick={() => navigate(-1)} className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-sm font-bold flex items-center gap-2 shadow-lg hover:bg-brand hover:text-white transition-colors">
            <ArrowLeft size={18} /> Back to Results
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-8 md:p-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-block bg-brand text-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-sm shadow-md mb-4">
                {property.status}
              </div>
              <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-2">
                {property.address}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 flex items-center gap-2">
                <MapPin size={24} className="text-brand" /> {property.suburb}
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-3xl md:text-4xl font-bold font-outfit text-white">
                {property.priceText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Features Bar */}
            <div className="flex flex-wrap gap-8 py-6 border-y border-slate-200">
              <div className="flex items-center gap-3 text-slate-700">
                <BedDouble size={28} className="text-brand" />
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Bedrooms</p>
                  <p className="text-2xl font-bold">{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Bath size={28} className="text-brand" />
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Bathrooms</p>
                  <p className="text-2xl font-bold">{property.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CarFront size={28} className="text-brand" />
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Carparks</p>
                  <p className="text-2xl font-bold">{property.carparks}</p>
                </div>
              </div>
              {property.furnished && (
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 size={28} className="text-brand" />
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Furnished</p>
                    <p className="text-2xl font-bold">Yes</p>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">Property Description</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Sample description for {property.address}, a mock listing in {property.suburb}.
                  This text is placeholder copy so the property page has a description to show.
                </p>
                <p>
                  Designed with space and natural light in mind, the open-plan living areas flow seamlessly into the outdoor entertaining spaces, creating the ultimate environment for hosting guests or relaxing in private. 
                  The property features {property.bedrooms} generously sized bedrooms, {property.bathrooms} well-appointed bathrooms, and a modern kitchen equipped with quality appliances and ample storage.
                </p>
                <p>
                  Additional highlights include secure parking for {property.carparks} vehicles, low-maintenance landscaping, and proximity to local schools, shopping precincts, and public transport options. 
                  Nothing on this page is a real listing. {property.suburb} is a made-up place used for the demo.
                </p>
                <p>
                  Contact our dedicated team today to arrange a private inspection and secure your future in this exceptional home.
                </p>
              </div>
            </div>
            
            {/* Gallery Placeholder */}
            <div>
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">Property Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryFor(property.imageUrl, property.id).map((src, index) => (
                  <div key={src} className="aspect-square bg-slate-200 rounded-sm overflow-hidden">
                    <img 
                      src={src}
                      alt={`${property.address} photo ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / Contact */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-sm shadow-xl border border-slate-200 p-8 sticky top-24">
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-6 border-b border-slate-100 pb-4">Interested in this property?</h3>
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={agent?.imageUrl}
                  alt={agent?.name ?? 'Listing agent'} 
                  className="w-16 h-16 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-lg text-slate-900">John Doe</p>
                  <p className="text-brand text-sm font-bold uppercase tracking-wider">Listing Agent</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <a href="tel:5550100" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-sm hover:bg-slate-900 hover:text-white transition-colors">
                  <Phone size={18} /> 555 0100
                </a>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                </div>
                <div>
                  <input type="tel" placeholder="Your Phone" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                </div>
                <div>
                  <textarea placeholder="I am interested in this property..." rows={4} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-brand-dark transition-colors shadow-md uppercase tracking-widest font-outfit flex items-center justify-center gap-2">
                  <Mail size={20} /> Send Enquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
