import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ProductQuickView from '../components/ProductQuickView';
import { Search, Sparkles, TrendingUp, ShieldCheck, Zap, ArrowRight, Star, Quote, Users, Award } from 'lucide-react';

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

const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Tech Reviewer",
    content: "ShopCraft has completely changed how I source my gear. The curation is unmatched and the shopping experience is incredibly smooth.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Designer",
    content: "The attention to detail in their product selection is impressive. I've found items here that I couldn't find anywhere else.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Software Engineer",
    content: "Fast delivery, premium packaging, and top-tier customer support. This is how online tech shopping should be done.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

const Home = ({ cart, addToCart, clearCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-24 dark:bg-slate-950 transition-colors duration-300">
      <ProductQuickView 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        addToCart={addToCart}
      />

      {/* Centered Premium Hero Section */}
      <section className="relative px-6 pt-20 pb-32 text-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand/10 dark:bg-brand/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <div className="inline-flex items-center gap-2 bg-brand/10 dark:bg-brand/20 border border-brand/20 dark:border-brand/30 px-4 py-1.5 rounded-full text-brand text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles size={14} />
            <span>Summer Collection 2026</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-purple-600 to-brand">Smart Tech</span>
          </h2>
          
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Curated selection of premium electronics and gadgets designed to elevate your daily digital experience. Quality craftsmanship meets modern innovation.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-brand text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-brand/20 dark:shadow-brand/40 hover:bg-brand-hover hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              Start Shopping <ArrowRight size={20} />
            </button>
            <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-10 py-5 rounded-[2rem] font-black text-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 transition-all">
              View Catalog
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
          {[
            { label: "Happy Clients", value: "50k+", icon: <Users size={20} className="text-brand" /> },
            { label: "Premium Products", value: "200+", icon: <Star size={20} className="text-brand" /> },
            { label: "Awards Won", value: "15+", icon: <Award size={20} className="text-brand" /> },
            { label: "Countries", value: "40+", icon: <TrendingUp size={20} className="text-brand" /> },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                {stat.icon}
                {stat.label}
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-brand font-black tracking-widest text-xs uppercase">
              <Sparkles size={16} />
              <span>Curated Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Featured <span className="text-brand">Gear</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 w-full md:w-96 group focus-within:ring-2 ring-brand/20 transition-all">
            <Search className="text-slate-400 ml-3 group-focus-within:text-brand transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search premium products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm font-bold w-full text-slate-900 dark:text-white placeholder:text-slate-400"
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard 
                  product={product} 
                  addToCart={addToCart}
                  cartItem={cart.find(item => item.id === product.id)}
                  onQuickView={() => setSelectedProduct(product)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-400 font-bold text-lg">No products found matching your search.</p>
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand dark:bg-brand/40 py-32 px-6 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em]">Social Proof</h3>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">What the Community Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] space-y-8"
              >
                <Quote className="text-brand/50" size={32} />
                <p className="text-indigo-50 text-lg font-medium leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-brand/50" />
                  <div>
                    <h4 className="font-black text-white text-sm">{testimonial.name}</h4>
                    <p className="text-brand/80 text-[10px] font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Zap className="text-yellow-500" />, title: "Lightning Fast", desc: "Same day delivery on all premium orders" },
          { icon: <ShieldCheck className="text-green-500" />, title: "Secure Checkout", desc: "Military-grade encryption for your peace of mind" },
          { icon: <TrendingUp className="text-blue-500" />, title: "Best Prices", desc: "Price match guarantee on our entire catalog" }
        ].map((feat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex items-start gap-6 group">
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl group-hover:scale-110 transition-transform">{feat.icon}</div>
            <div className="space-y-1">
              <h4 className="font-black text-slate-900 dark:text-white">{feat.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{feat.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
