import React, { useState } from "react";
import axios from "axios";
import "./Appointment.css";

export default function Appointment() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showMessage = (text, error = false, duration = 3000) => {
    setPopupText(text);
    setIsError(error);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsError(false);
      setPopupText("");
    }, duration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/appointments";
      // debug: print the exact URL (stringified so hidden chars show)
      console.log("Attempting POST to:", JSON.stringify(url));
      console.log("Payload:", form);

      const res = await axios.post(url, form, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", res);
      showMessage("You have successfully submitted!", false, 3000);

      // Clear form
      setForm({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      // Helpful debugging info for different axios failure modes
      console.error("Appointment API error:", error);

      if (error.response) {
        // Server returned a response (4xx, 5xx)
        const status = error.response.status;
        const data = error.response.data;
        showMessage(`Server error ${status}: ${JSON.stringify(data)}`, true, 6000);
      } else if (error.request) {
        // Request sent but no response received (network error / CORS / backend down)
        showMessage("Network error: no response from backend (check server/CORS).", true, 8000);
        console.error("No response received. Request details:", error.request);
      } else {
        // Something else
        showMessage(`Error: ${error.message}`, true, 6000);
      }
    }
  };

  return (
    <div className="appointment-container">
      <h2 className="title">Book an Appointment</h2>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className={`popup-box ${isError ? "popup-error" : "popup-success"}`}>
            <p>{popupText}</p>
          </div>
        </div>
      )}

      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
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

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
