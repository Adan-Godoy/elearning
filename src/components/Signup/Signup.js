import React, { useState } from 'react';
import './Signup.css';
import api from '../../api/axios';

const Signup = ({ toggleForm }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para mostrar mensajes de éxito o error
  const [isError, setIsError] = useState(false); // Controla si el mensaje es de error

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password.length < 8) {
      setMessage("La contraseña debe tener al menos 8 caracteres");
      setIsError(true);
      return;
    }
  
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      setIsError(true);
      return;
    }
  
    try {
      const response = await api.post('/register', {
        email,
        password,
        userName: fullName,
      });
  
      // Usa la respuesta de alguna forma, como mostrar un mensaje al usuario
      console.log('Respuesta del servidor:', response.data);
      setMessage(`Registro exitoso. Bienvenido, ${response.data.userName}`);
      setIsError(false);
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Error al registrar';
      setMessage(errorMsg);
      setIsError(true);
    }
  };
  

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Registrarse</h2>

        {message && (
          <div className={`message ${isError ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

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

        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar Contraseña"
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
