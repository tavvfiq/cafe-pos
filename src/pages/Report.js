import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import "./Report.css";

class Report extends React.Component {
  constructor() {
    super();
    this.state = {
      ordersReport: [],
    };
  }

  render() {
    return (
      <>
        <header></header>
        <div className="main-container">
        <LeftSidebar
            displayed={true}
          />
        </div>
      </>
    );
  }
}

export default Report;
