
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');  

  
  const toggleTheme = () => {
    console.log('Toggling theme');  
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));  
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);  