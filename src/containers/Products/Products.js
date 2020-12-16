import React, { Component } from "react";
import Product from "../../components/Products/Product";
import axios from "axios";
import CreateProduct from "../../components/Products/CreateProduct";
import { Header, Segment } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

class Products extends Component {
  //connect with API
  state = {
    products: [],
    url: "https://localhost:5001/Product/",
    cartItems: [],
  };

  //take data from database and store
  componentDidMount() {
    //console.log("componentDidMount");
    axios.get(this.state.url).then((response) => {
      //console.log(response);
      this.setState({ products: response.data });
    });
  }

  //test request to API go through all objects and get by id product
  getProductByIdHandler = (id) => {
    axios.get(this.state.url + id).then((response) => {
      console.log(response);
    });
  };

  addToCartHandler = (id, q) => {
    // console.log(" parent:  " + id + " " + q);

    let ci = this.state.cartItems;
    ci.push({ id: id, quantity: +q });

    this.setState({ cartItems: ci });

    console.log(this.state.cartItems);
  };

  orderNowHandler = () => {
    const queryParams = [];

    for (let i of this.state.cartItems) {
      if (i !== null) {
        queryParams.push(i.id + "=" + i.quantity);
      }
    }
    const queryStr = queryParams.join("&");

    this.props.history.push({
      pathname: "/cart",
      search: "?" + queryStr,
    });
  };

  render() {
    //convert data from JASON file
    const productList = this.state.products.map((pr) => {
      return (
        <Product
          key={pr.id}
          id={pr.id}
          name={pr.name}
          price={pr.price}
          photoPath={pr.photoPath}
          description={pr.description}
          getByIdClicked={() => this.getProductByIdHandler(pr.id)}
          addToCartClicked={this.addToCartHandler}
        />
      );
    });

    return (
      <div>
        <Segment clearing>
          <Header as="h2" dividing floated="left" inverted color="green">
            Please select the products you want ….
          </Header>
        </Segment>
        {productList}
        {/* <CreateProduct /> */}

        <div
          style={{
            textAlign: "right",
            top: "80px",
            right: "60px",
            position: "fixed",
          }}
        >
          <Button onClick={this.orderNowHandler} inverted color="green">
            ORDER NOW!
          </Button>
        </div>
      </div>
    );
  }
}

export default Products;
