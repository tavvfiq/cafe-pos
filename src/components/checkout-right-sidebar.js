import React from "react";
import "./styles/checkout-right-sidebar.css";
import CheckoutModal from "./checkout-modal";

import espresso from "../assets/img/espresso.webp";

class checkoutSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_price: props.orderedMenus.reduce((total, menu) => {
        return total + menu.price * menu.quantity;
      }, 0),
    };
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

  render() {
    return (
      <>
        <CheckoutModal
          ref={this.CheckoutModalRef}
          menus={this.props.orderedMenus}
          invoice={10930}
        ></CheckoutModal>
        <div className="checkout-content">
          <div className="checkout-text">
            <h5>
              Total: <br />
              *belum termasuk ppn
            </h5>
            <h5>{this.state.total_price}</h5>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-primary checkout-btn"
              onClick={this.onClickCheckout}
            >
              Checkout
            </button>
            <button className="btn btn-danger cancel-btn">Cancel</button>
          </div>
        </div>
      </>
    );
  }
}

export default checkoutSidebar;
