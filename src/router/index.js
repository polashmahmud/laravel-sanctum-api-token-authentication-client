import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Verify from "@/views/auth/Verify.vue";
import NotFound from "@/views/NotFound.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next();
                } else {
                    next({name: 'login'});
                }
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next({name: 'dashboard'});
                } else {
                    next();
                }
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next({name: 'dashboard'});
                } else {
                    next();
                }
            }
        },
        {
            path: '/api/auth/email/verify',
            name: 'verify',
            component: Verify,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next({name: 'dashboard'});
                } else {
                    next();
                }
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
})


export default router
