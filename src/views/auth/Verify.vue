<script setup>
import router from "@/router";
import {onMounted, ref} from "vue";
import axios from "axios";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

const verifiedMessage = ref(null);

onMounted(async () => {
  try {
    let query = router.currentRoute.value.query;
    let url = '/auth/email/verify?email=' + query.email + '&expires=' + query.expires + '&signature=' + query.signature;

    await axios.post(url);

    $toast.success('Email verified successfully')

    router.push({name: 'dashboard'});

  } catch (e) {
    if (e.response.status === 403) {
      verifiedMessage.value = e.response.data.message;
    }

    $toast.error('Email verification failed. Please try again.')
  }
});
</script>

<template>
  <div v-if="verifiedMessage" class="text-sm text-red-500 text-center">{{ verifiedMessage}}</div>
  <div v-else class="text-center text-sm">
    Loading ...
  </div>
</template>

<style scoped>

</style>