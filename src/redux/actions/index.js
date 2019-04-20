// src/js/actions/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_LOGOUT, HANDLE_ERROR, HANDLE_GET_RESTAURANTS, HANDLE_ADD_RESTAURANT, HANDLE_ADD_LOCATION, HANDLE_GET_ITEMS } from "../constants/action-types";
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
    console.log('1');
    
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

export function getRestaurants() {
    return (dispatcher) => {
        axios.get(`https://digitalmenu-intensive.herokuapp.com/users/v0/restaurant`).then((res) => {
            dispatcher(handleGetRestaurants(res.data));
        }).catch(console.err);
    };
}

export const handleGetRestaurants = (restaurant) => {
    return {
        type: HANDLE_GET_RESTAURANTS,
        payload: restaurant
    };
};

export function addRestaurant(restaurantState) {
    console.log("restaurantState:", restaurantState);
    return (dispatcher) => {
        axios.post(`https://digitalmenu-intensive.herokuapp.com/restaurant`, restaurantState).then((res) => {
            console.log("res.dataa:", res.data);
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
    console.log("restaurantId:", restaurantId);
    console.log("locationState:", restaurantLocation);
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