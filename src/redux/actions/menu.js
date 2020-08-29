import * as actions from "./actionTypes";
import * as apiCalls from "../../utils/apiCalls";

export const addMenu = (config, data) => {
  return {
    type: actions.MENU_ADDED,
    payload: apiCalls.addMenu(config, data),
  };
};

export const updateMenu = (id, config, data) => {
  return {
    type: actions.MENU_UPDATED,
    payload: apiCalls.updateMenu(id, config, data),
  };
};

export const deleteMenu = (id, config) => {
  return {
    type: actions.MENU_DELETED,
    payload: apiCalls.deleteMenu(id, config),
  };
};

export const fetchMenus = () => {
  return {
    type: actions.MENU_FETCHED,
    payload: apiCalls.fetchAllMenus(),
  };
};

export const filterMenus = (query) => {
  return {
    type: actions.MENU_FILTERED,
    payload: apiCalls.searchAndSortMenus(query),
  };
};

export const checkMenu = (id) => {
  return {
    type: actions.MENU_CHECKED,
    payload: {
      id,
    },
  };
};

export const changeMenuQuantity = (id, quantity) => {
  return {
    type: actions.MENU_CHANGE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};
