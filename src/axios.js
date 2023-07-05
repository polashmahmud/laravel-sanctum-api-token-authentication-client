import axios from "axios";
import {useAuthStore} from "@/stores/auth";

axios.defaults.baseURL = "http://localhost:8000/api";

axios.interceptors.request.use(function (config) {
    const { getToken:token } = useAuthStore();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        localStorage.setItem('token', token);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});



