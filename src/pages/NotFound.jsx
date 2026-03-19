import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Ghost, Search, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-2xl w-full text-center space-y-12 relative">
        {/* Animated 404 Header */}
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12rem] md:text-[18rem] font-black text-slate-100 dark:text-slate-900/50 leading-none tracking-tighter select-none"
          >
            404
          </motion.h1>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-brand p-8 rounded-[2.5rem] text-white shadow-2xl shadow-brand/30"
              >
                <Ghost size={80} strokeWidth={1.5} />
              </motion.div>
              {/* Floating elements */}
              <motion.div 
                animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-purple-500 p-3 rounded-xl text-white shadow-lg"
              >
                <Search size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
              Lost in <span className="text-brand">Cyberspace?</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 font-medium max-w-md mx-auto">
              Oops! The page you're looking for has vanished into the digital void. Don't worry, we'll help you find your way back.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link to="/">
              <button className="bg-brand text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-brand/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <Home size={18} /> Back to Safety
              </button>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-black text-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </motion.div>
        </div>

        {/* Brand Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-[10px]"
        >
          <ShoppingBag size={14} />
          <span>ShopCraft Premium Ecosystem</span>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
