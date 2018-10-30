import React, { Component } from 'react';
class CartItem extends Component {

    constructor(props) {
        super(props)

     
    }
    populateListGroupItems = (props) => props.items.map((prop) => <li data-name={prop.name} data-price={prop.priceInCents} data-quantity={prop.quantity}> {prop.name}-{prop.priceInCents}-{prop.quantity} </li>)
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="list-quantity">
                    <input type="text" onChange={(e) => this.setState({ quantity: e.target.value })} name="Quantity" />
                    <div className="list-group-items">
                        {this.populateListGroupItems(this.props)}
                    </div>
                    <div className="row">
                        <div className="col-md-8">{this.props.name}</div>
                        <div className="col-md-2">{this.props.priceInCents}</div>
                        <div className="col-md-2">{this.props.quantity}</div>
                    </div>
                </div>
            </div>


        )
    }
}
export default CartItem
