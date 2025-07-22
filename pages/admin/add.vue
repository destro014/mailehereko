<template>
  <div class="add-page page container">
    <div class="header">
      <h1>Add new item</h1>
      <form class="search-wrapper" @submit.prevent="search">
        <Input
          type="text"
          name="search"
          label="Search movies or tv shows"
          placeholder="eg. Avenger"
          leftIcon="search"
          v-bind:value.sync="searchTerm"
          required="required"
          keep-alive
        />
        <Button type="submit" :label="btnLabel" :state="btnState" />
      </form>
    </div>
    <div class="lists-container list-grid">
      <Card
        :hasAction="true"
        action="plus"
        actionName="Add this"
        v-for="item in searchResults"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="loader-container list-grid" v-if="loading">
      <CardLoader v-for="index in 8" :key="index" />
    </div>
    <div class="button-container load-more-btn" v-if="moreAvailable">
      <Button
        :label="loadMoreBtnLabel"
        :state="loadMoreBtnState"
        @click.native="loadMore"
      ></Button>
    </div>
    <div class="no-results-container" v-if="noResults">
      <p class="large">
        We couldn't find the results for your query. Please try again with
        another search term.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
})
import { ref, reactive } from 'vue'

const searchTerm = ref('')
const searchResults = ref([])
const loading = ref(false)
const moreAvailable = ref(false)
const noResults = ref(false)
const pageCount = ref(1)
const btnState = ref('initial')
const loadMoreBtnState = ref('initial')
const btnLabel = ref('Search')
const loadMoreBtnLabel = ref('Load More')
const baseUrl = 'https://api.themoviedb.org/3/search/multi'

async function search() {
  btnState.value = 'loading'
  loading.value = true
  noResults.value = false
  searchResults.value = []
  pageCount.value = 1
  await searchQuery()
}

async function searchQuery() {
  const { data: result } = await useFetch(baseUrl, {
    params: {
      page: pageCount.value,
      api_key: process.env.TMDB_API_KEY,
      query: searchTerm.value,
    },
  })
  if (result.value) {
    searchResults.value.push(
      ...result.value.results.filter((item) => item.media_type != 'person')
    )
    if (result.value.total_results == 0) {
      noResults.value = true
    }
    if (result.value.page < result.value.total_pages) {
      moreAvailable.value = true
    } else {
      moreAvailable.value = false
    }
  }
  loading.value = false
  btnState.value = 'initial'
}

async function loadMore() {
  pageCount.value += 1
  loading.value = true
  await searchQuery()
}
</script>

<style></style>
