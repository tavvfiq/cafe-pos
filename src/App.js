import React, { Component } from "react";
import "./App.css";
import LeftSidebar from "./components/left-sidebar";
import RightSidebar from "./components/right-sidebar";
import TopHeader from "./components/top-header";
import Menus from "./components/menu";
import espresso from "./assets/img/espresso.webp";

const obj = {
  numOfMenus: 9,
  menus: [
    {
      id: 1,
      name: "Chicken Katsu Dabu-dabu",
      price: 15000,
      image_path:
        "https://dailycookingquest.com/img/2020/08/ayam-dabu-dabu-3.jpg",
      quantity: 1,
      checked: false,
    },
    {
      id: 2,
      name: "Wiener Schnitzel",
      price: 15000,
      image_path:
        "https://www.thespruceeats.com/thmb/1Ntqkrw7h6LagewLYRvqflUli6A=/2848x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg",
      quantity: 2,
      checked: false,
    },
    {
      id: 3,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
      checked: false,
    },
    {
      id: 4,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 1,
      checked: false,
    },
    {
      id: 5,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
      checked: false,
    },
    {
      id: 6,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 1,
      checked: false,
    },
    {
      id: 7,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 1,
      checked: false,
    },
    {
      id: 8,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
      checked: false,
    },
    {
      id: 9,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 2,
      checked: false,
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
      numOfmenus: obj.numOfMenus,
      numOfOrders: 0,
      menus: obj.menus,
    };

    this.handleClickLeftSidebar = this.handleClickLeftSidebar.bind(this);
    this.handleClickRightSidebar = this.handleClickRightSidebar.bind(this);
    this.handleChangeNumOfOrders = this.handleChangeNumOfOrders.bind(this);
    this.handleMenusChange = this.handleMenusChange.bind(this);
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

  handleChangeNumOfOrders(state) {}

  handleMenusChange(state) {
    const menusChanged = state.menus;
    this.setState({
      menus: menusChanged,
    });
  }

  render() {
    return (
      <>
        <header>
          <TopHeader
            ifClickedMenu={this.handleClickLeftSidebar}
            ifClickedCart={this.handleClickRightSidebar}
            numOfOrders={this.state.numOfOrders}
          />
        </header>

        <div className="main-container">
          <Menus
            numOfMenus={this.state.numOfMenus}
            menus={this.state.menus}
            handleMenusChange={this.handleMenusChange}
          />
          {this.state.rightSidebarDisplayed && (
            <RightSidebar
              orderedMenus={this.state.menus.filter((menu) => {
                return menu.checked === true;
              })}
              handleChangeNumOfOrders={this.handleChangeNumOfOrders}
            />
          )}

          {this.state.leftSidebarDisplayed && <LeftSidebar />}
        </div>
      </>
    );
  }
}

export default App;
