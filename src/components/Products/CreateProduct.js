import { React, Component } from "react";
import axios from "axios";
import "./CreateProduct.css";
import { Button } from "semantic-ui-react";

class CreateProduct extends Component {
  //connect with API
  state = {
    name: "",
    price: 0,
    photoPath: "",
    description: "",
    url: "https://localhost:5001/Product/",
  };

  //take data from database and store
  postDataHandler = () => {
    const data = {
      name: this.state.name,
      price: this.state.price,
      photoPath: this.state.photoPath,
      description: this.state.description,
    };
    axios.post(this.state.url, data).then((response) => {
      //console.log(response);
    });
  };

  render() {
    return (
      <div>
        <div class="create-main">
          <h1>Create New Product</h1>
          <div class="create-content">
            <div class="create-card">
              <p class="create-text">Product Name:</p>
              <input
                class="create-input-field"
                type="text"
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              ></input>
              <br />
              <p class="create-text">Product Price:</p>
              <input
                class="create-input-field"
                type="text"
                value={this.state.price}
                onChange={(event) =>
                  this.setState({ price: event.target.value })
                }
              ></input>
              <br />
              <p class="create-text">Product Photo:</p>
              <input
                class="create-input-field"
                type="text"
                //type="file"
                value={this.state.photoPath}
                onChange={(event) =>
                  this.setState({ photoPath: event.target.value })
                }
              ></input>
              <br />
              <p class="create-text">Product Description:</p>
              <input
                class="create-input-field"
                type="text"
                value={this.state.description}
                onChange={(event) =>
                  this.setState({ description: event.target.value })
                }
              ></input>
              <br />
              <Button onClick={this.postDataHandler} inverted color="gray">
                <h3>Add New Product</h3>
              </Button>
              <br /> <br /> <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
