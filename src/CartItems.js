import React, { Component } from "react";
import CartItem from "./CartItem";

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.GrandTotal, this.props.quantity);
  }

  //    let total = ListGroupItems.reduce((tally,current)=>{
  //    return tally +=(current.ItemPrice *Current.itemQuantity)
  //     },0);
  populateOptions = props =>
    props.items.map(prop => (
      <option data-name={prop.name} data-price={prop.priceInCents}>
        {" "}
        {prop.name} - {prop.priceInCents}
      </option>
    ));
  populateCart = () =>
    this.props.ListGroupItems.map(item => (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{item.selectedProduct}</div>
          <div className="col-md-2">{item.itemPrice} </div>
          <div className="col-md-2">{item.quantity}</div>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
              <div className="col-md-12">
                Grand-Total: {this.props.GrandTotal}
              </div>
            </div>
            <div>{this.populateCart()}</div>
          </div>
          <input
            onChange={this.props.setQuantityHandler}
            type="number"
            class="quantity"
            placeholder="quantity"
          />
          <select onChange={this.props.changeHandler}>
            {this.populateOptions(this.props)}
          </select>
          <div>
            <button
              onClick={this.props.clickHandler}
              disabled={
                (this.props.quantity == 0) | (this.selectedProduct == 0)
                  ? true
                  : false
              }
            >
              {" "}
              ADD{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    );
  }
}

// const onChange = (e) =>
export default CartItems;
