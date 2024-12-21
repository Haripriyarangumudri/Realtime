
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/themeContext';  
import { useCart } from '../context/cartContext';  

const MainLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();  
  const { state } = useCart(); 
  
  return (
    <div className={`layout ${theme}`}> 
      <header className="header">
        <div className="header-content">
          <h1>Order Management</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Cart ({state.items.length})</Link></li>
              <li><Link to="/order">Orders</Link></li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="theme-toggle">
            Toggle Theme
          </button>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Order Management System</p>
      </footer>
    </div>
  );
};

export default MainLayout;
