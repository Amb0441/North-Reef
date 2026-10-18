import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Buy',
    path: '/buy',
    subItems: [
      { name: 'Browse Properties', path: '/buy' },
      { name: 'Open Homes', path: '/buy?tab=OpenHomes' },
      { name: 'Auctions', path: '/buy?tab=Auctions' },
      { name: 'Buyers Property Alert', path: '/property-alert' },
      { name: 'Recently Sold Properties', path: '/buy?tab=Sold' },
    ]
  },
  {
    title: 'Rent',
    path: '/rent',
    subItems: [
      { name: 'Browse Properties', path: '/rent' },
      { name: 'Open Homes', path: '/rent?tab=OpenHomes' },
      { name: 'Renters Property Alert', path: '/property-alert' },
      { name: 'Recently Leased Properties', path: '/rent?tab=Leased' },
    ]
  },
  {
    title: 'Sell',
    path: '/sell',
    subItems: [
      { name: 'Market Appraisal', path: '/sell' },
      { name: 'Our Testimonials', path: '/company' },
    ]
  },
  {
    title: 'Invest',
    path: '/manage',
    subItems: [
      { name: "What's My Investment Worth?", path: '/rental-yield-calculator' },
      { name: 'Property Management Services', path: '/manage' },
    ]
  },
  {
    title: 'Client Tools',
    path: '/finance-calculators',
    subItems: [
      { name: 'Finance Calculators', path: '/finance-calculators' },
      { name: 'Suburb Profiles', path: '/suburb-insights' },
      { name: 'Moving Checklist', path: '/moving-checklist' },
      { name: 'Maintenance Portal', path: '/maintenance' },
    ]
  },
  {
    title: 'About Us',
    path: '/company',
    subItems: [
      { name: 'Our Company', path: '/company' },
      { name: 'Our Team', path: '/team' },
      { name: 'Latest News', path: '/news' },
    ]
  },
  {
    title: 'Contact Us',
    path: '/contact',
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  const toggleMobileMenu = (title: string) => {
    setActiveMobileMenu(activeMobileMenu === title ? null : title);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center h-full">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-brand text-white font-outfit font-bold text-sm">NR</span>
              <span className="font-outfit font-bold text-xl sm:text-2xl tracking-tight text-slate-900">
                North Reef
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full space-x-1 xl:space-x-2">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group h-full flex items-center">
                <Link
                  to={item.path}
                  className="flex items-center h-full gap-1 text-slate-700 hover:text-brand px-4 text-base font-outfit font-medium transition-colors"
                >
                  {item.title}
                  {item.subItems && (
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 mt-1" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute left-0 top-full invisible group-hover:visible w-72 bg-white shadow-xl border-t-[3px] border-brand opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 transform origin-top -translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.subItems.map((subItem, idx) => (
                        <Link
                          key={idx}
                          to={subItem.path}
                          className="block px-6 py-3.5 text-[15px] font-sans font-medium text-slate-600 hover:text-brand hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-0"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-brand focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t overflow-y-auto max-h-[calc(100vh-80px)] shadow-lg absolute w-full left-0 z-50">
          <div className="px-0 py-2">
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-slate-100 last:border-0">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMobileMenu(item.title)}
                      className={cn(
                        "flex justify-between items-center w-full px-6 py-4 text-lg font-outfit font-bold transition-colors",
                        activeMobileMenu === item.title ? "text-brand bg-slate-50" : "text-slate-800 hover:text-brand"
                      )}
                    >
                      {item.title}
                      <ChevronDown size={20} className={cn("transition-transform duration-200", activeMobileMenu === item.title ? "rotate-180" : "")} />
                    </button>
                    
                    {/* Mobile Submenu Accordion */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out bg-slate-50",
                      activeMobileMenu === item.title ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="px-6 py-2 space-y-1 mb-2">
                        {item.subItems.map((subItem, idx) => (
                          <Link
                            key={idx}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-3.5 text-[15px] font-sans font-medium text-slate-600 hover:text-brand border-b border-slate-200/60 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center w-full px-6 py-4 text-lg font-outfit font-bold text-slate-800 hover:text-brand transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
