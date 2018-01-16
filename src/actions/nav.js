import { SET_VIEW } from "./actionTypes";

export const setView = selectedView => {
  return {
    type: SET_VIEW,
    payload: {
      selectedView
    }
  }
};