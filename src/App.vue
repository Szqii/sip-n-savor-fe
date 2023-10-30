<script setup lang="ts">
import {RouterView} from 'vue-router'
import BrandLogo from "@/components/BrandLogo.vue";
</script>

<template>
  <div class="flex flex-col w-full p-4">
    <brand-logo class="mx-auto my-6"/>
    <RouterView/>
  </div>

</template>

<style scoped>
</style>
