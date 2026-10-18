import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface RentalAppraisalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RentalAppraisalDrawer({ isOpen, onClose }: RentalAppraisalDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
          />
          
          {/* Drawer Slide-out */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-2xl z-[120] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand text-white p-8 relative shrink-0">
              <button 
                onClick={onClose} 
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2"
                aria-label="Close drawer"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-outfit font-bold mb-3 pr-8 leading-tight">
                Request a Free Rental Appraisal
              </h2>
              <p className="text-white/80 text-sm font-medium">
                Fields marked with * are required
              </p>
            </div>

            {/* Scrollable Form Area */}
            <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                
                {/* Section: Your Details */}
                <div className="space-y-5">
                  <h3 className="text-3xl font-outfit font-bold text-slate-900 border-b border-slate-200 pb-3">
                    Your Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name <span className="text-brand">*</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors shadow-sm" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name <span className="text-brand">*</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors shadow-sm" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Phone Number <span className="text-brand">*</span></label>
                    <input type="tel" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors shadow-sm" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Email Address <span className="text-brand">*</span></label>
                    <input type="email" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors shadow-sm" required />
                  </div>
                </div>

                {/* Section: Property Details */}
                <div className="space-y-5">
                  <h3 className="text-3xl font-outfit font-bold text-slate-900 border-b border-slate-200 pb-3">
                    Property Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Property Street Address <span className="text-brand">*</span></label>
                    <textarea rows={3} className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors shadow-sm" required></textarea>
                  </div>
                </div>

              </form>
            </div>

            {/* Fixed Footer Buttons */}
            <div className="shrink-0 flex items-center bg-white">
              <button 
                onClick={onClose} 
                className="w-1/2 py-5 bg-slate-800 text-white font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={onClose} 
                className="w-1/2 py-5 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors"
              >
                Submit
              </button>
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
