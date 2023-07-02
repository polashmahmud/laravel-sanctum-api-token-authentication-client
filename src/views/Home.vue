<script setup>
import {useAuthStore} from "@/stores/auth";

const store = useAuthStore()
</script>

<template>

  <div class="text-center" v-if="store.authenticated">
    <h1 class="text-lg font-medium">{{ store.auth.name }}</h1>
    <p class="text-sm">{{ store.auth.email }}</p>
  </div>

  <div class="text-center" v-else>
    Home Page
  </div>
</template>

<style scoped>

</style>