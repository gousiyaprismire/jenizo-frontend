import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit WITHOUT BACKEND
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success popup
    setShowPopup(true);

    // Clear form
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Auto hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We're here to help! Reach out to us using any of the methods below.
      </p>

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Message sent successfully!</h3>
            <button className="popup-btn" onClick={() => setShowPopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}

      {/* CONTACT INFO */}
      <div className="contact-info">
        <div className="info-card">
          <i className="fas fa-phone-alt info-icon"></i>
          <h3>Phone Number</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="info-card">
          <i className="fas fa-envelope info-icon"></i>
          <h3>Email</h3>
          <p>info@jenizo.in</p>
        </div>

        <div className="info-card">
          <i className="fas fa-map-marker-alt info-icon"></i>
          <h3>Office Location</h3>
          <a
            href="https://maps.app.goo.gl/bjrhSL3tQx1xg7rh7"
            target="_blank"
            rel="noopener noreferrer"
            className="location-link"
          >
            Hyderabad, Near Raidurg Metro Station
          </a>
        </div>

        <a
          className="info-card whatsapp-card"
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp info-icon whatsapp-icon"></i>
          <h3>WhatsApp</h3>
          <p>Chat / Call Us</p>
        </a>
      </div>

      {/* CONTACT FORM */}
      <div className="form-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

