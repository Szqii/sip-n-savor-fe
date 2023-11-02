<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Coffee } from '@/types/coffee'
import axios from 'axios'
import { faChevronRight, faGlassWater } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const coffeeList = ref([] as Coffee[])

onMounted(() => {
  axios
    .get(import.meta.env.VITE_API_URL + '/get-menu')
    .then((response) => {
      console.log(response.data)
      coffeeList.value = response.data.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="coffeeList.length > 0">
    <table class="table-fixed">
      <thead>
        <tr class="align-baseline">
          <th scope="col" />
          <th scope="col" class="text-primary text-xs">
            <font-awesome-icon :icon="faGlassWater" />
          </th>
          <th scope="col" class="text-primary">
            <font-awesome-icon :icon="faGlassWater" />
          </th>
          <th scope="col" class="text-primary text-xl">
            <font-awesome-icon :icon="faGlassWater" />
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-primary">
        <tr v-for="coffee in coffeeList" :key="coffee.id">
          <td>
            <router-link
              :to="`/coffee/${coffee.id}`"
              class="flex flex-col py-4 mr-6 group cursor-pointer"
            >
              <span class="text-white"
                >{{ coffee.name }}
                <font-awesome-icon
                  class="text-xxs align-baseline transition-all group-hover:translate-x-1"
                  :icon="faChevronRight"
                />
              </span>
              <span class="text-white text-xs">{{ coffee.description }}</span>
            </router-link>
          </td>
          <td class="text-center text-white px-4">{{ coffee.prices.small }}₺</td>
          <td class="text-center text-white px-4">{{ coffee.prices.medium }}₺</td>
          <td class="text-center text-white px-4">{{ coffee.prices.large }}₺</td>
        </tr>
        <!--      <div  class="divider" />-->
      </tbody>
    </table>
  </div>

  <loading-spinner v-else />
</template>

<style scoped></style>
