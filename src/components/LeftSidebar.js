import React from "react";
import "./styles/LeftSidebar.css";
import food_icon from "../assets/img/foods.webp";
import add_icon from "../assets/img/add.webp";
import history_icon from "../assets/img/history.webp";
import user_icon from "../assets/img/user.png";
import AddItemModal from "./AddItemModal";
import DeleteItemModal from "./DeleteItemModal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfile from "../components/UserProfile";

const LeftSidebar = (props) => {
  let showAddItemModal;

  const { level_id, token } = useSelector((state) => state.authState.session);


  const onClickAddItem = () => {
    try {
      showAddItemModal();
    } catch (err) {
      console.log(err);
    }
  };

  const addItemModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    showAddItemModal = handleShow;
  };

  return (
    <>
      <AddItemModal
        updateMenu={props.updateMenu}
        ref={addItemModalRef}
        token={token}
      />
      <div
        className={
          props.displayed
            ? "left-sidebar-container-show"
            : "left-sidebar-container"
        }
      >
        <div className="left-sidebar-items">
          <Link to="/">
            <img src={food_icon} alt="" />
          </Link>
        </div>
        {level_id > 2 ? (
          <>
            <div className="left-sidebar-items">
              <Link to="/report">
                <img src={history_icon} alt="" />
              </Link>
            </div>
            <div className="left-sidebar-items" onClick={onClickAddItem}>
              <img src={add_icon} alt="" />
            </div>
          </>
        ) : (
          ""
        )}
        <div className="left-sidebar-items" onClick={props.onClickUserProfile}>
          <img src={user_icon} alt="" />
        </div>
      </div>
      <UserProfile displayed={props.userProfileDisplayed} backOnclick={props.onClickUserProfile}/>
    </>
  );
};

export default LeftSidebar;
