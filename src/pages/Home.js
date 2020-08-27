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
    props.fetchMenus();
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

const mapStateToProps = function (state) {
  return {
    menus: state.menusState.menus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenus: (menus) => dispatch(fetchMenus(menus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
