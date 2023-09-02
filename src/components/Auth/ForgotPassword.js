import React from 'react';
import { initiatePasswordReset } from '../../services/api';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await initiatePasswordReset(this.state.email);
      alert("If an account with this email address exists, a password reset email has been sent.");
    } catch (error) {
      // tutaj do wypełnienia - póki co console.log
      console.log(error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={this.state.email} 
          onChange={this.handleInputChange} 
        />
        <button type="submit">Reset Password</button>
      </form>
    );
  }
}

export default ForgotPassword;
