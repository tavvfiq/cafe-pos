import React, { Fragment} from "react";
import CardMenu from "./CardMenu";
import { update } from "ramda";

class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfMenus: props.numOfMenus,
      menus: [...props.menus],
    };
  }

  handleCardChange = (state) => {
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
      this.handleMenusChange
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.menus !== this.props.menus) {
      this.setState({ menus: this.props.menus });
    }
  }

  handleChangeNumOfOrders = () => {
    this.props.handleChangeNumOfOrders(
      this.state.menus.filter((menu) => {
        return menu.checked === true;
      })
    );
  };

  handleMenusChange = () => {
    this.props.handleMenusChange(this.state);
  };

  renderCardMenu(menu) {
    return (
      <CardMenu
        handleCardChange={this.handleCardChange}
        key={menu.id}
        id={menu.id}
        name={menu.name}
        price={menu.price}
        image_path={menu.image_path}
        quantity={menu.quantity}
        checked={menu.checked}
        filtered={menu.filtered}
      />
    );
  }

  render() {
    const unFilteredMenus = this.state.menus.filter((menu) => {
      return menu.filtered === false;
    });
    return (
      <Fragment key={this.props.menus}>
        <div className="row no-gutters">
          {unFilteredMenus.length !== 0 ? (
            unFilteredMenus.map((unFilteredMenu) => {
              return this.renderCardMenu(unFilteredMenu);
            })
          ) : (
            <h3
              style={{
                width: "100%",
                height: "100%",
                lineHeight: "500px",
                textAlign: "center",
              }}
            >
              Server seems offline:(
            </h3>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Menus;
