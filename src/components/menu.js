import React, { Fragment, useState } from "react";
import CardMenu from "./card-menu";
import { update } from "ramda";

class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfMenus: props.numOfMenus,
      menus: props.menus,
    };
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleMenusChange = this.handleMenusChange.bind(this);
    this.handleChangeNumOfOrders = this.handleChangeNumOfOrders.bind(this);
  }

  handleCardChange(state) {
    const updatedCardMenu = this.state.menus.findIndex((menu) => {
      return menu.id === state.id;
    });
    this.setState(
      {
        menus: update(
          updatedCardMenu,
          {
            ...this.state.menus[updatedCardMenu],
            checked: state.checked,
            quantity: state.quantity,
          },
          this.state.menus
        ),
      },
      this.handleMenusChange, this.handleChangeNumOfOrders
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.menus !== this.props.menus) {
      this.setState({ menus: this.props.menus });
    }
  }

  handleChangeNumOfOrders(){
    this.props.handleChangeNumOfOrders(this.state.menus.filter((menu)=>{
      return menu.checked===true;
    }));
  }

  handleMenusChange() {
    this.props.handleMenusChange(this.state);
  }

  renderCardMenu(menu) {
    return (
      <CardMenu
        handleCardChange={this.handleCardChange}
        key={menu}
        id={menu.id}
        name={menu.name}
        price={menu.price}
        image_path={menu.image_path}
        quantity={menu.quantity}
        checked={menu.checked}
      />
    );
  }

  render() {
    return (
      <Fragment key={this.props.menus}>
        <div className="row no-gutters">
          {this.state.menus.map((menu) => {
            return (
              <div className="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-3">
                {this.renderCardMenu(menu)}
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Menus;
