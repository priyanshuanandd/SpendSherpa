import React, { useEffect, useState, createContext, useContext } from 'react';

// Create a Context for Theme
const ThemeContext = createContext();

// Custom Hook for consuming theme context
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Check the localStorage for saved preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Toggle the theme mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem('darkMode', !prevMode);
      return !prevMode;
    });
  };

  // Apply dark mode class to the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div>
        {/* <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 w-12 h-12 bg-white-200 dark:bg-white-800 text-black dark: rounded-full text-3xl flex items-center justify-center shadow-md"
        >
          {darkMode ? '🌞' : '🌙'}
        </button> */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
