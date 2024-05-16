<script setup lang="ts">
const props = defineProps({
  pageTotal: { type: Number, required: true },
  currentPage: { type: Number, required: true }
})
</script>
<template>
  <div class="slider-wrapper">
    <div class="slider">
      <img src="./arrow-next-action.svg" alt="<" class="left slider-icon" />
    </div>
    <span class="page-counter"> {{ currentPage }} / {{ pageTotal }} </span>
    <div class="slider">
      <img src="./arrow-next-action.svg" alt=">" class="slider-icon" />
    </div>
  </div>
</template>
<style lang="sass">
.slider-wrapper
    display: flex
    align-items: center

.slider
    display: flex
    align-items: center
    justify-content: center
    width: 40px
    height: 40px
    border-radius: 12px
    background-color:  rgba(235, 235, 235, 0.64)
.slider-icon
    width: 18px
    height: 18px
.left
    transform: rotate(180deg)
</style>
