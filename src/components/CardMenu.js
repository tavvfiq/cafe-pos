import React from "react";
import "./styles/CardMenu.css";
import check from "../assets/img/check.webp";
import { useDispatch } from "react-redux";
import { checkMenu } from "../redux/actions/menu";

const CardMenu = (props) => {
  const dispatch = useDispatch();
  const toggleChecked = () => {
    dispatch(checkMenu(props.id));
  };
  return (
    <div
      key={props.id}
      className="col-6 col-xs-4 col-sm-4 col-md-3 col-lg-3"
      onClick={toggleChecked}
    >
      <div className="content-item">
        <div className="content-image">
          <img src={props.image_path} alt="" />
          <div className={props.checked ? "checked-item" : "checked-item-exit"}>
            <img src={check} alt="" />
          </div>
        </div>
        <div className="content-text">
          <h5>{props.name}</h5>
          <p>{`Rp. ${props.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
