import React, { useState, useEffect } from "react";
import "./Home.css";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopHeader from "../components/TopHeader";
import Menus from "../components/Menus";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchMenus } from "../redux/actions/menu";
// import {process} from "dotenv";

const Home = (props) => {
  const [leftSidebarDisplayed, setDisplayLeftsidebar] = useState(false);
  const [rightSidebarDisplayed, setDisplayRightsidebar] = useState(false);

  const fetchAllMenuFromDB = () => {
    Axios.get(`${process.env.REACT_APP_BACKEND_API}/menu`)
      .then((res) => {
        props.fetchMenus(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAllMenuFromDB();
  }, []);

  const handleClickLeftSidebar = () => {
    setDisplayLeftsidebar(!leftSidebarDisplayed);
  };

  const handleClickRightSidebar = () => {
    setDisplayRightsidebar(!rightSidebarDisplayed);
  };

  const updateMenu = () => {
    fetchAllMenuFromDB();
  };
  return (
    <>
      <header>
        <TopHeader
          onClickMenu={handleClickLeftSidebar}
          onClickCart={handleClickRightSidebar}
          onClickTitle={updateMenu}
          menus={props.menus}
        />
      </header>

      <div className="main-container">
        {props.menus === undefined ? (
          ""
        ) : (
          <Menus
            menus={props.menus}
          />
        )}
        <RightSidebar
          displayed={rightSidebarDisplayed}
          menus={props.menus}
        />
        <LeftSidebar displayed={leftSidebarDisplayed} updateMenu={updateMenu} />
      </div>
    </>
  );
};

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       leftSidebarDisplayed: false,
//       rightSidebarDisplayed: false,
//       numOfmenus: 0,
//     };
//   }

//   handleClickLeftSidebar = () => {
//     this.setState({
//       leftSidebarDisplayed: !this.state.leftSidebarDisplayed,
//       rightSidebarDisplayed: false,
//     });
//   };

//   handleClickRightSidebar = () => {
//     this.setState({
//       leftSidebarDisplayed: false,
//       rightSidebarDisplayed: !this.state.rightSidebarDisplayed,
//     });
//   };

//   handleChangeNumOfOrders = (state) => {
//     this.setState({
//       menus: [...state.menus],
//     });
//   };

//   handleMenusChange = (state) => {
//     const menusChanged = state.menus;
//     this.setState({
//       menus: [...menusChanged],
//     });
//   };

//   componentDidMount() {
//     console.log("masuk");
//     this.fetchAllMenuFromDB();
//   }

//   fetchAllMenuFromDB = () => {
//     Axios.get(`${process.env.REACT_APP_BACKEND_API}/menu`)
//       .then((res) => {
//         console.log(res.data.data);
//         this.props.fetchMenus(res.data.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   updateMenu = (props) => {
//     const filteredMenus = props;
//     let { menus } = this.state;
//     let unFileteredMenus = filteredMenus;
//     if (props === undefined) {
//       this.fetchAllMenuFromDB();
//     } else {
//       for (let i = 0; i < menus.length; i++) {
//         const idx = filteredMenus.findIndex((filteredMenu) => {
//           return menus[i].id === filteredMenu.id;
//         });
//         if (idx >= 0) {
//           unFileteredMenus = update(
//             idx,
//             {
//               ...unFileteredMenus[idx],
//               quantity: menus[i].quantity,
//               checked: menus[i].checked,
//               filtered: false,
//             },
//             unFileteredMenus
//           );
//         } else {
//           unFileteredMenus = [
//             ...unFileteredMenus,
//             { ...menus[i], filtered: true },
//           ];
//         }
//       }
//       this.setState({
//         menus: [...unFileteredMenus],
//       });
//     }
//   };

//   foodIconOnClick = () => {
//     this.updateMenu();
//   };

//   render() {
//     // const numOfOrders = this.props.menus.reduce((total, orderedMenu) => {
//     //   return total + orderedMenu.quantity;
//     // }, 0);
//     return (
//       <>
//         <header>
//           <TopHeader
//             onClickMenu={this.handleClickLeftSidebar}
//             onClickCart={this.handleClickRightSidebar}
//             onClickSearch={this.onClickSearch}
//             onClickTitle={this.updateMenu}
//             handleFilteredMenu={this.updateMenu}
//             numOfOrders={0}
//           />
//         </header>

//         <div className="main-container">
//           <Menus
//             numOfMenus={this.state.numOfMenus}
//             menus={this.props.menus}
//             handleMenusChange={this.handleMenusChange}
//             handleChangeNumOfOrders={this.handleChangeNumOfOrders}
//           />
//           {/* {this.state.rightSidebarDisplayed && ( */}
//           <RightSidebar
//             displayed={this.state.rightSidebarDisplayed}
//             menus={this.props.menus}
//             handleChangeNumOfOrders={this.handleChangeNumOfOrders}
//             handleMenusChange={this.handleMenusChange}
//           />
//           {/* )} */}

//           {/* {this.state.leftSidebarDisplayed &&  */}
//           <LeftSidebar
//             displayed={this.state.leftSidebarDisplayed}
//             updateMenu={this.updateMenu}
//           />
//           {/* } */}
//         </div>
//       </>
//     );
//   }
// }

const mapStateToProps = function (state) {
  return {
    menus: state.menus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenus: (menus) => dispatch(fetchMenus(menus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
