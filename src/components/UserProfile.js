import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { loggedOut } from "../redux/actions/auth";
import "./styles/UserProfile.css";
import user_icon from "../assets/img/user.png";
import back_icon from "../assets/img/back.png";

const UserProfile = (props) => {
  const { name, level_id } = useSelector((state) => state.authState.session);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loggedOut());
  };
  let role = "";
  switch (level_id) {
    case 1:
      role = "Cashier";
      break;
    case 2:
      role = "Supervisor";
      break;
    case 3:
      role = "Admin";
      break;
    case 4:
      role = "Super Admin";
      break;
    default:
      role = "Unknown Role";
      break;
  }
  return (
    <>
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
          <Button
            className="user-button"
            variant="danger"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
        <div className="back-icon" onClick={props.backOnclick}>
          <img src={back_icon} alt=""/>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
