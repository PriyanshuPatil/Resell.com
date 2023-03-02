
import { loginAPI } from "./auth.api";
import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "./auth.types";


// Login Actions
export const login = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let data = await loginAPI(creds); // passing the creds from the props
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data})
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR})
  }
};

//Logout Actions

export const logout = () => (dispatch) => {
    dispatch({type: AUTH_LOGOUT})
}