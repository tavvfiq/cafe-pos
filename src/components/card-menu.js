import React, { Component } from "react";
import "./styles/card-menu.css";
import check from "../assets/img/check.webp";

class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.id,
      name: props.name,
      price: props.price,
      image_path: props.image_path,
      checked: props.checked,
    };
    this.updateCard = this.updateCard.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked = () => {
    this.setState({
      checked: !this.state.checked,
    },this.updateCard);
    
  };

  updateCard(){
    this.props.handleCardChange(this.state);
  }

  render() {
    if (this.state.checked) {
      return (
        <div key={this.state.id} className="content-item" onClick={this.toggleChecked}>
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
        <div key={this.state.id} className="content-item" onClick={this.toggleChecked}>
          <div className="content-image">
            <img src={this.state.image_path} alt="" />
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