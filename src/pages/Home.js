import React, { useState, useEffect } from "react";
import "./Home.css";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopHeader from "../components/TopHeader";
import Menus from "../components/Menus";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenus } from "../redux/actions/menu";
import { Toast } from "react-bootstrap";
// import {process} from "dotenv";

const Home = (props) => {
  const [leftSidebarDisplayed, setDisplayLeftsidebar] = useState(false);
  const [rightSidebarDisplayed, setDisplayRightsidebar] = useState(false);
  const [userProfileDisplayed, setDisplayUserProfile] = useState(false);
  const [show, setShow] = useState(false);
  const {menus, msg} = useSelector((state)=>state.menusState);
  const dispatch = useDispatch();

  const fetchAllMenuFromDB = () => {
    dispatch(fetchMenus());
  };

  useEffect(() => {
    fetchAllMenuFromDB();
  }, []);

  useEffect(() => {
    if (msg || msg!=="") {
      setShow(true);
    }
  }, [msg]);


  const handleClickLeftSidebar = () => {
    setDisplayLeftsidebar(!leftSidebarDisplayed);
    setDisplayRightsidebar(false);
    setDisplayUserProfile(false);
  };

  const handleClickRightSidebar = () => {
    setDisplayRightsidebar(!rightSidebarDisplayed);
    setDisplayLeftsidebar(false);
    setDisplayUserProfile(false);
  };

  const handleClickUserProfile = () => {
    setDisplayUserProfile(!userProfileDisplayed);
    setDisplayLeftsidebar(false);
    setDisplayRightsidebar(false);
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
          menus={menus}
        />
      </header>

      <div className="main-container">
        {menus === undefined ? "" : <Menus menus={menus} />}
        <RightSidebar displayed={rightSidebarDisplayed} menus={menus} />
        <LeftSidebar
          displayed={leftSidebarDisplayed}
          userProfileDisplayed={userProfileDisplayed}
          onClickUserProfile={handleClickUserProfile}
          updateMenu={updateMenu}
        />
      </div>
      <Toast
        onClose={() => {
          setShow(false);
        }}
        show={show}
        animation={true}
        delay={3000}
        className="toast"
        autohide
      >
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
    </>
  );
};

export default Home;
