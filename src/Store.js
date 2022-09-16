import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer, { persistConfig } from "./RootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
// import logger from 'redux-logger';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const history = createBrowserHistory({ basename: "/" });

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(logger, thunk, routerMiddleware(history)))
);

export const persistor = persistStore(store);
