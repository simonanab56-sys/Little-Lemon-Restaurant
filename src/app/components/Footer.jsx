import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';
export default function Footer() {
  return <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="footer-logo-icon">🍋</span>
            <h3>Little Lemon</h3>
          </div>
          <p className="footer-tagline">Fresh Mediterranean Flavors</p>
          <p className="footer-description">
            Bringing authentic Mediterranean cuisine to Sunyani, Ghana with the freshest ingredients and traditional recipes.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>123 Main Street, Sunyani, Ghana</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+233 24 123 4567</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@littlelemon.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul className="footer-hours">
            <li>
              <span>Mon - Fri:</span>
              <span>11:00 AM - 10:00 PM</span>
            </li>
            <li>
              <span>Saturday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </li>
            <li>
              <span>Sunday:</span>
              <span>12:00 PM - 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2026 Little Lemon. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}