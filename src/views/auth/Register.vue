<script setup>
import {useAuthStore} from "@/stores/auth";
import {reactive} from "vue";
import router from "@/router";
import {storeToRefs} from "pinia";

const {register} = useAuthStore()
const {errors} = storeToRefs(useAuthStore())

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const handleRegister = () => {
  register(form)
      .then(() => {
        router.push({name: 'dashboard'})
      })
      .catch((error) => {
        console.log(error)
      })
}
</script>

<template>
  <form @submit.prevent="handleRegister">
    <h1 class="text-gray-900 text-2xl font-medium text-center mb-10">Register</h1>
    <div class="mb-3">
      <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
      <input v-model="form.name" type="text" id="name" name="name"
             class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out outline-none focus:border-indigo-300">
      <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name[0] }}</p>
    </div>
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
    <div class="mb-3">
      <label for="password_confirmation" class="leading-7 text-sm text-gray-600">Password Confirmation</label>
      <input v-model="form.password_confirmation" type="password" id="password_confirmation"
             name="password_confirmation"
             class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out outline-none focus:border-indigo-300">
      <p v-if="errors.password_confirmation" class="text-red-500 text-sm mt-1">{{ errors.password_confirmation[0] }}</p>
    </div>
    <div class="pt-3">
      <button type="submit"
              class="text-white bg-indigo-500 border-0 py-2 px-6 rounded text-lg w-full hover:bg-indigo-600">Register
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>