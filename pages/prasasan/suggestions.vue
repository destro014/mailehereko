<template>
  <div class="suggestions-page page container">
    <div class="header">
      <h1>Suggestions</h1>
    </div>
    <div class="normal-suggestion-wrapper suggestion-wrapper">
      <div class="loader-container" v-if="loading">
        <TitleLoader />
        <div class="list-grid">
          <CardLoader :hasAction="true" v-for="index in 4" :key="index" />
        </div>
      </div>
      <div class="data-container" v-if="!loading && suggestions.length > 0">
        <p class="large section-title">Normal Suggestions</p>
        <div class="lists-container list-grid">
          <Card
            :hasAction="true"
            action="plus"
            actionName="Add this"
            :admin="true"
            v-for="item in suggestions"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>
    </div>
    <div class="manual-suggestion-wrapper suggestion-wrapper">
      <div class="loader-container" v-if="loading">
        <TitleLoader />
        <div class="list-grid">
          <SmallCardLoader v-for="index in 4" :key="index" />
        </div>
      </div>
      <div
        class="data-container"
        v-if="!loading && manualSuggestions.length > 0"
      >
        <p class="large section-title">Manual Suggestions</p>
        <div class="lists-container list-grid">
          <SmallCard
            v-for="item in manualSuggestions"
            :key="item.title"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Suggestions',
  head() {
    return {
      title: 'Suggestion - ',
    }
  },
  data() {
    return {
      searchTerm: null,
    }
  },
  mounted() {
    console.log('mounted')
    this.$store.dispatch('suggestions/getSuggestions')
  },
  computed: mapState({
    suggestions() {
      return this.$store.state.suggestions.suggestions
    },
    manualSuggestions() {
      return this.$store.state.suggestions.manualSuggestions
    },
    loading() {
      return this.$store.state.suggestions.loading
    },
  }),
}
</script>

<style></style>
