
import React from 'react';
import './assets/styles.css'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import { ThemeProvider } from './context/themeContext';
import { CartProvider } from './context/cartContext';
import MainLayout from './layout/Mainlayout';
import AppRouter from './router/Approuter';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <MainLayout>
              <AppRouter />
            </MainLayout>
          </Router>
        </CartProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
