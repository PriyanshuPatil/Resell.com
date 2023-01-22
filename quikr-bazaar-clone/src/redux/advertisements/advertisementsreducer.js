import {
  GET_ADVERTISEMENTS_ERROR,
  GET_ADVERTISEMENTS_LOADING,
  GET_ADVERTISEMENTS_SUCCESS,
  POST_ADVERTISEMENTS_ERROR,
  POST_ADVERTISEMENTS_LOADING,
  POST_ADVERTISEMENTS_SUCCESS,
  RESET_ADVERTISEMENTS,
} from "./advertisements.types";

// ⚠️ Please do not try to tamper with the initial state
const advertisementsInitialState = {
  loading: false,
  error: false,
  data: [],
};

export const advertisementsReducer = (
  state = advertisementsInitialState,
  { type, payload }
) => {
  
  switch (type) {
    case GET_ADVERTISEMENTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ADVERTISEMENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case GET_ADVERTISEMENTS_ERROR: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
      
    }
    case POST_ADVERTISEMENTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case POST_ADVERTISEMENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data:[payload,...state.data] ,
      };
    }
    case POST_ADVERTISEMENTS_ERROR: {
      return {
        ...state,
        loading: false,
        data:[payload,...state.data]
      };
      
    }

    // this case is an extra to handle corner cases
    case RESET_ADVERTISEMENTS: {
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
