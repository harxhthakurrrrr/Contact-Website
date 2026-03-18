import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    question: "How long does shipping typically take?",
    answer: "For standard orders, shipping usually takes 3-5 business days within the US. International shipping can take 7-14 business days depending on the destination and customs processing.",
    category: "Shipping"
  },
  {
    id: 2,
    question: "What is your return policy for premium electronics?",
    answer: "We offer a 30-day hassle-free return policy for all our premium gear. Items must be returned in their original packaging with all accessories included for a full refund.",
    category: "Returns"
  },
  {
    id: 3,
    question: "Do your products come with a warranty?",
    answer: "Yes, all our products come with a minimum 1-year ShopCraft manufacturer warranty, which covers any technical defects or hardware failures under normal usage conditions.",
    category: "Warranty"
  },
  {
    id: 4,
    question: "Can I track my order in real-time?",
    answer: "Absolutely! Once your order is shipped, you'll receive a tracking number via email and SMS that you can use to monitor your package's progress in real-time.",
    category: "Orders"
  },
  {
    id: 5,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and will be calculated at checkout.",
    category: "Shipping"
  },
  {
    id: 6,
    question: "How do I join the ShopCraft Pro membership?",
    answer: "You can upgrade to a Pro membership through your account dashboard or during the checkout process to enjoy exclusive early access and free worldwide shipping.",
    category: "Membership"
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-24">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 shadow-sm">
          <HelpCircle size={14} />
          <span>Support Center</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
          Common <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions.</span>
        </h2>
        
        <div className="relative group max-w-xl mx-auto">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-8 py-5 bg-white border border-slate-200 rounded-3xl text-sm font-bold focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all shadow-xl shadow-slate-200/50"
          />
        </div>
      </section>

      {/* FAQ Accordion Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-4">
          {filteredFaqs.map(faq => (
            <div 
              key={faq.id} 
              className={`group overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                openId === faq.id 
                ? 'bg-white border-indigo-100 shadow-xl shadow-slate-200/50' 
                : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-indigo-100'
              }`}
            >
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <div className="space-y-1">
                   <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600/60">{faq.category}</span>
                   <h4 className="text-xl font-black text-slate-900 tracking-tight">{faq.question}</h4>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  openId === faq.id ? 'bg-indigo-600 text-white rotate-180' : 'bg-white text-slate-400'
                }`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div className={`px-8 overflow-hidden transition-all duration-500 ${
                openId === faq.id ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-slate-500 font-medium leading-relaxed pt-2 border-t border-slate-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <HelpCircle className="mx-auto text-slate-300 mb-4" size={48} />
              <h4 className="text-2xl font-black text-slate-900 mb-2">No results found</h4>
              <p className="text-slate-500 font-medium">Try searching for different keywords.</p>
            </div>
          )}
        </div>

        {/* Sidebar Support */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 relative overflow-hidden group h-fit">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
            <div className="relative z-10 space-y-6">
              <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
                <MessageSquare size={28} />
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-black leading-tight">Still have <br />Questions?</h4>
                <p className="text-slate-400 font-medium leading-relaxed">Can't find the answer you're looking for? Reach out to our 24/7 human support team.</p>
              </div>
              <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black hover:bg-slate-100 transition-colors shadow-xl flex items-center justify-center gap-2">
                Contact Support <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-[2.5rem] p-8 border border-indigo-100">
             <h4 className="font-black text-indigo-900 mb-4 uppercase tracking-widest text-xs">Popular Topics</h4>
             <div className="flex flex-wrap gap-2">
                {['Shipping', 'Returns', 'Warranty', 'Pro Account', 'International', 'Bulk Orders'].map(topic => (
                  <button key={topic} className="px-4 py-2 bg-white border border-indigo-100 rounded-xl text-xs font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all">
                    {topic}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
