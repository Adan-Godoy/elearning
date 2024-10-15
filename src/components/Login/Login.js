import React, { useState } from 'react';
import './Login.css';
import api from '../../api/axios';

const googleLogo = "/images/google.png";

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para manejar mensajes
  const [isError, setIsError] = useState(false); // Indica si el mensaje es de error

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password.length < 8) {
      setMessage("La contraseña debe tener al menos 8 caracteres");
      setIsError(true);
      return;
    }
  
    try {
      const response = await api.post('/login', { email, password });
  
      console.log('Respuesta completa del servidor:', response.data); // Verifica la respuesta completa
  
      const token = response.data.data.accessToken; // Cambia a accessToken según la respuesta del servidor
  
      if (token) {
        setMessage(`Inicio de sesión exitoso. Token: ${token}`);
        setIsError(false);
        localStorage.setItem('authToken', token); // Guarda el token en localStorage
        console.log('Token:', token); // Imprime el token en la consola
      } else {
        setMessage('Token no encontrado en la respuesta del servidor');
        setIsError(true);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Credenciales incorrectas';
      setMessage(errorMsg);
      setIsError(true);
    }
  };
  

  const handleGoogleLogin = () => {
    console.log("Iniciar sesión con Google");
    // Aquí podrías integrar Google OAuth
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

        {message && (
          <div className={`message ${isError ? 'error' : 'success'}`}>
            {isError ? message : (
              <p className="token-message">
                Inicio de sesión exitoso. <br />
                <small>Token:</small>
                <span className="token">{message.split('Token: ')[1]}</span>
              </p>
            )}
          </div>
        )}


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
