import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  RESET_PRODUCTS,
} from "./products.types";

// ⚠️ Please do not try to tamper with the initial state
const productInitialState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (
  state = productInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    // this case is an extra to handle corner cases
    case RESET_PRODUCTS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};
