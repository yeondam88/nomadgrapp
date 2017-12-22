import { combineReducer, applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineRedcuers } from "redux-persist";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";

const middlewares = [thunk];

const persistConfig = {
  key: "root"
};
