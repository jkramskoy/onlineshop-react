import { React, Component } from "react";
import axios from "axios";

class CreateProduct extends Component {
  state = {
    name: "",
    price: 0,
    photoPath: "",
    description: "",
    url: "https://localhost:5001/Product/",
  };

  postDataHandler = () => {
    const data = {
      name: this.state.name,
      price: this.state.price,
      photoPath: this.state.photoPath,
      description: this.state.description,
    };
    axios.post(this.state.url, data).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div>
        <h1>Create New Product</h1>
        Name: <br />
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        ></input>
        <br />
        Price: <br />
        <input
          type="text"
          value={this.state.price}
          onChange={(event) => this.setState({ price: event.target.value })}
        ></input>
        <br />
        Photo: <br />
        <input
          type="file"
          value={this.state.photoPath}
          onChange={(event) => this.setState({ photoPath: event.target.value })}
        ></input>
        <br />
        Description: <br />
        <input
          type="text"
          value={this.state.description}
          onChange={(event) =>
            this.setState({ description: event.target.value })
          }
        ></input>
        <br />
        <button onClick={this.postDataHandler}>Add New Product</button>
        <br /> <br /> <br />
      </div>
    );
  }
}

export default CreateProduct;
