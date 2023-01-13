// import * as types from "./actionType";

import { GET_ERROR, GET_EVENT_SUCCESS, GET_LOADING } from "./actionType";

const initialState = {
  userData: {},
  isLoading: false,
  isAuth: false,
  meetupsData: [],
  errorText: null,
  error: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOADING: {
      return {
        isLoading: true,
        error: false,
        meetupsData: [],
      };
    }

    case GET_EVENT_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        meetupsData: payload,
      };
    }
    case GET_ERROR: {
      return {
        isLoading: false,
        error: true,
        meetupsData: [],
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
