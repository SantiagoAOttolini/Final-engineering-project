import * as types from "../_actions/types";
import axios from "axios";
import { ADD_FOOD, DELETE_FOOD } from "./types";

export const getProducts = () => (dispatch) =>
  fetch(`http://localhost:5000/api/food`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: types.FETCH_PRODUCTS,
        payload: data,
      });
    });

export const compare = (product) => ({
  type: types.COMPARE_PRODUCT,
  product,
});

export function addFood(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addFood`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_FOOD,
    payload: request,
  };
}

//DELETE THE PRODUCTS
export const deleteProduct = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/food/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE PRODUCT", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_FOOD,
          payload: data,
        });
      });
  };
};
