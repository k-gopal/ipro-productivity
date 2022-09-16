import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { encryptTransform } from "redux-persist-transform-encrypt";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import appReducer from "./redux/reducer";

const encryptor = encryptTransform({
  secretKey: "utility-redux",
  onError: function (error) {
    // Handle the error./
    console.log("ERROR IN REDUX PERSIST", error);
  },
});

export const persistConfig = {
  key: "utility",
  storage,
  transforms: [encryptor],
  stateReconciler: autoMergeLevel2,
  whitelist: [
    "appReducer"
  ],
};

const rootReducer = {
  appReducer
};

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    ...rootReducer,
  });

export default createRootReducer;
