import React, { Component } from "react";

//connect redux to the page:
import { connect } from "react-redux";

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
    //store cart products in the redux state
    this.props.onStoreCartProducts(items);
    console.log("Redux Cart Products: ", this.props.cartProducts);
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };

  cancelContinue = () => {
    alert("Thank you for your payment!!");
  };

  //push info to the contact info page
  //   continueHandler = () => {
  //     //alert('Done')
  //     this.props.history.push({
  //         pathname: '/contact-info',
  //     })
  // }

  render() {
    const products = this.props.cartProducts.map((pr) => {
      return (
        <li key={pr.id}>
          {pr.id} : {pr.qty}{" "}
          <button onClick={() => this.props.onDeleteCartProduct(pr.id)}>
            Remove
          </button>
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

//take data from state
const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProducts,
  };
};

//collect data in store
//delete item from store
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCartProducts: (items) =>
      dispatch({ type: "STORE_CART_PRODUCTS", cartProducts: items }),
    onDeleteCartProduct: (id) =>
      dispatch({ type: "DELETE_CART_PRODUCT", idForDelete: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
