import React, { useState } from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(0);

  const products = [
    { id: 1, name: 'O Senhor dos aneis', description: 'Edição de Colecionador com Ilustrações de Alan Lee', image: 'https://m.media-amazon.com/images/I/61N4u6ijSeL._SL1200_.jpg', stock: 5 },
    { id: 2, name: 'O Olho do Mundo - Série A Roda do Tempo – Vol. 1', description: 'Livro que deu origem à série A Roda do Tempo, superprodução do Amazon Prime Video', image: 'https://m.media-amazon.com/images/I/51hv6Z7TRPL._SL1000_.jpg', stock: 8 },
    { 
      id: 3, 
      name: 'Orgulho e Preconceito', 
      description: 'Um romance clássico escrito por Jane Austen.', 
      image: 'https://m.media-amazon.com/images/I/61aiRqYj81L._SL1080_.jpg', 
      stock: 10 
    },
    // ... mais produtos
  ];

  const handleAddToCart = (quantity) => {
    setCartItems(prevCartItems => prevCartItems + quantity);
  };

  return (
    <div className="App">
      <NavBar itemCount={cartItems} />
      <ItemListContainer items={products} onAdd={handleAddToCart} />
    </div>
  );
}

export default App;
