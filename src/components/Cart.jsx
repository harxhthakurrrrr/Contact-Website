import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, ShoppingCart, ArrowRight, CreditCard, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ cart, updateCart, clearCart }) => {
  const [step, setStep] = useState('cart'); // cart, checkout, success
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePurchase = () => {
    if (step === 'cart') setStep('checkout');
    else if (step === 'checkout') {
      setTimeout(() => {
        setStep('success');
        clearCart();
      }, 1500);
    }
  };

  if (step === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 text-center space-y-8"
      >
        <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
          <CheckCircle2 size={48} />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Order Confirmed!</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Your premium gear is being prepared for shipment.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Order ID</p>
          <p className="font-black text-slate-900 dark:text-white">#SC-2026-8842</p>
        </div>
        <button 
          onClick={() => setStep('cart')}
          className="w-full bg-brand text-white py-5 rounded-2xl font-black hover:scale-[1.02] transition-all"
        >
          Back to Shop
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none w-full border border-slate-100 dark:border-slate-800 h-fit overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'cart' ? (
          <motion.div 
            key="cart"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                  <div className="bg-brand/10 p-2 rounded-xl text-brand">
                    <ShoppingCart size={20} />
                  </div>
                  Your Cart
                </h2>
                <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest pl-11">Review your items</p>
              </div>
              {cart.length > 0 && (
                <button 
                  onClick={clearCart}
                  className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-300 hover:text-red-500 rounded-xl transition-all"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>

            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-slate-200 dark:text-slate-700">
                    <ShoppingBag size={32} />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-black">Empty Cart</p>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">Start adding some premium gear!</p>
                  </div>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4 group bg-slate-50/50 dark:bg-slate-800/50 p-4 rounded-2xl border border-transparent hover:border-slate-100 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all">
                    <div className="relative">
                      <img src={item.image} className="w-20 h-20 object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-slate-900 dark:text-white text-sm truncate mb-1">{item.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-brand font-black text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                        <div className="flex items-center gap-1 bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-lg p-0.5 shadow-sm">
                          <button onClick={() => updateCart(item, -1)} className="p-1 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-md text-slate-400 hover:text-red-500 transition-colors">
                            <X size={12} />
                          </button>
                          <span className="px-2 font-black text-slate-900 dark:text-white text-xs min-w-[20px] text-center">{item.quantity}</span>
                          <button onClick={() => updateCart(item, 1)} className="p-1 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-md text-slate-400 hover:text-brand transition-colors">
                            <ShoppingBag size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest">Grand Total</p>
                    <p className="text-3xl font-black text-slate-900 dark:text-white leading-none">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Free Shipping</p>
                    <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold italic">Applied Automatically</p>
                  </div>
                </div>
                <button 
                  onClick={handlePurchase}
                  className="w-full bg-slate-900 dark:bg-brand text-white py-5 rounded-2xl font-black text-lg hover:bg-brand-hover hover:shadow-2xl hover:shadow-brand/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  Checkout Now <ArrowRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            key="checkout"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <button onClick={() => setStep('cart')} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <X size={20} className="text-slate-400" />
              </button>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Checkout</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Truck size={14} /> Shipping Details
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <input placeholder="Full Name" className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-bold outline-none focus:ring-2 ring-brand/20 dark:text-white" defaultValue="" />
                  <input placeholder="Shipping Address" className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-bold outline-none focus:ring-2 ring-brand/20 dark:text-white" defaultValue="123 Tech Lane, Silicon Valley" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <CreditCard size={14} /> Payment Method
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-brand/5 border-2 border-brand rounded-2xl flex flex-col items-center gap-2 cursor-pointer">
                    <CreditCard className="text-brand" />
                    <span className="text-[10px] font-black uppercase text-brand">Card</span>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl flex flex-col items-center gap-2 cursor-pointer opacity-50">
                    <ShieldCheck className="text-slate-400" />
                    <span className="text-[10px] font-black uppercase text-slate-400">Crypto</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl space-y-3">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="text-slate-900 dark:text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-400">Shipping</span>
                  <span className="text-emerald-500">FREE</span>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="font-black text-slate-900 dark:text-white uppercase tracking-tight">Total</span>
                  <span className="text-2xl font-black text-brand">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handlePurchase}
              className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-brand/20 hover:scale-[1.02] transition-all active:scale-95"
            >
              Pay & Complete Order
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;

