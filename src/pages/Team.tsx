import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team';
import { Phone, Mail } from 'lucide-react';

export function Team() {
  return (
    <div className="w-full bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 mb-6">
            Our <span className="text-brand italic">Team</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everyone here is a placeholder. John Doe, Jane Doe, and the rest of the mock team show how a property site introduces its people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-slate-100 mb-6">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-1 group-hover:text-brand transition-colors">{member.name}</h3>
              {member.role && <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>}
              
              <div className="w-12 h-1 bg-slate-200 mb-6"></div>

              <div className="space-y-3 mt-auto">
                <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-slate-600 hover:text-brand transition-colors">
                  <Phone size={18} className="text-slate-400" />
                  <span className="font-medium">{member.phone}</span>
                </a>
                <Link to="/contact" className="flex items-center gap-3 text-slate-600 hover:text-brand transition-colors">
                  <Mail size={18} className="text-slate-400" />
                  <span className="font-medium">Email Agent</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
