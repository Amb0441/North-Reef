import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Message = {
  id: string;
  text: string;
  isBot: boolean;
};

const QUICK_QUESTIONS = [
  "How do I request a rental appraisal?",
  "What is the process to sell my house?",
  "How do I report a maintenance issue?"
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi, I'm the North Reef assistant. This is a mock chat. Ask about buying, renting, selling, or maintenance.", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), text, isBot: false };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking and replying
    setTimeout(() => {
      let reply = "I'm sorry, I don't quite understand. Could you please rephrase or contact our team directly?";
      const lower = text.toLowerCase();
      
      if (lower.includes('appraisal') || lower.includes('worth') || lower.includes('yield')) {
        reply = "You can easily request a free rental or market appraisal by navigating to the 'Invest' or 'Sell' menu and selecting the appraisal option. Our experts will get back to you within 24 hours.";
      } else if (lower.includes('sell') || lower.includes('process')) {
        reply = "Selling your house starts with a free market appraisal. Once you know the value, our agents will help you prepare the property, plan a marketing strategy, and list it on the market. Check out our 'Selling Guide' under the 'Sell' menu!";
      } else if (lower.includes('maintenance') || lower.includes('fix') || lower.includes('broken')) {
        reply = "If you're a current tenant, you can report maintenance issues through our new Maintenance Portal. Simply navigate to 'Rent' > 'Maintenance Request' in the menu.";
      } else if (lower.includes('buy') || lower.includes('browse')) {
        reply = "You can browse all our current listings by clicking 'Buy' in the main navigation. We have a variety of properties including upcoming auctions and open homes.";
      } else if (lower.includes('hello') || lower.includes('hi')) {
        reply = "Hello! How can I assist you with your real estate needs today?";
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), text: reply, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-brand text-white rounded-full shadow-2xl flex items-center justify-center z-[90] ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chatbot"
      >
        <MessageSquare size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-48px)] bg-white rounded-lg shadow-2xl z-[100] flex flex-col overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-brand p-2 rounded-full">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-lg leading-none">Virtual Assistant</h3>
                  <span className="text-xs text-slate-400">Online | Ready to help</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Message List */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.isBot ? 'self-start' : 'self-end flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.isBot ? 'bg-slate-200 text-slate-700' : 'bg-brand text-white'}`}>
                    {msg.isBot ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.isBot ? 'bg-white border border-slate-200 text-slate-800 rounded-tl-none' : 'bg-brand text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 max-w-[85%] self-start">
                  <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && !isTyping && (
              <div className="p-3 bg-white border-t border-slate-100 flex flex-wrap gap-2 shrink-0">
                {QUICK_QUESTIONS.map((q, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleSend(q)}
                    className="text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-brand px-3 py-1.5 rounded-full transition-colors border border-slate-200 text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              className="p-4 bg-white border-t border-slate-200 flex gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand"
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:bg-slate-400 transition-colors shrink-0"
              >
                <Send size={18} className="-ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
