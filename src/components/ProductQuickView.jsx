import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star, ShieldCheck, Zap, Truck } from 'lucide-react';

const ProductQuickView = ({ product, isOpen, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[200]"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[250] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row relative border border-slate-100 dark:border-slate-800"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all z-10"
              >
                <X size={20} className="text-slate-900 dark:text-white" />
              </button>

              {/* Image Side */}
              <div className="md:w-1/2 bg-slate-50 dark:bg-slate-800 p-8 flex items-center justify-center">
                <motion.img 
                  layoutId={`product-image-${product.id}`}
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
                />
              </div>

              {/* Content Side */}
              <div className="md:w-1/2 p-10 md:p-12 flex flex-col space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-widest">
                    <Star size={14} fill="currentColor" />
                    Premium Gear
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">{product.name}</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400">${product.price}</span>
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">4.9</span>
                      <span className="text-xs text-slate-400 font-medium ml-1">(120+ reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {product.description} This high-performance device features our latest technology integration, providing an unparalleled user experience. Engineered for professionals who demand excellence.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <Truck size={18} className="text-indigo-600" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Free Express Delivery</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <ShieldCheck size={18} className="text-emerald-600" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">2 Year Warranty</span>
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <button 
                    onClick={() => {
                      addToCart(product, 1);
                      onClose();
                    }}
                    className="w-full bg-slate-900 dark:bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-indigo-600 dark:hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-200 transition-all active:scale-95"
                  >
                    <ShoppingCart size={22} />
                    Add to Cart
                  </button>
                  <div className="flex items-center justify-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                    <Zap size={12} fill="currentColor" className="text-indigo-500" />
                    Guaranteed Safe Checkout
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductQuickView;
