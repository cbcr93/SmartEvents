import { SIGN_IN } from "./actiontypes";

const token = localStorage.getItem("@SE:token") || "";

const defaultState = {
  token,
  user: [],
  isSeller: false,
};

const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { token } = action;

      return { state, token };

    default:
      return state;
  }
};

export default ticketsReducer;
