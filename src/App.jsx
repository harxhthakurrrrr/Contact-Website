import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Landing from './pages/Landing';
import About from './pages/About';
import TodoPage from './pages/TodoPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import Game from './pages/Game';
import Rewards from './pages/Rewards';
import TechVision from './pages/TechVision';
import TechStudio from './pages/TechStudio';
import Comparison from './pages/Comparison';
import SnakeGame from './pages/SnakeGame';
import AuthPage from './pages/AuthPage';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import TechVault from './TechVault/Vault';
import Cart from './components/Cart';
import ChatBubble from './components/ChatBubble';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ToastProvider, useToast } from './context/ToastContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { 
  ShoppingBag, LayoutGrid, ListTodo, Info, Heart, ArrowRight, 
  MessageCircle, Newspaper, HelpCircle, Shield, Sun, Moon, X, ShoppingCart,
  Gamepad2, Gift, Menu, Scan, Layout, GitCompare, User, LogOut, Lock
} from 'lucide-react';

const AnimatedRoutes = ({ cart, addToCart, clearCart, isCartOpen, setIsCartOpen }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={!isAuthenticated ? <AuthPage /> : <Navigate to="/home" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={isAuthenticated ? <Home cart={cart} addToCart={addToCart} clearCart={clearCart} /> : <Navigate to="/auth" />} />
          <Route path="/todo" element={isAuthenticated ? <TodoPage /> : <Navigate to="/auth" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/auth" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/game" element={isAuthenticated ? <Game /> : <Navigate to="/auth" />} />
          <Route path="/rewards" element={isAuthenticated ? <Rewards /> : <Navigate to="/auth" />} />
          <Route path="/vision" element={isAuthenticated ? <TechVision /> : <Navigate to="/auth" />} />
          <Route path="/studio" element={isAuthenticated ? <TechStudio /> : <Navigate to="/auth" />} />
          <Route path="/compare" element={isAuthenticated ? <Comparison /> : <Navigate to="/auth" />} />
          <Route path="/snake" element={isAuthenticated ? <SnakeGame /> : <Navigate to="/auth" />} />
          <Route path="/vault" element={isAuthenticated ? <TechVault /> : <Navigate to="/auth" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const Header = ({ cartTotalItems, setIsCartOpen }) => {
  const { isDarkMode, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: isAuthenticated ? "/home" : "/", label: "Home", icon: LayoutGrid },
    { to: "/todo", label: "Gear List", icon: ListTodo },
    { to: "/vision", label: "Vision", icon: Scan },
    { to: "/compare", label: "Compare", icon: GitCompare },
    { to: "/studio", label: "Studio", icon: Layout },
    { to: "/vault", label: "Vault", icon: Lock },
    { to: "/game", label: "Play", icon: Gamepad2 },
    { to: "/rewards", label: "Rewards", icon: Gift },
  ];

  const location = useLocation();
  if (!isAuthenticated && location.pathname === '/auth') return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to={isAuthenticated ? "/home" : "/"} className="flex items-center gap-3.5 group shrink-0">
          <div className="bg-brand p-2.5 rounded-[1.25rem] text-white shadow-xl shadow-brand/10 dark:shadow-brand/20 group-hover:scale-110 transition-transform duration-300">
            <ShoppingBag size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">SHOPCRAFT</span>
            <span className="text-[10px] font-bold text-brand tracking-widest uppercase pl-0.5">Premium Shop</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center bg-slate-100/40 dark:bg-slate-800/40 p-1.5 rounded-2xl border border-slate-200/40 dark:border-slate-700/40">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-black transition-all duration-300 ${
                  isActive ? 'bg-white dark:bg-slate-700 text-brand shadow-md ring-1 ring-slate-900/5' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`
              }
            >
              <link.icon size={16} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-brand/5 dark:hover:bg-brand/10 hover:text-brand transition-all duration-300"
              title="Change Theme Color"
            >
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: primaryColor }} />
            </button>
            
            <AnimatePresence>
              {showColorPicker && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-3 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 min-w-[200px]"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 px-1">Theme Color</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: 'Indigo', value: '#4f46e5' },
                      { name: 'Cyan', value: '#06b6d4' },
                      { name: 'Emerald', value: '#10b981' },
                      { name: 'Amber', value: '#f59e0b' },
                      { name: 'Red', value: '#ef4444' },
                      { name: 'Violet', value: '#8b5cf6' },
                      { name: 'Pink', value: '#ec4899' },
                    ].map(color => (
                      <button
                        key={color.value}
                        onClick={() => {
                          setPrimaryColor(color.value);
                          setShowColorPicker(false);
                        }}
                        className={`w-8 h-8 rounded-full transition-transform hover:scale-110 active:scale-90 flex items-center justify-center ${primaryColor === color.value ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-slate-500' : ''}`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={toggleTheme}
            className="p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-brand/5 dark:hover:bg-brand/10 hover:text-brand transition-all duration-300"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div 
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer group"
          >
            <div className="bg-slate-100/80 dark:bg-slate-800/80 p-3 rounded-2xl text-slate-700 dark:text-slate-300 group-hover:bg-brand/5 dark:group-hover:bg-brand/10 group-hover:text-brand transition-all duration-300">
              <ShoppingCart size={20} />
            </div>
            {cartTotalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-[3px] border-white dark:border-slate-900 shadow-lg animate-in zoom-in">
                {cartTotalItems}
              </span>
            )}
          </div>

          <div className="h-10 w-px bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block"></div>

          {isAuthenticated ? (
            <Link to="/profile">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 pr-4 rounded-2xl border border-slate-200/40 dark:border-slate-700/40 cursor-pointer hover:bg-brand/5 dark:hover:bg-brand/10 transition-all group"
              >
                <img src={user?.avatar} className="w-9 h-9 rounded-xl object-cover shadow-lg" alt="User" />
                <div className="hidden sm:block">
                  <p className="text-[11px] font-black text-slate-900 dark:text-white uppercase leading-none">{user?.name}</p>
                  <p className="text-[9px] font-bold text-brand uppercase tracking-widest mt-0.5">Elite Member</p>
                </div>
              </motion.div>
            </Link>
          ) : (
            <Link to="/auth">
              <button 
                className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-brand text-white px-6 py-3 rounded-2xl font-black text-[13px] hover:scale-105 transition-all shadow-xl shadow-brand/10 dark:shadow-brand/20 active:scale-95"
              >
                <User size={16} /> Login
              </button>
            </Link>
          )}

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-all duration-300"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              <div className="sm:hidden flex flex-col gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                {isAuthenticated ? (
                  <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                      <img src={user?.avatar} className="w-10 h-10 rounded-xl" alt="User" />
                      <div>
                        <p className="text-sm font-black text-slate-900 dark:text-white">{user?.name}</p>
                        <p className="text-[10px] font-bold text-brand uppercase tracking-widest">Elite Member</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    <button 
                      className="w-full bg-slate-900 dark:bg-brand text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2"
                    >
                      <User size={18} /> Login to Account
                    </button>
                  </Link>
                )}
              </div>
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-black transition-all ${
                      isActive ? 'bg-brand/10 text-brand' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <link.icon size={20} />
                  {link.label}
                </NavLink>
              ))}
              {isAuthenticated && (
                <button 
                  onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-black text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                >
                  <LogOut size={20} /> Sign Out
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const CartDrawer = ({ isOpen, setIsOpen, cart, addToCart, clearCart }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[200] overflow-y-auto"
          >
            <div className="p-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={24} className="text-slate-400" />
              </button>
              <Cart 
                cart={cart} 
                updateCart={addToCart} 
                clearCart={clearCart} 
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

function AppContent() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToast } = useToast();
  const { isAuthenticated } = useAuth();

  const addToCart = (product, change) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + change;
      if (newQuantity <= 0) {
        setCart(cart.filter(item => item.id !== product.id));
        addToast(`Removed ${product.name} from cart`, 'info');
      } else {
        setCart(cart.map(item => 
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        ));
        if (change > 0) addToast(`Updated ${product.name} quantity`, 'success');
      }
    } else if (change > 0) {
      setCart([...cart, { ...product, quantity: 1 }]);
      addToast(`Added ${product.name} to cart!`, 'success');
    }
  };

  const cartTotalItems = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      <Header cartTotalItems={cartTotalItems} setIsCartOpen={setIsCartOpen} />
      <CartDrawer 
        isOpen={isCartOpen} 
        setIsOpen={setIsCartOpen} 
        cart={cart} 
        addToCart={addToCart} 
        clearCart={() => {
          setCart([]);
          addToast('Cart cleared', 'info');
        }} 
      />

      <div className="h-20"></div>

      <main className="flex-1 w-full overflow-x-hidden">
        <AnimatedRoutes 
          cart={cart} 
          addToCart={addToCart} 
          clearCart={() => setCart([])}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
      </main>

      {isAuthenticated && <ChatBubble />}

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <Link to={isAuthenticated ? "/home" : "/"} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <div className="bg-brand p-2 rounded-xl text-white">
                  <ShoppingBag size={18} />
                </div>
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase">SHOPCRAFT</span>
              </Link>
              <p className="text-slate-400 dark:text-slate-500 text-sm font-medium leading-relaxed">
                Curating the world's most innovative technology for the modern digital enthusiast. Elevate your setup with premium gear.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Explore</h4>
              <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Shop All</Link>
                <Link to="/todo" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Gear List</Link>
                <Link to="/vision" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Tech Vision</Link>
                <Link to="/compare" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Compare Gear</Link>
                <Link to="/studio" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Setup Studio</Link>
                <Link to="/game" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Tech Catch</Link>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Support</h4>
              <nav className="flex flex-col gap-4">
                <Link to="/faq" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">FAQ Center</Link>
                <Link to="/contact" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Contact Us</Link>
                <Link to="/rewards" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Rewards Program</Link>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Legal</h4>
              <nav className="flex flex-col gap-4">
                <Link to="/legal" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Terms of Service</Link>
                <Link to="/legal" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Privacy Policy</Link>
                <Link to="/legal" className="text-sm font-bold text-slate-400 hover:text-brand transition-colors">Cookie Policy</Link>
              </nav>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-50 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400">
            <p className="text-xs font-bold flex items-center gap-1.5">
              © 2026 ShopCraft. Built with <Heart size={14} className="text-red-400 fill-red-400" /> for the community.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest font-black">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <ToastProvider>
            <AppContent />
          </ToastProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
