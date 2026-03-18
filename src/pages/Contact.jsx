import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-24 dark:bg-slate-950 transition-colors duration-300">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto space-y-8"
      >
        <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/30 shadow-sm">
          <MessageCircle size={14} />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
          We're Here to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Help.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          Have a question about our premium gear or need support? Our team is always ready to assist you.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-slate-800 space-y-10"
        >
          <div className="space-y-2">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">Send us a message</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium">We usually respond within 24 hours.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-indigo-50 dark:focus:ring-indigo-900/20 focus:border-indigo-500 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-indigo-50 dark:focus:ring-indigo-900/20 focus:border-indigo-500 transition-all outline-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Subject</label>
              <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-indigo-50 dark:focus:ring-indigo-900/20 focus:border-indigo-500 transition-all outline-none appearance-none">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Technical Issue</option>
                <option>Business Partnership</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Message</label>
              <textarea 
                rows="5"
                placeholder="How can we help you today?"
                className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-indigo-50 dark:focus:ring-indigo-900/20 focus:border-indigo-500 transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-slate-900 dark:bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-600 dark:hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>

        {/* Info & Map */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-4 group hover:border-indigo-100 dark:hover:border-indigo-900 transition-all"
            >
              <div className="bg-indigo-50 dark:bg-indigo-900/20 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 dark:text-white">Email Us</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">support@shopcraft.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-4 group hover:border-indigo-100 dark:hover:border-indigo-900 transition-all"
            >
              <div className="bg-purple-50 dark:bg-purple-900/20 w-12 h-12 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 dark:text-white">Call Us</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">+1 (555) 000-TECH</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 dark:bg-indigo-950/20 p-10 rounded-[2.5rem] text-white space-y-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-indigo-400 mt-1" size={24} />
                <div>
                  <h4 className="text-2xl font-black">Our Flagship Store</h4>
                  <p className="text-slate-400 font-medium">123 Tech Avenue, Silicon Valley <br />California, USA</p>
                </div>
              </div>
              
              <div className="w-full h-64 bg-slate-800 dark:bg-slate-800/50 rounded-3xl relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <MapPin size={100} strokeWidth={1} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
