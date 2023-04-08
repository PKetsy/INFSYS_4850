import React from 'react';
import LoginForm from './components/LoginForm';

import './AdminLogin.css';

export default function AdminLogin() {
  return (
    <div className="section">
      <div className="container">
        <div>
          <main>
            <h1 className="headingOne">Admin Login</h1>
            <LoginForm />
          </main>
        </div>
      </div>
    </div>
  );
}
