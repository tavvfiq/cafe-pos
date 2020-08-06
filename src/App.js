import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";
import CardMenu from "./components/card-menu";
import LeftSidebar from "./components/left-sidebar";
import RightSidebar from "./components/right-sidebar";
import TopHeader from "./components/top-header";
import Menus from "./components/menu";
import espresso from "./assets/img/espresso.webp";
import CardSidebar from "./components/card-sidebar";

const obj = {
  numOfMenus: 9,
  menus: [
    {
      id: 1,
      name: "Chicken Katsu Dabu-dabu",
      price: 15000,
      image_path: espresso,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
    },
    {
      id: 1,
      name: "espresso",
      price: 15000,
      image_path: espresso,
    },
  ],
};

const objJ = {
  numOfMenus: 1,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      leftSidebarDisplayed: false,
      rightSidebarDisplayed: false,
    };

    this.handleClickLeftSidebar = this.handleClickLeftSidebar.bind(this);
    this.handleClickRightSidebar = this.handleClickRightSidebar.bind(this);
  }

  handleClickLeftSidebar = () => {
    this.setState({
      leftSidebarDisplayed: !this.state.leftSidebarDisplayed,
      rightSidebarDisplayed: false,
    });
  };

  handleClickRightSidebar = () => {
    this.setState({
      leftSidebarDisplayed: false,
      rightSidebarDisplayed: !this.state.rightSidebarDisplayed,
    });
  };
  render() {
    return (
      <>
        <header>
          <TopHeader
            ifClickedMenu={this.handleClickLeftSidebar}
            ifClickedCart={this.handleClickRightSidebar}
          />
        </header>

        <div className="main-container">
          <Menus numOfMenus={obj.numOfMenus} menus={obj.menus} />
          {this.state.rightSidebarDisplayed ? (
            <RightSidebar orders={obj.menus} />
          ) : null}

          {this.state.leftSidebarDisplayed && <LeftSidebar />}
          {/* <CardSidebar name={obj.menus[0].name} price={obj.menus[0].price} image_path={obj.menus[0].image_path}/> */}
        </div>
      </>
    );
  }
}

export default App;
