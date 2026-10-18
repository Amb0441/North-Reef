import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, BedDouble, Bath, Car, ArrowRight, Heart, Briefcase, TrendingUp, Building, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { latestNews } from '../data/team';
import { allProperties } from '../data/properties';

export function Home() {
  const navigate = useNavigate();
  const [searchTab, setSearchTab] = useState('Buy');
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredProperties = allProperties.filter(p => p.status.includes('Sale') || p.status.includes('New')).slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    let path = '/buy';
    if (searchTab === 'Rent' || searchTab === 'Leased') {
      path = '/rent';
    }
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    params.set('tab', searchTab);
    navigate(`${path}?${params.toString()}`);
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="w-full flex flex-col bg-white overflow-hidden">
      
      {/* Full-Bleed Minimalist Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[650px] flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=2400&h=1600&fit=crop" 
            alt="Luxury modern property" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20"></div>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold text-white mb-6 text-center tracking-tight drop-shadow-md"
          >
            Find your <span className="text-brand">place.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/95 max-w-2xl text-center font-light drop-shadow-md mb-12"
          >
            Mock listings for a property website demo. Buy, rent, sell, and manage with sample data.
          </motion.p>

          {/* Sleek Search Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="w-full bg-white/95 backdrop-blur-md rounded-sm shadow-2xl overflow-hidden border border-white/20"
          >
            <div className="flex border-b border-slate-200">
              {['Buy', 'Rent', 'Sold', 'Leased'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSearchTab(tab)}
                  className={`flex-1 py-4 font-outfit font-bold text-sm tracking-widest uppercase transition-colors ${
                    searchTab === tab 
                      ? 'text-brand border-b-2 border-brand bg-white' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50/50 border-b-2 border-transparent'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <form onSubmit={handleSearch} className="p-4 md:p-6 flex flex-col md:flex-row gap-3 items-center">
              <div className="flex-1 w-full relative flex items-center">
                <Search size={22} className="absolute left-4 text-slate-400" strokeWidth={2} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by suburb, postcode, or region..." 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/80 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-lg transition-all"
                />
              </div>
              <button type="submit" className="w-full md:w-auto bg-brand text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-brand-dark transition-colors shadow-md hover:shadow-lg flex items-center justify-center font-outfit whitespace-nowrap">
                Search Properties
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 bg-white w-full"></div>

      {/* Feature Navigation Grid */}
      <section className="py-12 bg-white w-full">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <motion.div variants={fadeUpVariant}>
              <Link to="/buy" className="group relative aspect-square overflow-hidden rounded-sm shadow-md border border-slate-200 block">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=600&fit=crop" alt="Buy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-brand/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <Building className="w-10 h-10 mb-3" />
                  <span className="text-2xl font-bold font-outfit tracking-wide">Buy</span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <Link to="/rent" className="group relative aspect-square overflow-hidden rounded-sm shadow-md border border-slate-200 block">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop" alt="Rent" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-brand/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <ShieldCheck className="w-10 h-10 mb-3" />
                  <span className="text-2xl font-bold font-outfit tracking-wide">Rent</span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <Link to="/sell" className="group relative aspect-square overflow-hidden rounded-sm shadow-md border border-slate-200 block">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop" alt="Sell" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-brand/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <TrendingUp className="w-10 h-10 mb-3" />
                  <span className="text-2xl font-bold font-outfit tracking-wide">Sell</span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <Link to="/manage" className="group relative aspect-square overflow-hidden rounded-sm shadow-md border border-slate-200 block">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop" alt="Manage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-brand/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <Briefcase className="w-10 h-10 mb-3" />
                  <span className="text-2xl font-bold font-outfit tracking-wide">Manage</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-slate-50 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeUpVariant} className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900">Places We <span className="text-brand">Love</span></h2>
              <p className="text-slate-600 mt-2 text-lg">Discover our most recent and premium property listings.</p>
            </div>
            <Link to="/buy" className="hidden md:flex items-center gap-2 text-brand font-bold hover:text-slate-900 transition-colors">
              View All Properties <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {featuredProperties.map(property => (
              <motion.div variants={fadeUpVariant} key={property.id} className="h-full">
                <Link to={`/property/${property.id}`} className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden group flex flex-col h-full block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={property.imageUrl} alt={property.address} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-brand text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-md">
                        {property.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-outfit text-slate-900 mb-1 line-clamp-1">{property.address}</h3>
                    <div className="flex items-center text-slate-500 mb-6 gap-1">
                      <MapPin size={16} className="text-brand" />
                      <span className="text-sm line-clamp-1">{property.suburb}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-slate-700 mb-6 mt-auto py-4 border-t border-b border-slate-100">
                      <div className="flex items-center gap-2"><BedDouble size={20} className="text-slate-400" /><span className="font-bold">{property.bedrooms}</span></div>
                      <div className="flex items-center gap-2"><Bath size={20} className="text-slate-400" /><span className="font-bold">{property.bathrooms}</span></div>
                      <div className="flex items-center gap-2"><Car size={20} className="text-slate-400" /><span className="font-bold">{property.carparks}</span></div>
                    </div>
                    
                    <div className="text-lg font-bold font-outfit text-brand">
                      {property.priceText}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/buy" className="inline-flex items-center gap-2 text-brand font-bold hover:text-slate-900 transition-colors">
              View All Properties <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Value Proposition / Appraisal */}
      <section className="py-24 bg-white w-full border-t border-slate-200">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUpVariant} className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 tracking-tight leading-tight">
                How much is your <span className="text-brand">home worth?</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're ready to sell your property or just beginning your journey, our insights, data, and local expertise are here to help you every step of the way. Knowing the current market value of your property is a crucial first step.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                  <Zap className="text-brand w-8 h-8 mb-4" />
                  <h4 className="font-bold font-outfit text-slate-900 mb-2">Digital Transformation</h4>
                  <p className="text-sm text-slate-600">Streamlined, modern processes for a frictionless real estate experience.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                  <Briefcase className="text-brand w-8 h-8 mb-4" />
                  <h4 className="font-bold font-outfit text-slate-900 mb-2">Pristine Service</h4>
                  <p className="text-sm text-slate-600">Impeccable attention to detail and orderliness in every transaction.</p>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/sell" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-brand transition-colors shadow-lg">
                  Get Your Free Appraisal
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop" 
                  alt="Modern Home" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-brand rounded-sm z-0"></div>
              <div className="absolute -top-8 -left-8 w-1/2 aspect-square bg-slate-100 rounded-sm z-0 border border-slate-200"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Community / Charity */}
      <section className="py-24 bg-slate-900 text-white w-full overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 transform skew-x-12 translate-x-32"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={fadeUpVariant} className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand text-white rounded-full mb-8 shadow-lg shadow-brand/40">
                <Heart size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6 leading-tight">
                A sample story <br/><span className="text-brand">about giving time</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                Placeholder copy for a community section. North Reef is not a real agency, and this block exists so the homepage layout has a story to show.
              </p>
              <Link to="/company" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-brand transition-colors border-b-2 border-brand pb-1">
                Discover Our Impact <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="flex-1 w-full flex justify-center md:justify-end">
               <img 
                  src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=600&h=600&fit=crop" 
                  alt="Community Support" 
                  className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-8 border-white shadow-2xl"
                  referrerPolicy="no-referrer"
                />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-slate-50 w-full border-t border-slate-200">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeUpVariant} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900">Latest <span className="text-brand">News</span> & Insights</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestNews.map((news, idx) => (
              <motion.div variants={fadeUpVariant} key={idx}>
                <Link to="/news" className="group h-full bg-white rounded-sm shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden flex flex-col">
                  <div className="aspect-[3/2] overflow-hidden relative">
                    <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md">
                      {news.date.split(' ')[1]} {news.date.split(' ')[2]}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold font-outfit text-slate-900 mb-3 group-hover:text-brand transition-colors leading-snug line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 mt-auto line-clamp-3">
                      {news.summary}
                    </p>
                    <span className="text-brand font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
