import { React, Component } from "react";
import "./Product.css";
import { Card, Button, Image, Input } from "semantic-ui-react";


class Product extends Component {
  state = {
    qty: 1,
    selected: false,
  };

  addToCartClicked = (id, q,name,price) => {
    //console.log(id + " " + q);
    this.setState({ selected: true });
    this.props.addToCartClicked(id, q,name,price);
  };

  render() {
    return (
      <div>
        <div class="main">
          <Card >
          <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <br />
          <Card.Meta>CAD{this.props.price}</Card.Meta>
          <br />
          <img src={this.props.photoPath} class="img"/>
          <br />
          <br/>
       
          <Input
            size='big' 
            type="number"
            min="1"
            max="20"
            onChange={(event) => {
              this.setState({ qty: event.target.value });
            }}
            disabled={this.state.selected}
          />
          {this.state.selected ? <span> added to Card</span> : null}
        
          </Card.Content>
          <br />
        
          <div className='ui two buttons'>
           <Button
             onClick={() => {
               this.addToCartClicked(this.props.id, this.state.qty,this.props.name,this.props.price);
             }}
             disabled={this.state.selected}
             color='teal'
           >
             Add to Cart
           </Button>
          </div>
          <br />
        
          <Card.Description>{this.props.description}</Card.Description>
          <hr />
         </Card>
        </div>
      </div>
    );
  }
}

export default Product;
