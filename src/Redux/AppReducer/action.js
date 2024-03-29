import * as types from "./actionTypes";
import axios from "axios";

const getDonate = () => (dispatch) => {
  dispatch({ type: types.GET_DONATE_DATA_REQUEST });
  return axios
    .get("https://json-server-javascript.onrender.com/donate")
    .then((r) => {
      return dispatch({ type: types.GET_DONATE_DATA_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_DONATE_DATA_FAILURE });
    });
};

export const getlendDataRequest = () => {
  return {
    type: types.GET_LEND_DATA_REQUEST,
  };
};
export const getlendDataSuccess = (payload) => {
  return {
    type: types.GET_LEND_DATA_SUCCESS,
    payload,
  };
};

export const getLendData = () => (dispatch) => {
  dispatch(getlendDataRequest());
  axios
    .get("https://json-server-javascript.onrender.com/lendData")
    .then((r) => {
      dispatch(getlendDataSuccess(r.data));
    })
    .catch((e) => dispatch(getlendDataFailure(e)));
};

export const getlendDataFailure = () => {
  return {
    type: types.GET_LEND_DATA_FAILURE,
  };
};

//////////
// homedata

export const getHomeDataRequest = () => {
  return { type: types.GET_HOME_DATA_REQUEST };
};
export const getHomeDataSuccess = (payload) => {
  return { type: types.GET_HOME_DATA_SUCCESS, payload };
};
export const getHomeDataFailure = () => {
  return { type: types.GET_HOME_DATA_FAILURE };
};

export const getinTheHomeData = (payload) => (dispatch) => {
  dispatch(getHomeDataRequest());
  return axios
    .get(`https://json-server-javascript.onrender.com/donate?q=${payload}&_limit=6`)
    .then((r) => {
      dispatch(getHomeDataSuccess(r.data));
    })
    .catch((e) => dispatch(getHomeDataFailure(e)));
};

export { getDonate };
