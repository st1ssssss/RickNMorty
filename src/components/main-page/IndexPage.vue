<script setup lang="ts">
import UCard from '@/components/ui/card/UCard.vue'
import MainHeader from '@/components/header/MainHeader.vue'
import UPagination from '../pagination/UPagination.vue'
import { RequestsRepository, type pageInfo } from '@/repository/repository'
import { onBeforeMount, ref, type Ref } from 'vue'
import type { ICharacterInfo } from '../ui/card/config'

const charactersList: Ref<ICharacterInfo[]> = ref([])
const pagesInfo: Ref<pageInfo> = ref({ count: 0, pages: 0, next: '', prev: '' })

const reqRepo = new RequestsRepository()

onBeforeMount(() => {
  fetchData()
})

async function fetchData() {
  await reqRepo.getCharacters().then((resp) => {
    charactersList.value = [...resp.results]
    pagesInfo.value = resp.info
  })
}
</script>
<template>
  <main-header class="width-full"></main-header>
  <div class="wrapper">
    <main class="main-section">
      <u-card
        v-for="character in charactersList"
        :character-info="character"
        :key="character.id"
      ></u-card>
    </main>
    <u-pagination />
  </div>
</template>
<style lang="sass">
.width-full
    width: 100%
.wrapper
    display: flex
    flex-direction: column
    width: 100%
.main-section
    display: flex
    flex-wrap: wrap
    justify-content: center
    width: 100%
</style>
