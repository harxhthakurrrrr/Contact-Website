import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Trophy, RotateCcw, Play, Pause, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const SPEED = 150;

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('snakeHighScore');
    if (saved) setHighScore(parseInt(saved));
  }, []);
  const [isPaused, setIsPaused] = useState(true);
  
  const gameRef = useRef(null);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    // Don't spawn food on snake body
    if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      return generateFood();
    }
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setIsGameOver(false);
    setIsPaused(false);
    setFood(generateFood());
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp': if (direction.y !== 1) setDirection({ x: 0, y: -1 }); break;
        case 'ArrowDown': if (direction.y !== -1) setDirection({ x: 0, y: 1 }); break;
        case 'ArrowLeft': if (direction.x !== 1) setDirection({ x: -1, y: 0 }); break;
        case 'ArrowRight': if (direction.x !== -1) setDirection({ x: 1, y: 0 }); break;
        case ' ': setIsPaused(prev => !prev); break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    if (isGameOver || isPaused) return;

    const moveSnake = () => {
      const newHead = {
        x: (snake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
        y: (snake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
      };

      // Check collision with self
      if (snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setIsGameOver(true);
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem('snakeHighScore', score);
        }
        return;
      }

      const newSnake = [newHead, ...snake];

      // Check if food eaten
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(s => s + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const interval = setInterval(moveSnake, SPEED);
    return () => clearInterval(interval);
  }, [snake, direction, isGameOver, isPaused, food, generateFood, score, highScore]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-2xl space-y-8">
        {/* Game Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
              <Gamepad2 size={14} />
              <span>Classic Snake</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Gear Hunter</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-slate-50 dark:bg-slate-800 px-6 py-3 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Score</p>
              <p className="text-2xl font-black text-brand">{score}</p>
            </div>
            <div className="bg-brand/5 dark:bg-brand/10 px-6 py-3 rounded-2xl border border-brand/10 dark:border-brand/20 text-center">
              <p className="text-[10px] font-black text-brand/60 uppercase tracking-widest mb-1">Best</p>
              <p className="text-2xl font-black text-brand">{highScore}</p>
            </div>
          </div>
        </div>

        {/* Game Board */}
        <div className="relative aspect-square max-w-[500px] mx-auto bg-slate-50 dark:bg-slate-950 rounded-[2rem] border-4 border-slate-100 dark:border-slate-800 overflow-hidden shadow-inner">
          <div 
            className="grid w-full h-full"
            style={{ 
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)` 
            }}
          >
            {/* Food */}
            <div 
              className="bg-red-500 rounded-full shadow-lg shadow-red-500/50 animate-pulse"
              style={{ 
                gridColumnStart: food.x + 1, 
                gridRowStart: food.y + 1 
              }}
            />
            
            {/* Snake */}
            {snake.map((segment, i) => (
              <div 
                key={i}
                className={`${i === 0 ? 'bg-brand' : 'bg-brand/60'} rounded-sm border border-slate-50/10`}
                style={{ 
                  gridColumnStart: segment.x + 1, 
                  gridRowStart: segment.y + 1,
                  zIndex: snake.length - i
                }}
              />
            ))}
          </div>

          {/* Game Over / Pause Overlays */}
          <AnimatePresence>
            {(isGameOver || isPaused) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-8 text-center"
              >
                {isGameOver ? (
                  <div className="space-y-6">
                    <div className="bg-red-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-red-500/40">
                      <RotateCcw size={40} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-white">Game Over!</h3>
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Final Score: {score}</p>
                    </div>
                    <button 
                      onClick={resetGame}
                      className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-brand w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-brand/40">
                      <Play size={40} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-white">Paused</h3>
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Press Space to Resume</p>
                    </div>
                    <button 
                      onClick={() => setIsPaused(false)}
                      className="bg-brand text-white px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl shadow-brand/20"
                    >
                      Resume Game
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls Hint */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 flex items-center gap-6">
            <div className="grid grid-cols-3 gap-2">
              <div />
              <div className="bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600"><ArrowUp size={16} /></div>
              <div />
              <div className="bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600"><ArrowLeft size={16} /></div>
              <div className="bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600"><ArrowDown size={16} /></div>
              <div className="bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600"><ArrowRight size={16} /></div>
            </div>
            <div className="space-y-1">
              <p className="font-black text-slate-900 dark:text-white text-sm">Use Arrow Keys</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Navigate the snake to collect power cores</p>
            </div>
          </div>
          <div className="bg-slate-900 dark:bg-brand p-6 rounded-[2rem] text-white flex flex-col justify-center text-center">
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Space Bar</p>
            <p className="font-black">Pause / Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
