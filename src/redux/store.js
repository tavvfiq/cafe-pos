import {createStore, applyMiddleware, compose} from "redux";
import allReducers from "./reducers";
import rpm from "redux-promise-middleware";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = applyMiddleware(rpm);

const store = createStore(allReducers, composeEnhancers(enhancers));

export default store;