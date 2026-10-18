import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white w-full border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-outfit mb-4 text-brand">Buy</h3>
            <ul className="space-y-2">
              <li><Link to="/buy" className="text-slate-300 hover:text-white transition-colors">Finding Your Place</Link></li>
              <li><Link to="/moving-checklist" className="text-slate-300 hover:text-white transition-colors">Property buying tips</Link></li>
              <li><Link to="/finance-calculators" className="text-slate-300 hover:text-white transition-colors">First home buyers</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-outfit mb-4 text-brand">Sell</h3>
            <ul className="space-y-2">
              <li><Link to="/sell" className="text-slate-300 hover:text-white transition-colors">Looking to sell</Link></li>
              <li><Link to="/moving-checklist" className="text-slate-300 hover:text-white transition-colors">Tips for selling your home</Link></li>
              <li><Link to="/sell" className="text-slate-300 hover:text-white transition-colors">Request a sales market appraisal</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-outfit mb-4 text-brand">Rent</h3>
            <ul className="space-y-2">
              <li><Link to="/rent" className="text-slate-300 hover:text-white transition-colors">First time renting?</Link></li>
              <li><Link to="/moving-checklist" className="text-slate-300 hover:text-white transition-colors">Tips for renting a property</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Utility connections</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-outfit mb-4 text-brand">Manage</h3>
            <ul className="space-y-2">
              <li><Link to="/manage" className="text-slate-300 hover:text-white transition-colors">Property Management you can trust</Link></li>
              <li><Link to="/rental-yield-calculator" className="text-slate-300 hover:text-white transition-colors">Free investment property review</Link></li>
              <li><Link to="/manage" className="text-slate-300 hover:text-white transition-colors">Request a rental appraisal</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-outfit mb-4 text-brand">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/offices" className="text-slate-300 hover:text-white transition-colors">Find an Office</Link></li>
              <li><Link to="/team" className="text-slate-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/company" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0 text-slate-400">
            <Facebook size={24} />
            <Instagram size={24} />
            <Linkedin size={24} />
            <Youtube size={24} />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-slate-400">
              © 2026 North Reef. Mock content only — a portfolio site built to showcase website development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
