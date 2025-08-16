import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col about">
          <h2>Hackshop</h2>
          <p>
            HackShop is a project-first collaboration platform. Post ideas, find teammates, build real products, and earn verified completion certificates..
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#workshops">Workshops</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Startup Support</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter to get event updates and opportunities.</p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="socials">
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hackshop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
