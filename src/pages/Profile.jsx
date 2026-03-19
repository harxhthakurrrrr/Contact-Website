import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { User, Mail, ShieldCheck, LogOut, Camera, Settings, Bell, CreditCard, ShoppingBag, ArrowRight } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout, updateProfile } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    addToast('Logged out successfully', 'info');
    navigate('/auth');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile({ avatar: reader.result });
        addToast('Profile picture updated!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-5xl mx-auto py-24 px-6 space-y-12">
      {/* Profile Header */}
      <section className="bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 -mr-8 -mt-8 opacity-5 rotate-12">
          <User size={200} className="text-brand" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="w-40 h-40 rounded-[3rem] overflow-hidden border-4 border-brand/20 shadow-2xl">
              <img src={user.avatar} className="w-full h-full object-cover" alt="Profile" />
            </div>
            <label className="absolute bottom-2 right-2 p-3 bg-brand text-white rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-pointer">
              <Camera size={20} />
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={12} />
                <span>Verified Elite Member</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{user.name}</h2>
              <p className="text-slate-500 dark:text-slate-400 font-bold flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} className="text-brand" /> {user.email}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <button className="bg-slate-900 dark:bg-brand text-white px-8 py-3 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl shadow-brand/20">
                Edit Profile
              </button>
              <button 
                onClick={handleLogout}
                className="bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400 px-8 py-3 rounded-2xl font-black text-sm hover:bg-red-500 hover:text-white transition-all flex items-center gap-2"
              >
                <LogOut size={18} /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Account Stats */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "Total Orders", value: "12", icon: ShoppingBag, color: "text-blue-500" },
            { label: "Points Earned", value: "2,450", icon: ShieldCheck, color: "text-brand" },
            { label: "Active Subs", value: "3", icon: Bell, color: "text-purple-500" },
            { label: "Payment Methods", value: "2 Cards", icon: CreditCard, color: "text-emerald-500" },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-6">
              <div className={`p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Settings */}
        <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-8">
          <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <Settings size={20} className="text-brand" />
            Quick Settings
          </h3>
          <div className="space-y-4">
            {['Notification Prefs', 'Security & Privacy', 'Two-Factor Auth', 'Billing History'].map((item, i) => (
              <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-brand">{item}</span>
                <ArrowRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
