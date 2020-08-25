import * as actions from "./actionTypes";

export const loggedIn = (token) => {
  return {
    type: actions.LOGGED_IN,
    payload: {
      token,
    },
  };
};

export const loggedOut = () => {
  return {
    type: actions.LOGGED_OUT,
  };
};
