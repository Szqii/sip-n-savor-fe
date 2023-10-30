<script setup lang="ts">
import type {Coffee} from "@/types/coffee";

defineProps({
  coffee: {
    type: Object as () => Coffee,
    required: true
  }
})
</script>

<template>
  <div class="max-w-sm rounded-lg overflow-hidden bg-primary">
    <img class="w-full" :src="coffee.imageUrl" :alt="coffee.name">
    <div class="px-6 py-4">
      <div class="font-bold text-white text-xl mb-2">{{ coffee.name }}</div>
      <p class="text-gray-700 text-base">{{ coffee.longDescription }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            v-for="(tag, index) in coffee.tags"
            :key="index">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
