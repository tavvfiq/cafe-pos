import React, { useState } from "react";
import CardSidebar from "./card-right-sidebar";
import "./styles/right-sidebar.css";
import empty_cart from "../assets/img/empty_cart.webp";
import { update } from "ramda";
import CheckoutModal from "./checkout-modal";
import { Transition, CSSTransition } from "react-transition-group";

class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [...props.menus],
    };
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

  handleChangeNumOfOrders = (state) => {
    const changedNumOfOrder = this.state.menus.findIndex(
      (orderedMenu) => {
        return orderedMenu.id === state.id;
      }
    );
    this.setState(
      {
        menus: update(
          changedNumOfOrder,
          {
            ...this.state.menus[changedNumOfOrder],
            quantity: state.quantity,
          },
          this.state.menus
        ),
      },
      this.updateNumOfOrders
    );
  }

  CheckoutModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    this.showModal = handleShow;
  };

  onClickCheckout = () => {
    this.showModal();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.menus !== this.props.menus) {
      this.setState({ menus: this.props.menus });
    }
  }

  updateNumOfOrders = ()=> {
    this.props.handleChangeNumOfOrders(this.state);
  }

  unCheckedAllMenus = () => {
    this.setState({
      menus: [
        ...this.state.menus.map((menu) => {
          return { ...menu, checked: false, quantity:0 };
        }),
      ],
    },this.handleMenusChange);
  }

  handleMenusChange = ()=>{
    this.props.handleMenusChange(this.state);
  }

  render() {
    const invoice = Math.round((Math.random()*100000));
    let orderedMenus = this.state.menus.filter((menu) => {
      return menu.checked === true;
    });
    let content = <></>;
    if (orderedMenus.length !== 0) {
      content = (
        <>
          {orderedMenus.map((menu) => {
            return this.renderCardSidebar(menu);
          })}
          <div className="checkout-content">
            <div className="checkout-text">
              <h5>
                Total: <br />
                *belum termasuk ppn
              </h5>
              <h5>{`Rp. ${orderedMenus.reduce((total, menu) => {
                  return total + menu.price * menu.quantity;
                }, 0)}`}
              </h5>
            </div>
            <div className="btn-container">
              <button
                className="btn btn-primary checkout-btn"
                onClick={this.onClickCheckout}
              >
                Checkout
              </button>
              <button className="btn btn-danger cancel-btn" onClick={this.unCheckedAllMenus}>Cancel</button>
            </div>
          </div>
        </>
      );
    } else {
      content = (
        <>
          <div className="right-sidebar-content">
            <img src={empty_cart} alt="" />
            <h4>Your cart is empty</h4>
            <p>Please add some items from the menu</p>
          </div>
        </>
      );
    }
    return (
      <>
        <CheckoutModal
          ref={this.CheckoutModalRef}
          menus={orderedMenus}
          invoice={invoice}
          onClickCheckout={this.unCheckedAllMenus}
        ></CheckoutModal>
        <div
          className={
            this.props.displayed
              ? "right-sidebar-container-show"
              : "right-sidebar-container"
          }
        >
          {content}
        </div>
      </>
    );
  }
}

export default RightSidebar;
