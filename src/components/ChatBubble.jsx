import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="font-black text-sm">ShopCraft AI</h4>
                  <p className="text-[10px] font-bold text-brand-glow uppercase tracking-widest">Online & Ready</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-64 p-6 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700 max-w-[85%]">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Hey there! 👋 Need help choosing the perfect gear for your setup? I'm here to help!
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 ring-brand/20"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand text-white rounded-2xl shadow-2xl shadow-brand/20 dark:shadow-brand/40 flex items-center justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </div>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBubble;
