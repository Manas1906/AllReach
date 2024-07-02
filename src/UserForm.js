import React, { useState } from "react";
import "./UserForm.css"; // Import the CSS file

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.contact.trim() || !/^\d{10}$/.test(formData.contact)) {
      errors.contact = "Contact number must be 10 digits";
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.pincode.trim() || !/^[1-9][0-9]{5}$/.test(formData.pincode)) {
      errors.pincode = "Pincode must be 6 digits";
    }
    if (!formData.city) {
      errors.city = "City is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      console.log(formData);
      setFormData({
        name: "",
        contact: "",
        email: "",
        address: "",
        pincode: "",
        city: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </label>
        </div>
        <div className="form-group">
          <label>
            Contact No:
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className={errors.contact ? "error" : ""}
            />
            {errors.contact && (
              <p className="error-message">{errors.contact}</p>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </label>
        </div>
        <div className="form-group">
          <label>
            Full Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className={errors.address ? "error" : ""}
            />
            {errors.address && (
              <p className="error-message">{errors.address}</p>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            Pincode:
            <input
              type="number"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className={errors.pincode ? "error" : ""}
            />
            {errors.pincode && (
              <p className="error-message">{errors.pincode}</p>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className={errors.city ? "error" : ""}
            >
              <option value="">Select a city</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mangaluru">Mangaluru</option>
              <option value="Tumkuru">Tumkuru</option>
              <option value="Mysuru">Mysuru</option>
            </select>
            {errors.city && <p className="error-message">{errors.city}</p>}
          </label>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Contact No:</strong> {submittedData.contact}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Full Address:</strong> {submittedData.address}
          </p>
          <p>
            <strong>Pincode:</strong> {submittedData.pincode}
          </p>
          <p>
            <strong>City:</strong> {submittedData.city}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
