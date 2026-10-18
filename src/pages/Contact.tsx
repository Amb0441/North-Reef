import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="relative w-full h-[400px] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop" 
            alt="Office Contact" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6">
            Get in <span className="text-brand italic">Touch</span>
          </h1>
          <p className="text-xl text-slate-300">We're here to help with all your real estate needs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-slate-200 rounded-sm">
            <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand" placeholder="0400 000 000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand text-white py-4 font-bold uppercase tracking-wide hover:bg-brand-dark transition-colors">
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-10">
            <div>
              <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-8">Office Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft p-3 rounded-full text-brand shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-slate-600">123 Sample Street<br/>Mocktown 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft p-3 rounded-full text-brand shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600">555 0100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft p-3 rounded-full text-brand shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">hello@northreef.example</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-soft p-3 rounded-full text-brand shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Trading Hours</h4>
                    <ul className="text-slate-600 space-y-1">
                      <li>Monday - Friday: 8:30am - 5:00pm</li>
                      <li>Saturday: 9:00am - 12:00pm</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
