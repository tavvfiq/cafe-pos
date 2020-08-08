import React, { Component } from "react";
import "./Home.css";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopHeader from "../components/TopHeader";
import Menus from "../components/Menus";
import espresso from "../assets/img/espresso.webp";
import Axios from "axios";
import { update } from "ramda";

const obj = {
  numOfMenus: 9,
  menus: [
    {
      id: 1,
      name: "Chicken Katsu Dabu-dabu",
      price: 60000,
      image_path:
        "https://dailycookingquest.com/img/2020/08/ayam-dabu-dabu-3.jpg",
      quantity: 0,
      checked: false,
    },
    {
      id: 2,
      name: "Wiener Schnitzel",
      price: 69000,
      image_path:
        "https://www.thespruceeats.com/thmb/1Ntqkrw7h6LagewLYRvqflUli6A=/2848x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg",
      quantity: 0,
      checked: false,
    },
    {
      id: 3,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 0,
      checked: false,
    },
    {
      id: 4,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 0,
      checked: false,
    },
    {
      id: 5,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 0,
      checked: false,
    },
    {
      id: 6,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 0,
      checked: false,
    },
    {
      id: 7,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 0,
      checked: false,
    },
    {
      id: 8,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 0,
      checked: false,
    },
    {
      id: 9,
      name: "espresso",
      price: 15000,
      image_path: espresso,
      quantity: 0,
      checked: false,
    },
  ],
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      leftSidebarDisplayed: false,
      rightSidebarDisplayed: false,
      numOfmenus: 0,
      menus: [],
    };

    this.lastMenus = [];
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

  handleChangeNumOfOrders = (state) => {
    this.setState({
      menus: [...state.menus],
    });
  };

  handleMenusChange = (state) => {
    const menusChanged = state.menus;
    this.setState({
      menus: [...menusChanged],
    });
  };

  componentDidMount() {
    this.updateMenu();
  }

  fetchAllMenuFromDB = () => {
    Axios.get("http://localhost:8001/product/")
      .then((res) => {
        let { menus } = this.state;
        const menusLength = menus.length;
        const responseData = res.data.data;
        let newMenus = [];
        if (menusLength !== 0) {
          newMenus = [...responseData];
          for (let i = 0; i < responseData.length; i++) {
            const idx = menus.findIndex((menu) => {
              return responseData[i].id === menu.id;
            });
            if (idx >= 0) {
              newMenus = update(
                i,
                {
                  ...newMenus[i],
                  quantity: menus[idx].quantity,
                  checked: menus[idx].checked,
                  filtered: false,
                },
                newMenus
              );
            } else {
              newMenus = update(
                i,
                {
                  ...newMenus[i],
                  quantity: 0,
                  checked: false,
                  filtered: false,
                },
                newMenus
              );
            }
          }
        } else {
          newMenus = [
            ...res.data.data.map((menu) => {
              return {
                ...menu,
                checked: false,
                quantity: 0,
                filtered: false,
              };
            }),
          ];
        }
        this.setState({
          numOfMenus: res.data.data.length,
          menus: [...newMenus],
        });
      })
      .catch((err) => console.log(err));
  };

  updateMenu = (props) => {
    const filteredMenus = props;
    let { menus } = this.state;
    let unFileteredMenus = filteredMenus;
    if (props === undefined) {
      this.fetchAllMenuFromDB();
    } else {
      for (let i = 0; i < menus.length; i++) {
        const idx = filteredMenus.findIndex((filteredMenu) => {
          return menus[i].id === filteredMenu.id;
        });
        if (idx >= 0) {
          unFileteredMenus = update(
            idx,
            {
              ...unFileteredMenus[idx],
              quantity: menus[i].quantity,
              checked: menus[i].checked,
              filtered: false,
            },
            unFileteredMenus
          );
        } else {
          unFileteredMenus = [
            ...unFileteredMenus,
            { ...menus[i], filtered: true },
          ];
        }
      }
      this.setState({
        menus: [...unFileteredMenus],
      });
    }
  };

  foodIconOnClick = () => {
    this.updateMenu();
  };

  render() {
    const numOfOrders = this.state.menus.reduce((total, orderedMenu) => {
      return total + orderedMenu.quantity;
    }, 0);
    return (
      <>
        <header>
          <TopHeader
            ifClickedMenu={this.handleClickLeftSidebar}
            ifClickedCart={this.handleClickRightSidebar}
            onClickSearch={this.onClickSearch}
            handleFilteredMenu={this.updateMenu}
            numOfOrders={numOfOrders}
          />
        </header>

        <div className="main-container">
          <Menus
            numOfMenus={this.state.numOfMenus}
            menus={this.state.menus}
            handleMenusChange={this.handleMenusChange}
            handleChangeNumOfOrders={this.handleChangeNumOfOrders}
          />
          {/* {this.state.rightSidebarDisplayed && ( */}
          <RightSidebar
            displayed={this.state.rightSidebarDisplayed}
            menus={this.state.menus}
            handleChangeNumOfOrders={this.handleChangeNumOfOrders}
            handleMenusChange={this.handleMenusChange}
          />
          {/* )} */}

          {/* {this.state.leftSidebarDisplayed &&  */}
          <LeftSidebar
            displayed={this.state.leftSidebarDisplayed}
            foodIconOnClick={this.foodIconOnClick}
            updateMenu={this.updateMenu}
          />
          {/* } */}
        </div>
      </>
    );
  }
}

export default Home;
