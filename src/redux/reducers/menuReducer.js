import * as actions from "../actions/actionTypes";
import { produce } from "immer";
import { update } from "ramda";
import { isEmpty } from "underscore";

const initialState = {
  menus: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  msg: "",
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case actions.MENU_FETCHED_FULFILLED:
      return {
        ...state,
        isRejected: false,
        isFulfilled: true,
        isPending: false,
        menus: produce(state.menus, (draftMenus) => {
          const menusFromPayload = action.payload.data.data;
          let newMenus = [];
          if (draftMenus === undefined) {
            draftMenus = [
              ...menusFromPayload.map((menu) => {
                return {
                  ...menu,
                  checked: false,
                  quantity: 0,
                  filtered: false,
                };
              }),
            ];
          } else {
            newMenus = [...menusFromPayload];
            for (let i = 0; i < menusFromPayload.length; i++) {
              const idx = draftMenus.findIndex((menu) => {
                return menusFromPayload[i].id === menu.id;
              });
              if (idx >= 0) {
                newMenus = update(
                  i,
                  {
                    ...newMenus[i],
                    quantity: state.menus[idx].quantity,
                    checked: state.menus[idx].checked,
                    filtered: false,
                  },
                  newMenus
                );
              } else {
                newMenus = update(
                  i,
                  {
                    ...newMenus[i],
                    quantity: 0,
                    checked: false,
                    filtered: false,
                  },
                  newMenus
                );
              }
            }
            draftMenus = newMenus;
          }
          return draftMenus;
        }),
        msg: "done",
      };
    case actions.MENU_FETCHED_PENDING:
      return { ...state, isPending: true, msg: "Loading" };
    case actions.MENU_FETCHED_REJECTED:
      return { ...state, isRejected: true, msg: "Error fetching menus" };
    case actions.MENU_CHECKED:
      return {
        ...state,
        menus: produce(state.menus, (draftMenus) => {
          const idx = draftMenus.findIndex((draftMenu) => {
            return action.payload.id === draftMenu.id;
          });
          draftMenus[idx].checked = !draftMenus[idx].checked;
          draftMenus[idx].quantity = 0;
        }),
      };
    case actions.MENU_FILTERED_FULFILLED:
      if (isEmpty(action.payload.data.data)) {
        return {
          ...state,
          isRejected: false,
          isFulfilled: true,
          isPending: false,
          msg: "menu not found",
        };
      } else {
        return {
          ...state,
          isRejected: false,
          isFulfilled: true,
          isPending: false,
          menus: produce(state.menus, (draftMenus) => {
            const menusFromPayload = action.payload.data.data;
            draftMenus = [...menusFromPayload];
            for (let i = 0; i < state.menus.length; i++) {
              const idx = draftMenus.findIndex((draftMenu) => {
                return state.menus[i].id === draftMenu.id;
              });
              if (idx >= 0) {
                draftMenus[idx] = {
                  ...draftMenus[idx],
                  quantity: state.menus[i].quantity,
                  checked: state.menus[i].checked,
                  filtered: false,
                };
              } else {
                draftMenus = [
                  ...draftMenus,
                  { ...state.menus[i], filtered: true },
                ];
              }
            }
            return draftMenus;
          }),
          msg: "done",
        };
      }
    case actions.MENU_FILTERED_PENDING:
      return { ...state, isPending: true, msg: "Loading" };
    case actions.MENU_FILTERED_REJECTED:
      return { ...state, isRejected: true, msg: "Error fetching menus" };
    case actions.MENU_CHANGE_QUANTITY:
      return {
        ...state,
        menus: produce(state.menus, (draftMenus) => {
          const idx = draftMenus.findIndex((draftMenu) => {
            return action.payload.id === draftMenu.id;
          });
          draftMenus[idx].quantity = action.payload.quantity;
        }),
      };
    case actions.MENU_ADDED_PENDING:
      return { ...state, isPending: true, msg: "Loading" };
    case actions.MENU_ADDED_FULFILLED:
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        msg: "Menu Successfully added",
      };
    case actions.MENU_ADDED_REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        msg: "Failed to add menu",
      };
    case actions.MENU_UPDATED_PENDING:
      return {
        ...state,
        isPending: true,
        msg: "Loading",
      };
    case actions.MENU_UPDATED_FULFILLED:
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        msg: action.payload.data.data.msg,
      };
    case actions.MENU_UPDATED_REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        msg: "Failed to update menu",
      };
    case actions.MENU_DELETED_PENDING:
      return {
        ...state,
        isPending: true,
        msg: "Loading",
      };
    case actions.MENU_DELETED_FULFILLED:
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        msg: action.payload.data.data.msg,
      };
    case actions.MENU_DELETED_REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        msg: "Unable to delete menu",
      };
    default:
      return state;
  }
}
