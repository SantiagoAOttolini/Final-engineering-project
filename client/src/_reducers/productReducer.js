import * as types from "../_actions/types";
import { ADD_FOOD, DELETE_FOOD } from "../_actions/types";
const INITIAL_STATE = {
  products: [],
  isLoading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.map((product) => ({
          ...product,
          compare: false,
        })),
      };
    case types.COMPARE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.product._id
            ? { ...product, compare: !product.compare }
            : product
        ),
      };
    case ADD_FOOD:
      return { ...state, addFood: action.payload };

    case DELETE_FOOD:
      console.log(action.payload);
      const newProducts = [...state.products];
      const productToDelete = newProducts.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newProducts.splice(productToDelete, 1);
      return {
        ...state,
        isLoading: false,
        products: newProducts,
      };
    default:
      return state;
  }
}
