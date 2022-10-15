import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? 'http://localhost:4444/passport-local/'
        : 'https://alexaltrex-common-api.herokuapp.com/passport-local/',
    withCredentials: true
})
