<script setup>
import Navigation from "@/components/Navigation.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div class="bg-gray-200 h-screen">
    <Navigation />

    <main class="mt-20 bg-white max-w-lg w-full mx-auto p-6 rounded shadow">
      <router-view></router-view>
    </main>
  </div>
</template>