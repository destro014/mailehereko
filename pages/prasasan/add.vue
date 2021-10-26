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

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddNew',
  head() {
    return {
      title: 'Add new item',
    }
  },
  data() {
    return {
      searchTerm: null,
      searchResults: [],
      loading: false,
      moreAvailable: false,
      noResults: false,
      pageCount: 1,
      btnState: 'initial',
      loadMoreBtnState: 'initial',
      btnLabel: 'Search',
      loadMoreBtnLabel: 'Load More',
      baseUrl: 'https://api.themoviedb.org/3/search/multi',
    }
  },
  mounted() {},
  methods: {
    async search() {
      this.btnState = 'loading'
      this.loading = true
      this.noResults = false
      this.searchResults = []
      this.pageCount = 1
      await this.searchQuery()
    },
    async searchQuery() {
      const result = await this.$axios.$get(
        'https://api.themoviedb.org/3/search/multi',
        {
          params: {
            page: this.pageCount,
            api_key: process.env.TMDB_API_KEY,
            query: this.searchTerm,
          },
        }
      )
      this.searchResults.push(
        ...result.results.filter((item) => {
          if (item.media_type != 'person') {
            return item
          }
        })
      )
      if (result.total_results == 0) {
        this.noResults = true
      }
      if (result.page < result.total_pages) {
        this.moreAvailable = true
      } else {
        this.moreAvailable = false
      }
      this.loading = false
      this.btnState = 'initial'
    },
    async loadMore() {
      this.pageCount += 1
      this.loading = true
      await this.searchQuery()
    },
  },
}
</script>

<style></style>
