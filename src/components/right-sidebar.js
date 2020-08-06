import React, { useState } from "react";
import CardSidebar from "./card-right-sidebar";
import CheckoutSidebar from "./checkout-right-sidebar";
import "./styles/right-sidebar.css";
import empty_cart from "../assets/img/empty_cart.webp";

class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedMenus: props.orderedMenus,
    };

    this.clearSelectedItem = this.clearSelectedItem.bind(this);
    // this.handleQuantityUpdate = this.handleQuantityUpdate.bind(this);
  }
  renderCardSidebar(property) {
    return (
      <CardSidebar
        name={property.name}
        price={property.price}
        image_path={property.image_path}
      />
    );
  }

  handleChangeNumOfOrders(){
    this.props.handleChangeNumOfOrders(this.state);
  }

  clearSelectedItem() {
    this.setState({
      orders: [],
    });
  }

  render() {
    if (this.state.orderedMenus !== undefined) {
      if (this.state.orderedMenus.length !== 0) {
        return (
          <div className="right-sidebar-container">
            {this.state.orderedMenus.map((property) => {
              return this.renderCardSidebar(property);
            })}
            <CheckoutSidebar total_price="120.000" />
          </div>
        );
      } else {
        return (
          <div className="right-sidebar-container">
            <div className="right-sidebar-content">
              <img src={empty_cart} alt="" />
              <h4>Your cart is empty</h4>
              <p>Please add some items from the menu</p>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="right-sidebar-container">
          <div className="right-sidebar-content">
            <img src={empty_cart} alt="" />
            <h4>Your cart is empty</h4>
            <p>Please add some items from the menu</p>
          </div>
        </div>
      );
    }
  }
}

export default RightSidebar;
