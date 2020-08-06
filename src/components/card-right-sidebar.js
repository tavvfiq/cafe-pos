import React, { useState } from "react";
import Counter from "./counter";
import "./styles/card-right-sidebar.css";

class CardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      price: props.price,
      image_path: props.image_path,
      quantity: props.quantity,
      checked: props.checked,
    };

    this.handleNumOfOrderChanged = this.handleNumOfOrderChanged.bind(this);
    this.updateNumOfOrders = this.updateNumOfOrders.bind(this);
  }

  handleNumOfOrderChanged(state) {
    this.setState(
      {
        quantity: state.value,
      },
      this.updateNumOfOrders
    );
  }

  updateNumOfOrders() {
    this.props.handleChangeNumOfOrders(this.state);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        id: this.props.id,
        name: this.props.name,
        price: this.props.price,
        image_path: this.props.image_path,
        quantity: this.props.quantity,
        checked: this.props.checked,
      });
    }
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-image">
          <img src={this.state.image_path} alt="" />
        </div>
        <div className="card-text">
          <div className="top-text">
            <h5>{this.state.name}</h5>
          </div>
          <div className="bottom-text">
            <Counter
              key={this.state.id}
              quantity={this.state.quantity}
              handleNumOfOrderChanged={this.handleNumOfOrderChanged}
            />
            <div className="text">
              <h5>{`Rp. ${this.state.price}`}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSidebar;
