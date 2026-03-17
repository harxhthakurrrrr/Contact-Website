import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TodoPage from './pages/TodoPage';
import { ShoppingBag, LayoutGrid, ListTodo, Info, Heart, ArrowRight } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, change) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + change;
      if (newQuantity <= 0) {
        setCart(cart.filter(item => item.id !== product.id));
      } else {
        setCart(cart.map(item => 
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        ));
      }
    } else if (change > 0) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const cartTotalItems = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc] flex flex-col">
        {/* Modern Glass Header */}
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-slate-200/60">
          <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="bg-indigo-600 p-2.5 rounded-[1.25rem] text-white shadow-xl shadow-indigo-100 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">SHOPCRAFT</span>
                <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase pl-0.5">Premium Shop</span>
              </div>
            </Link>

            {/* Navigation - Centered Design */}
            <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center bg-slate-100/40 p-1.5 rounded-2xl border border-slate-200/40">
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-300 ${
                    isActive ? 'bg-white text-indigo-600 shadow-md ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900'
                  }`
                }
              >
                <LayoutGrid size={18} />
                Home
              </NavLink>
              <NavLink
                to="/todo"
                className={({ isActive }) => 
                  `flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-300 ${
                    isActive ? 'bg-white text-indigo-600 shadow-md ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900'
                  }`
                }
              >
                <ListTodo size={18} />
                Shopping List
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => 
                  `flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-300 ${
                    isActive ? 'bg-white text-indigo-600 shadow-md ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900'
                  }`
                }
              >
                <Info size={18} />
                About
              </NavLink>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 px-4 py-2 transition-colors">
                Support <ArrowRight size={14} />
              </button>
              <div className="relative cursor-pointer group">
                <div className="bg-slate-100/80 p-3 rounded-2xl text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-300">
                  <ShoppingBag size={20} />
                </div>
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-[3px] border-white shadow-lg animate-in zoom-in">
                    {cartTotalItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Space for fixed header */}
        <div className="h-20"></div>

        {/* Main Application Area */}
        <main className="flex-1 w-full overflow-x-hidden">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  cart={cart} 
                  addToCart={addToCart} 
                  clearCart={() => setCart([])} 
                />
              } 
            />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Minimal Settled Footer */}
        <footer className="bg-white border-t border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
              <Link to="/" className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <div className="bg-indigo-600 p-2 rounded-xl text-white">
                  <ShoppingBag size={18} />
                </div>
                <span className="text-lg font-black tracking-tight text-slate-900">SHOPCRAFT</span>
              </Link>
              <nav className="flex flex-wrap justify-center gap-8">
                {['Home', 'Todo List', 'About', 'Privacy', 'Terms'].map((item) => (
                  <Link 
                    key={item} 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-sm font-bold text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400">
              <p className="text-xs font-bold flex items-center gap-1.5">
                © 2026 ShopCraft. Built with <Heart size={14} className="text-red-400 fill-red-400" /> for the community.
              </p>
              <div className="flex gap-6 text-[10px] uppercase tracking-widest font-black">
                <a href="#" className="hover:text-slate-900 transition-colors">Instagram</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
                <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
