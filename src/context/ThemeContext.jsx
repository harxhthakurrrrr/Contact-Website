import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [primaryColor, setPrimaryColor] = useState(() => {
    return localStorage.getItem('primaryColor') || '#4f46e5'; // default indigo-600
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty('--primary-color', primaryColor);
    
    // Calculate a darker version for hover
    // Simple way to darken: reduce brightness or use hardcoded map
    const colorMap = {
      '#4f46e5': '#4338ca', // Indigo
      '#06b6d4': '#0891b2', // Cyan
      '#10b981': '#059669', // Emerald
      '#f59e0b': '#d97706', // Amber
      '#ef4444': '#dc2626', // Red
      '#8b5cf6': '#7c3aed', // Violet
      '#ec4899': '#db2777', // Pink
    };
    const hoverColor = colorMap[primaryColor] || primaryColor;
    root.style.setProperty('--primary-color-hover', hoverColor);
    root.style.setProperty('--primary-color-glow', `${primaryColor}33`); // 20% opacity
    
    localStorage.setItem('primaryColor', primaryColor);
  }, [primaryColor]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, primaryColor, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
