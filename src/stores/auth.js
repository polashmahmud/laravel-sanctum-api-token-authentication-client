import {defineStore} from "pinia";
import axios from "axios";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

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

                $toast.success('You have been logged in successfully!');
            } catch (e) {
                if (e.response.status === 422) {
                    this.errors = e.response.data.errors
                }

                if (e.response.status === 401) {
                    this.errors = {"email": [e.response.data.message]}
                }

                throw e;
            }
        },

        async register(credentials) {
            try {
                let response = await axios.post('/auth/register', credentials);

                await this.attempt(response.data.access_token)

                $toast.success('You have been registered successfully!');

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

                $toast.success('You have been logged out successfully!');

                return response;
            } catch (e) {
                this.setToken(null);
                this.setUser(null);
                localStorage.removeItem('token');
            }

        },

        async sendVerificationEmail() {
            try {
                await axios.post('/auth/email/verify/send');

                $toast.success('Verification email has been sent successfully!');
            } catch (e) {
                throw e;
            }
        }
    },
})