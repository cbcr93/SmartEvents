import { ALLTICKETS } from "./actionsTypes";

export const allTickets = (tickets) => ({
  type: ALLTICKETS,
  tickets,
});
