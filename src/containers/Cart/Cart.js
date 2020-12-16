import React, { Component } from "react";

class Cart extends Component {
  state = {
    cartProducts: [],
  };

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const items = [];

    for (let param of query.entries()) {
      items.push({ id: param[0], qty: param[1] });
    }
    console.log(items);

    this.setState({ cartProducts: items });
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };

  cancelContinue = () => {
    alert("Thank you for your payment!!");
  };

  render() {
    const products = this.state.cartProducts.map((pr) => {
      return (
        <li key={pr.id}>
          {pr.id} : {pr.qty}{" "}
        </li>
      );
    });

    return (
      <div>
        <h2>My Cart</h2>

        <ul>{products}</ul>
        <button onClick={this.cancelHandler}>Cancel</button>
        <button onClick={this.cancelContinue}>Continue</button>
      </div>
    );
  }
}

export default Cart;
