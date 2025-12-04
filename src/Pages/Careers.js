import React from "react";
import "./Careers.css";

export default function Careers() {
  return (
    <div className="careers-page">

      {/* ======== TOP CAREERS SECTION ======== */}
      <section className="careers-top">
        <h1>Careers at Jenizo</h1>
        <p>
          Build, innovate, and grow with a passionate team. At Jenizo, your ideas matter,
          your work creates impact, and your career moves forward with purpose.
        </p>
        <button className="join-btn">Join Our Team</button>
      </section>

      {/* ======== IMAGE BANNER 1 ======== */}
      <div className="image-banner">
        <img src="/images/lap.jpeg" alt="career banner" />
      </div>

      {/* ======== WHY JOIN US SECTION ======== */}
      <section className="why-join">
        <h2>Why Work With Us?</h2>
        <div className="underline"></div>

        <p>
          Nioos is not just a workplace — it’s a space where innovation thrives and talent grows.
          From collaborative teams to cutting-edge projects, we encourage creativity and support
          continuous learning. We value transparency, flexibility, and a culture where everyone
          feels appreciated.
        </p>

        <div className="why-cards">
          <div className="why-card">
            <h3>🌱 Growth Opportunities</h3>
            <p>Upskill with real projects, training sessions, and mentorship programs.</p>
          </div>

          <div className="why-card">
            <h3>🤝 Supportive Culture</h3>
            <p>Work with leaders who listen, guide, and value your contribution.</p>
          </div>

          <div className="why-card">
            <h3>💼 Flexible Workspace</h3>
            <p>Balance your personal and work life with hybrid work options.</p>
          </div>

          <div className="why-card">
            <h3>🚀 Modern Technology</h3>
            <p>Work using the latest tools and tech stacks to stay industry-ready.</p>
          </div>
        </div>
      </section>

      {/* ======== IMAGE BANNER 2 ======== */}
      <div className="image-banner">
        <img src="/images/icons.jpeg" alt="contact banner" />
      </div>

      {/* ======== OPEN POSITIONS ======== */}
      <section className="openings">
        <h2>Current Open Positions</h2>
        <div className="underline"></div>

        <div className="job-list">
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>React.js • JavaScript • UI/UX • Responsive Design</p>
            {/* <button className="apply-btn">Apply Now</button> */}
          </div>

          <div className="job-card">
            <h3>Backend Developer</h3>
            <p>Spring Boot • Java • REST APIs • Microservices</p>
            {/* <button className="apply-btn">Apply Now</button> */}
          </div>

          <div className="job-card">
              <h3 h3>HR Executive</h3>
              <p>Recruitment • Employee Handling • Payroll Basics</p>
              {/* <button className="apply-btn">Apply Now</button> */}
          </div>

          <div className="job-card">
              <h3>Mobile App Developer</h3>
              <p>Flutter • Android • iOS • UI Components</p>
              {/* <button className="apply-btn">Apply Now</button> */}
          </div>

          <div className="job-card">
              <h3>QA Tester</h3>
              <p>Manual Testing • Automation Basics • Bug Tracking</p>
              {/* <button className="apply-btn">Apply Now</button> */}
          </div>

          <div div className="job-card">
              <h3>Application Developer</h3>
              <p>Figma • Wireframes • Prototyping • User Research</p>
              {/* <button className="apply-btn">Apply Now</button> */}
          </div>

          <div className="job-card">
              <h3>DevOps Engineer</h3>
              <p>AWS • CI/CD Pipelines • Docker • Monitoring Tools</p>
              {/* <button className="apply-btn">Apply Now</button> */}
          </div>


          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Figma • Prototyping • Wireframing • Design Systems</p>
            {/* <button className="apply-btn">Apply Now</button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
