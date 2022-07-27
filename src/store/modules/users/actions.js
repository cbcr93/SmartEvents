import {
  REGISTER,
  SIGN_IN,
  INFO,
  TICKTS,
  ORDERS,
  ISSELLER,
  ID,
  RESETTOKEN,
} from "./actiontypes";

export const singIn = (token) => ({
  type: SIGN_IN,
  token,
});

export const userId = (token) => ({
  type: ID,
  userId,
});

export const register = () => ({
  type: REGISTER,
});

export const userInfo = (user) => ({
  type: INFO,
  user,
});

export const userTickets = (ticket) => ({
  type: TICKTS,
  ticket,
});

export const userOrders = (orders) => ({
  type: ORDERS,
  orders,
});

export const userSeller = (isSeller) => ({
  type: ISSELLER,
  isSeller,
});

export const resetToken = (resetToken) => ({
  type: RESETTOKEN,
  resetToken,
});
