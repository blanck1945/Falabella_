import { combineReducers } from "redux";
import server_reducer from "./server_reducer";
import product_reducer from "./product_reducer";

export default combineReducers({
  server_reducer,
  product_reducer,
});
