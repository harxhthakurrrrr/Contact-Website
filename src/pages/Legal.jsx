import React from 'react';
import { Shield, Lock, FileText, Scale } from 'lucide-react';

const Legal = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-24">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 shadow-sm">
          <Shield size={14} />
          <span>Trust & Safety</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
          Legal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Documents.</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          Your privacy and safety are our top priorities. Learn about our terms of service and how we protect your data.
        </p>
      </section>

      {/* Main Content Area - Static Text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Sidebar Nav (Static) */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-2">
            <h3 className="font-black text-slate-900 mb-4 uppercase tracking-widest text-xs border-b border-slate-50 pb-4">Legal Overview</h3>
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Refund Policy', 'Warranty Terms'].map(item => (
              <button 
                key={item} 
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  item === 'Terms of Service' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
             <div className="relative z-10 space-y-4">
                <Lock className="text-indigo-400" size={24} />
                <h4 className="text-xl font-black">Secure Data</h4>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">We use military-grade 256-bit encryption for all your transactions and personal information.</p>
             </div>
          </div>
        </div>

        {/* Content Section (Static Text) */}
        <div className="lg:col-span-8 space-y-16">
          <section className="bg-white p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm space-y-10 prose prose-slate prose-indigo max-w-none">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-indigo-600">
                <FileText size={24} strokeWidth={2.5} />
                <h3 className="text-3xl font-black text-slate-900 m-0 tracking-tight">Terms of Service</h3>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">Last updated: March 18, 2026</p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900">1. Acceptance of Terms</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  By accessing or using the ShopCraft website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use this website.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900">2. Use of the Site</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site in any way that violates any applicable federal, state, local, or international law or regulation.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900">3. Intellectual Property Rights</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by ShopCraft, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900">4. User Accounts</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  To access some features of the Site, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900">5. Limitation of Liability</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  In no event will ShopCraft, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Site.
                </p>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-50">
               <div className="flex items-center gap-3 text-emerald-600 mb-6">
                <Shield size={24} strokeWidth={2.5} />
                <h3 className="text-3xl font-black text-slate-900 m-0 tracking-tight">Privacy Commitment</h3>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Your data is your own. We do not sell your personal information to third parties. We only collect what is necessary to provide you with a premium shopping experience.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start gap-5">
                 <div className="bg-white p-3 rounded-xl shadow-sm"><Scale size={24} className="text-indigo-600" /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">GDPR & CCPA Compliant</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">We adhere to the highest international standards for data protection and privacy regulations.</p>
                 </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
