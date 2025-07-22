<template>
  <div class="movies-page page container">
    <div class="header">
      <div class="breadcrumb-container">
        <NuxtLink :to="{ name: 'index' }" class="breadcrumb-link-item"
          >Mailehereko</NuxtLink
        >
      </div>
      <h1>Movies</h1>
      <div class="search-wrapper">
        <Input
          type="text"
          name="search"
          label="Search movies or tv shows"
          placeholder="eg. Avenger"
          leftIcon="search"
          v-bind:value.sync="searchTerm"
        />
      </div>
    </div>
    <p>{{ filteredList.length }} items</p>

    <div class="loader-container list-grid" v-if="loading">
      <CardLoader :hasAction="false" v-for="index in 8" :key="index" />
    </div>
    <!-- [ -->
    <!-- <p
      :hasAction="false"
      v-for="item in filteredList"
      :key="item.id"
      :item="item"
    >
      '/{{ item.media_type }}/{{ item.id }} ',
    </p>
    ] -->
    <div class="lists-container list-grid">
      <Card
        :hasAction="false"
        v-for="item in filteredList"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useListsStore } from '~/stores/lists'
import { useTypeStore } from '~/stores/type'
import { useSearchStore } from '~/stores/search'

const listsStore = useListsStore()
const typeStore = useTypeStore()
const searchStore = useSearchStore()

const searchTerm = ref(searchStore.searchTerm)

watch(searchTerm, (val) => {
  searchStore.setSearchTerm(val)
})

const stateSearchTerm = computed(() => searchStore.searchTerm)
const listTitle = computed(() => typeStore.listTitle)
const listType = computed(() => typeStore.listType)
const lists = computed(() => listsStore.lists)
const loading = computed(() => listsStore.loading)

const filteredList = computed(() => {
  return lists.value.filter((item) => {
    if (item.media_type === 'movie') {
      return item.original_title
        .toLowerCase()
        .includes(stateSearchTerm.value.toLowerCase())
    }
  })
})
</script>

<style></style>
