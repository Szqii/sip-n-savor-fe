<script setup lang="ts">
import { RouterView } from 'vue-router'
import BrandLogo from '@/components/BrandLogo.vue'
</script>

<template>
  <div class="flex flex-col w-full p-4">
    <brand-logo class="mx-auto my-6" />
    <RouterView v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
        enter-active-class="fade-enter-active"
        leave-active-class="fade-leave-active"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
