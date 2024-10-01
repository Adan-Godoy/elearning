import React, { useState } from 'react';
import './Login.css';

const googleLogo = "/images/google.png";

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleLogin = () => {
    console.log("Iniciar sesión con Google");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>

        <div className="forgot-password">
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" className="login-btn">Entrar</button>

        <div className="or-separator">o</div>

        <button type="button" className="google-btn" onClick={handleGoogleLogin}>
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
          Iniciar sesión con Google
        </button>

        <div className="register-link">
          <p>¿No tienes cuenta? <span className="toggle-link" onClick={toggleForm}>Regístrate</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
