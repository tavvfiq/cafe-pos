import React, { Component } from "react";
import "./styles/left-sidebar.css";
import food_icon from "../assets/img/foods.webp";
import add_icon from "../assets/img/add.webp";
import history_icon from "../assets/img/history.webp";
import AddItemModal from "./AddItemModal";

class LeftSidebar extends Component {
  constructor() {
    super();
  }

  onClickHandeAddItem = () => {
    this.props.onClickAddItem();
  };

  onClickFoodIcon = () => {
    this.props.foodIconOnClick();
  };

  onClickAddItem = () => {
    this.showAddItemModal();
  };

  addItemModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    this.showAddItemModal = handleShow;
  };

  render() {
    return (
      <>
        {this.props.updateMenu !== undefined ? <AddItemModal updateMenu={this.props.updateMenu} ref={this.addItemModalRef} /> : null}
        <div
          className={
            this.props.displayed
              ? "left-sidebar-container-show"
              : "left-sidebar-container"
          }
        >
          <div className="left-sidebar-items" onClick={this.onClickFoodIcon}>
            <img src={food_icon} alt="" />
          </div>
          <div className="left-sidebar-items">
            <img src={history_icon} alt="" />
          </div>
          <div
            className="left-sidebar-items"
            onClick={this.onClickAddItem}
          >
            <img src={add_icon} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default LeftSidebar;
