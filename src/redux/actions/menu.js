import * as actions from "./actionTypes";
import * as apiCalls from "../../utils/apiCalls";

export const addMenu = (menu) => {
  return {
    type: actions.MENU_ADDED,
    payload: {
      menu,
    },
  };
};

export const updateMenu = (menu) => {
  return {
    type: actions.MENU_UPDATED,
    payload: {
      menu,
    },
  };
};

export const deleteMenu = (id) => {
  return {
    type: actions.MENU_DELETED,
    payload: {
      id,
    },
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
