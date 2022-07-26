import { REGISTER, SIGN_IN } from "./actiontypes";

export const singIn = (token) => ({
  type: SIGN_IN,
  token,
});

export const register = () => ({
  type: REGISTER,
});
