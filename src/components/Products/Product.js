import { React, Component } from "react";

const product = (props) => (
  <div>
    Product Name :<label>{props.name}</label>
    <br />
    CAD{props.price}
    <br />
    <img src={props.photoPath} width="200" />
    <br />
    Description:
    <label>{props.description}</label>
    <hr />
    <button onClick={props.getByIdClicked}> Get Product by id </button>
    <hr />
    <hr />
  </div>
);

export default product;
