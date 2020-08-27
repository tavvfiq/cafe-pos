import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  menusState: menuReducer,
  authState: authReducer,
});

export default allReducers;
