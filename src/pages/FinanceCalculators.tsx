import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

export function FinanceCalculators() {
  const [propertyPrice, setPropertyPrice] = useState(800000);
  const [deposit, setDeposit] = useState(160000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const principal = propertyPrice - deposit;
  const monthlyRate = (interestRate / 100) / 12;
  const numberOfPayments = loanTerm * 12;
  
  const monthlyRepayment = principal > 0 && monthlyRate > 0 
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    : 0;

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand text-white rounded-full mb-6 shadow-lg shadow-brand/20">
            <Calculator size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
            Finance <span className="text-brand">Calculators</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estimate your borrowing power and monthly mortgage repayments to help you plan your property purchase with confidence.
          </p>
        </motion.div>

        <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Controls */}
          <div className="p-8 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-8">
            <h3 className="text-2xl font-bold font-outfit text-slate-900 border-b border-slate-100 pb-4">Mortgage Repayment</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Property Price</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign size={18} className="text-slate-400" />
                  </div>
                  <input 
                    type="number" 
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-lg font-bold text-slate-900"
                  />
                </div>
                <input type="range" min="100000" max="5000000" step="10000" value={propertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} className="w-full mt-4 accent-brand" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Deposit</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign size={18} className="text-slate-400" />
                  </div>
                  <input 
                    type="number" 
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-lg font-bold text-slate-900"
                  />
                </div>
                <input type="range" min="0" max={propertyPrice} step="10000" value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className="w-full mt-4 accent-brand" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Interest Rate</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-lg font-bold text-slate-900"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <Percent size={18} className="text-slate-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Loan Term</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-lg font-bold text-slate-900"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className="text-slate-400 font-bold text-sm">Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="p-8 lg:w-1/2 bg-slate-900 text-white flex flex-col justify-center">
            <h3 className="text-xl font-bold font-outfit text-slate-400 mb-2 uppercase tracking-widest text-center">Estimated Repayments</h3>
            <div className="text-center my-8">
              <span className="text-6xl md:text-7xl font-bold font-outfit text-white">
                ${Math.round(monthlyRepayment).toLocaleString()}
              </span>
              <span className="text-xl text-slate-400 ml-2">/month</span>
            </div>

            <div className="space-y-4 mt-8 pt-8 border-t border-slate-700">
              <div className="flex justify-between items-center text-lg">
                <span className="text-slate-400">Total Loan Amount</span>
                <span className="font-bold">${principal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-slate-400">Total Interest Payable</span>
                <span className="font-bold">${Math.round((monthlyRepayment * numberOfPayments) - principal).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-slate-400">LVR (Loan to Value)</span>
                <span className="font-bold">{((principal / propertyPrice) * 100).toFixed(1)}%</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-12 text-center">
              * This calculator is intended as a guide only. It does not constitute a quote or an offer of finance. Results do not include fees, charges, or any other additional costs.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
