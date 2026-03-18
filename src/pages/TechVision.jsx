import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CameraOff, Scan, ShieldCheck, Zap, Sparkles, RefreshCcw, Maximize } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const TechVision = () => {
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [stream, setStream] = useState(null);
  const { addToast } = useToast();

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
      setIsActive(true);
      addToast('Tech Vision Activated', 'success');
    } catch (err) {
      console.error("Error accessing camera:", err);
      addToast('Camera access denied. Please check permissions.', 'error');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsActive(false);
    setIsScanning(false);
    addToast('Tech Vision Offline', 'info');
  };

  const toggleScan = () => {
    if (!isActive) return;
    setIsScanning(!isScanning);
    if (!isScanning) {
      addToast('Scanning environment...', 'info');
      setTimeout(() => {
        addToast('Optimal setup conditions detected.', 'success');
        setIsScanning(false);
      }, 3000);
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-16 dark:bg-slate-950 transition-colors duration-300 min-h-[90vh]">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-purple-100 dark:border-purple-800/30">
          <Scan size={14} />
          <span>Augmented Experience</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Vision.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          See your workspace through our futuristic aesthetic lens. Visualize premium gear in your environment with AI-powered scanning.
        </p>
      </section>

      {/* Camera UI Container */}
      <div className="relative w-full max-w-5xl mx-auto aspect-video bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden group border-8 border-white dark:border-slate-900">
        {!isActive ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-20 bg-slate-900">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="bg-purple-600/20 p-8 rounded-full text-purple-500"
            >
              <Camera size={80} strokeWidth={1.5} />
            </motion.div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-black text-white">Initialize Visual Uplink</h3>
              <p className="text-slate-400 max-w-xs mx-auto">Requires camera access for the full aesthetic experience.</p>
            </div>
            <button 
              onClick={startCamera}
              className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-lg hover:bg-purple-50 transition-all shadow-xl flex items-center gap-3"
            >
              <Zap size={20} fill="currentColor" /> Launch Vision
            </button>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover grayscale-[0.3] contrast-[1.1]"
            />
            
            {/* Aesthetic Overlays */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Corner Accents */}
              <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-purple-500/50 rounded-tl-2xl"></div>
              <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-purple-500/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-purple-500/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-purple-500/50 rounded-br-2xl"></div>

              {/* Scanning Bar */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div 
                    initial={{ top: '0%' }}
                    animate={{ top: '100%' }}
                    exit={{ opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.8)] z-30"
                  />
                )}
              </AnimatePresence>

              {/* HUD Elements */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">System Live // Rec_026</span>
              </div>

              <div className="absolute bottom-12 left-12 flex flex-col gap-2">
                <div className="text-purple-400 font-black text-[10px] uppercase tracking-widest">Aesthetic Filter: VAPOR_01</div>
                <div className="text-white/40 font-bold text-[8px] uppercase tracking-widest">ISO 400 // F2.8 // 1/60</div>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 right-8 left-8 flex justify-between items-end gap-4">
              <div className="flex gap-3">
                <button 
                  onClick={toggleScan}
                  className={`p-5 rounded-2xl backdrop-blur-md border transition-all ${isScanning ? 'bg-purple-600 border-purple-400 text-white' : 'bg-black/40 border-white/10 text-white hover:bg-black/60'}`}
                >
                  <Scan size={24} className={isScanning ? 'animate-spin' : ''} />
                </button>
                <button className="p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all">
                  <Maximize size={24} />
                </button>
              </div>

              <button 
                onClick={stopCamera}
                className="bg-rose-600 text-white px-8 py-5 rounded-2xl font-black text-sm flex items-center gap-3 hover:bg-rose-700 transition-all shadow-xl"
              >
                <CameraOff size={20} /> Terminate Link
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Sparkles className="text-purple-500" />, title: "Aesthetic Filters", desc: "Real-time grain and glow effects for that premium tech vibe." },
          { icon: <Scan className="text-indigo-500" />, title: "AI Setup Scan", desc: "Our system analyzes your environment for optimal gadget placement." },
          { icon: <ShieldCheck className="text-emerald-500" />, title: "Privacy First", desc: "All processing happens locally on your device. No data is stored." }
        ].map((feature, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800 w-14 h-14 rounded-2xl flex items-center justify-center">
              {feature.icon}
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">{feature.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechVision;
