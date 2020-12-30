import React, { Component } from "react";
import { Grid, Button } from 'semantic-ui-react'

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
        let parsedArr =  param[1].split("|");
        arr.push({ id: param[0], name: parsedArr[1], price: parsedArr[2], qty: parsedArr[0]
        });
    }
    //console.log(items);
    this.setState({ products: arr } );

    this.setState({ cartProducts: items });
    //console.log("products: ", this.state.products);

    //store cart products in the redux state
    this.props.onStoreCartProducts(items);
    //console.log("Redux Cart Products: ", this.state.cartProducts);
  };

  // getProductByIdHandler = (id) => {
        
  // }
  

  cancelHandler = () => {
    this.props.history.goBack();
  };

  continueHandler = () => {
    alert("Thank you for your payment!!");
  };

  getTotal = () =>{
    let result=0;
    this.state.products.forEach(pr=>{
      result += pr.qty * pr.price;
    });

    return `${result} $`;
  }
  

  render() {
    const products = this.state.products.map(pr => {
      return (
        // <li key={pr.id} > 
        //   {pr.name}: {pr.qty}  -{pr.price}
        //   <button onClick={() => this.props.onDeleteCartProduct(pr.id)}>Remove</button>
        // </li>

        <li className="collection-item avatar" key={pr.id}>
          
         <div className="item-desc">
          <Grid divided='vertically'>  
            <Grid.Row columns={3}>
              <Grid.Column>
                <h1>{pr.name}</h1>
              </Grid.Column>
              <Grid.Column>
                <p><b>Quantity: {pr.qty}</b></p>
                <p><b>Price: {pr.price}$</b></p> 
                <p><b>Total price: {pr.qty * pr.price}$</b></p>
              </Grid.Column> 
              <Grid.Column>
                <button onClick={() => this.props.onDeleteCartProduct(pr.id)} >Remove</button>
              </Grid.Column> 
              </Grid.Row> 
              </Grid>
              <hr/>
          </div>

        </li>
        
      );
    });
   

    return (
      <div>
        <h2>My Cart</h2>

        <ul>{products}</ul>
        <div>
              <Button size='big' color='teal'>TOTAL:{this.getTotal()} </Button>
          </div>
          <br/>

        <Button onClick={this.cancelHandler}>Cancel</Button>
        <Button onClick={this.continueHandler}>Continue</Button>
      </div>
    );
  }
}

//take data from state
const mapStateToProps = state => {
  return {
    cartProducts: state.cartProducts,
  };
};

//collect data in store
//delete item from store
const mapDispatchToProps = dispatch => {
  return {
    onStoreCartProducts: (items) =>
      dispatch({ type: "STORE_CART_PRODUCTS", cartProducts: items }),
    onDeleteCartProduct: (id) =>
      //console.log(id);
      dispatch({ type: "DELETE_CART_PRODUCT", idForDelete: id })
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
