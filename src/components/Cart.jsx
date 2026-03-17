import React from 'react';
import { ShoppingBag, X, Trash2, ShoppingCart } from 'lucide-react';

const Cart = ({ cart, updateCart, clearCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200 w-full border border-slate-100 h-fit">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
            <div className="bg-indigo-50 p-2 rounded-xl text-indigo-600">
              <ShoppingCart size={20} />
            </div>
            Your Cart
          </h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest pl-11">Review your items</p>
        </div>
        {cart.length > 0 && (
          <button 
            onClick={clearCart}
            className="p-2 hover:bg-red-50 text-slate-300 hover:text-red-500 rounded-xl transition-all"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>

      <div className="space-y-6 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
        {cart.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-slate-200">
              <ShoppingBag size={32} />
            </div>
            <div>
              <p className="text-slate-900 font-black">Empty Cart</p>
              <p className="text-slate-400 text-sm font-medium">Start adding some premium gear!</p>
            </div>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 group bg-slate-50/50 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-slate-900 text-sm truncate mb-1">{item.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-black text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <div className="flex items-center gap-1 bg-white border border-slate-100 rounded-lg p-0.5 shadow-sm">
                    <button
                      onClick={() => updateCart(item, -1)}
                      className="p-1 hover:bg-slate-50 rounded-md text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X size={12} />
                    </button>
                    <span className="px-2 font-black text-slate-900 text-xs min-w-[20px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateCart(item, 1)}
                      className="p-1 hover:bg-slate-50 rounded-md text-slate-400 hover:text-indigo-600 transition-colors"
                    >
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
        <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Grand Total</p>
              <p className="text-3xl font-black text-slate-900 leading-none">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Free Shipping</p>
              <p className="text-slate-400 text-[10px] font-bold">Applied to your order</p>
            </div>
          </div>
          
          <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-200 active:scale-[0.98] transition-all">
            Complete Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
