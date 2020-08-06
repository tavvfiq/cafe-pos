import React, { useState } from "react";
import CardMenu from "./card-menu";
import espresso from "../assets/img/espresso.webp";

class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfMenus: props.numOfMenus,
      menus: props.menus,
    };
  }

  renderCardMenu(property) {
    return (
      <CardMenu
        id={property.id}
        name={property.name}
        price={property.price}
        image_path={property.image_path}
      />
    );
  }

  render() {
    return (
      <div className="row no-gutters">
        {this.state.menus.map((property) => {
          return (
            <div className="col-6 col-xs-6 col-sm-4">
              {this.renderCardMenu(property)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menus;
