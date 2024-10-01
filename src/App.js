import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin(true);
  const toggleSignup = () => setIsLogin(false);

  return (
    <div className="App">
      <Navbar toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      {isLogin ? <Login toggleForm={toggleSignup} /> : <Signup toggleForm={toggleLogin} />}
    </div>
  );
}

export default App;
