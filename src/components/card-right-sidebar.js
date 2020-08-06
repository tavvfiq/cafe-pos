import React, {useState} from "react";
import Counter from "./counter";
import "./styles/card-right-sidebar.css"

class CardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      price: props.price,
      image_path: props.image_path,
    };
  }
  
  render(){
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
                      <Counter />
                      <div className="text">
                        <h5>{`Rp. ${this.state.price}`}</h5>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

}

export default CardSidebar;
