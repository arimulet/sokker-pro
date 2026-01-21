import React, { useState } from 'react';
import { LoginFormProps } from './types';
import styles from './index.module.scss'
import Section from '../Section';

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
    <Section>

       
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={`${styles.loginForm}__title`}>Iniciar Sesión</h2>

        <div className={`${styles.loginForm}__field`}>
          <label htmlFor="username" className={`${styles.loginForm}__label`}>
            Usuario
          </label>
          <input
            id="username"
            type="text"
            className={`${styles.loginForm}__input`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className={`${styles.loginForm}__field`}>
          <label htmlFor="password" className={`${styles.loginForm}__label`}>
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className={`${styles.loginForm}__input`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>

        {error && <div className={`${styles.loginForm}__error`}>{error}</div>}

        <button type="submit" className={`${styles.loginForm}__button`}>
          Ingresar
        </button>
      </form>

    </Section>
  );
};

export default LoginForm;
