import React, {useState} from "react";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

    };

    return (
        <div className="login-container">
            < form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="login-btn">Entrar</button>
            </form>
        </div>
    );

};

export default Login;