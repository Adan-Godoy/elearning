import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ toggleForm }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Las contraseñas no coinciden");
      return;
    }
    console.log('Nombre Completo:', fullName);
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Registrarse</h2>

        <div className="form-group">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nombre Completo"
            required
          />
        </div>

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

        <div className="terms">
          <p>
            Al registrarte, aceptas nuestras <a href="/terms">Condiciones de uso</a> y nuestra <a href="/privacy">Política de privacidad</a>.
          </p>
        </div>

        <button type="submit" className="signup-btn">Registrarse</button>

        <div className="login-link">
          <p>¿Ya tienes cuenta? <span className="toggle-link" onClick={toggleForm}>Inicia Sesión</span></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
