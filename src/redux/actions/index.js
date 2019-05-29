// src/js/actions/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_LOGOUT, HANDLE_ERROR,
        HANDLE_GET_RESTAURANT_LOCATIONS, HANDLE_ADD_RESTAURANT,
        HANDLE_GET_LOCATION, HANDLE_ADD_LOCATION,
        HANDLE_GET_ITEMS, HANDLE_ADD_ITEM, HANDLE_EDIT_ITEM, HANDLE_REMOVE_ITEM
    } from "../constants/action-types";
import axios from "axios";

const baseUrl = `http://localhost:3000`;
// const baseUrl = `https://digitalmenu-intensive.herokuapp.com`;

export function login(loginState) {
    return (dispatcher) => {
        axios.post(`${baseUrl}/users/v0/login`, loginState).then((res) => {
            console.log('res.data:', res.data);   
            dispatcher(handleLogin(res.data));
        }).catch(() => {
            dispatcher(handleError(true)); // passing true to payload_error to smoothly show user err msg.
        });
    };
};

export const handleLogin = (user) => {
    return {
        type: HANDLE_LOGIN,
        payload: user
    };
};

export function signup(signupState) {
    return (dispatcher) => {
        axios.post(`${baseUrl}/users/v0/signup`, signupState).then((res) => {
            console.log('res.data:', res.data);
            dispatcher(handleSignup(res.data));
        }).catch((err) => {
            console.log(err);
            dispatcher(handleError(true));
        });
    };
};

export const handleSignup = (user) => {
    return {
        type: HANDLE_SIGNUP,
        payload: user
    };
};

export function clearError(errorStatus) {
    return (dispatcher) => {
        dispatcher(handleError(errorStatus));
    };
};

export const handleError = (error) => {
    return {
        type: HANDLE_ERROR,
        payload: error
    };
};


export function logout() {
    return (dispatcher) => {
        axios.delete(`${baseUrl}/users/v0/logout`).then(() => {
            dispatcher(handleLogout());
        }).catch(console.err);
    };
};

export const handleLogout = () => {
    return {
        type: HANDLE_LOGOUT,
        payload: ""
    };
};

export function addRestaurant(restaurantState) {
    return (dispatcher) => {
        axios.post(`${baseUrl}/restaurant`, restaurantState).then((res) => {
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

export function addLocation(locationData) {
    return async (dispatcher) => {
        await axios.post(`${baseUrl}/restaurant/${locationData.restaurantId}/location`, locationData).then((res) => {          
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

export function getRestaurantLocations(restaurantId) {
    return (dispatcher) => {
        axios.get(`${baseUrl}/restaurant/${restaurantId}/locations`).then((res) => {
            console.log('res.data:', res.data);
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

export function getRestaurantLocationItems(restaurantId, locationId) {
    return async (dispatcher) => {
        await axios.get(`${baseUrl}/restaurant/${restaurantId}/location/${locationId}/item`).then((res) => {
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

export function getRestaurantLocation(restaurantId, locationId) {
    return async (dispatcher) => {
        await axios.get(`${baseUrl}/restaurant/${restaurantId}/location/${locationId}`).then((res) => {
            dispatcher(handleGetRestaurantLocation(res.data));
        }).catch(console.err);
    };
};

export const handleGetRestaurantLocation = (location) => {
    return {
        type: HANDLE_GET_LOCATION,
        payload: location
    };
};
