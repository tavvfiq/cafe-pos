import React, { useState } from "react";
import CardSidebar from "./card-sidebar";
import CheckoutSidebar from "./checkout-sidebar";
import "./styles/right-sidebar.css";
import empty_cart from "../assets/img/empty_cart.webp";

class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: props.orders,
      displayed: true,
    };
  }

  toogleShow = () => {
    this.setState({
      displayed: !this.state.displayed,
    });
  };

  renderCardSidebar(property) {
    return (
      <CardSidebar
        name={property.name}
        price={property.price}
        image_path={property.image_path}
      />
    );
  }

  render() {
    if (this.state.displayed) {
      if (this.state.orders !== undefined) {
        if (this.state.orders.length !== 0) {
          return (
            <div className="right-sidebar-container">
              {this.state.orders.map((property) => {
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
    } else {
      return <></>;
    }
  }
}

export default RightSidebar;
