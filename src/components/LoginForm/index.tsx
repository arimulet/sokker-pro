import React, { useState } from 'react';
import { LoginFormProps } from './types';


const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Iniciar Sesión</h2>

        <div className="login-form__field">
          <label htmlFor="username" className="login-form__label">
            Usuario
          </label>
          <input
            id="username"
            type="text"
            className="login-form__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className="login-form__field">
          <label htmlFor="password" className="login-form__label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="login-form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>

        {error && <div className="login-form__error">{error}</div>}

        <button type="submit" className="login-form__button">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
