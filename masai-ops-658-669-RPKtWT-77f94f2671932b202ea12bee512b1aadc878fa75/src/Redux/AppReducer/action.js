import { GET_ERROR, GET_EVENT_SUCCESS, GET_LOADING } from "./actionType";

// action creator
export const getEventLoading = () => ({
  type: GET_LOADING,
});

export const getEventSuccess = (data) => ({
  type: GET_EVENT_SUCCESS,
  payload: data,
});

export const getEventError = () => ({
  type: GET_ERROR,
});

export const getEvent = (url) => (dispatch) => {
  dispatch(getEventLoading());
  fetch(url)
    .then((res) => res.json())
    .then((res) => dispatch(getEventSuccess(res)))
    .catch(() => dispatch(getEventError()));
};
