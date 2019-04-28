// src/js/actions/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_LOGOUT, HANDLE_ERROR,
        HANDLE_GET_RESTAURANT_LOCATIONS, HANDLE_ADD_RESTAURANT,
        HANDLE_ADD_LOCATION,
        HANDLE_GET_ITEMS, HANDLE_ADD_ITEM, HANDLE_EDIT_ITEM, HANDLE_REMOVE_ITEM
    } from "../constants/action-types";
import axios from "axios";

export function login(loginState) {
    return (dispatcher) => {
        axios.post(`https://digitalmenu-intensive.herokuapp.com/users/v0/login`, loginState).then((res) => {
            dispatcher(handleLogin(res.data, false));
        }).catch((err) => {
            dispatcher(handleLogin('', true)); // passing true to payload_error to smoothly show user err msg.
        });
    };
};

export const handleLogin = (user, error) => {
    return {
        type: HANDLE_LOGIN,
        payload: user,
        payload_error: false
    };
};

export function signup(signupState) {
    console.log('signupState:', signupState); // why does this get printed twice...
    return (dispatcher) => {
        axios.post(`https://digitalmenu-intensive.herokuapp.com/users/v0/signup`, signupState).then((res) => {
            dispatcher(handleSignup(res.data));
        }).catch(console.err);
    };
};

export const handleSignup = (user) => {
    return {
        type: HANDLE_SIGNUP,
        payload: user,
        payload_error: false
    };
};

export const logout = () => {
    return (dispatcher) => {
        dispatcher(handleLogout());
    }
};

export const handleLogout = () => {
    return {
        type: HANDLE_LOGOUT,
        payload: ""
    };
};

export const handleError = (error) => {
    return {
        type: HANDLE_ERROR,
        payload: error
    };
};

export function getRestaurantLocations(restaurantId) {
    return (dispatcher) => {
        axios.get(`https://digitalmenu-intensive.herokuapp.com/restaurant/${restaurantId}/location`).then((res) => {
            dispatcher(handleGetRestaurantLocations(res.data));
        }).catch(console.err);
    };
}

export const handleGetRestaurantLocations = (locations) => {
    return {
        type: HANDLE_GET_RESTAURANT_LOCATIONS,
        payload: locations
    };
};

export function addRestaurant(restaurantState) {
    return (dispatcher) => {
        axios.post(`https://digitalmenu-intensive.herokuapp.com/restaurant`, restaurantState).then((res) => {
            dispatcher(handleAddRestaurant(res.data));
        }).catch(console.err);
    };
};

export const handleAddRestaurant = (restaurant) => {
    return {
        type: HANDLE_ADD_RESTAURANT,
        payload: restaurant
    };
};

export function addLocation(restaurantId, restaurantLocation) {
    return async (dispatcher) => {
        await axios.post(`https://digitalmenu-intensive.herokuapp.com/restaurant/${restaurantId}/location`, restaurantLocation).then((res) => {
            console.log("res.data:", res.data);
            dispatcher(handleAddLocation(res.data));
        }).catch(console.err);
    };
};

export const handleAddLocation = (location) => {
    return {
        type: HANDLE_ADD_LOCATION,
        payload: location
    };
};

export function getRestaurantLocationItems(restaurantId, locationId) {
    return async (dispatcher) => {
        await axios.get(`https://digitalmenu-intensive.herokuapp.com/restaurant/${restaurantId}/location/${locationId}`).then((res) => {
            dispatcher(handleGetRestaurantLocationItems(res.data));
        }).catch(console.err);
    };
};

export const handleGetRestaurantLocationItems = (items) => {
    return {
        type: HANDLE_GET_ITEMS,
        payload: items
    };
};