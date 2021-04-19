import { FETCH_GYM, ADD_GYM } from "../_actions/types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GYM:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_GYM:
      return { ...state, addGym: action.payload };
    default:
      return state;
  }
}
