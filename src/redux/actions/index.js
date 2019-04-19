// src/js/actions/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_LOGOUT, HANDLE_ERROR, HANDLE_ADD_RESTAURANT, HANDLE_ADD_LOCATION, HANDLE_GET_ITEMS } from "../constants/action-types";
import axios from "axios";

export function login(loginState) {
    console.log('loginState:', loginState);
    
    return (dispatcher) => { // read more into dispatcher
        axios.post(`https://digitalmenu-intensive.herokuapp.com/users/v0/login`, loginState).then((res) => {
            console.log('res.data:', res.data);
            
            dispatcher(handleLogin(res.data));
        }).catch((err) => {
            dispatcher(handleLogin(true));
        });
    };
};

export const handleLogin = (user) => {
    return {
        type: HANDLE_LOGIN,
        payload: user,
        payload_error: false
    };
};

export function signup(signupState) {
    console.log("signupState:", signupState);
    return (dispatcher) => {
        axios.post(`https://digitalmenu-intensive.herokuapp.com/users/v0/signup`, signupState).then((res) => {
            console.log("res.data:", res.data);
            dispatcher(handleSignup(res.data));
        }).catch(console.err);
    };
};

export const handleSignup = (user) => {
    console.log("in handleSignup");
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