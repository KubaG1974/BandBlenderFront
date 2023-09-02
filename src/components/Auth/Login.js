import React from 'react';
import { loginUser } from '../../services/api';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
      const user = await loginUser(this.state.email, this.state.password);
      // tutaj do wypełnienia - póki co console.log
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
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default Login;
