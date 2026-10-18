import React, { useState } from 'react';
import { RentalAppraisalDrawer } from '../components/RentalAppraisalDrawer';

export function ContentPage({ title, highlightedWord, content, image }: { title: string, highlightedWord: string, content: React.ReactNode, image: string }) {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="relative w-full h-[400px] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white">
            {title} <span className="text-brand italic">{highlightedWord}</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 prose prose-lg prose-slate prose-headings:font-outfit prose-headings:text-slate-900 prose-a:text-brand">
        {content}
      </div>
    </div>
  );
}

export function Sell() {
  return (
    <ContentPage 
      title="It's your property."
      highlightedWord="We're here to sell it properly."
      image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=600&fit=crop"
      content={
        <>
          <p>
            Selling a home is a major decision. This page uses mock copy so the sales layout can be shown without referring to a real town or a real agency. North Reef is the placeholder name.
          </p>
          <p>
            The sections below describe how a sales page can present pricing, marketing, and advice. Every address, person, and figure on the site is made up.
          </p>
          <p>
            The aim is a clear path from appraisal to settlement, with the same person accountable from the first conversation to the last condition.
          </p>
          
          <h3>Pricing with a reason.</h3>
          <p>
            A North Reef appraisal in this demo starts with sample sales, sample demand, and what the mock home offers. Private treaty, auction, or expression of interest are shown as options.
          </p>

          <h3>Tailored marketing that works.</h3>
          <p>
            Every property is different and so is every campaign. We'll help you prepare your home for market, then design a marketing strategy that suits your goals, your location, and your audience. That might include:
          </p>
          <ul>
            <li>High-quality photography and videography</li>
            <li>Online campaigns on sample listing sites and social media</li>
            <li>Custom brochures, signage, and flyers</li>
            <li>Targeted email and database marketing</li>
            <li>Local area advertising and event exposure</li>
          </ul>

          <h3>Honest advice. Real results.</h3>
          <p>
            Our agents are known for being approachable, transparent, and accountable. We'll always tell you what we think, not just what you want to hear. Because for us, a great sale isn't just about the number on the contract. it's about how you feel when you get there.
          </p>

          <div className="mt-16 text-center border-t border-slate-200 pt-12">
            <h3 className="mb-8">Ready to discover your home's true value?</h3>
            <a 
              href={`${import.meta.env.BASE_URL}contact`}
              className="inline-flex items-center justify-center bg-brand text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-brand-dark transition-colors shadow-xl hover:shadow-2xl font-outfit uppercase tracking-widest no-underline cursor-pointer"
            >
              Request a Sales Market Appraisal
            </a>
          </div>
        </>
      }
    />
  );
}

export function Manage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <ContentPage 
        title="Property investing is a smart move,"
        highlightedWord="but only when it's managed professionally."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=600&fit=crop"
        content={
          <>
            <p>
              Owning an investment property is a significant financial commitment, and the difference between a good return and a great one often comes down to how well it's managed. That's where we come in.
            </p>
            <p>
              North Reef management is sample copy: protect the asset, keep rent moving, and make ownership quieter. The mock offices cover made-up places such as Mocktown, Sampleville, and Example Heights.
            </p>
            <p>
              Whether you're a first-time investor or managing a growing portfolio, we’re here to make ownership easier, smoother and more profitable.
            </p>

            <h3>Tenant selection and onboarding.</h3>
            <p>
              We manage the full leasing process - marketing your property, screening applications, conducting reference checks and handling all contracts. We help you secure quality tenants who respect your investment and pay on time.
            </p>

            <h3>Ongoing management and support.</h3>
            <p>
              From routine inspections to rent collection, maintenance coordination and financial reporting- we take care of the details, so you don’t have to. We also manage disputes and tenancy exits professionally, with minimal vacancy periods.
            </p>

            <h3>Regulatory compliance and risk compliance.</h3>
            <p>
              Rental rules change, and this section shows where a management page would talk about staying compliant. The obligations here are sample wording, not legal advice.
            </p>

            <div className="mt-16 text-center border-t border-slate-200 pt-12">
              <h3 className="mb-8">Ready to see what your property can earn?</h3>
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center justify-center bg-brand text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-brand-dark transition-colors shadow-xl hover:shadow-2xl font-outfit uppercase tracking-widest no-underline cursor-pointer"
              >
                Request a Free Rental Appraisal
              </button>
            </div>
          </>
        }
      />
      <RentalAppraisalDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

export function Company() {
  return (
    <ContentPage 
      title="Our"
      highlightedWord="Company"
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop"
      content={
        <>
          <p>
            <strong>North Reef</strong> is a mock agency name. The site exists to showcase website development: search, listings, team profiles, tools, and the small interactions that make a property site feel finished.
          </p>
          <p>
            The pretend office is led by <strong>John Doe</strong>, with Jane Doe heading sales. None of the people, phones, or addresses are real.
          </p>
          
          <h3>What the mock site covers</h3>
          <p>
            Listings sit in made-up suburbs: Mocktown, Sampleville, Example Heights, Placeholder Park, and Demo Bay.
          </p>
          <ul>
            <li><strong>Sales:</strong> Appraisals, campaigns, open homes, and auctions, shown with sample properties and a listing enquiry form.</li>
            <li><strong>Property management:</strong> Leasing, inspections, and a maintenance portal so an owner or tenant journey has a place to land.</li>
          </ul>
          
          <p className="text-2xl font-outfit font-bold text-brand text-center mt-12">
            Same kind of website. A new name, and content written for the demo.
          </p>
        </>
      }
    />
  );
}
