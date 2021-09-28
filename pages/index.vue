<template>
  <div class="index page container">
    <div class="header">
      <h1>MaileHereko</h1>
      <p>
        List of movies and TV Shows, I,
        <a href="https://pramodpoudel.com.np">Pramod Poudel</a> have watched
        till date. Explore what I have watched and also feel free to make a
        suggestion. 😉
      </p>
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
      <div class="segmented-control-wrapper">
        <SegmentedControl />
      </div>
      <div class="category-title">
        <h3>
          {{ listTitle }}
          <span>(120)</span>
        </h3>
      </div>
    </div>
    <div class="loader-container list-grid">
      <CardLoader :hasAction="false" v-for="index in 8" :key="index" />
    </div>
    <div class="lists-container list-grid"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  head() {
    return {
      title: '',
    }
  },
  data() {
    return {
      searchTerm: null,
      dataServer: null,
      dataClient: null,
    }
  },
  watch: {
    searchTerm: function (val, oldVal) {
      this.$store.dispatch('search/setSearchTerm', this.searchTerm)
    },
  },
  computed: mapState({
    stateSearchTerm() {
      return this.$store.state.search.searchTerm
    },
    listTitle() {
      return this.$store.state.type.listTitle
    },
  }),
  mounted() {
    console.log('mounted')
    this.dataClient =
      process.env.FIREBASE_API_KEY +
      ' and and and ' +
      process.env.FIREBASE_PROJECT_ID
  },
}
</script>
