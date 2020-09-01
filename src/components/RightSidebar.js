import React from "react";
import CardSidebar from "./CardRightSidebar";
import CardSidebarAdmin from "./CardRightSidebarAdmin";
import "./styles/RightSidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { checkMenu } from "../redux/actions/menu";
import CheckoutModal from "./CheckoutModal";
import EmptyCart from "./EmptyCart";
import EmptyCartAdmin from "./EmptyCartAdmin";

const RightSidebar = (props) => {
  let showModal;
  const dispatch = useDispatch();
  const { name: cashier, token, level_id } = useSelector(
    (state) => state.authState.session
  );
  const renderCardSidebar = (Component, menu) => {
    return (
      <Component
        key={menu.id}
        id={menu.id}
        name={menu.name}
        price={menu.price}
        image_path={menu.image_path}
        quantity={menu.quantity}
        checked={menu.checked}
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
    for (let i = 0; i < props.menus.length; i++) {
      if (props.menus[i].checked === true) {
        dispatch(checkMenu(props.menus[i].id));
      }
    }
  };

  const invoice = Math.round(Math.random() * 100000);
  let orderedMenus = props.menus.filter((menu) => {
    return menu.checked === true;
  });
  let content = <></>;
  if (level_id > 1) {
    if (orderedMenus.length !== 0) {
      content = (
        <>
          {orderedMenus.map((menu) => {
            return renderCardSidebar(CardSidebarAdmin, menu);
          })}
          <div className="checkout-content">
            <div className="btn-container">
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
      content = <EmptyCartAdmin />;
    }
  } else {
    if (orderedMenus.length !== 0) {
      content = (
        <>
          {orderedMenus.map((menu) => {
            return renderCardSidebar(CardSidebar, menu);
          })}
          <div className="checkout-content">
            <div className="checkout-text">
              <h5>
                Total: <br />
                *belum termasuk ppn
              </h5>
              <h5>
                {`Rp. ${orderedMenus
                  .reduce((total, menu) => {
                    return total + menu.price * menu.quantity;
                  }, 0)
                  .toLocaleString("id-ID")}`}
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
      content = <EmptyCart />;
    }
  }
  return (
    <>
      <CheckoutModal
        ref={CheckoutModalRef}
        menus={orderedMenus}
        invoice={invoice}
        onClickCheckout={unCheckAllMenus}
        cashier={cashier}
        token={token}
      />
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

export default RightSidebar;
