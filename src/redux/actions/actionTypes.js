import { ActionType } from 'redux-promise-middleware';

export const MENU_ADDED = "menuAdded";
export const MENU_UPDATED = "menuUpdated";
export const MENU_DELETED = "menuDeleted";
export const MENU_FETCHED = "menuFetched";
export const MENU_FILTERED = "menuFiltered";
export const MENU_CHECKED = "menuChecked";
export const MENU_CHANGE_QUANTITY = "menuQuantity";
export const MENU_FETCHED_PENDING = `${MENU_FETCHED}_${ActionType.Pending}`;
export const MENU_FETCHED_FULFILLED = `${MENU_FETCHED}_${ActionType.Fulfilled}`;
export const MENU_FETCHED_REJECTED = `${MENU_FETCHED}_${ActionType.Rejected}`;
export const MENU_FILTERED_PENDING = `${MENU_FILTERED}_${ActionType.Pending}`;
export const MENU_FILTERED_FULFILLED = `${MENU_FILTERED}_${ActionType.Fulfilled}`;
export const MENU_FILTERED_REJECTED = `${MENU_FILTERED}_${ActionType.Rejected}`;
export const LOGGED_IN = "loggedIn";
export const LOGGED_OUT = "loggedOut";