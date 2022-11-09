import * as CONST from "./constants";

export const setAuth = (payload) => {
  return {
    type: CONST.SET_AUTH,
    payload: { access_token: payload },
  };
};
export const setCartItems = (payload) => {
  return {
    type: CONST.SET_CARTITEMS,
    payload: { cartItems: [...payload] },
  };
};
export const setOrderItems = (payload) => {
  return {
    type: CONST.SET_ORDERITEMS,
    payload: { orderItems: [...payload] },
  };
};
