<script setup lang="ts">
import { ref } from 'vue'
const nameModel = ref('')
const statusModel = ref('')

function filterCharacters() {
  console.log(nameModel.value, statusModel.value)
}
</script>
<template>
  <form class="filter-form" @submit.prevent="filterCharacters">
    <label for="nameInput">Write a name</label>
    <input id="nameInput" v-model="nameModel" />
    <label for="status">Choose status</label>
    <select v-model="statusModel">
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    <button class="filter-form-btn">Search</button>
  </form>
</template>
<style lang="sass">
.filter-form
    display: flex
    flex-direction: column
    gap: 10px
    width: 20%
.filter-form-btn
    width: 60px
</style>
