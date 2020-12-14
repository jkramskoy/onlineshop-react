import { React, Component } from "react";
import Product from "../../components/Products/Product";
import axios from "axios";
import CreateProduct from "../../components/Products/CreateProduct";

class Shop extends Component {
  //connect with API
  state = {
    products: [],
    url: "https://localhost:5001/Product/",
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
        />
      );
    });

    return (
      <div>
        This is a Shop
        {productList}
        <CreateProduct />
      </div>
    );
  }
}

export default Shop;
