import React, { Component } from "react";
import menu_icon from "../assets/img/menu.webp";
import search_icon from "../assets/img/search.webp";
import cart_icon from "../assets/img/cart.webp";
import "./styles/top-header.css";

class TopHeader extends Component {
  constructor(){
    super();
    this.state = {
      cartItemCounter: 0,
    };
    this.onClickHandleMenu = this.onClickHandleMenu.bind(this);
    this.onClickHandleCart = this.onClickHandleCart.bind(this);
  }

  onClickHandleMenu = ()=>{
    this.props.ifClickedMenu();
  }

  onClickHandleCart = ()=>{
    this.props.ifClickedCart();
  }

  render() {
    return (
      <>
        <div className="row no-gutters">
          <div className="col-12 col-xs-12 col-sm-12">
            <div className="left-header-container">
              <div
                className="menu"
                onClick={
                  this.onClickHandleMenu}
              >
                <img src={menu_icon} alt="" />
              </div>
              <div className="header-title">
                <h4>Food Items</h4>
              </div>
              <div className="search">
                <img src={search_icon} alt="" />
              </div>
              <div className="cart" onClick={this.onClickHandleCart}>
                <img src={cart_icon} alt="" />
                <span className="badge badge-pill badge-info">
                  {this.state.cartItemCounter}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TopHeader;
