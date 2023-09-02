import React from 'react';
import { registerUser } from '../../services/api';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if(this.state.password !== this.state.confirmPassword){
      alert("Passwords do not match.");
      return;
    }

    try {
      const user = await registerUser(this.state.username, this.state.email, this.state.password);
      //  tutaj do wypełnienia - póki co console.log

      console.log(user);
    } catch (error) {
      // tutaj do wypełnienia - póki co console.log
      console.log(error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={this.state.username} 
          onChange={this.handleInputChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={this.state.email} 
          onChange={this.handleInputChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={this.state.password} 
          onChange={this.handleInputChange} 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={this.state.confirmPassword} 
          onChange={this.handleInputChange} 
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
