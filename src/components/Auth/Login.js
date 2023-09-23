import React from 'react';
import { loginUser } from '../../services/api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Login.module.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginUser(this.state.email, this.state.password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  



  render() {
    return (
      <div className={styles.content}>
        <h1>Welcome to BandBlender!</h1>
        <br />
        <h2>MUSIC  TASTES  BETTER  TOGETHER</h2>
          <form onSubmit={this.handleSubmit}>
            <TextField 
              variant="outlined" 
              label="Email" 
              type="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              margin="normal"
              InputProps={{
                style: {
                  maxHeight: 60, 
                  borderColor: 'white'
                }
              }}
              InputLabelProps={{
                style: {
                  maxHeight: 60
              }
              }}
            />
            <TextField 
              variant="outlined" 
              label="Password" 
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              margin="normal"
              InputProps={{
                style: {
                  maxHeight: 60, 
                  borderColor: 'white'
                }
              }}
              InputLabelProps={{
                style: {
                  maxHeight: 60
              }
              }}
            />

            <Button variant="outlined">Log in</Button>      
          </form>
      </div>
    );
  }
}

export default Login;
