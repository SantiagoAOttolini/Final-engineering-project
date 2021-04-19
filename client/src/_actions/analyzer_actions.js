import * as types from "../_actions/types";

export const getProducts = () => (dispatch) =>
  fetch(`http://localhost:5000/api/food`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: types.FETCH_PRODUCTS,
        payload: data,
      });
    });

export const get_bmr = (bmr) => (dispatch) => {
  return dispatch({
    type: types.GET_BMR,
    payload: bmr,
  });
};
