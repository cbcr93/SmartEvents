import { toast } from "react-toastify";
import apiSE from "../../../serves/api";
import { singIn } from "./actions";

export const singInThunk = (userData) => (dispatch) => {
  apiSE
    .post("/login/", userData)
    .then((response) => {
      localStorage.setItem("@SE:token", response.data.accessToken);
      toast.success("Login feito com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(singIn(response.data.accessToken));
    })
    .catch((err) => {
      toast.error("Usuário ou senha incorretos.", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
};

export const registerThunk = (userData) => () => {
  apiSE
    .post("/users/", userData)
    .then((response) => {
      console.log(response.data.accessToken);
      toast.success("Registro feito com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
};
