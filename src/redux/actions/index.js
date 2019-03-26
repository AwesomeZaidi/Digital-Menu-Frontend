// src/js/actions/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_LOGOUT, HANDLE_ERROR, HANDLE_ADD_RESTAURANT } from "../constants/action-types";
import axios from "axios";

export function login(loginState) {
    return (dispatcher) => { // read more into dispatcher
        axios.post(`https://digitalmenu-intensive.herokuapp.coms/users/v0/login`, loginState).then((res) => {
            dispatcher(handleLogin(res.data.user)); // THUNKED IT!
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
    console.log("in signup func");
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
        axios.delete(`https://digitalmenu-intensive.herokuapp.com/users/v0/logout`).then(() => {
            dispatcher(handleLogout());
        }).catch(console.err);
    }
};

export const handleLogout = () => {
    console.log("heaa");
    
    return {
        type: HANDLE_LOGOUT
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
    console.log('jere')
    return {
        type: HANDLE_ADD_RESTAURANT,
        payload: restaurant
    };
};
