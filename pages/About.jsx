import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">
            About <span className="highlight">LegalEase AI</span>
          </h1>
          <p className="about-subtitle">
            Revolutionizing the way you interact with technology
          </p>
        </div>
        <div className="about-hero-background">
          <div className="about-glow"></div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
            We aim to bridge the gap between complicated legal terminology and everyday understanding by using AI to translate,
             explain, and guide users through legal issues in simple and accessible language.
            </p>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid grid-2">
            <div className="feature-card">
              <div className="feature-icon">
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
              <h3>Innovation</h3>
              <p>Pushing the boundaries of what's possible with cutting-edge technology</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Security</h3>
              <p>Your data is protected with enterprise-grade security measures</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
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
              <h3>User-Centric</h3>
              <p>Designed with your needs and preferences in mind</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
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
              <h3>Reliability</h3>
              <p>Consistent performance you can depend on</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="grid grid-3">
            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-glow"></div>
              </div>
              <h3>Muzammil Ahmed</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-glow"></div>
              </div>
              <h3>Zohaib Ahmed Siddiqui</h3>
              <p>Backend Developer</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-glow"></div>
              </div>
              <h3>Muhammad Ali</h3>
              <p>Backend Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 