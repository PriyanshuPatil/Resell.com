import * as types from "./auth.types";


const initState = {
  token:  "",
  isAuth:  false,
  userData: {},
  totalUsers: [],
  loading: false,
  error: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGOUT_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        token: "",
        isAuth: false,
      };
    }
    case types.GET_SINGLE_USERS_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GET_SINGLE_USERS_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.GET_SINGLE_USERS_SUCCESS: {
      return { ...state, loading: false, error: false, userData: payload };
    }
    case types.GET_USERS_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GET_USERS_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.GET_USERS_SUCCESS: {
      return { ...state, loading: false, error: false, totalUsers: payload };
    }
    case types.UPDATE_USERS_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.UPDATE_USERS_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.UPDATE_USERS_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.DELETE_USERS_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.DELETE_USERS_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.DELETE_USERS_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.REGISTER_USERS_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.REGISTER_USERS_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.REGISTER_USERS_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.LOGIN_USERS_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.LOGIN_USERS_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.LOGIN_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        token: payload,
        isAuth: true,
      };
    }
   
    default: {
      return state;
    }
  }
};