import React, { Component } from "react";
import menu_icon from "../assets/img/menu.webp";
import search_icon from "../assets/img/search.webp";
import "./styles/top-header.css";

class TopHeader extends Component {
  state = {
    cartItemCounter: 0,
  };

  render() {
    return (
      <header className="top-header-container">
        <div className="row no-gutters">
          <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1">
            <div className="menu">
              <img src={menu_icon} alt="" />
            </div>
          </div>
          <div className="col-8 col-xs-8 col-sm-8 col-md-5 col-lg-5">
            <div className="header-title">
              <h4>Food Items</h4>
            </div>
          </div>
          <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1">
            <div className="search">
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div className="col-0 col-xs-0 col-sm-0 col-md-5 col-lg-5">
            <div className="right-header-container">
              <div className="cart">
                <h4>
                  Cart
                  <span className="badge badge-pill badge-info">
                    {this.state.cartItemCounter}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default TopHeader;
