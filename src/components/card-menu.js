import React, { Component } from "react";
import "./styles/card-menu.css";
import check from "../assets/img/check.webp";

class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      price: props.price,
      image_path: props.image_path,
      quantity: props.quantity,
      checked: props.checked,
      filtered: props.filtered
    };
    this.updateCard = this.updateCard.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked = () => {
    this.setState(
      {
        quantity: 0,
        checked: !this.state.checked,
      },
      this.updateCard
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  updateCard() {
    this.props.handleCardChange(this.state);
  }

  render() {
    if (this.state.checked) {
      return (
        <div
          key={this.state.id}
          className="col-6 col-xs-4 col-sm-4 col-md-3 col-lg-3 content-item"
          onClick={this.toggleChecked}
        >
          <div className="content-image">
            <img src={this.state.image_path} alt="" />
            <div className="checked-item">
              <img src={check} alt="" />
            </div>
          </div>
          <div className="content-text">
            <h5>{this.state.name}</h5>
            <p>{`Rp. ${this.state.price}`}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={this.state.id}
          className="col-6 col-xs-4 col-sm-4 col-md-3 col-lg-3 content-item"
          onClick={this.toggleChecked}
        >
          <div className="content-image">
            <img src={this.state.image_path} alt="" />
            <div className="checked-item-exit">
              <img src={check} alt="" />
            </div>
          </div>
          <div className="content-text">
            <h5>{this.state.name}</h5>
            <p>{`Rp. ${this.state.price}`}</p>
          </div>
        </div>
      );
    }
  }
}

export default CardMenu;
