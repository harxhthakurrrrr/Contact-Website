import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Sparkles, Heart, Share2, ArrowUpRight } from 'lucide-react';

const SETUPS = [
  { id: 1, title: "Midnight Minimalist", author: "TechMaster", likes: "1.2k", image: "https://images.unsplash.com/photo-1503167346138-e84a5952c4c9?auto=format&fit=crop&q=80&w=1000", span: "row-span-2" },
  { id: 2, title: "Neon Pulse", author: "CyberPunk", likes: "850", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000", span: "col-span-1" },
  { id: 3, title: "Productivity Zen", author: "DesignFlow", likes: "2.1k", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000", span: "row-span-1" },
  { id: 4, title: "Retro Futuro", author: "PixelPerfect", likes: "920", image: "https://images.unsplash.com/photo-1587614382346-4ec706388b28?auto=format&fit=crop&q=80&w=1000", span: "col-span-2" },
  { id: 5, title: "The Architect", author: "BuildIt", likes: "1.5k", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000", span: "row-span-2" },
  { id: 6, title: "Natural Light", author: "OrganicTech", likes: "3.4k", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000", span: "col-span-1" },
];

const TechStudio = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-24 dark:bg-slate-950 transition-colors duration-300">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/30">
          <Layout size={14} />
          <span>Setup Showcase</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">Studio.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          Explore world-class setups from our community. Get inspired, share your own, and discover the gear that makes it possible.
        </p>
      </section>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
        {SETUPS.map((setup, idx) => (
          <motion.div
            key={setup.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative group overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 ${setup.span}`}
          >
            <img 
              src={setup.image} 
              alt={setup.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-white">{setup.title}</h4>
                    <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest">By @{setup.author}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-colors">
                      <Heart size={18} />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
                <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors uppercase tracking-widest">
                  View Gear Used <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-slate-900 dark:bg-indigo-950/20 p-12 md:p-24 rounded-[3rem] text-white relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
            <Sparkles size={14} className="text-yellow-400" />
            <span>Join the Studio</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-black leading-tight">Ready to showcase <br />your setup?</h3>
          <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto">
            Upload your tech sanctuary and join the community. Top-voted setups win monthly ShopCraft gear bundles.
          </p>
          <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all shadow-xl">
            Upload Setup
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechStudio;
