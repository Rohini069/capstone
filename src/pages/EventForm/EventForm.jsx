import React, { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    capacity: '',
    registrationDeadline: '',
    specialRequirements: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form data is valid, submit to backend
      // Example: send formData to backend API
    } else {
      // Form data is invalid, display errors
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    // Implement validation logic here
    let errors = {};
    // Example validation: check if required fields are filled
    if (!data.title.trim()) {
      errors.title = 'Title is required';
    }
    // Add more validation rules for other fields
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      {/* Add more form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
