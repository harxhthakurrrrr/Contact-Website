import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, Zap, Crown, CheckCircle2, ArrowRight } from 'lucide-react';

const Rewards = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-32 dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto space-y-8"
      >
        <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-100 dark:border-yellow-800/30">
          <Crown size={14} />
          <span>Loyalty Program</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
          Exclusive <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Rewards.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          The more you organize and shop, the more you earn. Join the ShopCraft elite and unlock premium perks designed for tech enthusiasts.
        </p>
      </motion.section>

      {/* Points System */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Bronze Tier", points: "0 - 500 pts", perks: ["Standard Shipping", "Weekly Newsletter"], color: "text-orange-400", bg: "bg-orange-50/50 dark:bg-orange-900/10" },
          { title: "Silver Tier", points: "500 - 2000 pts", perks: ["5% Discount", "Early Access Drops", "Priority Support"], color: "text-slate-400", bg: "bg-slate-50 dark:bg-slate-800/50", featured: true },
          { title: "Gold Tier", points: "2000+ pts", perks: ["15% Lifetime Discount", "Free Express Shipping", "Personal Tech Concierge"], color: "text-yellow-500", bg: "bg-yellow-50/50 dark:bg-yellow-900/10" }
        ].map((tier, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-10 rounded-[3rem] border ${tier.featured ? 'border-indigo-600 dark:border-indigo-500 shadow-2xl scale-105' : 'border-slate-100 dark:border-slate-800'} ${tier.bg} space-y-8 transition-all`}
          >
            <div className="space-y-2">
              <h3 className={`text-2xl font-black ${tier.color}`}>{tier.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest">{tier.points}</p>
            </div>
            <ul className="space-y-4">
              {tier.perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  {perk}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all ${tier.featured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50'}`}>
              Join Tier
            </button>
          </motion.div>
        ))}
      </div>

      {/* Rewards Grid */}
      <section className="space-y-12">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white">Active Challenges</h3>
          <button className="text-indigo-600 dark:text-indigo-400 font-black text-sm flex items-center gap-2">View All <ArrowRight size={16} /></button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 dark:bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col md:flex-row gap-8 items-center group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
            <div className="bg-indigo-600 p-6 rounded-3xl shrink-0 group-hover:scale-110 transition-transform">
              <Zap size={48} fill="currentColor" />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-2xl font-black">Speed Shopper</h4>
              <p className="text-slate-400 font-medium">Complete your Gear List within 24 hours of creation to earn 100 bonus points.</p>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} className="bg-indigo-500 h-full" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center group shadow-sm hover:shadow-xl transition-all">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-3xl shrink-0 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <Gift size={48} />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">Refer a Friend</h4>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Invite your fellow tech lovers. You both get $25 in credits when they make their first purchase.</p>
              <button className="text-indigo-600 dark:text-indigo-400 font-black text-sm uppercase tracking-widest">Generate Link</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rewards;
