import React from "react";
import CardMenu from "./CardMenu";

const Menus = (props) => {
  const renderCardMenu = (menu) => {
    return (
      <CardMenu
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
  };

  const unFilteredMenus = props.menus.filter((menu) => {
    return menu.filtered === false;
  });
  return (
    <>
      <div className="row no-gutters">
        {unFilteredMenus.length !== 0 ? (
          unFilteredMenus.map((unFilteredMenu) => {
            return renderCardMenu(unFilteredMenu);
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
    </>
  );
};

export default Menus;
