import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './media.scss'; // Import the main SCSS file
import './main.scss'; // Import the main SCSS file

// Import placeholder images for the website sections
import heroImage from './assets/imgs/hero-bg.webp';
import lewisImage from './assets/imgs/lewis-hamilton.jpg';
import georgeImage from './assets/imgs/george-russell.jpg';
import carImage from './assets/imgs/mercedes-f1-car.webp';
import newsletterBg from './assets/imgs/newsletter-bg.webp';

const App = () => {
  // State management for component functionality
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for accessing DOM elements of different sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const driversRef = useRef(null);
  const carRef = useRef(null);
  const achievementsRef = useRef(null);
  const sponsorsRef = useRef(null);
  const newsletterRef = useRef(null);
  
  // Inline styles for background images to replace SCSS background-image URLs
  // Hero section with dark overlay gradient and background image
  const heroStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage || '/api/placeholder/1920/1080'}) center/cover no-repeat`
  };
  
  // Lewis Hamilton driver card background image
  const lewisStyle = {
    backgroundImage: `url(${lewisImage || '/api/placeholder/280/320'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  
  // George Russell driver card background image
  const georgeStyle = {
    backgroundImage: `url(${georgeImage || '/api/placeholder/280/320'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  
  // F1 car image styling for the car section
  const carStyle = {
    backgroundImage: `url(${carImage || '/api/placeholder/550/300'})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  
  // Newsletter section with gradient overlay and fixed background
  const newsletterStyle = {
    background: `linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(0, 0, 0, 0.95)), url(${newsletterBg || '/api/placeholder/1920/1080'}) center/cover no-repeat fixed`
  };
  
  // Effect hook for AOS initialization
  useEffect(() => {
    // Initialize AOS with configuration options
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation triggers only once
      offset: 120, // Offset from the trigger point
      easing: 'ease-in-out' // Animation easing function
    });
    
    // Refresh AOS on component mount to ensure proper initialization
    AOS.refresh();
    
    return () => {
      AOS.refresh();
    };
  }, []);
  
  // Toggle function for mobile hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Navigation items data
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#drivers', label: 'Drivers' },
    { href: '#car', label: 'Car' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#partners', label: 'Partners' }
  ];
  
  // Handle email input changes and reset validation state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
  };
  
  // Handle newsletter subscription form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      setIsSubscribed(true);
      setEmail('');
    } else {
      setIsEmailValid(false);
    }
  };
  
  return (
    <div className="app">
      {/* Header with navigation and mobile menu */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <span className="logo-text">MERCEDES-AMG PETRONAS F1</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a href="#newsletter" className="nav-link cta-button">
                  Join Us
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Hamburger Menu Button */}
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle navigation menu"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleMenu();
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav-item">
              <a 
                href={item.href} 
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-nav-item">
            <a 
              href="#newsletter" 
              className="mobile-nav-link mobile-cta"
              onClick={closeMenu}
            >
              Join Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero section with main headline and CTA */}
      <section id="hero" className="hero" ref={heroRef} style={heroStyle}>
        <div className="hero-content">
          <h1 className="headline" data-aos="fade-up" data-aos-delay="200">
            Unleashing Speed. Engineering Excellence.
          </h1>
          <p className="subheadline" data-aos="fade-up" data-aos-delay="400">
            Join the Mercedes-AMG PETRONAS Formula One Team and experience the pinnacle of Formula 1 performance.
          </p>
          <a href="#about" className="cta-button" data-aos="fade-up" data-aos-delay="600">
            Explore More
          </a>
        </div>
      </section>

      {/* About section with team information */}
      <section id="about" className="about section" ref={aboutRef}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">About the Team</h2>
          <p className="section-content" data-aos="fade-up" data-aos-delay="200">
            Mercedes-AMG PETRONAS Formula One Team is a powerhouse in Formula 1. 
            Headquartered in Brackley, UK, we've dominated the sport with 8 Constructors' 
            Championships and 7 Drivers' titles. Powered by cutting-edge hybrid technology, 
            we are committed to pushing the limits of innovation and performance.
          </p>
        </div>
      </section>

      {/* Drivers section showcasing team drivers */}
      <section id="drivers" className="drivers section" ref={driversRef}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Drivers</h2>
          <div className="drivers-grid">
            {/* Lewis Hamilton driver card */}
            <div className="driver-card" data-aos="fade-right" data-aos-delay="200">
              <div className="driver-image-container">
                <div className="driver-image lewis" style={lewisStyle}></div>
              </div>
              <h3 className="driver-name">Lewis Hamilton</h3>
              <p className="driver-subtitle">7-time World Champion</p>
              <p className="driver-description">
                With 103 wins and 104 pole positions, Lewis Hamilton is one of the most successful drivers in Formula 1 history.
              </p>
            </div>
            
            {/* George Russell driver card */}
            <div className="driver-card" data-aos="fade-left" data-aos-delay="400">
              <div className="driver-image-container">
                <div className="driver-image george" style={georgeStyle}></div>
              </div>
              <h3 className="driver-name">George Russell</h3>
              <p className="driver-subtitle">Rising Star</p>
              <p className="driver-description">
                George Russell is the young talent redefining the future of Mercedes-AMG PETRONAS. Already a race winner with a bright career ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Car section displaying technical specifications */}
      <section id="car" className="car section" ref={carRef}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">The Car: Mercedes-AMG F1 W15</h2>
          <div className="car-content">
            {/* Car specifications list */}
            <div className="car-specs" data-aos="fade-right" data-aos-delay="200">
              <h3>Key Specs</h3>
              <ul>
                <li><span>Engine:</span> Mercedes-AMG F1 M14 E Performance</li>
                <li><span>Power Unit:</span> Hybrid</li>
                <li><span>Max Speed:</span> 350 km/h</li>
                <li><span>Weight:</span> 798 kg</li>
              </ul>
              <p className="car-description">
                Our car combines precision engineering, cutting-edge aerodynamics, and unrivaled power to dominate every circuit.
              </p>
            </div>
            
            {/* Car image container */}
            <div className="car-image-container" data-aos="fade-left" data-aos-delay="400">
              <div className="car-image" style={carStyle}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements section with key statistics */}
      <section id="achievements" className="achievements section" ref={achievementsRef}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item" data-aos="zoom-in" data-aos-delay="200">
              <div className="achievement-number">8</div>
              <div className="achievement-label">Constructors' Championships</div>
            </div>
            <div className="achievement-item" data-aos="zoom-in" data-aos-delay="400">
              <div className="achievement-number">7</div>
              <div className="achievement-label">World Drivers' Championships</div>
            </div>
            <div className="achievement-item" data-aos="zoom-in" data-aos-delay="600">
              <div className="achievement-number">125+</div>
              <div className="achievement-label">Grand Prix Wins</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section displaying sponsor logos */}
      <section id="partners" className="partners section" ref={sponsorsRef}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Partners</h2>
          <div className="partners-grid">
            <div className="partner-logo petronas" data-aos="fade-up" data-aos-delay="100">
              <span>PETRONAS</span>
            </div>
            <div className="partner-logo ineos" data-aos="fade-up" data-aos-delay="200">
              <span>INEOS</span>
            </div>
            <div className="partner-logo amg" data-aos="fade-up" data-aos-delay="300">
              <span>AMG</span>
            </div>
            <div className="partner-logo crowdstrike" data-aos="fade-up" data-aos-delay="400">
              <span>CrowdStrike</span>
            </div>
            <div className="partner-logo tommy" data-aos="fade-up" data-aos-delay="500">
              <span>Tommy Hilfiger</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter subscription section */}
      <section id="newsletter" className="newsletter section" ref={newsletterRef} style={newsletterStyle}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Stay Updated</h2>
          <p className="section-content" data-aos="fade-up" data-aos-delay="200">
            Join the Mercedes-AMG PETRONAS community and get the latest news, team updates, and exclusive content.
          </p>
          
          {!isSubscribed ? (
            <div className="newsletter-form" data-aos="fade-up" data-aos-delay="400">
              <div className={`form-group ${!isEmailValid ? 'error' : ''}`}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className={!isEmailValid ? 'invalid' : ''}
                />
                {!isEmailValid && <p className="error-message">Please enter a valid email address</p>}
              </div>
              <button onClick={handleSubscribe} className="cta-button">Subscribe</button>
            </div>
          ) : (
            <div className="success-message" data-aos="fade-up">
              <p>Thank you for subscribing! You'll receive updates soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer with copyright information */}
      <footer className="footer" >
        <div className="container">
          <p>© 2025 Mercedes-AMG PETRONAS Formula One Team. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;