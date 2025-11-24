import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login">
      <section className="login-hero">
        <div className="login-hero-content">
          <h1 className="login-title">
            Welcome to <span className="highlight">LegalEaseAI</span>
          </h1>
          <p className="login-subtitle">Sign in to continue</p>
        </div>

        <div className="login-hero-background">
          <div className="login-glow"></div>
        </div>
      </section>

      <section className="login-section">
        <div className="login-card">
          <h2 className="login-heading">Login</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary login-btn">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Create one</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
