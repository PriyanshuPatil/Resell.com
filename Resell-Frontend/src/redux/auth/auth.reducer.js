import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from "./auth.types";

let initialState = {
  loading: false,
  error: false,
  isLoggedIn: false,
  token: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_LOADING: {
      return { ...state, loading: false, error: true };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        token: payload.token,
      };
    }
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    //logout case
    case AUTH_LOGOUT: {
      return {
        loading: false,
        error: false,
        isLoggedIn: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
