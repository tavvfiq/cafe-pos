import React from "react";
import Counter from "./Counter";
import "./styles/CardRightSidebar.css";
import { useDispatch } from "react-redux";
import { changeMenuQuantity } from "../redux/actions/menu";

const CardSidebar = (props) => {
  const dispatch = useDispatch();
  const handleNumOfOrderChanged = (state) => {
    dispatch(changeMenuQuantity(props.id, state.value));
  };
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image_path} alt="" />
      </div>
      <div className="card-text">
        <div className="top-text">
          <h5>{props.name}</h5>
        </div>
        <div className="bottom-text">
          <Counter
            key={props.id}
            quantity={props.quantity}
            handleNumOfOrderChanged={handleNumOfOrderChanged}
          />
          <div className="text">
            <h5>{`Rp. ${(props.price * props.quantity).toLocaleString("id-ID")}`}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSidebar;
