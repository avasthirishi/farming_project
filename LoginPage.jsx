// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import './AuthPages.css'; // You can create this CSS file for styling both login/signup

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Attempting to log in...');
    // Simulate an async operation
    setTimeout(() => {
      if (email === 'demo@example.com' && password === 'password123') {
        setMessage('Login successful! Redirecting...');
        onLogin(email); // Call the demo login function from App.jsx
      } else {
        setMessage('Demo Login Failed: Invalid email or password.');
      }
    }, 1000);
  };

  return (
    <div className="auth-container">
      <h2>Demo Login</h2>
      <p>Use email: <strong>demo@example.com</strong> and password: <strong>password123</strong> to test.</p>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
}

export default LoginPage;