<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router";
import type {Coffee} from "@/types/coffee";
import SingleCoffeeItem from "@/components/SingleCoffeeItem.vue";

const itemId = router.currentRoute.value.params.id
const coffee = ref({} as Coffee)

onMounted(() => {
  axios.get(import.meta.env.VITE_API_URL + `/get-coffee/${itemId}`)
      .then((response) => {
        coffee.value = response.data.coffee as Coffee
      })
      .catch((error) => {
        console.log(error)
      })
})
</script>

<template>
  <div class="container mx-auto items-center justify-center flex my-auto">
    <single-coffee-item :coffee="coffee"/>
  </div>

</template>

<style scoped>

</style>
