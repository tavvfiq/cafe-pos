import {} from "../actions/menu";
import * as actions from "../actions/actionTypes";
import { produce } from "immer";
import { update } from "ramda";

export default function menuReducer(state = [], action) {
  switch (action.type) {
    case actions.MENU_FETCHED:
      return produce(state, (draftMenus) => {
        const menusFromPayload = action.payload.menus;
        let newMenus = [];
        if (draftMenus === undefined) {
          draftMenus = [
            ...menusFromPayload.map((menu) => {
              return { ...menu, checked: false, quantity: 0, filtered: false };
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
                  quantity: state[idx].quantity,
                  checked: state[idx].checked,
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
      });
    case actions.MENU_CHECKED:
      return produce(state, (draftMenus) => {
        const idx = draftMenus.findIndex((draftMenu) => {
          return action.payload.id === draftMenu.id;
        });
        draftMenus[idx].checked = !draftMenus[idx].checked;
        draftMenus[idx].quantity = 0;
      });
    case actions.MENU_FILTERED:
      return produce(state, (draftMenus) => {
        const filteredMenus = action.payload.filteredMenus;
        for (let i = 0; i < draftMenus.length; i++) {
          const idx = filteredMenus.findIndex((filteredMenu) => {
            return filteredMenu.id === draftMenus[i].id;
          });
          if (idx >= 0) {
            draftMenus[i].filtered = false;
          } else {
            draftMenus[i].filtered = true;
          }
        }
      });
    case actions.MENU_CHANGE_QUANTITY:
      return produce(state, (draftMenus) => {
        const idx = draftMenus.findIndex((draftMenu) => {
          return action.payload.id === draftMenu.id;
        });
        draftMenus[idx].quantity = action.payload.quantity;
      });
    default:
      return state;
  }
}
