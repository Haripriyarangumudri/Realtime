import React from 'react';
import { useTheme } from '../context/themeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
