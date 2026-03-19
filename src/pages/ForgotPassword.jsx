import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Mail, ArrowRight, ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const ForgotPassword = () => {
  const [step, setStep] = useState('email'); // email, otp, new-password
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleReset = (e) => {
    e.preventDefault();
    if (step === 'email') {
      setStep('otp');
      addToast('6-Digit OTP sent to your registered device!', 'info');
    } else if (step === 'otp') {
      setStep('new-password');
      addToast('OTP Verified! Create your new password.', 'success');
    } else if (step === 'new-password') {
      addToast('Password reset successfully! Please login.', 'success');
      navigate('/auth');
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
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-12"
      >
        <div className="text-center space-y-6 mb-10">
          <div className="bg-brand w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-brand/20">
            <Key className="text-white" size={32} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            {step === 'email' && 'Reset Password'}
            {step === 'otp' && 'Verify OTP'}
            {step === 'new-password' && 'New Password'}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {step === 'email' && "Enter your email or phone to receive a recovery code."}
            {step === 'otp' && "We've sent a 6-digit code to your device."}
            {step === 'new-password' && "Set a strong new password for your account."}
          </p>
        </div>

        <form onSubmit={handleReset} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 'email' && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Email / Phone</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Enter email or number" 
                    className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 ring-brand/20 outline-none" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </motion.div>
            )}

            {step === 'otp' && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6 text-center">
                <div className="flex justify-center gap-3">
                  {[1,2,3,4,5,6].map(i => (
                    <input key={i} type="text" maxLength="1" className="w-12 h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-center text-xl font-black text-brand focus:ring-2 ring-brand/20 outline-none" required />
                  ))}
                </div>
                <button type="button" className="text-[11px] font-black text-brand uppercase tracking-widest hover:underline">Resend Code</button>
              </motion.div>
            )}

            {step === 'new-password' && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 ring-brand/20 outline-none" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Confirm Password</label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 ring-brand/20 outline-none" required />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button type="submit" className="w-full bg-brand text-white py-5 rounded-2xl font-black text-sm shadow-xl shadow-brand/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2">
            {step === 'email' && 'Send Verification Code'}
            {step === 'otp' && 'Verify & Continue'}
            {step === 'new-password' && 'Update Password'}
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="pt-8 text-center">
          <Link to="/auth" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:text-brand transition-colors">
            <ArrowLeft size={14} /> Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
