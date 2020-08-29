import * as actions from "../actions/actionTypes";
import {} from "../actions/auth";

const initialState = {
  session: {
    name: "",
    level_id: 1,
    token: "",
  },
  isLoggedIn: false,
  isPending: false,
  isRejected: false,
  isSuccess: false,
  msg: "",
};

export default function authReducer(state = initialState, action) {
  let payload = action.payload;
  switch (action.type) {
    case actions.LOGGED_IN_FULFILLED:
      if (payload.data.isSuccess) {
        return {
          ...state,
          session: {
            ...state.session,
            name: `${payload.data.data.first_name} ${payload.data.data.last_name}`,
            level_id: payload.data.data.level_id,
            token: payload.data.data.token,
          },
          isPending: false,
          isLoggedIn: true,
          isSuccess: true,
          msg: payload.data.data.msg,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: false,
          isLoggedIn: false,
          isSuccess: false,
          msg: payload.data.data.msg,
        };
      }
    case actions.LOGGED_IN_PENDING:
      return { ...state, isPending: true, msg: "Loading" };
    case actions.LOGGED_IN_REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        msg: payload.data.data.msg,
      };
    case actions.USER_REGISTERED_FULFILLED:
      if (payload.data.isSuccess) {
        return {
          ...state,
          session: {
            ...state.session,
            name: `${payload.data.data.first_name} ${payload.data.data.last_name}`,
            level_id: payload.data.data.level_id,
            token: payload.data.data.token,
          },
          isPending: false,
          isLoggedIn: true,
          isSuccess: true,
          msg: payload.data.data.msg,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: false,
          isLoggedIn: false,
          isSuccess: false,
          msg: payload.data.data.msg,
        };
      }
    case actions.USER_REGISTERED_PENDING:
      return { ...state, isPending: true, msg: "Loading" };
    case actions.USER_REGISTERED_REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        msg: action.payload.data.data.msg,
      };
    case actions.LOGGED_OUT:
      sessionStorage.clear();
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
