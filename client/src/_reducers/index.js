import { combineReducers } from "redux";
import user from "./user_reducer";
import product from "./productReducer";
import analyzer from "./analyzerReducer";
import Reward from "./rewardsReducer";
import Gym from "./gymReducer";

const rootReducer = combineReducers({
  user,
  product,
  analyzer,
  Reward,
  Gym,
});

export default rootReducer;
