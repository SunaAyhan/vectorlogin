import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const history = useHistory(); // Add the useHistory hook
  const [passwordError, setPasswordError] = useState('');
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const password = formData.password;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, and one special character.');
      return;
    }

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          return response.json(); // Process response as JSON if successful
        } else {
          throw new Error('Something went wrong on API server!');
        }
      })
      .then(data => {
        console.log('Success:', data);
        alert(data.message); // Display message from JSON
        history.push('/welcome');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred during registration!');
      });
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      backgroundColor: '#fff'
    }}>
      <h2 style={{ textAlign: 'center', color: '#a1cc38', fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.5rem' }}>Vector Resourcing Candidate Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#4d4d4d ', display: 'block', marginBottom: '5px', }}>

            <p style={{
              fontWeight: 'bold'
            }} >First Name:</p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#4d4d4d ', display: 'block', marginBottom: '5px' }}>
            <p style={{
              fontWeight: 'bold'
            }} >Last Name:</p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#4d4d4d', display: 'block', marginBottom: '5px' }}>
            <p style={{
              fontWeight: 'bold'
            }} >  Email:</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#4d4d4d', display: 'block', marginBottom: '5px' }}>
            <p style={{
              fontWeight: 'bold'

            }} >Password:</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Please enter your email password!"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
            {passwordError && (
              <p style={{ color: 'red', marginTop: '5px' }}>{passwordError}</p>
            )}
          </label>
          <p style={{ color: '#4d4d4d', fontSize: '12px' }}>
            Password must contain at least one uppercase letter, one lowercase letter, and one special character.
          </p>
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#a1cc38',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
