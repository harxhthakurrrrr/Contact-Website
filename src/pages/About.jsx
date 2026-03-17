import React from 'react';
import { Info, Target, Users, Code, ShoppingBag, ListTodo, ShieldCheck, Star, ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-32">
      {/* Centered Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 shadow-sm">
          <Info size={14} />
          <span>Our Vision</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
          Beyond Just <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Shopping.</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          ShopCraft is a premium ecosystem where productivity meets commerce. We build tools that help you discover, track, and acquire the world's best technology.
        </p>
      </section>

      {/* Settle Grid - Mission & Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Target className="text-indigo-600" />, title: "Precision", desc: "Every product in our catalog is meticulously vetted for quality and innovation." },
          { icon: <Users className="text-purple-600" />, title: "Community", desc: "Built for tech enthusiasts who value craftsmanship and design excellence." },
          { icon: <ShieldCheck className="text-emerald-600" />, title: "Trust", desc: "Secure transactions and verified authentic gear for total peace of mind." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Feature Showcase - Centered Content */}
      <section className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
              <Star size={14} className="text-yellow-400" fill="currentColor" />
              <span>The ShopCraft Advantage</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">Built with the <br />Modern Stack.</h3>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              We leverage React 19 and Tailwind CSS to deliver a lightning-fast, accessible, and responsive experience across all your devices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-slate-100 transition-colors">
                Explore Tech <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <ShoppingBag className="text-indigo-400 mb-4" />
                <h4 className="font-bold mb-1">Curated Shop</h4>
                <p className="text-xs text-slate-500 font-medium">Hand-picked gear only.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <ListTodo className="text-emerald-400 mb-4" />
                <h4 className="font-bold mb-1">Smart List</h4>
                <p className="text-xs text-slate-500 font-medium">Track your haul.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <Code className="text-orange-400 mb-4" />
                <h4 className="font-bold mb-1">Modern Dev</h4>
                <p className="text-xs text-slate-500 font-medium">React 19 Powered.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <ShieldCheck className="text-blue-400 mb-4" />
                <h4 className="font-bold mb-1">Security</h4>
                <p className="text-xs text-slate-500 font-medium">Privacy First.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-indigo-50 rounded-[3rem] border border-indigo-100 shadow-sm px-6">
        <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Ready to upgrade?</h3>
        <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto">Join our community of 50,000+ tech lovers and start building your ultimate workspace today.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
