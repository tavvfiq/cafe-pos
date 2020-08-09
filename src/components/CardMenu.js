import React, { Component } from "react";
import "./styles/CardMenu.css";
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
      filtered: props.filtered,
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
    return (
      <div
        key={this.state.id}
        className="col-6 col-xs-4 col-sm-4 col-md-3 col-lg-3"
        onClick={this.toggleChecked}
      >
        <div className="content-item">
          <div className="content-image">
            <img src={this.state.image_path} alt="" />
            <div
              className={
                this.state.checked ? "checked-item" : "checked-item-exit"
              }
            >
              <img src={check} alt="" />
            </div>
          </div>
          <div className="content-text">
            <h5>{this.state.name}</h5>
            <p>{`Rp. ${this.state.price}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardMenu;
