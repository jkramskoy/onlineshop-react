import React, { Component } from "react";

import { Form, Button, Message,Input } from "semantic-ui-react";
import Validator from "validator";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Auth.css";
import InlineError from '../../messages/InlineError';
import {login} from "../../store/action/auth";




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
            .catch(err => this.setState({errors: 'err.response.data.error'})
            );
        }


  };

  onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
  });

    validate = data => {

      const errors = {};
      //debugger;
      if(!data.userName) errors.userName = "Can't be blank";
      if(!data.password) errors.password = "Can't be blank";
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
              {errors.title && (
                          <Message negative>
                              <Message.Header>Something went wrong</Message.Header>
                              <p>{errors.title}</p>
                          </Message>
                      )}

              <Form.Field error={!!errors.userName} >
                        
                        <Input fluid type="userName" id="userName" name="userName" icon="user" iconPosition="left" placeholder="User Name"      className="auth-input-field"
                            value={data.userName}
                            onChange={this.onChange} />
                        {errors.userName && <InlineError text={errors.userName} />}
                    </Form.Field>

                    <Form.Field error={!!errors.password} >
                        
                        <Input fluid type="password" id="password" name="password" icon="lock" iconPosition="left" placeholder="Password"      className="auth-input-field"
                            value={data.password}
                            onChange={this.onChange} />
                        {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>

              <div className="auth-form">
                
                <Button color="teal" fluid size="huge" className="auth-form">
                    Sign up
                  </Button>

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
