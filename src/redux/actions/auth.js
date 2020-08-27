import * as actions from "./actionTypes";
import * as apiCalls from "../../utils/apiCalls";

export const loggedIn = (data) => {
  return {
    type: actions.LOGGED_IN,
    payload: apiCalls.logIn(data),
  };
};

export const loggedOut = () => {
  return {
    type: actions.LOGGED_OUT,
  };
};

export const register = (data) => {
  return {
    type: actions.USER_REGISTERED,
    payload: apiCalls.register(data),
  };
};
