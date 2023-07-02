import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null,
    }),

    getters: {
        authenticated(state) {
            return !!state.token && !!state.user;
        },

        auth(state) {
            return state.user;
        }
    },

    actions: {
        async signIn(credentials) {
            let response = await axios.post('/auth/login', credentials);

            await localStorage.setItem('token', response.data.access_token);
            return await this.attempt(response.data.access_token);
        },

        async attempt(token) {
            this.token = token;
            try {
                let response = await axios.get('/user');
                this.user = response.data;

                return response.data;

            } catch (e) {
                this.token = null;
                this.user = null;
                localStorage.removeItem('token');
            }
        }
    }
})