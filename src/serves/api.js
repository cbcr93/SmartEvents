import axios from "axios";

const apiSE = axios.create({
  baseURL: "https://api-smart-event.herokuapp.com/api",
});

export default apiSE;
