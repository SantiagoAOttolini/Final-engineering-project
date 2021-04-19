import * as types from "../_actions/types";

const INITIAL_STATE = {
  bmr: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case types.GET_BMR:
      return {
        ...state,
        bmr: action.payload,
      };
    default:
      return state;
  }
}
