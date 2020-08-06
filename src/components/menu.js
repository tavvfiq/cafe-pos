import React, { useState } from "react";
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
  }

  handleCardChange(state) {
    const updatedCardMenu = this.state.menus.findIndex((menu) => {
      return menu.id === state.id;
    });
    this.setState({
      menus: update(
        updatedCardMenu,
        { ...this.state.menus[updatedCardMenu], checked:state.checked },
        this.state.menus
      ),
    }, this.handleMenusChange);
  }

  handleMenusChange(){
    this.props.handleMenusChange(this.state);
  }

  renderCardMenu(property) {
    return (
      <CardMenu
        handleCardChange={this.handleCardChange}
        id={property.id}
        name={property.name}
        price={property.price}
        image_path={property.image_path}
        checked={property.checked}
      />
    );
  }

  render() {
    return (
      <div className="row no-gutters">
        {this.state.menus.map((property) => {
          return (
            <div className="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-3">
              {this.renderCardMenu(property)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menus;
