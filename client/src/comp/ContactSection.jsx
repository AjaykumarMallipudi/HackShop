import React from "react";
import "./ContactSection.css";
import contactImg from "../assets/contact.png"; // Replace with your own image path

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left side - Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>Have a question or want to collaborate? Let’s talk!</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="contact-image">
          <img src={contactImg} alt="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
