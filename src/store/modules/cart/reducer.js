import { ADD_CART, REMOVE_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@SE:cart")) || [];

const cartCurrent = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return action.product;
    case REMOVE_CART:
      return action.product;
    default:
      return state;
  }
};
export default cartCurrent;
