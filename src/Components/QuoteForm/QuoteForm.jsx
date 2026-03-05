import React, { useState } from "react";
import "./QuoteForm.scss";

const countries = [
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
];

const budgetOptions = [
  "Less than $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000 - $35,000",
  "$35,000 - $50,000",
  "$50,000 - $1,00,000",
  "$1,00,000+",
];

const startOptions = [
  "Immediately",
  "Within a 3 month",
  "1-3 months",
  "3-6 months",
  "6+ months",
];

const servicesList = [
  "Enterprise Software Solutions",
  "Creating a Mobile App",
  "Web Development",
  "Dedicated Team Service",
  "IT Consulting Services",
  "Partnership Opportunities",
];

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "India",
    email: "",
    phone: "",
    skype: "",
    project: "",
    services: [],
    budget: "",
    startTime: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (service) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((item) => item !== service)
      : [...formData.services, service];

    setFormData({ ...formData, services: updatedServices });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.project.trim())
      newErrors.project = "Project details required";
    if (!formData.budget) newErrors.budget = "Budget required";
    if (!formData.startTime) newErrors.startTime = "Start time required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        country: "India",
        email: "",
        phone: "",
        skype: "",
        project: "",
        services: [],
        budget: "",
        startTime: "",
        file: null,
      });
    }
  };

  return (
    <div className="quote-container">
      <div className="quote-card">
        <h1>Get a perfect quote</h1>
        <p>
          We’re eager to work with you. Please share your project goals and
          contact information.
          <br />
          We respond to 97% of queries within 1-2 business days. <b>Really!</b>
        </p>

        <form onSubmit={handleSubmit}>
          <h3>TELL US ABOUT YOU</h3>

          <div className="grid-2">
            <div className="form-group full">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="IN +91 Phone Number*"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="skype"
                placeholder="Skype ID/Whatsapp No."
                value={formData.skype}
                onChange={handleChange}
              />
            </div>
          </div>

          <h3>TELL US ABOUT YOUR PROJECT</h3>

          <div className="form-group">
            <textarea
              name="project"
              placeholder="What’s Your Project All About?*"
              value={formData.project}
              onChange={handleChange}
            />
            {errors.project && <span className="error">{errors.project}</span>}
          </div>

          <div className="checkbox-group">
            <p>What Are You Looking For?*</p>
            <div className="checkbox-grid">
              {servicesList.map((service) => (
                <label key={service}>
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleCheckbox(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select your budget range*</option>
                {budgetOptions.map((budget) => (
                  <option key={budget}>{budget}</option>
                ))}
              </select>
              {errors.budget && <span className="error">{errors.budget}</span>}
            </div>

            <div className="form-group">
              <select
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              >
                <option value="">When do you want to get started?*</option>
                {startOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              {errors.startTime && (
                <span className="error">{errors.startTime}</span>
              )}
            </div>
          </div>

          <div className="file-upload">
            <input type="file" onChange={handleFileChange} />
          </div>

          <button type="submit" className="submit-btn">
            LET'S GO
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
