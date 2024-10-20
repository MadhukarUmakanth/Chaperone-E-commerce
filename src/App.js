import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ThankyouPage from './components/ThankyouPage';

const AppContent = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Function to handle continuing shopping
  const continueShopping = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              onViewProduct={(productId) => {
                // You can add any additional logic if needed
                navigate('/thank-you'); // Navigate to Thank You page
              }}
              onAddToCart={(product) => {
                setCart([...cart, product]);
                navigate('/thank-you');
              }}
              onBuyOnRent={(product) => {
                // Handle renting product logic here
                navigate('/thank-you');
              }}
            />
          }
        />
        <Route
          path="/thank-you"
          element={<ThankyouPage continueShopping={continueShopping} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
