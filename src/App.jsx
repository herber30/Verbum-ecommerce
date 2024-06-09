import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Generos from './pages/Generos';
import Livros from './pages/Livros/Livros';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';
import './App.scss';


const App = () => {
   return (
       <CartProvider>
           <Router>
               <div className="App">
                   <header className="App-header">
                       <Navbar />
                   </header>
                   <main>
                       <Routes>
                           <Route path="/" element={<Home />} />
                           <Route path="/generos" element={<Generos />} />
                           <Route path="/livros" element={<Livros />} />
                           <Route path="/category/:id" element={<ItemListContainer />} />
                           <Route path="/item/:id" element={<ItemDetailContainer />} />
                       </Routes>
                   </main>
               </div>
           </Router>
       </CartProvider>
   );
};


export default App;
