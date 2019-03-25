// src/js/actions/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_LOGOUT, HANDLE_ERROR } from "../constants/action-types";
import axios from "axios";

export function login(loginState) {
    return (dispatcher) => { // read more into dispatcher
        axios.post(`/users/v0/login`, loginState).then((res) => {
            dispatcher(handleLogin(res.data.user)); // THUNKED IT!
        }).catch((err) => {
            dispatcher(handleError(true));
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
    return (dispatcher) => {
        axios.post(`/users/v0/signup`, signupState).then((res) => {
            dispatcher(handleSignup(res.data.user));
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

export const logoutUser = () => {
    return { type: HANDLE_LOGOUT };
};

export const handleError = (error) => {
    return {
        type: HANDLE_ERROR,
        payload: error
    };
};