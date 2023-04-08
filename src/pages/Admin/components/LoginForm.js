import React from 'react';
import { useNavigate } from 'react-router-dom';
import authStore from '../stores/authStore';

import './LoginForm.css';

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate('/admin');
  };

  return (
    <div className="section">
      <div className="container">
        {/* <div className="form_container"> */}
        <form onSubmit={handleLogin}>
          <input
            onChange={store.updateLoginForm}
            value={store.loginForm.email}
            type="email"
            name="email"
            placeholder="email"
          />
          <br />
          <input
            onChange={store.updateLoginForm}
            value={store.loginForm.password}
            type="password"
            name="password"
            placeholder="password"
          />
          <br />
          <button
            style={{ textAlign: 'center' }}
            className="email_sub"
            type="submit"
          >
            Login
          </button>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}
