<template>
  <div class="admin-page page container">
    <h2>Welcome</h2>
    <div class="list-grid loader" v-if="loading">
      <NumberCardLoader v-for="index in 4" :key="index" />
    </div>
    <div class="list-grid info-container" v-else>
      <NumberCard :number="moviesCount" name="Movies" />
      <NumberCard :number="tvShowsCount" name="TV Shows" />
      <NumberCard :number="suggestionsCount" name="Suggestions" />
      <NumberCard :number="manualSuggestionsCount" name="Manual Suggestions" />
    </div>
    <div class="links-container">
      <h5>Quick links</h5>
      <div class="links">
        <div class="suggestion-link-container link-container">
          <NuxtLink class="quick-link" :to="{ name: 'admin-suggestions' }">
            <span>Suggestions </span>
          </NuxtLink>
        </div>
        <div class="add-link-container link-container">
          <NuxtLink class="quick-link" :to="{ name: 'admin-add' }">
            <span>Add </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
})
import { computed } from 'vue'
import { useListsStore } from '~/stores/lists'
import { useSuggestionsStore } from '~/stores/suggestions'

const listsStore = useListsStore()
const suggestionsStore = useSuggestionsStore()

const loading = computed(() => listsStore.loading)
const lists = computed(() => listsStore.lists)
const moviesCount = computed(
  () => lists.value.filter((item) => item.media_type.includes('movie')).length
)
const tvShowsCount = computed(
  () => lists.value.filter((item) => item.media_type.includes('tv')).length
)
const suggestionsCount = computed(() => suggestionsStore.suggestions.length)
const manualSuggestionsCount = computed(
  () => suggestionsStore.manualSuggestions.length
)
</script>

<style></style>
