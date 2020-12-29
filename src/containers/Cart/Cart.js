import React, { Component } from "react";

//connect redux to the page:
import { connect } from "react-redux";

class Cart extends Component {
  state = {
    cartProducts: [],
    products: [],
        url: "https://localhost:5001/Product/",
        totalPrice: 0
  };

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const items = [];
    const arr = [];

    for (let param of query.entries()) {
      items.push({ id: param[0], qty: param[1]});
        let cart =  param[1].split("|");
        arr.push({ id: param[0], name: cart[1], price: cart[2], qty: cart[0]
        });
    }
    //console.log(items);
    this.setState({ products: arr } );

    this.setState({ cartProducts: items });
    console.log("products: ", this.state.products);

    //store cart products in the redux state
    this.props.onStoreCartProducts(items);
    console.log("Redux Cart Products: ", this.props.cartProducts);
  };

  getProductByIdHandler = (id) => {
        
  }

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
    const products = this.state.products.map((pr) => {
      return (
        <li key={pr.id}>
          {pr.name}: {pr.qty}  -{pr.price}
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
