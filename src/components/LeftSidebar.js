import React from "react";
import "./styles/LeftSidebar.css";
import food_icon from "../assets/img/foods.webp";
import add_icon from "../assets/img/add.webp";
import history_icon from "../assets/img/history.webp";
import user_icon from "../assets/img/user.png";
import trash_icon from "../assets/img/trash.png";
import edit_icon from "../assets/img/edit.png";
import AddItemModal from "./AddItemModal";
import UpdateItemModal from "./UpdateItemModal";
import DeleteItemModal from "./DeleteItemModal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfile from "../components/UserProfile";

const LeftSidebar = (props) => {
  let showAddItemModal;
  let showUpdateItemModal;
  let showDeleteItemModal;

  const { level_id, token } = useSelector((state) => state.authState.session);

  const onClickDeleteItem = () => {
    try {
      showDeleteItemModal();
    } catch (err) {
      console.log(err);
    }
  };

  const onClickAddItem = () => {
    try {
      showAddItemModal();
    } catch (err) {
      console.log(err);
    }
  };

  const onClickUpdateItem = () => {
    try {
      showUpdateItemModal();
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

  const updateItemModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    showUpdateItemModal = handleShow;
  };

  const deleteItemModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    showDeleteItemModal = handleShow;
  };

  return (
    <>
      <AddItemModal
        updateMenu={props.updateMenu}
        ref={addItemModalRef}
        token={token}
      />
      <UpdateItemModal
        updateMenu={props.updateMenu}
        ref={updateItemModalRef}
        token={token}
      />
      <DeleteItemModal ref={deleteItemModalRef} token={token} />
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
        {level_id > 1 ? (
          <>
            <div className="left-sidebar-items">
              <Link to="/report">
                <img src={history_icon} alt="" />
              </Link>
            </div>
            <div className="left-sidebar-items" onClick={onClickUpdateItem}>
              <img src={edit_icon} alt="" />
            </div>
            <div className="left-sidebar-items" onClick={onClickAddItem}>
              <img src={add_icon} alt="" />
            </div>
            <div className="left-sidebar-items">
              <img src={trash_icon} alt="" onClick={onClickDeleteItem} />
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
