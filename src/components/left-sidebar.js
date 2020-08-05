import React, { Component } from "react";
import "./styles/left-sidebar.css";
import food_icon from "../assets/img/foods.webp";
import add_icon from "../assets/img/add.webp";
import history_icon from "../assets/img/history.webp";

class LeftSidebar extends Component {
  state = {
    displayed: true,
  };

  render() {
    return (
      <div className="left-sidebar-container">
        <div className="left-sidebar-items">
          {/* <button className="show-items"> */}
          <img src={food_icon} alt="" />
          {/* </button> */}
        </div>
        <div className="left-sidebar-items">
          <img src={history_icon} alt="" />
        </div>
        <div className="left-sidebar-items">
          <img src={add_icon} alt="" />
        </div>
      </div>
    );
  }
}

export default LeftSidebar;
