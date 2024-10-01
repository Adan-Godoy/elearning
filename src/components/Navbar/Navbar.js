import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleLogin, toggleSignup }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <a href="/">Coderos</a>
        </div>

        <button className="categories-btn">Categorías</button>
      </div>

      <div className="navbar-search">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar cursos..."
        />
        <button className="search-btn">Buscar</button>
      </div>

      <div className="navbar-links">
        <a href="/cart" className="cart-btn">
          <i className="fas fa-shopping-cart"></i> 
        </a>

        <button className="auth-btn" onClick={toggleLogin}>Iniciar Sesión</button>
        <button className="auth-btn" onClick={toggleSignup}>Registrarse</button>
      </div>
    </nav>
  );
};

export default Navbar;
