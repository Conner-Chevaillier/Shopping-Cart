import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CartItems from "./CartItems.js";
import CartHeader from "./CartHeader.js";
import CartFooter from "./cartfooter.js";
import CartItem from "./CartItem.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedProduct: null,
      itemPrice: 0,
      quantity: 0,
      GrandTotal: 0,
      ListGroupItems: [],
      items: [
        { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
        { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
        { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
        { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
        { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
        { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
        { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
        { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
        { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 }
      ]
    };
    this.setQuantityHandler = this.setQuantityHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

    // <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
  }

  // calculateGrandTotal = (e) => {

  //     for(var i = 0; i<items.length; i++ )
  //     // use loop to iterate over all cart items
  //     // calculate total (quantity * priceInCents
  //     // setState with total)
  //     this.setState({
  //         GrandTotal: (this.state.itemPrice * this.state.quantity)
  //     })
  // }
  clickHandler = e => {
    e.preventDefault();
    console.log("this.clickHandler");
    this.setState({
      GrandTotal:
        this.state.GrandTotal + this.state.itemPrice * this.state.quantity,
      ListGroupItems: this.state.ListGroupItems.concat({
        selectedProduct: this.state.selectedProduct,
        itemPrice: this.state.itemPrice,
        quantity: this.state.quantity
      })
    });
    console.log("group items", this.state.ListGroupItems);
    // console.log(this.state.value)
  };
  changeHandler = e => {
    console.log(
      e.target.options[e.target.selectedIndex].getAttribute("data-name")
    );
    this.setState({
      selectedProduct: e.target.options[e.target.selectedIndex].getAttribute(
        "data-name"
      ),
      itemPrice: e.target.options[e.target.selectedIndex].getAttribute(
        "data-price"
      )

      // newObj: { itemPrice: e.target.options[e.target.selectedIndex].getAttribute('data-price') }
    });
  };
  setQuantityHandler = e => {
    this.setState({
      quantity: e.target.value
    });
  };
  render() {
    return (
      <form>
        <div>
          <CartHeader />
          <CartItems
            test="hello"
            value={this.state.value}
            orderItems={this.state.newObj}
            quantity={this.state.quantity}
            items={this.state.items}
            changeHandler={this.changeHandler}
            setQuantityHandler={this.setQuantityHandler}
            clickHandler={this.clickHandler}
            ListGroupItems={this.state.ListGroupItems}
            GrandTotal={this.state.GrandTotal}
          />
          <CartFooter />
        </div>
      </form>
    );
  }
}

export default App;
