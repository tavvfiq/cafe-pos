import React, { Component } from "react";
import "./styles/left-sidebar.css";
import food_icon from "../assets/img/foods.webp";
import add_icon from "../assets/img/add.webp";
import history_icon from "../assets/img/history.webp";

class LeftSidebar extends Component {
  render() {
    // if (this.props.displayed) {
      return (
        <div className="left-sidebar-container">
          <div className="left-sidebar-items">
            <img src={food_icon} alt="" />
          </div>
          <div className="left-sidebar-items">
            <img src={history_icon} alt="" />
          </div>
          <div className="left-sidebar-items">
            <img src={add_icon} alt="" />
          </div>
        </div>
      );
    // } else {
    //   return null;
    // }
  }
}

export default LeftSidebar;
