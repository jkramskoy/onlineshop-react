import React, { Component } from "react";

import Auth from "../../components/Auth/Auth";

class Login extends Component {

  submit = data => {
    this.props.history.push("/");
 }

  render() {
    return (
      <div>
        <h1>Sign up to get started</h1>
        <Auth submit={this.submit} />
      </div>
    );
  }
}

export default Login;
