import * as types from "./auth.types";
import axios from "axios";

export const getUser = () => (dispatch) => {
  dispatch({ type: types.GET_USERS_LOADING });
  axios
    .get(`https://smiling-ray-trench-coat.cyclic.app/users`)
    .then((res) => {
      dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_USERS_ERROR });
    });
};

export const login = (cred) => (dispatch) => {
  dispatch({ type: types.LOGIN_USERS_LOADING });
  axios
    .post(`https://smiling-ray-trench-coat.cyclic.app/users/login`, cred)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.LOGIN_USERS_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.LOGIN_USERS_ERROR });
      return Promise.reject(err);
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_USERS_SUCCESS });
};

export const registerUser = (cred) => (dispatch) => {
  dispatch({ type: types.REGISTER_USERS_LOADING });
  axios
    .post(`https://smiling-ray-trench-coat.cyclic.app/users/register`, cred)
    .then((res) => {
      dispatch({ type: types.REGISTER_USERS_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.REGISTER_USERS_ERROR });
      return Promise.reject(err);
    });
};