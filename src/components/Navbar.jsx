import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> 
        <img src="logo.png" alt="Logo" /> {/* Assumindo que você tem um logo */}
      </div>
      <ul className="navbar-links">
        <li><a href="/">Início</a></li>
        <li><a href="/promocao">Promocao</a></li>
        <li><a href="/generos">Generos</a></li>
        <li><a href="/livros">Livros</a></li>
      </ul>
      <div className="navbar-login">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
