import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! 👋 Need help choosing the perfect gear for your setup? I'm here to help!", sender: 'bot' }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateResponse = (userText) => {
    const text = userText.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) return "Hi! How can I help you today with your tech needs?";
    if (text.includes('price') || text.includes('cost')) return "All our prices are competitive. Check our 'Featured Gear' section for the latest deals!";
    if (text.includes('game')) return "We have cool games! Check out 'Tech Catch' and our brand new 'Snake Game' in the Play section!";
    if (text.includes('camera') || text.includes('vision')) return "Our 'Tech Vision' feature uses your camera to show you how gear looks in your environment!";
    if (text.includes('shipping') || text.includes('delivery')) return "We offer free shipping on orders over $500! Delivery usually takes 2-3 business days.";
    if (text.includes('compare')) return "Confused? Use our 'Compare' tool to see specs of different products side-by-side.";
    return "That's interesting! Tell me more about what you're looking for in your setup.";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = { id: Date.now(), text: message, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const botMsg = { 
        id: Date.now() + 1, 
        text: generateResponse(message), 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-brand p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tight">ShopCraft AI</h4>
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Online Support
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef}
              className="h-[400px] p-6 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50 scroll-smooth"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'} items-end gap-2`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <Bot size={14} />
                    </div>
                  )}
                  <div className={`p-4 rounded-2xl max-w-[80%] text-sm font-medium shadow-sm ${
                    msg.sender === 'bot' 
                    ? 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-bl-none border border-slate-100 dark:border-slate-700' 
                    : 'bg-brand text-white rounded-br-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700">
                    <Loader2 size={16} className="animate-spin text-brand" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything about our gear..."
                  className="flex-1 pl-4 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 ring-brand/20 outline-none"
                />
                <button 
                  type="submit"
                  disabled={!message.trim()}
                  className="absolute right-1.5 p-2.5 bg-brand text-white rounded-xl hover:bg-brand-hover transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
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
