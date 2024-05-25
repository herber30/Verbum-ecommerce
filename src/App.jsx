import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'; // Caso queira adicionar algum estilo específico

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bem-vindo ao nosso catálogo!" />
    </div>
  );
}

export default App;
