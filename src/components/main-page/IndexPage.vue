<script setup lang="ts">
import UCard from '@/components/ui/card/UCard.vue'
import { RequestsRepository, type pageInfo } from '@/repository/repository'
import { onBeforeMount, ref, type Ref } from 'vue'
import type { ICharacterInfo } from '../ui/card/config'

const charactersList: Ref<ICharacterInfo[]> = ref([])
const pagesInfo: Ref<pageInfo> = ref({ count: 0, pages: 0, next: '', prev: '' })

const reqRepo = new RequestsRepository()

onBeforeMount(() => {
  fetchData()
  console.log(charactersList.value, pagesInfo.value)
})

async function fetchData() {
  await reqRepo.getCharacters().then((resp) => {
    charactersList.value = [...resp.results]
    pagesInfo.value = resp.info
  })
}
</script>
<template>
  <u-card
    v-for="character in charactersList"
    :character-info="character"
    :key="character.id"
  ></u-card>
</template>
<style lang="sass"></style>
