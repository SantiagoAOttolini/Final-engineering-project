import {
  FETCH_REWARDS,
  FILTER_REWARDS_BY_CATEGORY,
  ADD_REWARD,
  DELETE_REWARD,
} from "../_actions/types";

const initialState = {
  items: [],
  filteredItems: [],
  Category: "",
  error: null,
  isLoading: false,
  message: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_REWARDS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case FILTER_REWARDS_BY_CATEGORY:
      return {
        ...state,
        Category: action.payload.Category,
        filteredItems: action.payload.items,
      };

    case ADD_REWARD:
      return { ...state, addReward: action.payload };

    case DELETE_REWARD:
      console.log(action.payload);
      const newReward = [...state.items];
      const rewardToDelete = newReward.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newReward.splice(rewardToDelete, 1);
      return {
        ...state,
        isLoading: false,
        items: newReward,
      };
    default:
      return state;
  }
}
