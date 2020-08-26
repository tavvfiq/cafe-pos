import React, { useState, useEffect } from "react";
import menu_icon from "../assets/img/menu.webp";
import search_icon from "../assets/img/search.webp";
import cart_icon from "../assets/img/cart.webp";
import "./styles/TopHeader.css";
import SearchModal from "./SearchModal";
import { Link } from "react-router-dom";

const TopHeader = (props) => {
  let showSearchModal;

  const [numOfOrder, setNumOfOrder] = useState(0);

  const onClickSearch = () => {
    try {
      showSearchModal();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleNumOfOrder();
  }, [props.menus]);

  const handleNumOfOrder = () => {
    setNumOfOrder(
      props.menus.reduce((total, menu) => {
        if(menu.checked === true){
          total++;
        }
        return total;
      }, 0)
    );
  };

  const searchModalReff = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    showSearchModal = handleShow;
  };

  const onClickHandleMenu = () => {
    props.onClickMenu();
  };

  const onClickHandleCart = () => {
    props.onClickCart();
  };

  const onClickHandleTitle = () => {
    props.onClickTitle();
  };

  return (
    <>
      <SearchModal ref={searchModalReff} />
      <div className="row no-gutters">
        <div className="col-12 col-xs-12 col-sm-12">
          <div className="left-header-container">
            <div
              component={Link}
              to={"/"}
              className="menu"
              onClick={onClickHandleMenu}
            >
              <img src={menu_icon} alt="" />
            </div>
            <div className="header-title" onClick={onClickHandleTitle}>
              <h4>Menu</h4>
            </div>
            <div className="search" onClick={onClickSearch}>
              <img src={search_icon} alt="" />
            </div>
            <div className="cart" onClick={onClickHandleCart}>
              <img src={cart_icon} alt="" />
              <span className="badge badge-pill badge-info">{numOfOrder}</span>
            </div>
            {/* <div className="user-content">
              <div className="circle">
                <h4>TN</h4>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
