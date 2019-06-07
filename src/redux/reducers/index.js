// src/redux/reducers/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_ERROR, HANDLE_LOGOUT,
          HANDLE_GET_RESTAURANT_LOCATIONS, HANDLE_ADD_RESTAURANT, HANDLE_GET_RESTAURANT,
          HANDLE_GET_RESTAURANTS,
          HANDLE_GET_LOCATION, HANDLE_ADD_LOCATION, HANDLE_UPDATE_LOCATION,
          HANDLE_GET_ITEMS,
        } from "../constants/action-types";

const initialState = {

  user: "",

  restaurants: [],
  restaurant: "",

  locations: [],
  location: '',

  error: false,
  items: [],

  // test: 1

};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN:
      return {...state, user: action.payload, error: false}
    case HANDLE_SIGNUP:
      return {...state, user: action.payload, error: false}
    case HANDLE_GET_LOCATION:
      return {...state, location: action.payload}
    case HANDLE_GET_RESTAURANT_LOCATIONS:
      return {...state, locations: action.payload}
    case HANDLE_GET_RESTAURANT:
      return {...state, restaurant: action.payload}
    case HANDLE_GET_RESTAURANTS:
      return {...state, restaurants: action.payload}
    case HANDLE_ADD_RESTAURANT:
    state.restaurants.push(action.payload);
    return {...state, restaurants: state.restaurants, restaurant: action.payload}
    case HANDLE_ERROR:
      return {...state, error: action.payload}
    case HANDLE_LOGOUT:
      return {...state, user: "", restaurant: "", restaurants: [], error: false, locations: [], items:0, location:0}
    case HANDLE_ADD_LOCATION:
      state.locations.push(action.payload);
      return {...state, locations: state.locations, location: action.payload}
    case HANDLE_GET_ITEMS:
      // state.items.push(action.payload);
      return {...state, items: action.payload}
    case HANDLE_UPDATE_LOCATION:
      return {...state, location: action.payload}


    default: 
        return state;
  }
};

export default rootReducer;
