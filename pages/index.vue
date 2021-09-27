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
    </div>
    {{ stateSearchTerm }}
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
  }),
}
</script>
