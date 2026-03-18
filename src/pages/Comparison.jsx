import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitCompare, Plus, X, ArrowRight, ShieldCheck, Zap, Battery, Bluetooth, Cpu, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Apple Watch Series 9",
    price: 399,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1000",
    specs: ["S9 SiP Chip", "Always-On Retina", "Blood Oxygen app"]
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 348,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    specs: ["30h Battery", "NC Optimizer", "Touch Control"]
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 999,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=1000",
    specs: ["A17 Pro Chip", "Titanium Build", "Action Button"]
  }
];

const Comparison = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const selectedProducts = PRODUCTS.filter(p => selectedIds.includes(p.id));
  const availableProducts = PRODUCTS.filter(p => !selectedIds.includes(p.id));

  const toggleProduct = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 space-y-16">
      {/* Header */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-brand/10 dark:bg-brand/20 text-brand px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-brand/20 dark:border-brand/30 shadow-sm">
          <GitCompare size={14} />
          <span>Decision Lab</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
          Compare <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">The Best.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
          Side-by-side comparison of premium gear to help you choose the perfect addition to your digital workspace.
        </p>
      </section>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Selector Panel */}
        <div className="space-y-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
            Select Gear <span className="text-brand text-[10px] font-bold">({selectedIds.length}/3)</span>
          </h3>
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {availableProducts.map(product => (
              <motion.button
                key={product.id}
                onClick={() => toggleProduct(product.id)}
                disabled={selectedIds.length >= 3}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-brand/20 dark:hover:border-brand/30 transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm"
              >
                <img src={product.image} className="w-12 h-12 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-black text-slate-900 dark:text-white truncate">{product.name}</p>
                  <p className="text-[10px] font-bold text-brand uppercase tracking-widest">${product.price}</p>
                </div>
                <Plus size={16} className="text-slate-300 group-hover:text-brand" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="md:col-span-3">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
            {selectedProducts.length === 0 ? (
              <div className="py-32 text-center space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <GitCompare className="text-slate-300" size={32} />
                </div>
                <p className="text-slate-400 font-bold">Select at least one product to compare</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-8 text-left border-b border-slate-50 dark:border-slate-800 w-1/4"></th>
                      {selectedProducts.map(p => (
                        <th key={p.id} className="p-8 text-center border-b border-slate-50 dark:border-slate-800 w-1/4 min-w-[200px] relative group">
                          <button 
                            onClick={() => toggleProduct(p.id)}
                            className="absolute top-4 right-4 p-1.5 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-red-500 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <X size={14} />
                          </button>
                          <div className="space-y-4">
                            <img src={p.image} className="w-24 h-24 rounded-2xl object-cover mx-auto shadow-lg" />
                            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{p.name}</h4>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold text-slate-600 dark:text-slate-400">
                    <tr>
                      <td className="p-8 border-b border-slate-50 dark:border-slate-800 text-slate-400 uppercase tracking-widest text-[10px] font-black">Price</td>
                      {selectedProducts.map(p => (
                        <td key={p.id} className="p-8 text-center border-b border-slate-50 dark:border-slate-800 text-brand text-lg font-black">${p.price}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-8 border-b border-slate-50 dark:border-slate-800 text-slate-400 uppercase tracking-widest text-[10px] font-black">Category</td>
                      {selectedProducts.map(p => (
                        <td key={p.id} className="p-8 text-center border-b border-slate-50 dark:border-slate-800">{p.category || 'Tech'}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-8 border-b border-slate-50 dark:border-slate-800 text-slate-400 uppercase tracking-widest text-[10px] font-black">Key Features</td>
                      {selectedProducts.map(p => (
                        <td key={p.id} className="p-8 border-b border-slate-50 dark:border-slate-800">
                          <div className="flex flex-col gap-2 items-center">
                            {(p.specs || ['Premium Build', 'Next-Gen Tech', 'Ultra Speed']).map((spec, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] whitespace-nowrap">{spec}</span>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-8 border-b border-slate-50 dark:border-slate-800 text-slate-400 uppercase tracking-widest text-[10px] font-black">Performance</td>
                      {selectedProducts.map(p => (
                        <td key={p.id} className="p-8 text-center border-b border-slate-50 dark:border-slate-800">
                          <div className="flex items-center justify-center gap-1 text-yellow-500">
                            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-8 text-slate-400 uppercase tracking-widest text-[10px] font-black">Action</td>
                      {selectedProducts.map(p => (
                        <td key={p.id} className="p-8 text-center">
                          <button className="bg-slate-900 dark:bg-brand text-white w-full py-3 rounded-xl text-xs font-black hover:bg-brand-hover transition-colors">
                            Add to Cart
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
        {[
          { icon: ShieldCheck, title: "Verified Specs", desc: "Every detail is cross-checked with official data." },
          { icon: Zap, title: "Instant Compare", desc: "Side-by-side analysis for smarter decisions." },
          { icon: GitCompare, title: "Smart Matching", desc: "Find gear that fits your existing tech stack." },
        ].map((badge, i) => (
          <div key={i} className="flex items-start gap-4 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl text-brand shadow-sm">
              <badge.icon size={24} />
            </div>
            <div>
              <h4 className="font-black text-slate-900 dark:text-white mb-1">{badge.title}</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">{badge.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Comparison;
