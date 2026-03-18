import React from 'react';
import { motion } from 'framer-motion';
import { Info, Target, Users, ShieldCheck, Star, ArrowUpRight, ShoppingBag, ListTodo, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-32 dark:bg-slate-950 transition-colors duration-300">
      {/* Centered Hero */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto space-y-8"
      >
        <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/30 shadow-sm">
          <Info size={14} />
          <span>Our Vision</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
          Beyond Just <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Shopping.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          ShopCraft is a premium ecosystem where productivity meets commerce. We build tools that help you discover, track, and acquire the world's best technology.
        </p>
      </motion.section>

      {/* Settle Grid - Mission & Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Target className="text-indigo-600 dark:text-indigo-400" />, title: "Precision", desc: "Every product in our catalog is meticulously vetted for quality and innovation." },
          { icon: <Users className="text-purple-600 dark:text-purple-400" />, title: "Community", desc: "Built for tech enthusiasts who value craftsmanship and design excellence." },
          { icon: <ShieldCheck className="text-emerald-600 dark:text-emerald-400" />, title: "Trust", desc: "Secure transactions and verified authentic gear for total peace of mind." }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="bg-slate-50 dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{item.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Feature Showcase */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 dark:bg-indigo-950/20 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
              <Star size={14} className="text-yellow-400" fill="currentColor" />
              <span>The ShopCraft Advantage</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">Built with the <br />Modern Stack.</h3>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              We leverage React 19, Tailwind CSS, and Framer Motion to deliver a lightning-fast, accessible, and responsive experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-slate-100 transition-colors">
                Explore Tech <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <ShoppingBag className="text-indigo-400 mb-4" />
                <h4 className="font-bold mb-1 text-white">Curated Shop</h4>
                <p className="text-xs text-slate-500 font-medium">Hand-picked gear only.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <ListTodo className="text-emerald-400 mb-4" />
                <h4 className="font-bold mb-1 text-white">Smart List</h4>
                <p className="text-xs text-slate-500 font-medium">Track your haul.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <Code className="text-orange-400 mb-4" />
                <h4 className="font-bold mb-1 text-white">Modern Dev</h4>
                <p className="text-xs text-slate-500 font-medium">React 19 Powered.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <ShieldCheck className="text-blue-400 mb-4" />
                <h4 className="font-bold mb-1 text-white">Security</h4>
                <p className="text-xs text-slate-500 font-medium">Privacy First.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
