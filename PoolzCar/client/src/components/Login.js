import React from 'react';
//import RideDetails from './RideDetails';
//import Home from './Home';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  validateForm = () => {
    //console.log(this.state);
    if (
      this.state.username.length > 5 &&
      this.state.password.length > 6 &&
      (this.state.username === 'sambhav' && this.state.password === 'sambhav')
    ) {
      return true;
    }
    return console.error();
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.handleSubmit}>
        <h3>Login Form</h3>
        <br />
        <input
          type="text"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Enter your Username"
        />
        <input
          type="text"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Enter your Password"
        />
        <button
          className="ui primary button"
          type="submit"
          id="submit"
          onClick={this.validateForm}
        >
          Login
        </button>
      </form>
    );
  }
}

export default Login;
