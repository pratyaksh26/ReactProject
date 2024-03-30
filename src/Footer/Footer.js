import React from 'react';
import './Footer.css';
import whatsapp_icon from '../Components/Assets/whatsapp_icon.png'
import instagram_icon from '../Components/Assets/instagram_icon.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="shopper">
        Shopper Component
      </div>
      <div className="links">
        <a href="#">Company</a>
        <a href="#">Product</a>
        <a href="#">Office</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="social-icons">
        <a href="#"><img src={whatsapp_icon} alt="WhatsApp" /></a>
        <a href="#"><img src={instagram_icon} alt="Instagram" /></a>
      </div>
    </footer>
  );
};

export default Footer;
