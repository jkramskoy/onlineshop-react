import { React, Component } from "react";

class Product extends Component {
  state = {
    qty: 0,
    selected: false,
  };

  addToCartClicked = (id, q) => {
    //console.log(id + " " + q);
    this.setState({ selected: true });
    this.props.addToCartClicked(id, q);
  };

  render() {
    return (
      <div>
        Product Name :<label>{this.props.name}</label>
        <br />
        CAD{this.props.price}
        <br />
        <img src={this.props.photoPath} width="200" />
        <br />
        <input
          type="number"
          min="1"
          max="20"
          onChange={(event) => {
            this.setState({ qty: event.target.value });
          }}
          disabled={this.state.selected}
        />
        {this.state.selected ? <span> added to Card</span> : null}
        <br />
        <button
          onClick={() => {
            this.addToCartClicked(this.props.id, this.state.qty);
          }}
          disabled={this.state.selected}
        >
          Add to Cart
        </button>
        <br />
        Description:
        <label>{this.props.description}</label>
        <hr />
      </div>
    );
  }
}

export default Product;
