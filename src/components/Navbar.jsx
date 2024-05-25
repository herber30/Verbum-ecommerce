import React from 'react';
import './Navbar.scss';
import CartWidget from '../components/CartWidget';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Início</a></li>
        <li><a href="/promocao">Promoção</a></li>
        <li><a href="/generos">Gêneros</a></li>
        <li><a href="/livros">Livros</a></li>
      </ul>
      <div className="navbar-login">
        <button>Login</button>
      </div>
      <CartWidget /> {/* Adicionando o CartWidget à navbar */}
    </nav>
  );
}


export default NavBar;
