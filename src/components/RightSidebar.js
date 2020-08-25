import React from "react";
import CardSidebar from "./CardRightSidebar";
import "./styles/RightSidebar.css";
import empty_cart from "../assets/img/empty_cart.webp";
import { connect } from "react-redux";
import { checkMenu } from "../redux/actions/menu";
import CheckoutModal from "./CheckoutModal";

const RightSidebar = (props) => {
  let showModal;
  const renderCardSidebar = (props) => {
    return (
      <CardSidebar
        key={props.id}
        id={props.id}
        name={props.name}
        price={props.price}
        image_path={props.image_path}
        quantity={props.quantity}
        checked={props.checked}
      />
    );
  };

  const CheckoutModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    showModal = handleShow;
  };

  const onClickCheckout = () => {
    showModal();
  };

  const unCheckAllMenus = () => {
    for(let i=0;i<props.menus.length;i++){
      if(props.menus[i].checked === true){
        props.checkMenu(props.menus[i].id);
      }
    }
  };

  const invoice = Math.round(Math.random() * 100000);
  let orderedMenus = props.menus.filter((menu) => {
    return menu.checked === true;
  });
  let content = <></>;
  if (orderedMenus.length !== 0) {
    content = (
      <>
        {orderedMenus.map((menu) => {
          return renderCardSidebar(menu);
        })}
        <div className="checkout-content">
          <div className="checkout-text">
            <h5>
              Total: <br />
              *belum termasuk ppn
            </h5>
            <h5>
              {`Rp. ${orderedMenus.reduce((total, menu) => {
                return total + menu.price * menu.quantity;
              }, 0)}`}
            </h5>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-primary checkout-btn"
              onClick={onClickCheckout}
            >
              Checkout
            </button>
            <button
              className="btn btn-danger cancel-btn"
              onClick={unCheckAllMenus}
            >
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div className="right-sidebar-content">
          <img src={empty_cart} alt="" />
          <h4>Your cart is empty</h4>
          <p>Please add some items from the menu</p>
        </div>
      </>
    );
  }
  return (
    <>
      <CheckoutModal
        ref={CheckoutModalRef}
        menus={orderedMenus}
        invoice={invoice}
        onClickCheckout={unCheckAllMenus}
      ></CheckoutModal>
      <div
        className={
          props.displayed
            ? "right-sidebar-container-show"
            : "right-sidebar-container"
        }
      >
        {content}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkMenu: (id) => dispatch(checkMenu(id)),
  };
};

export default connect(null, mapDispatchToProps)(RightSidebar);
