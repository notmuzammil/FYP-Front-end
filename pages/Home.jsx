import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">LegalEase AI</span>
          </h1>
          <p className="hero-subtitle">
            Experience the future of technology with our cutting-edge solutions
          </p>
          <div className="hero-buttons">
            <a href="/chatbot" className="btn btn-primary">
              Try Chatbot
            </a>
            <a href="/about" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-background">
          <div className="hero-glow"></div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Advanced AI</h3>
              <p>Powered by state-of-the-art artificial intelligence technology</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </div>
              <h3>Smart Solutions</h3>
              <p>Intelligent solutions for your everyday needs</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>User-Friendly</h3>
              <p>Designed with user experience in mind</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of users who are already experiencing the future</p>
            <a href="/chatbot" className="btn btn-primary">
              Start Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 