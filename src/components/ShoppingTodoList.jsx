import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, Circle, Sparkles } from 'lucide-react';

const ShoppingTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="bg-white p-10 rounded-[2.5rem] w-full space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <div className="bg-emerald-50 p-2.5 rounded-2xl text-emerald-600">
              <Sparkles size={24} />
            </div>
            Gear List
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-[4.5rem]">Track your tech haul</p>
        </div>
      </div>
      
      <form onSubmit={addTodo} className="relative group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What premium gear is next?"
          className="w-full pl-6 pr-16 py-5 bg-slate-50 border border-slate-100 rounded-3xl text-sm font-bold focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 focus:bg-white transition-all outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 bottom-2 aspect-square bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all active:scale-90"
        >
          <Plus size={24} strokeWidth={3} />
        </button>
      </form>

      <div className="space-y-3 min-h-[200px]">
        {todos.length === 0 ? (
          <div className="text-center py-12 space-y-3 border-2 border-dashed border-slate-50 rounded-3xl">
            <p className="text-slate-300 font-black uppercase tracking-widest text-[10px]">Your list is empty</p>
            <p className="text-slate-400 text-sm font-medium">Add some items to get started!</p>
          </div>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                todo.completed 
                ? 'bg-slate-50/50 border-slate-50 opacity-60' 
                : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100'
              }`}
            >
              <div
                className="flex items-center gap-4 cursor-pointer flex-1"
                onClick={() => toggleTodo(todo.id)}
              >
                <div className={`transition-colors ${todo.completed ? 'text-emerald-500' : 'text-slate-300'}`}>
                  {todo.completed ? (
                    <CheckCircle size={22} fill="currentColor" className="text-white fill-emerald-500" />
                  ) : (
                    <Circle size={22} strokeWidth={2.5} />
                  )}
                </div>
                <span className={`text-sm font-bold transition-all ${todo.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-slate-300 hover:text-red-500 p-2 rounded-xl hover:bg-red-50 transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {todos.filter(t => t.completed).length} / {todos.length} Items Done
            </span>
          </div>
          <button 
            onClick={() => setTodos(todos.filter(t => !t.completed))}
            className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-800 transition-colors"
          >
            Clear Completed
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingTodoList;
