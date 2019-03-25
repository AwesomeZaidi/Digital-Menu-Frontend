// src/redux/reducers/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_ERROR, HANDLE_LOGOUT } from "../constants/action-types";

const initialState = {
  user: "",
  error: false
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN:
      return {...state, user: action.payload, error: action.payload_error}
    case HANDLE_SIGNUP:
      return {...state, user: action.payload, error: action.payload_error}
    case HANDLE_ERROR:
      return {...state, error: action.payload}
    case HANDLE_LOGOUT:
      return {...state, user: "", error: false}
    default: 
        return state;
  }
};


export default rootReducer;
