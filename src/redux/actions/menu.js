import * as actions from "./actionTypes";

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

export const fetchMenus = (menus) => {
  return {
    type: actions.MENU_FETCHED,
    payload: {
      menus,
    },
  };
};

export const filterMenus = (filteredMenus) => {
  return {
    type: actions.MENU_FILTERED,
    payload: {
      filteredMenus,
    },
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
