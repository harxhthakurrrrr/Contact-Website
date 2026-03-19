import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Zap, ShieldCheck, Star, ArrowRight, Play, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Landing = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[60%] bg-brand/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-brand/20"
          >
            <Sparkles size={14} />
            <span>The Future of Shopping is Here</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase"
          >
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-500">Digital Lifestyle</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
          >
            ShopCraft is more than just a store. It's a premium ecosystem for tech enthusiasts, creators, and visionaries. Discover elite gear, manage your setup, and join the revolution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-6"
          >
            <Link to={isAuthenticated ? "/home" : "/auth"}>
              <button className="bg-brand text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-brand/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                {isAuthenticated ? 'Go to Shop' : 'Get Started'} <ArrowRight size={22} />
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-10 py-5 rounded-[2rem] font-black text-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-3">
                Learn More <Play size={20} className="fill-current" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Why ShopCraft?</h2>
            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-sm">Experience the premium difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Curated Gear", desc: "Only the finest tech handpicked for quality and performance.", icon: ShoppingBag, color: "bg-blue-500" },
              { title: "Smart Ecosystem", desc: "Manage your gear list and compare tech with our advanced tools.", icon: Zap, color: "bg-brand" },
              { title: "Secure & Fast", desc: "Premium security with OTP verification and lightning-fast delivery.", icon: ShieldCheck, color: "bg-emerald-500" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-brand rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-3xl shadow-brand/20">
          <div className="absolute top-0 right-0 p-24 -mr-12 -mt-12 opacity-10 rotate-12">
            <ShoppingBag size={300} className="text-white" />
          </div>
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Active Users", value: "50k+" },
              { label: "Premium Products", value: "1.2k+" },
              { label: "Happy Customers", value: "99%" },
              { label: "Countries", value: "24+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-4xl md:text-5xl font-black text-white">{stat.value}</p>
                <p className="text-xs font-black text-white/60 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase leading-none tracking-tighter">
            Ready to <span className="text-brand">Upgrade?</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
            Join thousands of elite members and start building your ultimate tech setup today.
          </p>
          <Link to={isAuthenticated ? "/home" : "/auth"}>
            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-6 rounded-[2.5rem] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
              {isAuthenticated ? 'Continue Shopping' : 'Create Your Account'}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
