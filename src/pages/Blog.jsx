import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Smart Home Tech: Trends to Watch",
    excerpt: "Discover the most innovative gadgets that are transforming our living spaces into intelligent ecosystems.",
    category: "Trends",
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Why Minimalist Tech is Taking Over the Modern Workspace",
    excerpt: "Less is more: How focusing on essential high-quality gear can boost your productivity and focus.",
    category: "Productivity",
    date: "March 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Premium Audio Gear: Is It Worth the Investment?",
    excerpt: "We deep dive into high-fidelity audio and whether audiophile-grade headphones truly make a difference.",
    category: "Reviews",
    date: "March 08, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Sustainable Tech: How the Industry is Going Green",
    excerpt: "From recycled materials to energy-efficient chips, exploring the eco-friendly future of consumer electronics.",
    category: "Innovation",
    date: "March 05, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
  }
];

const Blog = () => {
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
          <Newspaper size={14} />
          <span>ShopCraft Insights</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
          Our Tech <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Journal.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          Deep dives, tech reviews, and productivity insights from our experts. Stay ahead of the digital curve.
        </p>
      </motion.section>

      {/* Featured Post */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group cursor-pointer overflow-hidden rounded-[3rem] aspect-[21/9] bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl dark:shadow-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="Featured Post"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2 bg-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
            <TrendingUp size={12} />
            <span>Trending Now</span>
          </div>
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">Mastering Your Desktop Ecosystem: A Guide to the Ultimate Setup</h3>
            <p className="text-slate-300 font-medium text-lg leading-relaxed line-clamp-2">Learn how to curate the perfect blend of high-performance gear and ergonomic design for your home office.</p>
          </div>
          <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition-colors shadow-xl">
            Read Article <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {BLOG_POSTS.map((post, idx) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer space-y-6"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm">
              <img 
                src={post.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={post.title}
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border border-white/50 dark:border-slate-700/50">
                {post.category}
              </div>
            </div>
            
            <div className="space-y-4 px-2">
              <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                <div className="flex items-center gap-2"><Calendar size={14} /> {post.date}</div>
                <div className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{post.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{post.excerpt}</p>
              <button className="text-indigo-600 dark:text-indigo-400 font-black text-sm flex items-center gap-2 hover:translate-x-2 transition-transform">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
