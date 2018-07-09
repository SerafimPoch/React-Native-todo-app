import { ADD_SUCCESS } from "../actions/actionTypes";

const init = [];

export default (state = init, { type, payload }) => {
  switch (type) {
    case ADD_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};
