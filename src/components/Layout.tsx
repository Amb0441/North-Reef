import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen w-full m-0 p-0 overflow-x-hidden bg-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-grow w-full pt-20 relative"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Chatbot />
    </div>
  );
}
