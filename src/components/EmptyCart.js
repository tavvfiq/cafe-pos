import React from "react";
import empty_cart from "../assets/img/empty_cart.webp";

const EmptyCart = () => {
  return (
    <div className="right-sidebar-content">
      <img src={empty_cart} alt="" />
      <h4>Your cart is empty</h4>
      <p>Please add some items from the menu</p>
    </div>
  );
};

export default EmptyCart;