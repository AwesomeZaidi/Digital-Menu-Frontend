// src/js/actions/index.js

import {
        HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_LOGOUT, HANDLE_ERROR,
        
        HANDLE_GET_RESTAURANT_LOCATIONS, HANDLE_GET_LOCATION, HANDLE_ADD_LOCATION, HANDLE_UPDATE_LOCATION,
        
        HANDLE_GET_RESTAURANTS, HANDLE_GET_RESTAURANT, HANDLE_ADD_RESTAURANT,
        
        HANDLE_GET_ITEMS, HANDLE_ADD_ITEM, HANDLE_EDIT_ITEM, HANDLE_REMOVE_ITEM
    }
from "../constants/action-types";
import axios from "axios";

const baseUrl = `https://digitalmenu-intensive.herokuapp.com`;
// const baseUrl = `https://temp-digitalmenu-backend.herokuapp.com`;
// const baseUrl = `https://digitalmenu-intensive.herokuapp.com`;

// AUTH
export function login(loginState) {
    return (dispatcher) => {
        axios.post(`${baseUrl}/users/v0/login`, loginState).then((res) => { 
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

// ERRORS
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

// RESTAURANTS

export function getRestaurant(restaurantId) {
    return (dispatcher) => {
        axios.get(`${baseUrl}/restaurant/${restaurantId}`).then((res) => {
            dispatcher(handleGetRestaurant(res.data));
        }).catch(console.err);
    };
};

export const handleGetRestaurant = (restaurant) => {
    return {
        type: HANDLE_GET_RESTAURANT,
        payload: restaurant
    };
};

export function getRestaurants() {
    return (dispatcher) => {
        axios.get(`${baseUrl}/restaurants`).then((res) => {
            dispatcher(handleGetRestaurants(res.data));
        }).catch(console.err);
    };
};

export const handleGetRestaurants = (restaurants) => {
    return {
        type: HANDLE_GET_RESTAURANTS,
        payload: restaurants
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

// LOCATIONS
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

export function getLocations(restaurantId) {
    return (dispatcher) => {
        axios.get(`${baseUrl}/restaurant/${restaurantId}/locations`).then((res) => {
            dispatcher(handleGetLocations(res.data));
        }).catch(console.err);
    };
};

export const handleGetLocations = (locations) => {
    return {
        type: HANDLE_GET_RESTAURANT_LOCATIONS,
        payload: locations
    };
};

export function getLocation(restaurantId, locationId) {
    return async (dispatcher) => {
        await axios.get(`${baseUrl}/restaurant/${restaurantId}/location/${locationId}`).then((res) => {          
            dispatcher(handleUpdateLocation(res.data));
        }).catch(console.err);
    };
};

export const handleGetLocation = (location) => {
    return {
        type: HANDLE_GET_LOCATION,
        payload: location
    };
};

export function updateLocation(locationData) {
    return async (dispatcher) => {
        await axios.patch(`${baseUrl}/restaurant/${locationData.restaurantId}/location/${locationData.locationId}`, locationData).then((res) => {          
            dispatcher(handleUpdateLocation(res.data));
        }).catch(console.err);
    };
};

export const handleUpdateLocation = (location) => {
    return {
        type: HANDLE_UPDATE_LOCATION,
        payload: location
    };
};

// ITEMS
export function getItems(restaurantId, locationId) {
    return async (dispatcher) => {
        await axios.get(`${baseUrl}/restaurant/${restaurantId}/location/${locationId}/items`).then((res) => {
            dispatcher(handleGetItems(res.data));
        }).catch(console.err);
    };
};

export const handleGetItems = (items) => {
    return {
        type: HANDLE_GET_ITEMS,
        payload: items
    };
};

export function addItem(itemData, restaurantId, locationId) { 
    return async (dispatcher) => {
        await axios.post(`${baseUrl}/restaurant/${restaurantId}/location/${locationId}/item`, itemData).then((res) => {          
            dispatcher(handleAddItem(res.data));
        }).catch(console.err);
    };
};

export const handleAddItem = (item) => {
    return {
        type: HANDLE_ADD_ITEM,
        payload: item
    };
};