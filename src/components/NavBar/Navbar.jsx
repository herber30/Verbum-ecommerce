import React from 'react'
import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/Bookstore.png'
import { Link } from 'react-router-dom'

const NavBar = ({ itemCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Início</a></li>
        <li><a href="/generos">Gêneros</a></li>
        <li><a href="/livros">Livros</a></li>
      </ul>
      <div className="navbar-login">
        <Link to="/login"> {/* Use Link para o redirecionamento */}
          <button>Login</button>
        </Link>
      </div>
      <CartWidget itemCount={itemCount} />
    </nav>
  );
 }
 
 
 export default NavBar
 