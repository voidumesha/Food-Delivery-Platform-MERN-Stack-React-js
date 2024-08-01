import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [nic, setNic] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/customers/loginCus', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nic, password }),
      });

      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      if (response.ok) {
        localStorage.setItem('nic', nic);  // Store NIC in localStorage
        alert(data.message);
        navigate('/home'); // Redirect to the dashboard page
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className='loginPage'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>NIC:</label>
          <input
            type="text"
            name="nic"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
