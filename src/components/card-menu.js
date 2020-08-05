import React, { Component } from "react";
import "./styles/card-menu.css";
import espresso from "../assets/img/espresso.webp";

class CardMenu extends Component {
  state = {
    name: "Coffee Latte",
    price: 15000,
    image_path: espresso,
  };
  render() {
    return (
      <div className="content-item">
        <div className="content-image">
          <img src={this.state.image_path} alt="espresso" />
        </div>
        <div className="content-text">
          <h4>{this.state.name}</h4>
          <p>{`Rp. ${this.state.price}`}</p>
        </div>
      </div>
    );
  }
}

export default CardMenu;
