import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-page">

      {/* <h1 className="services-title">Our Services</h1> */}

      <div className="services-grid">

       
        <div className="service-card">
          <img src="/images/appdev.jpeg" alt="Mobile App Development" />


          <h3>Mobile App Development</h3>
          <p>We create fast, user-friendly mobile apps for Android and iOS.</p>
        </div>

        {/* --- Website Development --- */}
        <div className="service-card">
          <img
            src="/images/webdev.jpeg"
            alt="Website Development"
          />
          <h3>Website Development</h3>
          <p>We build modern, responsive, and SEO-friendly websites.</p>
        </div>

        {/* --- UI/UX Designing --- */}
        <div className="service-card">
          <img
            src="/images/uidev.jpeg"
            alt="UI/UX Designing"
          />
          <h3>UI/UX Designing</h3>
          <p>We design clean, intuitive interfaces for a better user experience.</p>
        </div>

        {/* --- UI Automation --- */}
        <div className="service-card">
          <img
            src="/images/uiautomation.jpeg"
            alt="UI Automation"
          />
          <h3>UI Automation</h3>
          <p>We automate UI testing to ensure smooth and error-free performance.</p>
        </div>

        {/* --- Digital Marketing --- */}
        <div className="service-card">
          <img
            src="/images/digitalmarketing.jpeg"
            alt="Digital Marketing"
          />
          <h3>Digital Marketing</h3>
          <p>We help businesses grow online with targeted digital strategies.</p>
        </div>

        {/* --- E-Commerce Development --- */}
        <div className="service-card">
          <img
            src="/images/ecommerce.jpeg"
            alt="E-Commerce Development"
          />
          <h3>E-Commerce Development</h3>
          <p>We craft strong, memorable visual identities for brands.</p>
        </div>

      </div>
    </div>
  );
}
