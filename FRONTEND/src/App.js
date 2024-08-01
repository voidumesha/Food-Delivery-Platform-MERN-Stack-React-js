import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Cart from './pages/cart';
import PopularFoodPage from './pages/popularFoodPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/popularFoodPage" element={<PopularFoodPage />} />

      </Routes>
    </Router>
  );
};

export default App;
