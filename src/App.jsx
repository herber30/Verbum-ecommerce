import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home';
import Generos from './pages/Generos';
import Livros from './pages/Livros';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (productId, quantity) => {
    setCartItems(prevCartItems => ({
      ...prevCartItems,
      [productId]: (prevCartItems[productId] || 0) + quantity
    }));
  };

  const calculateTotalItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <Router>
      <Navbar itemCount={calculateTotalItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generos" element={<Generos />} />
        <Route path="/livros" element={<Livros handleAddToCart={handleAddToCart} />} />
        <Route path="/category/:id" element={<ItemListContainer onAdd={handleAddToCart} />} />
        <Route path="/item/:id" element={<ItemDetailContainer onAdd={handleAddToCart} />} />
      </Routes>
    </Router>
  );
};

export default App;