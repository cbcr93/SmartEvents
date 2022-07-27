import { toast } from "react-toastify";
import apiSE from "../../../serves/api";
import {
  singIn,
  userInfo,
  userTickets,
  userOrders,
  userSeller,
  userId,
} from "./actions";

export const singInThunk = (userData) => (dispatch) => {
  apiSE
    .post("/login/", userData)
    .then((response) => {
      localStorage.setItem("@SE:token", response.data.accessToken);
      localStorage.setItem("@SE:id", response.data.userId);
      toast.success("Login feito com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(
        userListerThunk(response.data.userId, response.data.accessToken)
      );
      dispatch(singIn(response.data.accessToken));
      dispatch(userId(response.data.userId));
    })
    .catch((err) => {
      toast.error("Usuário/Email ou senha incorretos.", {
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

export const userListerThunk = (userId, token) => (dispatch) => {
  apiSE
    .get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const id = response.data.id;
      const email = response.data.email;
      const name = response.data.name;
      const username = response.data.username;
      const isSeller = response.data.isSeller;

      const user = { id, email, name, username, isSeller };
      localStorage.setItem("@SE:userInfo", JSON.stringify(user));
      localStorage.setItem(
        "@SE:userTickets",
        JSON.stringify(response.data.tickts)
      );
      localStorage.setItem(
        "@SE:userOrders",
        JSON.stringify(response.data.orders)
      );
      localStorage.setItem(
        "@SE:isSeller",
        JSON.stringify(response.data.isSeller)
      );

      dispatch(userInfo(user));
      dispatch(userTickets(response.data.tickts));
      dispatch(userOrders(response.data.orders));
      dispatch(userSeller(response.data.isSeller));
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export const orderListerUserThunk = (token, isSeller) => (dispatch) => {
  apiSE
    .get("/orders/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      localStorage.setItem("@SE:userOrders", JSON.stringify(response.data));

      dispatch(userOrders(response.data));
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export const orderListerSellerThunk = (token, ticketId) => (dispatch) => {
  apiSE
    .get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const id = response.data.id;
      const email = response.data.email;
      const name = response.data.name;
      const username = response.data.username;
      const isSeller = response.data.isSeller;

      const user = { id, email, name, username, isSeller };
      localStorage.setItem("@SE:userInfo", JSON.stringify(user));
      localStorage.setItem(
        "@SE:userTickets",
        JSON.stringify(response.data.tickts)
      );
      localStorage.setItem(
        "@SE:userOrders",
        JSON.stringify(response.data.orders)
      );
      localStorage.setItem(
        "@SE:isSeller",
        JSON.stringify(response.data.isSeller)
      );

      dispatch(userInfo(user));
      dispatch(userTickets(response.data.tickts));
      dispatch(userOrders(response.data.orders));
      dispatch(userSeller(response.data.isSeller));
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export const updateTicketThunk = (orderId, token) => () => {
  const data = {
    isPaid: true,
  };
  console.log(orderId, "---", token);

  apiSE
    .post(`/orders/${orderId}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      toast.success("Registro feito com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
    })
    .catch((err) => {
      console.log(err.response);
      toast.error("Ops! Algo deu errado!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
};
