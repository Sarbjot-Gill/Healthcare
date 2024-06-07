import React, { useState } from "react";
import "../css/bookappointment.css";
import doctorImage from "../assets/pexels-karolina-grabowska-4046950.jpg"; // Ensure you have an appropriate image
import doctorImage2 from "../assets/pexels-karolina-grabowska-4386467.jpg"; // Additional image
import doctorImage3 from "../assets/pexels-pixabay-40568.jpg"; // Additional image
import axios from "axios";
import Navbarr from "./Navbarr";

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStep(5);
    await axios.post("http://localhost:3000/book" , formData).then((e) => {
      console.log(e)
    })
    
  };

  return (
    <>
      <div style={{position:"absolute" ,width:"100%" , backgroundColor:"white"}}>
      <Navbarr />
      </div>
    <div className="appointment-page">
    
      <div className="appointment-form-container">
        {step === 1 && (
          <>
            <img src={doctorImage} alt="Doctor" className="header-image" />
            <h1>Select a Doctor</h1>
            <div className="form-group">
              <label htmlFor="doctor">Doctor:</label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select a Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Williams">Dr. Williams</option>
              </select>
            </div>
            <button className="submit-button" onClick={handleNext}>
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <img src={doctorImage2} alt="Doctor" className="header-image" />
            <h1>Select Date and Time</h1>
            <div class="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div class="navigation-buttons">
              <button onClick={handlePrevious}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <img src={doctorImage3} alt="Doctor" className="header-image" />
            <h1>Enter Your Details</h1>
            <div class="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div class="navigation-buttons">
              <button onClick={handlePrevious}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h1>Review Your Appointment</h1>
            <p>
              <strong>Doctor:</strong> {formData.doctor}
            </p>
            <p>
              <strong>Date:</strong> {formData.date}
            </p>
            <p>
              <strong>Time:</strong> {formData.time}
            </p>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <div class="navigation-buttons">
              <button onClick={handlePrevious}>Back</button>
              <button onClick={handleSubmit}>Confirm</button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h1>Appointment Confirmed</h1>
            <p>
              Thank you for booking an appointment. We will send you a
              confirmation email shortly.
            </p>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default BookAppointment;
