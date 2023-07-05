import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null,
        errors: ""
    }),
    getters: {
        authenticated() {
            return !!this.token && !!this.user;
        },

        getToken() {
            return this.token;
        },

        getUser() {
            return this.user;
        },

        getErrors() {
            return this.errors;
        }
    },
    actions: {
        setToken(token) {
            this.token = token;
        },

        setUser(user) {
            this.user = user;
        },

        async attempt(token) {
            if (token) {
                this.setToken(token);
            }

            if (!this.token) {
                return;
            }

            try {
                let response = await axios.get('/user')
                this.setUser(response.data);

                return response;
            } catch (e) {
                this.setToken(null);
                this.setUser(null);
                localStorage.removeItem('token');
            }
        },

        async login(credentials) {
            try {
                let response = await axios.post('/auth/login', credentials);
                await this.attempt(response.data.access_token)
            } catch (e) {
                if (e.response.status === 422) {
                    this.errors = e.response.data.errors
                }

                throw e;
            }
        },

        async register(credentials) {
            try {
                let response = await axios.post('/auth/register', credentials);

                await this.attempt(response.data.access_token)
            } catch (e) {
                if (e.response.status === 422) {
                    this.errors = e.response.data.errors
                }

                throw e;
            }
        },

        async logout() {
            try {
                let response = await axios.post('/auth/logout');
                this.setToken(null);
                this.setUser(null);
                localStorage.removeItem('token');

                return response;
            } catch (e) {
                this.setToken(null);
                this.setUser(null);
                localStorage.removeItem('token');
            }

        }
    },
})