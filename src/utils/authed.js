import axios from 'axios';

export const setAuthToken = token => {
   if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   }
   else
       delete axios.defaults.headers.common["Authorization"];
};

export const getAuthToken = () => {
    const auth = JSON.parse(localStorage.getItem('token'));
    return auth;
};

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
};