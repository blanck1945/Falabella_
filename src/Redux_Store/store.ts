import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const allMiddlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, allMiddlewares);
