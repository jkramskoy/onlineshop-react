import React, { Component } from "react";

import { Form, Button, Message } from "semantic-ui-react";
import validator from "validator";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Auth.css";



class Auth extends Component {
  state = {
    data: {
      userName:"",
      password: "",
    },
    errors: {},
  };

  onSubmit = () => {
    //console.log("Submit");
    const errors = this.validate(this.state.data);
        this.setState({ errors }); 

        if(Object.keys(errors).length === 0) {
          
            this.props.submit(this.state.data)
            .catch(err => this.setState({errors: err.data}));
        }


  };

  onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
  });

    validate = data => {

      const errors = {};
      //debugger;
      if(!data.password) errors.password = "can't be empty";
      // 
      if(!data.userName) errors.userName = "can't be empty"
      
      return errors;
    }


  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div className="auth-main">
          <div class="auth-content">
            <div className="auth-card">
            <Form onSubmit={this.onSubmit}>

              <Form.Input 
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User Name"
                className="auth-input-field"
                value={data.email}
                onChange={this.onChange}
                error={!!errors.userName}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                className="auth-input-field"
                value={data.password}
                onChange={this.onChange}
                error={!!errors.password}
              />

              <div className="auth-form">
                <Link to="/dashboard" size="big">
                  <Button color="teal" fluid size="huge" className="auth-form">
                    Sign up
                  </Button>
                </Link>

                <Message size="big">
                  <Link to="/login">Already Registered?</Link>
                </Message>
              </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Auth.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Auth;
