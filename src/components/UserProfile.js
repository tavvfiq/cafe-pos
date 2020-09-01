import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { loggedOut } from "../redux/actions/auth";
import "./styles/UserProfile.css";
import cashier_icon from "../assets/img/cashier.png";
import admin_icon from "../assets/img/admin.png";
import supervisor_icon from "../assets/img/boss.png";
import back_icon from "../assets/img/back.png";
import AddUserModal from "./AddUserModal";

const UserProfile = (props) => {
  const { name, level_id } = useSelector((state) => state.authState.session);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loggedOut());
  };
  let showAddUserModal;
  const onClickAddUser = () => {
    try {
      showAddUserModal();
    } catch (err) {
      console.log(err);
    }
  };
  const addUserModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    showAddUserModal = handleShow;
  };
  let role = "";
  let user_icon;
  switch (level_id) {
    case 1:
      role = "Cashier";
      user_icon = cashier_icon;
      break;
    case 2:
      role = "Supervisor";
      user_icon = supervisor_icon;
      break;
    case 3:
      role = "Admin";
      user_icon = admin_icon;
      break;
    case 4:
      role = "Super Admin";
      user_icon = admin_icon;
      break;
    default:
      role = "Unknown Role";
      break;
  }
  return (
    <>
      <AddUserModal ref={addUserModalRef} />
      <div
        className={
          props.displayed
            ? "userProfile-container-show"
            : "userProfile-container"
        }
      >
        <div className="user-image">
          <img src={user_icon} alt="" />
        </div>
        <h4 className="user-label-name">{name}</h4>
        <h4 className="user-label-role">{role}</h4>
        <div className="user-button-container">
          {level_id >= 3 ? (
            <Button
              className="user-button"
              variant="warning"
              onClick={onClickAddUser}
            >
              Add User
            </Button>
          ) : (
            ""
          )}
          <Button
            className="user-button"
            variant="danger"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
        <div className="back-icon" onClick={props.backOnclick}>
          <img src={back_icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
