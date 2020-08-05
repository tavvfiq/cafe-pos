import React from "react";
import "./styles/counter.css";

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };
  }
  

  incValue = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  decValue = () => {
    if (this.state.value <=0) {
      this.setState({
        value: 0,
      });
    } else {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };

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
