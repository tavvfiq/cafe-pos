import * as actions from "../actions/actionTypes";
import {} from "../actions/auth";

export default function authReducer(state = false, action) {
  switch (action.type) {
    case actions.LOGGED_IN:
      sessionStorage.setItem("user_token", action.payload.token);
      return state = true;
    case actions.LOGGED_OUT:
      sessionStorage.clear();
      return state = false;
    default:
      return state;
  }
};
