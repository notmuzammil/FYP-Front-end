  import React from 'react';
  import { Link } from 'react-router-dom';
  import '../styles/Services.css';

  const Services = () => {
    return (
      <div className="services">
        <section className="services-hero">
          <div className="services-hero-content">
            <h1 className="services-title">
              Our <span className="highlight">Services</span>
            </h1>
            <p className="services-subtitle">
              Discover our comprehensive range of cutting-edge solutions designed to elevate your digital presence.
            </p>
          </div>
        </section>

        <section className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              Custom web applications built with modern technologies and best practices.
            </p>
            <ul className="service-features">
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
              <li>SEO Integration</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="service-title">Mobile Development</h3>
            <p className="service-description">
              Native and cross-platform mobile applications for iOS and Android.
            </p>
            <ul className="service-features">
              <li>Native Performance</li>
              <li>Cross-Platform Support</li>
              <li>Offline Capabilities</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3 className="service-title">AI Solutions</h3>
            <p className="service-description">
              Artificial Intelligence and Machine Learning solutions for your business.
            </p>
            <ul className="service-features">
              <li>Machine Learning</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className="service-title">Cloud Services</h3>
            <p className="service-description">
              Scalable cloud infrastructure and deployment solutions.
            </p>
            <ul className="service-features">
              <li>Cloud Migration</li>
              <li>Serverless Architecture</li>
              <li>DevOps Integration</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </section>

        <section className="cta">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    );
  };

  export default Services; 