import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-flexbox-grid';
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      email: ''
    };
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit = (evt) => {
    const that = this;
    evt.preventDefault();
    const { username, email, password } = this.state;
    const payload = {
      username, email, password
    };
    axios.post('/user/signup', payload)
    .then(function (response) {
      console.log('signup response', response);
      this.props.handleSignupCallback(response.data);
      that.setState({
        username: '',
        password: '',
        error: '',
        email: ''
      });
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleUserChange = (evt) => {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange = (evt) => {
    this.setState({
      password: evt.target.value,
    });
  }

  handleEmailChange = (evt) => {
    this.setState({
      email: evt.target.value,
    });
  }

  render() {
  
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} noValidate>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <Row style={{margin: 10}}>
            <Col xs={12}>
              <label>User Name</label>
              <input type="text" value={this.state.username} onChange={this.handleUserChange} />
            </Col>
          </Row>
          <Row style={{margin: 10}}>
            <Col xs={12}>
              <label>Email</label>
              <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
            </Col>
          </Row>
          <Row style={{margin: 10}}>
            <Col xs={12}>
              <label>Password</label>
              <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
            </Col>
          </Row>
          <Row style={{margin: 10}}>
            <Col xs={12}>
              <input type="submit" value="Log In" data-test="submit" />
            </Col>
          </Row>       
        </form>
      </div>
    );
  }
}

export default LoginPage;