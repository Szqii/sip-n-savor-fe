<script setup lang="ts">
import {RouterView} from 'vue-router'
import BrandLogo from "@/components/BrandLogo.vue";
</script>

<template>
  <div class="flex flex-col w-full p-4">
    <brand-logo class="mx-auto my-6"/>
    <RouterView v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </div>

</template>

<style scoped>
.slide-enter-active {
  animation: slide-in 0.3s ease-out;
}

.slide-leave-active {
  animation: slide-out 0.5s ease-out;
}

@keyframes slide-in {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
