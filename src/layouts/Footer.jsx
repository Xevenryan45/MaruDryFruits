import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mailbox, PinMap } from "react-bootstrap-icons"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <Link to="/">
              <h3 className="footer-title">Marudry Fruits</h3>
            </Link>
            <p className="footer-text">
              Premium quality dry fruits and nuts sourced from the finest orchards around the world.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <Link to="/aboutUs" className="footer-link">About Us</Link>
              </li>
              <li>
                <a href="#" className="footer-link">Products</a>
              </li>
              <li>
                <a href="#" className="footer-link">Recipes</a>
              </li>
              <li>
                <a href="#" className="footer-link">Health Benefits</a>
              </li>
              <li>
                <Link to="/disclaimer" className="footer-link">Disclaimer</Link>
              </li>
              <li>
                <Link to="/contactUs" className="footer-link">Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3 className="footer-title">Customer Service</h3>
            <ul className="footer-list">
              <li>
                <a href="#" className="footer-link">FAQs</a>
              </li>
              <li>
                <Link href="/disclaimer" className="footer-link">Shipping Policy</Link>
              </li>
              <li>
                <a href="#" className="footer-link">Return Policy</a>
              </li>
              <li>
                <a href="#" className="footer-link">Track Order</a>
              </li>
              <li>
                <Link to="/contactUs" className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <PinMap size={20} className="footer-contact-icon" />
                <span>22, Yomi Ajetunmobi Avenue, Thera Peace Zone Estate, Alfa Bus Stop,Sangotedo, Lekki - Epe Expy, Eti-Osa, Lagos 101243, Lagos</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={20} className="footer-contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="footer-contact-item">
                <Mailbox size={20} className="footer-contact-icon" />
                <span>info@marudryfruits.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="footer-payments">
          <div className="footer-payments-inner">
            <p className="footer-copyright">
              © 2025 MaruDryFruits. All rights reserved.
            </p>
            <div className="footer-payment-methods">
              <p className="footer-payment-title">We accept:</p>
              <div className="footer-payment-icons">
                <img
                  src="https://via.placeholder.com/40x25/3b3c3d/FFFFFF?text=VISA"
                  alt="Visa"
                  className="footer-payment-icon"
                />
                <img
                  src="https://via.placeholder.com/40x25/3b3c3d/FFFFFF?text=MC"
                  alt="Mastercard"
                  className="footer-payment-icon"
                />
                <img
                  src="https://via.placeholder.com/40x25/3b3c3d/FFFFFF?text=AMEX"
                  alt="American Express"
                  className="footer-payment-icon"
                />
                <img
                  src="https://via.placeholder.com/40x25/3b3c3d/FFFFFF?text=PP"
                  alt="PayPal"
                  className="footer-payment-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
