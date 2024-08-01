import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    nic: '',
    phone: '',
    email: '',
    no: '',
    street1: '',
    street2: '',
    city: '',
    imageUrl: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/customers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      if (response.ok) {
        alert(data.message);
        navigate('/login'); // Redirect to the login page
      } else {
        alert('Registration failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className='registerPage'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>NIC:</label>
          <input
            type="text"
            name="nic"
            value={formData.nic}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="no"
            placeholder="No."
            value={formData.no}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="street1"
            placeholder="Street 1"
            value={formData.street1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="street2"
            placeholder="Street 2"
            value={formData.street2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Profile Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
