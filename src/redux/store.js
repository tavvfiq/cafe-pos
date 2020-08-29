import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["authState"],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = applyMiddleware(rpm);

const store = createStore(persistedReducer, composeEnhancers(enhancers));

const persistor = persistStore(store);

export {store, persistor};
