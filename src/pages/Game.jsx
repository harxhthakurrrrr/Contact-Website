import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Trophy, RefreshCcw, Smartphone, Laptop, Watch, Tablet, ChevronRight, Play } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

const ICONS = [
  { icon: Smartphone, score: 10, label: 'Phone' },
  { icon: Laptop, score: 25, label: 'Laptop' },
  { icon: Watch, score: 5, label: 'Watch' },
  { icon: Tablet, score: 15, label: 'Tablet' },
];

const TechCatchGame = () => {
  const [gameState, setGameState] = useState('idle'); // idle, playing, ended
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [items, setItems] = useState([]);
  const { addToast } = useToast();

  const spawnItem = useCallback(() => {
    const randomIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
    const newItem = {
      id: Date.now(),
      x: Math.random() * 80 + 10, // 10% to 90%
      y: Math.random() * 60 + 20, // 20% to 80%
      ...randomIcon
    };
    setItems(prev => [...prev, newItem]);

    // Remove item after 1.5 seconds if not clicked
    setTimeout(() => {
      setItems(prev => prev.filter(i => i.id !== newItem.id));
    }, 1500);
  }, []);

  useEffect(() => {
    let interval;
    if (gameState === 'playing') {
      interval = setInterval(() => {
        spawnItem();
      }, 800);
    }
    return () => clearInterval(interval);
  }, [gameState, spawnItem]);

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameState('ended');
      if (score > 100) {
        addToast(`Legendary! You scored ${score}!`, 'success');
      }
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft, score, addToast]);

  const handleItemClick = (item) => {
    setScore(prev => prev + item.score);
    setItems(prev => prev.filter(i => i.id !== item.id));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameState('playing');
    setItems([]);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-24 px-6 space-y-12 dark:bg-slate-950 transition-colors duration-300 min-h-[80vh]">
      {/* Header */}
      <section className="text-center space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-brand/20">
          <Gamepad2 size={14} />
          <span>Interactive Play</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">Catch.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">
          Catch the falling tech items to earn points! High scores win exclusive discount codes.
        </p>
      </section>

      {/* Game Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <div className="group relative overflow-hidden bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl transition-all hover:scale-[1.02]">
          <div className="absolute top-0 right-0 p-12 -mr-8 -mt-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
            <Gamepad2 size={160} />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="bg-brand w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl shadow-brand/20">
              <Gamepad2 className="text-white" size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Tech Catch</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Test your reaction speed by catching falling gadgets!</p>
            </div>
            <button 
              onClick={() => {
                const gameBoard = document.getElementById('game-board');
                if (gameBoard) gameBoard.scrollIntoView({ behavior: 'smooth' });
                startGame();
              }}
              className="bg-brand text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl hover:bg-brand-hover transition-colors"
            >
              Play Now <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Link to="/snake" className="group relative overflow-hidden bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-2xl transition-all hover:scale-[1.02]">
          <div className="absolute top-0 right-0 p-12 -mr-8 -mt-8 opacity-10 group-hover:opacity-20 transition-opacity -rotate-12">
            <Play size={160} className="text-brand" />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="bg-brand w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl shadow-brand/20">
              <Play className="text-white" size={32} fill="currentColor" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Snake Game</h3>
              <p className="text-slate-400 font-medium">Classic snake action with a futuristic tech twist!</p>
            </div>
            <div className="bg-brand text-white px-5 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl hover:bg-brand-hover transition-colors">
              Launch Game <ChevronRight size={20} />
            </div>
          </div>
        </Link>
      </div>

      {/* Game Board (Tech Catch) */}
      <div id="game-board" className="relative w-full max-w-4xl h-[500px] bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden mx-auto">
        {gameState === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-20">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-brand p-6 rounded-3xl text-white shadow-2xl shadow-brand/20"
            >
              <Gamepad2 size={64} />
            </motion.div>
            <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-[0.2em] text-sm animate-pulse">Select Tech Catch above to start</p>
          </div>
        )}

        {gameState === 'playing' && (
          <>
            {/* Stats Overlay */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <Trophy className="text-yellow-500" size={20} />
                <span className="font-black text-2xl text-slate-900 dark:text-white">{score}</span>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <span className="font-black text-2xl text-slate-900 dark:text-white">{timeLeft}s</span>
              </div>
            </div>

            {/* Game Items */}
            <AnimatePresence>
              {items.map(item => (
                <motion.button
                  key={item.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={() => handleItemClick(item)}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  className="absolute p-4 bg-brand text-white rounded-2xl shadow-xl hover:bg-brand-hover transition-colors z-30"
                >
                  <item.icon size={32} />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full">
                    +{item.score}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </>
        )}

        {gameState === 'ended' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md"
          >
            <div className="text-center space-y-2">
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">Game Over!</h3>
              <p className="text-slate-500 dark:text-slate-400 font-bold">Your Final Score</p>
              <div className="text-7xl font-black text-brand">{score}</div>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={startGame}
                className="flex items-center gap-2 bg-slate-900 dark:bg-brand text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-xl"
              >
                <RefreshCcw size={20} /> Try Again
              </button>
              {score >= 150 && (
                <div className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl animate-bounce">
                  Code: TECH20
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {[
          { title: "Catch Items", desc: "Click/Tap icons as they appear to earn points." },
          { title: "Speed Matters", desc: "Items disappear quickly. Be fast to score more!" },
          { title: "Win Rewards", desc: "Score 150+ points to unlock a 20% discount code." }
        ].map((tip, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
            <h4 className="font-black text-slate-900 dark:text-white mb-2">{tip.title}</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCatchGame;
