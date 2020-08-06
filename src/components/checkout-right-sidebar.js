import React from "react";
import "./styles/checkout-right-sidebar.css";
import CheckoutModal from "./checkout-modal";

import espresso from "../assets/img/espresso.webp";

const obj = {
  numOfMenus: 9,
  menus: [
    {
      id: 1,
      name: "Chicken Katsu Dabu-dabu",
      price: 15000,
      image_path: espresso,
      quantity: 1,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 1,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 1,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 1,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
    },
  ],
};

class checkoutSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_price: props.total_price,
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
          menus={obj.menus}
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
