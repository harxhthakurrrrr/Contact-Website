import React from 'react';
import ShoppingTodoList from '../components/ShoppingTodoList';
import { ListTodo, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const TodoPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-24">
      {/* Centered Header */}
      <section className="text-center max-w-2xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
          <ListTodo size={14} />
          <span>Productivity Hub</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
          Master Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Shopping.</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          The ShopCraft list is designed to help you organize your tech needs. Add items, track progress, and shop with intention.
        </p>
      </section>

      {/* Main Todo Component Area - Large & Centered */}
      <div className="flex justify-center items-start">
        <div className="w-full max-w-2xl bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
          <ShoppingTodoList />
        </div>
      </div>

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-start gap-6 group">
          <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            <Sparkles className="text-emerald-600" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-black text-slate-900">Plan Ahead</h4>
            <p className="text-slate-500 font-medium leading-relaxed">
              Research shows that planning your purchases reduces impulse spending and ensures you get exactly what your setup needs.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-start gap-6 group">
          <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            <CheckCircle2 className="text-indigo-600" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-black text-slate-900">Instant Sync</h4>
            <p className="text-slate-500 font-medium leading-relaxed">
              Your list is always available as you browse the ShopCraft catalog. Seamlessly move between planning and acquiring.
            </p>
          </div>
        </div>
      </div>

      {/* Mini CTA */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-3xl font-black mb-4">Ready to find these items?</h4>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Head back to the shop to see our latest featured gadgets and premium electronics.</p>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black flex items-center gap-2 mx-auto hover:bg-slate-100 transition-colors">
            Back to Shop <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
