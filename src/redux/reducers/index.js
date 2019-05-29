// src/redux/reducers/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_ERROR, HANDLE_LOGOUT,
          HANDLE_GET_RESTAURANT_LOCATIONS, HANDLE_ADD_RESTAURANT,
          HANDLE_GET_LOCATION, HANDLE_ADD_LOCATION,
          HANDLE_GET_ITEMS,
        } from "../constants/action-types";

const initialState = {
  user: "",
  restaurant: "",
  locations: [],
  error: false,
  items: [],
  location: 0 // this will hold the location object with it's specific details
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN:
      return {...state, user: action.payload}
    case HANDLE_SIGNUP:
      return {...state, user: action.payload}
    case HANDLE_GET_LOCATION:
      return {...state, location: action.payload}
    case HANDLE_GET_RESTAURANT_LOCATIONS:
      return {...state, locations: action.payload}
    case HANDLE_ADD_RESTAURANT:
      return {...state, restaurant: action.payload}
    case HANDLE_ERROR:
      return {...state, error: action.payload}
    case HANDLE_LOGOUT:
      return {...state, user: "", restaurant: "", error: false, locations: [], items:0, location:0}
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
