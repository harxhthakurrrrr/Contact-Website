import React from 'react';
import { Plus, Minus, Star, ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product, addToCart, cartItem, onQuickView }) => {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-2 shadow-sm hover:shadow-2xl hover:shadow-brand/10 dark:hover:shadow-none hover:border-brand/20 dark:hover:border-brand/30 transition-all duration-500">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button 
            onClick={onQuickView}
            className="p-4 bg-white text-slate-900 rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all"
          >
            <Eye size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl text-sm font-black text-brand shadow-xl border border-white/50 dark:border-slate-700/50">
          ${product.price}
        </div>
        {product.price > 500 && (
          <div className="absolute top-4 left-4 bg-brand text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
            Premium
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="currentColor" />
            ))}
            <span className="text-[10px] text-slate-400 font-bold ml-1 tracking-widest uppercase">Best Seller</span>
          </div>
          <h3 className="font-black text-slate-900 dark:text-white text-xl tracking-tight truncate">{product.name}</h3>
          <p className="text-slate-400 dark:text-slate-500 text-xs font-medium line-clamp-2 leading-relaxed h-8">
            {product.description}
          </p>
        </div>
        
        <div className="pt-2">
          {cartItem ? (
            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-700">
              <button
                onClick={() => addToCart(product, -1)}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-700 rounded-xl text-slate-400 dark:text-slate-300 hover:text-red-500 hover:shadow-md transition-all active:scale-90"
              >
                <Minus size={16} strokeWidth={3} />
              </button>
              <span className="font-black text-slate-900 dark:text-white">{cartItem.quantity}</span>
              <button
                onClick={() => addToCart(product, 1)}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-700 rounded-xl text-slate-400 dark:text-slate-300 hover:text-brand hover:shadow-md transition-all active:scale-90"
              >
                <Plus size={16} strokeWidth={3} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product, 1)}
              className="w-full bg-slate-900 dark:bg-brand text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/10 transition-all active:scale-95 group/btn"
            >
              <ShoppingCart size={18} className="group-hover/btn:-translate-y-0.5 transition-transform" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
