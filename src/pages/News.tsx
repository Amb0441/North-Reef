import React from 'react';
import { Link } from 'react-router-dom';
import { latestNews } from '../data/team';
import { ArrowRight, Calendar } from 'lucide-react';

export function News() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="relative w-full h-[400px] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1554774853-719586f82d77?w=1600&h=600&fit=crop" 
            alt="Real Estate News" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6">
            Latest <span className="text-brand italic">News</span>
          </h1>
          <p className="text-xl text-slate-300">Insights, market updates, and property news.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestNews.map((news, idx) => (
            <Link to="/contact" key={idx} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all border border-slate-200 overflow-hidden flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md flex items-center gap-2">
                  <Calendar size={14} />
                  {news.date}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4 group-hover:text-brand transition-colors leading-snug">
                  {news.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  {news.summary}
                </p>
                <div className="text-brand font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Full Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
          {/* Extended mock data to fill the grid nicely */}
          <Link to="/contact" className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all border border-slate-200 overflow-hidden flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop" 
                  alt="Rental Market" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md flex items-center gap-2">
                  <Calendar size={14} />
                  05 May 2026
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4 group-hover:text-brand transition-colors leading-snug">
                  Sample headline: rental demand in Mocktown
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  Placeholder article about a made-up rental market, written so the news grid has one more card.
                </p>
                <div className="text-brand font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Full Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
