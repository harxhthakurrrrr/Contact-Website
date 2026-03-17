import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { Search, Sparkles, TrendingUp, ShieldCheck, Zap, ArrowRight, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Apple Watch Series 9",
    price: 399,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1000",
    description: "Advanced health sensors, powerful chip, and bright display."
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 348,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    description: "Industry-leading noise cancellation and premium sound quality."
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=1000",
    description: "Titanium design, A17 Pro chip, and advanced camera system."
  },
  {
    id: 4,
    name: "Kindle Paperwhite",
    price: 139,
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&q=80&w=1000",
    description: "The thinnest, lightest Kindle Paperwhite yet, with a flush-front design."
  },
  {
    id: 5,
    name: "Logitech MX Master 3S",
    price: 99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000",
    description: "Precision mouse with ultra-fast scrolling and ergonomic design."
  },
  {
    id: 6,
    name: "Nintendo Switch OLED",
    price: 349,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=1000",
    description: "7-inch OLED screen, wide adjustable stand, and enhanced audio."
  }
];

const Home = ({ cart, addToCart, clearCart }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-24">
      {/* Centered Premium Hero Section */}
      <section className="relative px-6 pt-20 pb-32 text-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full text-indigo-600 text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles size={14} />
            <span>Summer Collection 2026</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">Smart Tech</span>
          </h2>
          
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Curated selection of premium electronics and gadgets designed to elevate your daily digital experience. Quality craftsmanship meets modern innovation.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              Start Shopping <ArrowRight size={20} />
            </button>
            <button className="bg-white text-slate-900 px-10 py-5 rounded-[2rem] font-black text-lg border border-slate-200 hover:bg-slate-50 active:scale-95 transition-all">
              View Catalog
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 grayscale opacity-40">
            <div className="flex items-center gap-2 font-black text-xl italic tracking-tighter">TECH.CO</div>
            <div className="flex items-center gap-2 font-black text-xl italic tracking-tighter">MODERN</div>
            <div className="flex items-center gap-2 font-black text-xl italic tracking-tighter">PREMIUM</div>
          </div>
        </div>
      </section>

      {/* Main Content Grid - Centered & Aligned */}
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 xl:grid-cols-12 gap-12">
        
        {/* Left Side: Shop Section */}
        <div className="xl:col-span-8 space-y-12">
          
          {/* Section Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-widest">
                <Star size={14} fill="currentColor" />
                Featured Gear
              </div>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">Handpicked for You</h3>
            </div>
            
            <div className="relative group w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search premium products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                cartItem={cart.find(item => item.id === product.id)}
              />
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-32 text-center bg-slate-50/50 rounded-[3rem] border-2 border-dashed border-slate-200">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100 text-slate-300">
                  <Search size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">No items found</h4>
                <p className="text-slate-500 font-medium">Try searching for something else like "iPhone" or "Sony".</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 text-indigo-600 font-black text-sm hover:underline"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Cart & Promos */}
        <div className="xl:col-span-4 space-y-8">
          <div className="sticky top-28 space-y-8">
            <Cart 
              cart={cart} 
              updateCart={addToCart} 
              clearCart={clearCart} 
            />
            
            {/* Promo Card */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-colors"></div>
              <div className="relative z-10 space-y-6">
                <div className="bg-indigo-500/20 w-fit p-3 rounded-2xl border border-indigo-500/30">
                  <Zap className="text-indigo-400" fill="currentColor" size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Pro Member Access</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">Join the club for early access, exclusive drops, and free worldwide shipping.</p>
                </div>
                <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black hover:bg-slate-100 transition-colors shadow-xl">
                  Upgrade Now
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                <ShieldCheck className="text-indigo-600" size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-tight">Secure <br /> Payments</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                <TrendingUp className="text-indigo-600" size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-tight">Top <br /> Rated Gear</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
