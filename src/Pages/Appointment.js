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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure URL is exact and no newline or spaces
      const res = await axios.post("http://localhost:8080/api/appointments", form);
      console.log("Response:", res.data);
      alert("Appointment submitted successfully!");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="appointment-container">
      <h2 className="title">Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} required />

        <label>Select Date</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />

        <label>Select Time</label>
        <input type="time" name="time" value={form.time} onChange={handleChange} required />

        <label>Message </label>
        <textarea name="message" value={form.message} onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
