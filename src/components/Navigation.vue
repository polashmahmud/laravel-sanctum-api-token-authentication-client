<script setup>
import {RouterLink} from "vue-router";
import {useAuthStore} from "@/stores/auth";

const store = useAuthStore()
</script>

<template>
  <header class="bg-white h-16 flex items-center border-b-2 border-gray-300 shadow">
    <nav class="container mx-auto flex items-center justify-between text-lg">
      <router-link class="flex items-center font-medium text-gray-900" to="/">
        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
        </svg>

        Laravel Vue Api Authentication
      </router-link>

      <div class="flex items-center justify-center space-x-6 text-gray-600">
        <router-link class="hover:text-gray-900" to="/">Home</router-link>
        <template v-if="!store.authenticated">
        <router-link class="hover:text-gray-900" to="/login">Login</router-link>
        <router-link class="hover:text-gray-900" to="/register">Register</router-link>
        </template>
        <router-link v-else class="hover:text-gray-900" to="/dashboard">Dashboard</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>