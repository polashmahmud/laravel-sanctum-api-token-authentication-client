<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="bg-gray-200 h-screen">
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
          <router-link class="hover:text-gray-900" to="/dashboard">Dashboard</router-link>
          <router-link class="hover:text-gray-900" to="/login">Login</router-link>
          <router-link class="hover:text-gray-900" to="/register">Register</router-link>
        </div>
      </nav>
    </header>

    <main class="mt-60 bg-white max-w-lg w-full mx-auto p-6 rounded shadow">
      <h1 class="text-gray-900 text-2xl font-medium text-center mb-10">Login</h1>
      <div class="mb-3">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out outline-none focus:border-indigo-300">
      </div>
      <div class="mb-3">
        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="text" id="password" name="password" class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out outline-none focus:border-indigo-300">
      </div>
      <div class="pt-3">
        <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 rounded text-lg w-full hover:bg-indigo-600">Login</button>
      </div>
    </main>
  </div>
</template>