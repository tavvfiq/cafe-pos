import React from "react";
import "./styles/counter.css";

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.quantity,
    };
  }
  

  incValue = () => {
    this.setState({
      value: this.state.value + 1,
    },this.handleNumOfOrderChanged);
  };

  decValue = () => {
    if (this.state.value <0) {
      this.setState({
        value: 0,
      },this.handleNumOfOrderChanged);
    } else {
      this.setState({
        value: this.state.value - 1,
      },this.handleNumOfOrderChanged);
    }
  };

  handleNumOfOrderChanged(){
    this.props.handleNumOfOrderChanged(this.state);
  }

  render() {
    return (
      <div className="counter-wrapper">
        <button className="incdec-button" onClick={this.decValue}>
          -
        </button>
        <p className="p-inline">{this.state.value}</p>
        <button className="incdec-button" onClick={this.incValue}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
