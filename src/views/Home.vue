<script setup>
import {useAuthStore} from "@/stores/auth";
import {storeToRefs} from "pinia";

const {authenticated, user} = storeToRefs(useAuthStore())
</script>

<template>

  <div class="text-center" v-if="authenticated">
    <h1 class="text-lg font-medium">{{ user.name }}</h1>
    <p class="text-sm">{{ user.email }}</p>
  </div>

  <div class="text-center" v-else>
    Home Page | You are not logged in.
  </div>
</template>

<style scoped>

</style>