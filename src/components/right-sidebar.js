import React, { useState } from "react";
import CardSidebar from "./card-right-sidebar";
import CheckoutSidebar from "./checkout-right-sidebar";
import "./styles/right-sidebar.css";
import empty_cart from "../assets/img/empty_cart.webp";
import { update } from "ramda";

class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedMenus: props.orderedMenus,
    };

    this.handleChangeNumOfOrders = this.handleChangeNumOfOrders.bind(this);
    this.updateNumOfOrders = this.updateNumOfOrders.bind(this);
  }

  renderCardSidebar(property) {
    return (
      <CardSidebar
        key={property.id}
        id={property.id}
        name={property.name}
        price={property.price}
        image_path={property.image_path}
        quantity={property.quantity}
        checked={property.checked}
        handleChangeNumOfOrders={this.handleChangeNumOfOrders}
      />
    );
  }

  handleChangeNumOfOrders(state) {
    const changedNumOfOrder = this.state.orderedMenus.findIndex(
      (orderedMenu) => {
        return orderedMenu.id === state.id;
      }
    );
    this.setState(
      {
        orderedMenus: update(
          changedNumOfOrder,
          {
            ...this.state.orderedMenus[changedNumOfOrder],
            quantity: state.quantity,
          },
          this.state.orderedMenus
        ),
      },
      this.updateNumOfOrders
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.orderedMenus !== this.props.orderedMenus) {
      this.setState({ orderedMenus: this.props.orderedMenus });
    }
  }

  updateNumOfOrders() {
    this.props.handleChangeNumOfOrders(this.state);
  }

  render() {
    // console.log("right", this.state.orderedMenus[0].quantity);
    let orderedMenus = this.state.orderedMenus.filter((menu) => {
      return menu.checked === true;
    });
    if (orderedMenus.length !== 0) {
      return (
        <div className="right-sidebar-container">
          {orderedMenus.map((menu) => {
            return this.renderCardSidebar(menu);
          })}
          <CheckoutSidebar orderedMenus={orderedMenus} />
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
  }
}

export default RightSidebar;
