import { combineReducers } from "redux";
import cart from "./cart/reducer";
import user from "./users/reducer";
import tickets from "./tickets/reducer";

export default combineReducers({
  cart,
  user,
  tickets,
});
