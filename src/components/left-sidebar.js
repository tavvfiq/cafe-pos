import React, { Component } from "react";
import "./styles/left-sidebar.css";
import food_icon from "../assets/img/foods.webp";
import add_icon from "../assets/img/add.webp";
import history_icon from "../assets/img/history.webp";

class LeftSidebar extends Component {
  constructor(){
    super();
    this.onClickHandeAddItem = this.onClickHandeAddItem.bind(this);
  }

  onClickHandeAddItem(){
    this.props.onClickAddItem();
  }

  render() {
    return (
      <div className={this.props.displayed ? "left-sidebar-container-show" : "left-sidebar-container"}>
        <div className="left-sidebar-items">
          <img src={food_icon} alt="" />
        </div>
        <div className="left-sidebar-items">
          <img src={history_icon} alt="" />
        </div>
        <div className="left-sidebar-items" onClick={this.onClickHandeAddItem}>
          <img src={add_icon} alt="" />
        </div>
      </div>
    );
  }
}

export default LeftSidebar;
