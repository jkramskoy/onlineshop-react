import React, { Component } from "react";
import Product from "../../components/Products/Product";
import axios from "axios";
import CreateProduct from "../../components/Products/CreateProduct";
import { Header, Segment } from "semantic-ui-react";
import { Button, Card } from "semantic-ui-react";



class Products extends Component {
  //connect with API
  state = {
    products: [],
    url: "https://localhost:5001/Product/",
    cartProducts: [],
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

  addToCartHandler = (id, q,name,price) => {
    // console.log(" parent:  " + id + " " + q);

    let cp = this.state.cartProducts;
    cp.push({ id: id, quantity: +q,name:name,price:+price });

    this.setState({ cartProducts: cp });

    console.log(this.state.cartProducts);
  };

  orderNowHandler = () => {
    const queryParams = [];

    for (let i of this.state.cartProducts) {
      if (i !== null) {
        queryParams.push(i.id + "=" + i.quantity + "|" + i.name + "|" + i.price);
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
          <Header
            as="h2"
            dividing
            floated="left"
            color="black"
            background-color="teal"
          >
            Please select the products you want ….
          </Header>
        </Segment>
        <Card.Group>
        {productList}
        </Card.Group>
        {/* <CreateProduct /> */}

        <div
          style={{
            textAlign: "right",
            top: "80px",
            right: "60px",
            position: "fixed",
            
          }}
        >
          <Button onClick={this.orderNowHandler} color="teal">
            ORDER NOW!
          </Button>
        </div>
      </div>
    );
  }
}

export default Products;
