import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "./actions";
import apiSE from "../../../serves/api";
import { orderListerUserThunk } from "../users/thunck";

export const addToCartThunk = (product) => {
  return (dispatch, getState) => {
    const list = JSON.parse(localStorage.getItem("@SE:cart")) || [];
    product = { ...product, id: list.length, ticketId: product.id };
    const newList = [...list, product];
    localStorage.setItem("@SE:cart", JSON.stringify(newList));
    dispatch(addToCart(newList));
  };
};

export const removeFromCartThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const newList = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("@SE:cart", JSON.stringify(newList));
    dispatch(removeFromCart(newList));
  };
};

export const OrderThunk = (data, amount, token, isSeller) => (dispatch) => {
  console.log(data.ticketId, amount, token);

  const body = {
    amountBuy: amount,
  };

  apiSE
    .post(`/tickets/${data.ticketId}/order/`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success("Compra feita com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });

      dispatch(orderListerUserThunk(token, isSeller));
    })
    .catch((err) => {
      console.log(err);
      toast.error("Ops! Algo de errado!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
};
