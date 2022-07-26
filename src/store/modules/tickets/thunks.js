import apiSE from "../../../serves/api";
import { allTickets } from "./actions";

export const getAllTicketsThunk = () => (dispatch) => {
  apiSE
    .get("/tickets/")
    .then((response) => {
      localStorage.setItem("@SE:tickets", JSON.stringify(response.data));

      dispatch(allTickets(response.data));
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};
