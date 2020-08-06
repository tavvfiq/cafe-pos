import React from "react";
import "./styles/checkout-sidebar.css";

function checkoutSidebar(props) {
  return (
    <div className="checkout-content">
      <div className="checkout-text">
        <h5>
          Total: <br />
          *belum termasuk ppn
        </h5>
        <h5>{props.total_price}</h5>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary checkout-btn">Checkout</button>
        <button className="btn btn-danger cancel-btn">Cancel</button>
      </div>
    </div>
  );
}

export default checkoutSidebar;
