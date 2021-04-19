import {
  FETCH_REWARDS,
  FILTER_REWARDS_BY_CATEGORY,
  ADD_REWARD,
  DELETE_REWARD,
} from "./types";
import axios from "axios";

export const fetchRewards = () => (dispatch) => {
  fetch("http://localhost:5000/api/Gastronomy/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_REWARDS, payload: data });
    });
};

export const filterRewardsByCategory = (rewards, category) => (dispatch) => {
  return dispatch({
    type: FILTER_REWARDS_BY_CATEGORY,
    payload: {
      Category: category,
      items:
        category === ""
          ? rewards
          : rewards.filter((a) => a.Category.indexOf(category) >= 0),
    },
  });
};

export function addReward(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addReward`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_REWARD,
    payload: request,
  };
}

export const deleteRewards = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/gastronomy/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE REWARD", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_REWARD,
          payload: data,
        });
      });
  };
};
