import React, { useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

const ConsultationAreaForm = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3, triggerOnce: false });

  const [formData, setFormData] = useState({
    name: "",
    email_add: "",
    phone: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name: Must be two words
    if (!/^\w+\s\w+/.test(formData.name)) {
      newErrors.name = "Name must be at least two words";
    }
    
    // Email: Must be a valid email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_add)) {
      newErrors.email_add = "Email must be a valid email address";
    }
    
    // Phone: Must contain only numbers
    if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone must contain only numbers";
    }
    
    // Subject: Cannot be empty
    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const data = {
          basic_form: formData
        }
        
        const response = await axios.post("https://b3.rnzgoldenventure.com/api/fill-up-form", data);
        alert("Form submitted successfully!");
        setFormData({ name: "", email_add: "", phone: "", subject: "" }); // Clear form after submission
        console.log(response.data);
        
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form.");
      }
    }
  };

  return (
    <div className="consultation-form-wrap" ref={ref1}>
      <h4 className="title" style={{
        transition: '0.5s ease',
        transitionDelay: '0s',
        transform: `translateX(${inView1 ? 0 : 100}px)`
      }}>Free Consultation</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-grp" style={{
          transition: '0.5s ease',
          transitionDelay: '0.1s',
          transform: `translateY(${inView1 ? 0 : 50}px)`
        }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-grp" style={{
          transition: '0.5s ease',
          transitionDelay: '0.2s',
          transform: `translateY(${inView1 ? 0 : 50}px)`
        }}>
          <input
            type="email"
            name="email_add"
            placeholder="Email Address"
            value={formData.email_add}
            onChange={handleInputChange}
          />
          {errors.email_add && <p className="error">{errors.email_add}</p>}
        </div>
        <div className="form-grp" style={{
          transition: '0.5s ease',
          transitionDelay: '0.3s',
          transform: `translateY(${inView1 ? 0 : 50}px)`
        }}>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="form-grp" style={{
          transition: '0.5s ease',
          transitionDelay: '0.4s',
          transform: `translateY(${inView1 ? 0 : 50}px)`
        }}>
          <select
            id="shortBy"
            name="subject"
            className="form-select"
            aria-label="Default select example"
            value={formData.subject}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select One</option>
            <option value="Services">Services</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Software Development">Software Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>
        <button className="btn" type="submit">
          Consultation
        </button>
      </form>
    </div>
  );
};

export default ConsultationAreaForm;
