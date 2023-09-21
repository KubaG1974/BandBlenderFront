import React, { useAuth, useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const { setAuthState } = useAuth();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(formData.password !== formData.confirmPassword){
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      const user = response.data;

      if (user && user.token) {
        setAuthState(user);
      }

      // For now, just a console log.
      console.log(user);

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        placeholder="Username" 
        value={formData.username} 
        onChange={handleInputChange} 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleInputChange} 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password} 
        onChange={handleInputChange} 
      />
      <input 
        type="password" 
        name="confirmPassword" 
        placeholder="Confirm Password" 
        value={formData.confirmPassword} 
        onChange={handleInputChange} 
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
