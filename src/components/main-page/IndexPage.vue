<script setup lang="ts">
import UCard from '@/components/ui/card/UCard.vue'

const info = {
  id: 16,
  name: 'Amish Cyborg',
  status: 'Dead',
  species: 'Alien',
  type: 'Parasite',
  gender: 'Male',
  origin: { name: 'unknown', url: '' },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/15'],
  url: 'https://rickandmortyapi.com/api/character/16',
  created: '2017-11-04T21:12:45.235Z'
}
console.log(info)
</script>
<template>
  <u-card :character-info="info"></u-card>
</template>
<style lang="sass"></style>
