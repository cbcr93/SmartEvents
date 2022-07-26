import { combineReducers } from "redux";
import cart from "./cart/reducer";
import user from "./users/reducer";
import ticket from "./tickets/reducer";

export default combineReducers({
  cart,
  user,
  ticket,
});
