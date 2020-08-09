import React, { Component } from "react";
import menu_icon from "../assets/img/menu.webp";
import "./styles/TopHeader_Report.css";

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
        <div className="row no-gutters">
          <div className="col-12 col-xs-12 col-sm-12">
            <div className="left-header-container">
              <div className="menus" onClick={this.onClickHandleMenu}>
                <img src={menu_icon} alt="" />
              </div>
              <div className="header-title">
                <h4>History</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TopHeader;
