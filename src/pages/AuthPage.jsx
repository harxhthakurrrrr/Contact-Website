import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, Key, ArrowRight, ShieldCheck, ShoppingBag, ArrowLeft, Smartphone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const AuthPage = () => {
  const [mode, setMode] = useState('login'); // login, signup, forget, otp, new-password
  const [formData, setFormData] = useState({ email: '', password: '', name: '', otp: '' });
  const { login } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleAuth = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      // Simulate login
      login({ name: 'Harsh Thakur', email: formData.email, avatar: 'https://i.pravatar.cc/150?u=harsh' });
      addToast('Welcome back to ShopCraft!', 'success');
      navigate('/');
    } else if (mode === 'signup') {
      setMode('login');
      addToast('Account created! Please login.', 'success');
    } else if (mode === 'forget') {
      setMode('otp');
      addToast('OTP sent to your email/phone!', 'info');
    } else if (mode === 'otp') {
      setMode('new-password');
    } else if (mode === 'new-password') {
      setMode('login');
      addToast('Password changed successfully!', 'success');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-12 relative"
      >
        <div className="absolute top-0 right-0 p-12 -mr-8 -mt-8 opacity-5 rotate-12">
          <ShoppingBag size={160} className="text-brand" />
        </div>

        <div className="relative z-10 space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <motion.div 
              key={mode}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-brand/20 mb-6"
            >
              {mode === 'forget' || mode === 'otp' ? <Key className="text-white" size={32} /> : <User className="text-white" size={32} />}
            </motion.div>
            
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              {mode === 'login' && 'Welcome Back'}
              {mode === 'signup' && 'Create Account'}
              {mode === 'forget' && 'Forgot Password'}
              {mode === 'otp' && 'Verify OTP'}
              {mode === 'new-password' && 'New Password'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              {mode === 'login' && 'Sign in to access your premium gear list.'}
              {mode === 'signup' && 'Join the elite tech community today.'}
              {mode === 'forget' && "Enter your details to receive a 6-digit OTP."}
              {mode === 'otp' && "We've sent a code to your registered device."}
              {mode === 'new-password' && "Create a strong new password for your account."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleAuth} className="space-y-5">
            <AnimatePresence mode="wait">
              {mode === 'signup' && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="Enter your name" className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 ring-brand/20 outline-none" required />
                  </div>
                </motion.div>
              )}

              {(mode === 'login' || mode === 'signup' || mode === 'forget') && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Email / Phone</label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Enter email or number" 
                      className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 ring-brand/20 outline-none" 
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                </motion.div>
              )}

              {(mode === 'login' || mode === 'signup' || mode === 'new-password') && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 ring-brand/20 outline-none" required />
                  </div>
                </motion.div>
              )}

              {mode === 'otp' && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-2 text-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">6-Digit OTP</label>
                  <div className="flex justify-center gap-3">
                    {[1,2,3,4,5,6].map(i => (
                      <input key={i} type="text" maxLength="1" className="w-12 h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-center text-xl font-black text-brand focus:ring-2 ring-brand/20 outline-none" />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {mode === 'login' && (
              <div className="flex justify-end">
                <button type="button" onClick={() => setMode('forget')} className="text-[11px] font-black text-brand uppercase tracking-widest hover:underline">Forgot Password?</button>
              </div>
            )}

            <button type="submit" className="w-full bg-brand text-white py-5 rounded-2xl font-black text-sm shadow-xl shadow-brand/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2">
              {mode === 'login' && 'Sign In'}
              {mode === 'signup' && 'Register Now'}
              {mode === 'forget' && 'Send OTP'}
              {mode === 'otp' && 'Verify & Continue'}
              {mode === 'new-password' && 'Reset Password'}
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Footer */}
          <div className="pt-6 text-center">
            {mode === 'login' ? (
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                New to ShopCraft? <span onClick={() => setMode('signup')} className="text-brand cursor-pointer hover:underline">Create Account</span>
              </p>
            ) : (
              <button onClick={() => setMode('login')} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:text-brand transition-colors">
                <ArrowLeft size={14} /> Back to Login
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
