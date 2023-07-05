<script setup>
import { useAuthStore } from "@/stores/auth";
import {reactive} from "vue";
import router from "@/router";
import {storeToRefs} from "pinia";

const { login } = useAuthStore()
const { errors } = storeToRefs(useAuthStore())

const form = reactive({
  email: '',
  password: ''
})

const handleLogin = () => {
  login(form).then(() => {
    router.push({name: 'dashboard'})
  })
}

</script>

<template>
  <form @submit.prevent="handleLogin">
    <h1 class="text-gray-900 text-2xl font-medium text-center mb-10">Login</h1>
    <div class="mb-3">
      <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
      <input v-model="form.email" type="email" id="email" name="email"
             class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out outline-none focus:border-indigo-300">
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email[0] }}</p>
    </div>
    <div class="mb-3">
      <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
      <input v-model="form.password" type="password" id="password" name="password"
             class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out outline-none focus:border-indigo-300">
      <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password[0] }}</p>
    </div>
    <div class="pt-3">
      <button type="submit"
              class="text-white bg-indigo-500 border-0 py-2 px-6 rounded text-lg w-full hover:bg-indigo-600">Login
      </button>
    </div>
  </form>
</template>