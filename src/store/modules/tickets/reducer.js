import { ALLTICKETS } from "./actionsTypes";

const tickets = JSON.parse(localStorage.getItem("@SE:tickets")) || [
  {
    title: "ERRO",
    description: "ERRO",
    price: 0,
    image: "",
    category: "ERRO",
  },
];

const defaultState = {
  tickets: tickets,
  orders: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALLTICKETS:
      const { tickets } = action;

      return { state, tickets };

    default:
      return state;
  }
};

export default userReducer;
