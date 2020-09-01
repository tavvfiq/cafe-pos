import React from "react";
import maintenance_icon from "../assets/img/maintenance_big.png";

const EmptyCartAdmin = () => {
  return (
    <div className="right-sidebar-content">
      <img src={maintenance_icon} alt="" />
      <h4>Admin Mode</h4>
      <p>Please add some items from the menu to delete or update</p>
    </div>
  );
};

export default EmptyCartAdmin;