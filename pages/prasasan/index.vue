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
          <NuxtLink class="quick-link" :to="{ name: 'prasasan-suggestions' }">
            <span>Suggestions </span>
          </NuxtLink>
        </div>
        <div class="add-link-container link-container">
          <NuxtLink class="quick-link" :to="{ name: 'prasasan-add' }">
            <span>Add </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Prasasan',
  head() {
    return {
      title: 'Prasasan - ',
    }
  },
  mounted() {
    this.$store.dispatch('suggestions/getSuggestions')
  },
  computed: mapState({
    loading() {
      return this.$store.state.lists.loading
    },
    lists() {
      return this.$store.state.lists.lists
    },
    moviesCount() {
      return this.lists.filter((item) => {
        return item.media_type.includes('movie')
      }).length
    },
    tvShowsCount() {
      return this.lists.filter((item) => {
        return item.media_type.includes('tv')
      }).length
    },
    suggestionsCount() {
      return this.$store.state.suggestions.suggestions.length
    },
    manualSuggestionsCount() {
      return this.$store.state.suggestions.manualSuggestions.length
    },
  }),
}
</script>

<style></style>
