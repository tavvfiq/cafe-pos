import React from "react";
import Counter from "./Counter";
import "./styles/CardRightSidebar.css";
import { connect } from "react-redux";
import { changeMenuQuantity } from "../redux/actions/menu";

const CardSidebar = (props) => {
  const handleNumOfOrderChanged = (state) => {
   props.changeMenuQuantity(props.id, state.value);
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
            <h5>{`Rp. ${props.price * props.quantity}`}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeMenuQuantity: (id, quantity) =>
      dispatch(changeMenuQuantity(id, quantity)),
  };
};

export default connect(null,mapDispatchToProps)(CardSidebar);
