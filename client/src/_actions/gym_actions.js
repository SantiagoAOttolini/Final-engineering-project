import { FETCH_GYM, ADD_GYM } from "./types";
import axios from "axios";

export const fetchGyms = () => (dispatch) => {
  fetch("http://localhost:5000/api/gyms/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_GYM, payload: data });
    });
};
export function addGym(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addGym`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_GYM,
    payload: request,
  };
}
