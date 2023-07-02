import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api'

axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }

    return config;
});



