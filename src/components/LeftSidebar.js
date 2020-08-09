import React, { Component } from "react";
import "./styles/LeftSidebar.css";
import food_icon from "../assets/img/foods.webp";
import add_icon from "../assets/img/add.webp";
import history_icon from "../assets/img/history.webp";
import AddItemModal from "./AddItemModal";
import { Link } from "react-router-dom";

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
    try {
      this.showAddItemModal();
    } catch (err) {
      console.log(err);
    }
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
        {this.props.updateMenu !== undefined ? (
          <AddItemModal
            updateMenu={this.props.updateMenu}
            ref={this.addItemModalRef}
          />
        ) : null}
        <div
          className={
            this.props.displayed
              ? "left-sidebar-container-show"
              : "left-sidebar-container"
          }
        >
          <div className="left-sidebar-items">
            <Link to="/">
              <img src={food_icon} alt="" />
            </Link>
          </div>

          <div className="left-sidebar-items">
            <Link to="/report">
              <img src={history_icon} alt="" />
            </Link>
          </div>
          <div className="left-sidebar-items" onClick={this.onClickAddItem}>
            <img src={add_icon} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default LeftSidebar;
