import React, { useState } from 'react';
import { motion } from 'motion/react';

export function RentalYieldCalculator() {
  const [price, setPrice] = useState<string>('');
  const [weeklyRent, setWeeklyRent] = useState<string>('');
  const [rates, setRates] = useState<string>('');
  const [insurance, setInsurance] = useState<string>('');
  const [bodyCorp, setBodyCorp] = useState<string>('');

  const [results, setResults] = useState<{ annualIncome: number; netYield: number } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseFloat(price) || 0;
    const w = parseFloat(weeklyRent) || 0;
    const r = parseFloat(rates) || 0;
    const i = parseFloat(insurance) || 0;
    const b = parseFloat(bodyCorp) || 0;

    if (p > 0) {
      const annualIncome = w * 52;
      const totalExpenses = r + i + b;
      const netIncome = annualIncome - totalExpenses;
      const netYield = (netIncome / p) * 100;
      
      setResults({
        annualIncome,
        netYield
      });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-800 mb-8">
            Rental Yield <span className="text-brand italic font-medium">Calculator</span>
          </h1>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="max-w-4xl mx-auto"
        >
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            <strong className="text-slate-800">Disclaimer:</strong> The results generated from any calculator on this page and website should be used as an indication only and you should make and rely on your own enquiries with a qualified financial professional or planner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Calculator Column */}
            <div className="border border-slate-300 bg-white">
              <div className="bg-slate-700 text-white font-sans font-medium px-4 py-3">
                Rental Yield Calculator
              </div>
              
              <form onSubmit={calculate} className="p-4 space-y-4">
                
                {/* Property Price */}
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Property Price</label>
                  <div className="flex border border-slate-400 focus-within:border-slate-600 transition-colors">
                    <div className="bg-slate-700 w-10 flex items-center justify-center text-white shrink-0">
                      $
                    </div>
                    <input 
                      type="number" 
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-2 outline-none text-slate-800"
                    />
                  </div>
                </div>

                {/* Estimated Weekly Rent */}
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Estimated Weekly Rent</label>
                  <div className="flex border border-slate-400 focus-within:border-slate-600 transition-colors">
                    <div className="bg-slate-700 w-10 flex items-center justify-center text-white shrink-0">
                      $
                    </div>
                    <input 
                      type="number" 
                      value={weeklyRent}
                      onChange={(e) => setWeeklyRent(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-2 outline-none text-slate-800"
                    />
                  </div>
                </div>

                {/* Less Yearly Rates */}
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Less Yearly Rates</label>
                  <div className="flex border border-slate-400 focus-within:border-slate-600 transition-colors">
                    <div className="bg-slate-700 w-10 flex items-center justify-center text-white shrink-0">
                      $
                    </div>
                    <input 
                      type="number" 
                      value={rates}
                      onChange={(e) => setRates(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-2 outline-none text-slate-800"
                    />
                  </div>
                </div>

                {/* Less Yearly Insurance */}
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Less Yearly Insurance</label>
                  <div className="flex border border-slate-400 focus-within:border-slate-600 transition-colors">
                    <div className="bg-slate-700 w-10 flex items-center justify-center text-white shrink-0">
                      $
                    </div>
                    <input 
                      type="number" 
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-2 outline-none text-slate-800"
                    />
                  </div>
                </div>

                {/* Less Yearly Body Corporate Fees */}
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Less Yearly Body Corporate Fees</label>
                  <div className="flex border border-slate-400 focus-within:border-slate-600 transition-colors">
                    <div className="bg-slate-700 w-10 flex items-center justify-center text-white shrink-0">
                      $
                    </div>
                    <input 
                      type="number" 
                      value={bodyCorp}
                      onChange={(e) => setBodyCorp(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-2 outline-none text-slate-800"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-full transition-colors cursor-pointer"
                  >
                    Calculate!
                  </button>
                </div>

              </form>
            </div>

            {/* Results Column */}
            <div className="border border-slate-300 bg-white min-h-[160px]">
              <div className="bg-slate-700 text-white font-sans font-medium px-4 py-3">
                Results
              </div>
              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Annual Rental Income:</span>
                  <span className="font-bold text-slate-900">
                    {results ? `$${results.annualIncome.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '-'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Rental Yield:</span>
                  <span className="font-bold text-slate-900">
                    {results ? `${results.netYield.toFixed(2)}%` : '-'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
