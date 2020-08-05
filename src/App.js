import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";
import CardMenu from "./components/card-menu";
import LeftSidebar from "./components/left-sidebar";
import TopHeader from "./components/top-header";

class App extends Component {
  render() {
    return (
      <>
        <TopHeader />
        <div className="main-container">
          {/* <LeftSidebar /> */}
        </div>
      </>
    );
  }
}

export default App;
