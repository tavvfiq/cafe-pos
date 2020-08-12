import React, { Component } from "react";
import menu_icon from "../assets/img/menu.webp";
import search_icon from "../assets/img/search.webp";
import cart_icon from "../assets/img/cart.webp";
import "./styles/TopHeader.css";
import SearchModal from "./SearchModal";
import {Link} from "react-router-dom";

class TopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfOrders: props.numOfOrders,
    };
  }

  searchModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    this.showSearchModal = handleShow;
  };

  onClickHandleMenu = () => {
    this.props.onClickMenu();
  }

  onClickHandleCart = () => {
    this.props.onClickCart();
  }

  onClickHandleSearch = () => {
    this.showSearchModal();
  }

  onClickHandleTitle = ()=>{
    this.props.onClickTitle();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps);
    if (nextProps.numOfOrders !== prevState.numOfOrders) {
      return { numOfOrders: nextProps.numOfOrders };
    } else return null;
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.numOfOrders !== this.props.numOfOrders) {
  //     //Perform some operation here
  //     this.setState({ numOfOrders: this.props.numOfOrders });
  //   }
  // }

  render() {
    return (
      <>
      <SearchModal ref={this.searchModalRef} handleFilteredMenu={this.props.handleFilteredMenu} />
        <div className="row no-gutters">
          <div className="col-12 col-xs-12 col-sm-12">
            <div className="left-header-container">
              <div component={Link} to={"/"} className="menu" onClick={this.onClickHandleMenu}>
                <img src={menu_icon} alt="" />
              </div>
              <div className="header-title" onClick={this.onClickHandleTitle}>
                <h4>Menus</h4>
              </div>
              <div className="search" onClick={this.onClickHandleSearch}>
                <img src={search_icon} alt="" />
              </div>
              <div className="cart" onClick={this.onClickHandleCart}>
                <img src={cart_icon} alt="" />
                <span className="badge badge-pill badge-info">
                  {this.state.numOfOrders}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TopHeader;
