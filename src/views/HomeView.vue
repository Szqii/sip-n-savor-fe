<script setup lang="ts">

import {ref} from "vue";

const isWaiterCalled = ref(false)
const handleCallWaiterClick = () => {
  alert('Waiter is on the way!')
  isWaiterCalled.value = true
}
</script>

<template>
  <div class="container mx-auto h-full flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <router-link
          to="/menu"
          class="main-button text-center"
      >
        See Menu
      </router-link>

      <button
          @click="handleCallWaiterClick"
          class="main-button"
          :class="isWaiterCalled ? 'hover:scale-100' : ''"
          :disabled="isWaiterCalled"
      >
        Call the Waiter
      </button>
      <span v-if="isWaiterCalled"
            class="text-center text-primary">Waiter is on the way. Thank you for your patience.</span>
    </div>
  </div>
</template>
