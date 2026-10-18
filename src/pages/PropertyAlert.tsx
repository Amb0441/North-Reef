import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BellRing, Mail, MapPin, BedDouble, Bath, CheckCircle2 } from 'lucide-react';

export function PropertyAlert() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand text-white rounded-full mb-6 shadow-lg shadow-brand/20">
            <BellRing size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
            Buyers Property <span className="text-brand">Alert</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't miss out on your dream home. Set up an alert to receive instant email notifications the moment a property matching your criteria hits the market.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-white p-12 text-center rounded-sm shadow-xl border border-slate-200"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">You're All Set!</h2>
            <p className="text-slate-600 text-lg mb-8">
              Your property alert has been successfully created. We will send you an email notification as soon as matching properties are listed.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-brand transition-colors"
            >
              Create Another Alert
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white shadow-xl border border-slate-200 rounded-sm overflow-hidden"
          >
            <div className="bg-slate-900 p-6 flex items-start gap-4 text-white">
              <h3 className="text-xl font-bold font-outfit">Set Your Criteria</h3>
            </div>

            <div className="p-8 space-y-8">
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                      <MapPin size={16} className="text-brand" /> Locations / Suburbs
                    </label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="e.g. Mocktown, Sampleville" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                      Property Type
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand">
                      <option>House</option>
                      <option>Apartment / Unit</option>
                      <option>Townhouse</option>
                      <option>Land</option>
                      <option>Any</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                      <BedDouble size={16} className="text-brand" /> Min Bedrooms
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                      <Bath size={16} className="text-brand" /> Min Bathrooms
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                      Max Price
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand">
                      <option>Any Price</option>
                      <option>$500k</option>
                      <option>$750k</option>
                      <option>$1M</option>
                      <option>$1.5M</option>
                      <option>$2M+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <h3 className="text-xl font-bold font-outfit text-slate-900 border-b border-slate-100 pb-2">Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                      <Mail size={16} className="text-brand" /> Email Address *
                    </label>
                    <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-brand text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-brand-dark transition-colors shadow-lg uppercase tracking-widest font-outfit">
                  Save Alert Preferences
                </button>
              </div>

            </div>
          </motion.form>
        )}

      </div>
    </div>
  );
}
