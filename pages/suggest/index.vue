<template>
  <div class="suggest-page page container">
    <div class="header">
      <h1>Suggest me</h1>
      <p>
        I will really appericiate it if you take time to suggest me something
        good to watch.
      </p>
      <form class="search-wrapper" @submit.prevent="search">
        <Input
          type="text"
          name="search"
          label="Search"
          placeholder="eg. Avenger"
          leftIcon="search"
          v-model="searchTerm"
          required="required"
          keep-alive
        />
        <Button type="submit" :label="btnLabel" :state="btnState" />
      </form>
    </div>
    <div class="lists-container list-grid">
      <Card
        :hasAction="true"
        action="thumbs-up"
        actionName="Suggest this"
        v-for="item in searchResults"
        :key="item.id"
        :item="item"
        @suggested="suggestionCompleted"
      />
    </div>
    <div class="loader-container list-grid" v-if="loading">
      <CardLoader v-for="index in 8" :key="index" />
    </div>
    <div class="button-container load-more-btn" v-if="moreAvailable">
      <Button
        :label="loadMoreBtnLabel"
        :state="loadMoreBtnState"
        @click="loadMore"
      ></Button>
    </div>
    <div class="no-results-container" v-if="noResults">
      <h2>Sorry, No results found</h2>
      <p class="large">
        There are no movies or TV shows matching your search terms. You can
        suggest me manually
      </p>
      <Button
        class="cta-btn"
        label="Suggest Manually"
        @click="manualSuggestion"
      ></Button>
    </div>
    <div class="no-results-container" v-if="nothingFound">
      <h3>Looks like you didn't find something you are looking for.</h3>
      <p class="large">You can make a manual suggestion if you want.</p>
      <Button
        class="cta-btn"
        label="Suggest Manually"
        @click="manualSuggestion"
      ></Button>
    </div>
    <SuggestionCompletePopup
      v-if="suggestionCompletePopupActive"
      @closed="suggestionPopupClosed"
    />
    <ManualSuggestionPopup
      v-if="manualSuggestionActive"
      @closed="manualSuggestionPopupClosed"
      @suggested="manualSuggestionCompleted"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useHead, useRuntimeConfig } from '#imports'
import { useSuggestStore } from '~/stores/suggest'

const suggestStore = useSuggestStore()

const loading = ref(false)
const moreAvailable = ref(false)
const nothingFound = ref(false)
const noResults = ref(false)
const suggestionCompletePopupActive = ref(false)
const manualSuggestionActive = ref(false)
const btnState = ref('initial')
const loadMoreBtnState = ref('initial')
const btnLabel = ref('Search')
const loadMoreBtnLabel = ref('Load More')

const config = useRuntimeConfig()
const TMDB_API_KEY = config.public.TMDB_API_KEY

// Use store state for searchTerm, searchResults, pageCount
const searchTerm = computed({
  get: () => suggestStore.searchTerm,
  set: (val) => suggestStore.setSearchTerm(val),
})
const searchResults = computed(() => suggestStore.searchResults)
const pageCount = computed({
  get: () => suggestStore.pageCount,
  set: (val) => suggestStore.setPageCount(val),
})

useHead({
  title: 'Suggest - ',
  meta: [
    { name: 'title', content: 'MaileHereko - Suggest' },
    {
      name: 'description',
      content: 'Suggest some TV Shows and movies to watch',
    },
    {
      name: 'keywords',
      content:
        'mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel',
    },
    { property: 'og:title', content: 'MaileHereko - Suggest' },
    {
      property: 'og:description',
      content: 'Suggest some TV Shows and movies to watch',
    },
    {
      property: 'og:image',
      content: 'https://mailehereko.pramodpoudel.com.np/img/banner-suggest.png',
    },
    {
      property: 'og:url',
      content: 'https://mailehereko.pramodpoudel.com.np/suggest',
    },
    { property: 'og:locale', content: 'en_EN' },
    { property: 'og:site_name', content: 'MaileHereko' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:site', content: '@destro014' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://twitter.com/destro014' },
    { property: 'twitter:title', content: 'MaileHereko - Suggest' },
    {
      property: 'twitter:description',
      content: 'Suggest some TV Shows and movies to watch',
    },
    {
      property: 'twitter:image',
      content: 'https://mailehereko.pramodpoudel.com.np/img/banner-suggest.png',
    },
  ],
})

async function search() {
  btnState.value = 'loading'
  loading.value = true
  noResults.value = false
  suggestStore.setSearchResults([])
  pageCount.value = 1
  await searchQuery()
}

async function searchQuery() {
  try {
    const url = `https://api.themoviedb.org/3/search/multi?page=${
      pageCount.value
    }&api_key=${TMDB_API_KEY}&query=${encodeURIComponent(searchTerm.value)}`
    const res = await fetch(url)
    const result = await res.json()
    const newResults = (result.results || []).filter(
      (item) => item.media_type !== 'person'
    )
    suggestStore.setSearchResults([...searchResults.value, ...newResults])
    if (result.total_results === 0) {
      noResults.value = true
    } else if (result.page < result.total_pages) {
      moreAvailable.value = true
    } else {
      moreAvailable.value = false
      nothingFound.value = true
    }
  } catch (e) {
    console.error('Search error:', e)
    // handle error
  } finally {
    loading.value = false
    btnState.value = 'initial'
  }
}

async function loadMore() {
  suggestStore.setPageCount(pageCount.value + 1)
  loadMoreBtnState.value = 'loading'
  await searchQuery()
  loadMoreBtnState.value = 'initial'
}

function manualSuggestionCompleted() {
  manualSuggestionActive.value = false
  suggestionCompletePopupActive.value = true
}
function suggestionPopupClosed() {
  suggestionCompletePopupActive.value = false
}
function manualSuggestion() {
  manualSuggestionActive.value = true
}
function suggestionCompleted() {
  suggestionCompletePopupActive.value = true
}
function manualSuggestionPopupClosed() {
  manualSuggestionActive.value = false
}
</script>

<style></style>
