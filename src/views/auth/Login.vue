<script setup>
import {reactive} from "vue";
import {useAuthStore} from "@/stores/auth";
import router from "@/router";

const store = useAuthStore()

const form = reactive({
  email: 'polashmahmud@gmail.com',
  password: 'password'
})

const login = () => {

  store.signIn(form)
}
</script>

<template>
  <form @submit.prevent="login">
    <h1 class="text-gray-900 text-2xl font-medium text-center mb-10">Login</h1>
    <div class="mb-3">
      <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
      <input v-model="form.email" type="email" id="email" name="email" class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out outline-none focus:border-indigo-300">
    </div>
    <div class="mb-3">
      <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
      <input v-model="form.password" type="text" id="password" name="password" class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out outline-none focus:border-indigo-300">
    </div>
    <div class="pt-3">
      <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 rounded text-lg w-full hover:bg-indigo-600">Login</button>
    </div>
  </form>
</template>