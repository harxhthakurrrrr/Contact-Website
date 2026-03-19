import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Lock, Crown } from 'lucide-react';

const VaultProduct = () => {
  return (
    <div className="p-8 bg-slate-900 rounded-[3rem] border border-brand/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
        <Crown size={120} className="text-brand" />
      </div>
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-brand/20 p-3 rounded-2xl text-brand">
            <ShieldCheck size={24} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">Limited Edition Vault Access</span>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">Quantum Processor X1</h3>
          <p className="text-slate-400 font-medium">Experimental computing unit. Available only to Elite members.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5">
            <Cpu size={20} className="text-blue-400 mb-2" />
            <p className="text-xs font-black text-white uppercase">1.2 THz</p>
            <p className="text-[9px] font-bold text-slate-500 uppercase">Clock Speed</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5">
            <Zap size={20} className="text-amber-400 mb-2" />
            <p className="text-xs font-black text-white uppercase">0.01W</p>
            <p className="text-[9px] font-bold text-slate-500 uppercase">Power Draw</p>
          </div>
        </div>
        
        <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
          <Lock size={16} /> Unlock for $4,999
        </button>
      </div>
    </div>
  );
};

const TechVault = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6 space-y-16">
      <div className="text-center space-y-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full border border-brand/30 shadow-2xl shadow-brand/10"
        >
          <Lock size={14} className="text-brand" />
          <span className="text-xs font-black uppercase tracking-widest">The TechVault - Restricted Area</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
          Secret <span className="text-brand">Lab</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
          Experimental tech and limited edition prototypes. These items are strictly for testing and elite members only.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <VaultProduct />
        
        {/* Placeholder for more experimental stuff */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
            <Cpu size={32} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-black text-slate-900 dark:text-white uppercase">Incoming Protoype</p>
            <p className="text-xs font-medium text-slate-400">Decrypting specs... ETA: Q4 2026</p>
          </div>
        </div>

        <div className="p-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
            <Zap size={32} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-black text-slate-900 dark:text-white uppercase">Energy Cell v2</p>
            <p className="text-xs font-medium text-slate-400">Testing stability in vacuum conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechVault;
