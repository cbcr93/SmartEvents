import {
  SIGN_IN,
  INFO,
  TICKTS,
  ORDERS,
  ISSELLER,
  ID,
  RESETTOKEN,
} from "./actiontypes";

const token = localStorage.getItem("@SE:token") || "";
const user = JSON.parse(localStorage.getItem("@SE:userInfo")) || "";
const ticket = JSON.parse(localStorage.getItem("@SE:userTickets")) || "";
const orders = JSON.parse(localStorage.getItem("@SE:userOrders")) || "";
const isSeller = JSON.parse(localStorage.getItem("@SE:isSeller")) || false;
const userId = localStorage.getItem("@SE:id") || "";

const defaultState = {
  token,
  user: user,
  ticket: ticket,
  orders: orders,
  isSeller: isSeller,
  userId: userId,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { token } = action;

      return { ...state, token };

    case ID:
      const { userId } = action;

      return { ...state, userId };

    case INFO:
      const { user } = action;

      return { ...state, user };

    case TICKTS:
      const { ticket } = action;

      return { ...state, ticket };

    case ORDERS:
      const { orders } = action;

      return { ...state, orders };

    case ISSELLER:
      const { isSeller } = action;

      return { ...state, isSeller };

    case RESETTOKEN:
      const { resetToken } = action;

      return { ...state, token: resetToken };

    default:
      return state;
  }
};

export default userReducer;
