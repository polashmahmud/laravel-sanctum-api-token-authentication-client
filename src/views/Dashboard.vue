<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const verifiedMessage = ref(null);

onMounted(async () => {
  try {
    let response = await axios.get('/dashboard');
    verifiedMessage.value = null;
  } catch (e) {
    if (e.response.status === 403) {
      verifiedMessage.value = e.response.data.message;
    }
  }

});
</script>

<template>
  <div class="text-red-500 flex flex-col items-center" v-if="verifiedMessage">
    {{ verifiedMessage }}
    <button class="text-white bg-indigo-500 border-0 py-2 px-6 rounded text-lg hover:bg-indigo-600 mt-8">Verification email</button>
  </div>
  <div v-else>Dashboard</div>
</template>

<style scoped>

</style>