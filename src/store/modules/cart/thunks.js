import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => {
  return (dispatch, getState) => {
    const list = JSON.parse(localStorage.getItem("@SE:cart")) || [];
    product = { ...product, id: list.length };
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
