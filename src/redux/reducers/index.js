// src/redux/reducers/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_ADD_RESTAURANT, HANDLE_ERROR, HANDLE_LOGOUT } from "../constants/action-types";

const initialState = {
  user: "",
  restaurant: "",
  error: false
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN:
      return {...state, user: action.payload, error: action.payload_error}
    case HANDLE_SIGNUP:
      return {...state, user: action.payload, error: action.payload_error}
    case HANDLE_ADD_RESTAURANT:
      return {...state, restaurant: action.payload}
    case HANDLE_ERROR:
      return {...state, error: action.payload}
    case HANDLE_LOGOUT:
      return {...state, user: "", restaurant: "", error: false}
    default: 
        return state;
  }
};

export default rootReducer;
