import { POPUP_CONNECT } from "./actionTypes";

export const connect = tab => {
  return {
    type: POPUP_CONNECT,
    tab,
  }
};