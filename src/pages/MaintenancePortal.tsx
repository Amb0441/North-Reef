import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wrench, Camera, AlertTriangle, Info, Image as ImageIcon } from 'lucide-react';

export function MaintenancePortal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand text-white rounded-full mb-6 shadow-lg shadow-brand/20">
            <Wrench size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
            Maintenance <span className="text-brand">Portal</span>
          </h1>
          <p className="text-lg text-slate-600">
            Fast, efficient, and easy to track. Report issues at your rental property so our property managers can organize repairs promptly.
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
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">Request Logged Successfully</h2>
            <p className="text-slate-600 text-lg mb-8">
              Thank you for reporting this issue. Your property manager has been notified and will be in touch shortly to arrange a tradesperson. Your Reference Number is: <strong>#REQ-99281</strong>
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-brand transition-colors"
            >
              Submit Another Request
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
              <Info className="text-blue-400 shrink-0 mt-1" />
              <p className="text-sm text-slate-300 leading-relaxed">
                If your issue is an emergency (e.g., severe burst pipe, electrical fire risk, major roof leak), please refer to the emergency contact numbers listed in your lease agreement and call immediately.
              </p>
            </div>

            <div className="p-8 space-y-8">
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-outfit text-slate-900 border-b border-slate-100 pb-2">Property Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Property Address *</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="Unit / Street No & Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Tenant Name *</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold font-outfit text-slate-900 border-b border-slate-100 pb-2">Issue Details</h3>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Category *</label>
                  <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand">
                    <option value="">Select a category...</option>
                    <option value="plumbing">Plumbing & Water</option>
                    <option value="electrical">Electrical & Lighting</option>
                    <option value="heating">Heating & Cooling</option>
                    <option value="appliances">Supplied Appliances</option>
                    <option value="structural">Doors, Windows & Locks</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Description of the issue *</label>
                  <textarea rows={4} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="Please provide as much detail as possible to help the tradesperson..."></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Upload Photos (Optional)</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-sm p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                    <ImageIcon className="w-10 h-10 text-slate-400 mx-auto mb-3 group-hover:text-brand transition-colors" />
                    <p className="text-slate-600 text-sm font-medium">Click to upload photos of the issue</p>
                    <p className="text-slate-400 text-xs mt-1">PNG, JPG up to 5MB</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-brand text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-brand-dark transition-colors shadow-lg uppercase tracking-widest font-outfit">
                  Submit Maintenance Request
                </button>
              </div>

            </div>
          </motion.form>
        )}

      </div>
    </div>
  );
}

// Internal icon for success state
function CheckCircle2(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
