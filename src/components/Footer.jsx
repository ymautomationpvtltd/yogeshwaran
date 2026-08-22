import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      <div className="container-wide">
        <div className="footer-top-row">
          {/* Left: Brand / Monogram */}
          <div className="footer-brand">
            <div className="footer-logo-badge">
              <span>YM</span>
            </div>
            <div className="footer-brand-info">
              <h3 className="footer-name">Yogeshwaran</h3>
              <p className="footer-title">Managing Director & Founder – YM Automation Pvt Ltd</p>
              <p className="footer-tagline">
                Pioneering next-generation industrial automation & smart systems.
              </p>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="footer-social-wrapper">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <FaInstagram size={17} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Yogeshwaran Muralidharan. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="floating-scroll-top"
        aria-label="Scroll back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
