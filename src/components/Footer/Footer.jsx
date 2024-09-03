import React, { useEffect } from "react";
import logoImg from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector(".footer");
    footer.classList.add("animate-footer");
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top-design"></div>
      <div className="container footer-container">
        <div className="footer-logo-section fade-in">
          <Link to="/" className="footer-logo flex items-center">
            <img src={logoImg} alt="BookVerse" />
            <span className="footer-title"> ShelfSeeker</span>
          </Link>
        </div>
        <div className="footer-section fade-in">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <a href="mailto:moxitrewar777@gmail.com" className="footer-link">
                Contact Me
              </a>
            </li>
            <li>
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section fade-in">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-links">
            <li>Email: moxitrewar777@gmail.com</li>
            <li>Phone: +91 1234575755</li>
            <li>Address: Jaipur, Rajasthan</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom fade-in">
        <p>© 2024 ShelfSeeker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
