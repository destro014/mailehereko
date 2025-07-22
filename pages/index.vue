<template>
  <div class="index page container">
    <div class="header">
      <h1>MaileHereko</h1>
      <p>
        List of movies and TV Shows, I,
        <a
          href="https://pramodpoudel.com.np"
          class="external-links"
          target="_blank"
          aria-label="Know more about pramod poudel"
          >Pramod Poudel</a
        >
        have watched till date. Explore what I have watched and also feel free
        to make a
        <NuxtLink :to="{ name: 'suggest' }" class="external-links">
          suggestion.
        </NuxtLink>
        😉
      </p>
      <div class="search-wrapper">
        <Input
          type="text"
          name="search"
          label="Search movies or tv shows"
          placeholder="eg. Avenger"
          leftIcon="search"
          v-model="searchTerm"
        />
      </div>
      <div class="segmented-control-wrapper">
        <SegmentedControl />
      </div>
      <div class="category-title">
        <h3>
          {{ listTitle }}
          <span>({{ filteredList.length }})</span>
        </h3>
      </div>
    </div>
    <div class="loader-container list-grid" v-if="loading">
      <CardLoader :hasAction="false" v-for="index in 8" :key="index" />
    </div>
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
  let mediaType = listType.value === 'all' ? '' : listType.value
  return lists.value.filter((item) => {
    if (item.media_type === 'movie') {
      return (
        item.original_title
          .toLowerCase()
          .includes(stateSearchTerm.value.toLowerCase()) &&
        item.media_type.includes(mediaType)
      )
    } else {
      return (
        item.original_name
          .toLowerCase()
          .includes(stateSearchTerm.value.toLowerCase()) &&
        item.media_type.includes(mediaType)
      )
    }
  })
})
</script>
