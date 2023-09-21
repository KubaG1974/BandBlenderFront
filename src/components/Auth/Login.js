import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useAuth(); 
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginUser(email, password);
      setCurrentUser(user); 
      navigate('/');
    
    } catch (error) {
      console.error('Error logging in:', error.message); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleInputChange}
      />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
