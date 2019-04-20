// src/redux/reducers/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_GET_RESTAURANTS, HANDLE_ADD_RESTAURANT, HANDLE_ERROR, HANDLE_LOGOUT, HANDLE_ADD_LOCATION, HANDLE_GET_ITEMS } from "../constants/action-types";

const initialState = {
  user: "",
  restaurant: "",
  locations: [],
  error: false,
  items: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN:
      return {...state, user: action.payload, error: action.payload_error}
    case HANDLE_SIGNUP:
      console.log('2');
      
      return {...state, user: action.payload, error: action.payload_error}
    case HANDLE_GET_RESTAURANTS:
      return {...state, restaurant: action.payload}
    case HANDLE_ADD_RESTAURANT:
      return {...state, restaurant: action.payload}
    case HANDLE_ERROR:
      return {...state, error: action.payload}
    case HANDLE_LOGOUT:
      return {...state, user: "", restaurant: "", error: false, locations: []}
    case HANDLE_ADD_LOCATION:
      state.locations.push(action.payload);
      return {...state, locations: state.locations}
    case HANDLE_GET_ITEMS:
      state.items.push(action.payload);
      return {...state, items: state.items}


    default: 
        return state;
  }
};

export default rootReducer;
