import React, { Component } from "react";

import { Form, Button, Message } from "semantic-ui-react";
import validator from "validator";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Auth.css";

class Auth extends Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  onSubmit = () => {
    console.log("Submit");
  };
  onChange = () => {};

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div className="auth-main">
          <div class="auth-content">
            <div className="auth-card">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                className="auth-input-field"
                value={data.email}
                onChange={this.onChange}
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
