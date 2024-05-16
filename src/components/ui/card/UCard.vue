<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { type ICharacterInfo } from './config'

const props = defineProps({
  characterInfo: { type: Object as PropType<ICharacterInfo>, required: true }
})

const statusCharacter = computed(() => {
  let res = ''
  switch (props.characterInfo.status) {
    case 'Alive':
      res = 'status-alive'
      break
    case 'Dead':
      res = 'status-dead'
      break
    case 'unknown':
      res = 'status-unknown'
      break
    default:
      break
  }
  return res
})
</script>
<template>
  <div class="card-item">
    <div class="card-item-left">
      <img class="character-logo" :src="characterInfo.image" alt="character-logo" />
    </div>
    <div class="card-item-right">
      <span class="section">
        <h2 class="character-name">
          {{ characterInfo.name }}
        </h2>
        <span>
          <span :class="statusCharacter"></span>
          <span>{{ characterInfo.status }} - {{ characterInfo.species }}</span>
        </span>
      </span>
      <span class="section">
        <span class="gray-text"> Last known location: </span>
        <p>{{ characterInfo.location.name }}</p>
      </span>
      <span class="section">
        <span class="gray-text">First seen in: </span>
        <p>сделать запрос на эпизод</p>
      </span>
    </div>
  </div>
</template>
<style lang="sass">
.card-item
  width: 600px
  color: white
  height: 220px
  display: flex
  overflow: hidden
  border-radius: 0.5rem
  margin: 0.75rem
  background-color: #5a5a5a
.section
  display: flex
  flex-direction: column
.card-item-right
  display: flex
  flex-direction: column
  padding: 0.75rem
.character-logo
  width: 100%
  height: 100%
  margin: 0px
  object-position: center center
  object-fit: cover
.character-name
  font-size: 27px
.status-alive
  height: 0.5rem
  width: 0.5rem
  margin-right: 0.375rem
  background: rgb(85, 204, 68)
  border-radius: 50%
.status-dead
  height: 0.5rem
  width: 0.5rem
  margin-right: 0.375rem
  background: rgb(214, 61, 46)
  border-radius: 50%
.status-unknown
  height: 0.5rem
  width: 0.5rem
  margin-right: 0.375rem
  background: rgb(158, 158, 158)
  border-radius: 50%
.gray-text
  color: #9e9e9e
</style>
