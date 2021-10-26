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
        @click.native="loadMore"
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
        @click.native="manualSuggestion"
      ></Button>
    </div>
    <div class="no-results-container" v-if="nothingFound">
      <h3>Looks like you didn't find something you are looking for.</h3>
      <p class="large">You can make a manual suggestion if you want.</p>
      <Button
        class="cta-btn"
        label="Suggest Manually"
        @click.native="manualSuggestion"
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

<script>
export default {
  name: 'Suggest',
  head() {
    return {
      title: 'Suggest - ',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'MaileHereko - Suggest',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Suggest some TV Shows and movies to watch',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'MaileHereko - Suggest',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Suggest some TV Shows and movies to watch',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://mailehereko.pramodpoudel.com.np/img/banner-suggest.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://mailehereko.pramodpoudel.com.np/suggest',
        },

        { hid: 'og:locale', property: 'og:locale', content: 'en_EN' },

        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'MaileHereko',
        },

        { hid: 'og:type', property: 'og:type', content: 'website' },

        { hid: 'twitter:site', name: 'twitter:site', content: '@destro014' },

        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },

        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: 'https://twitter.com/destro014',
        },

        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'MaileHereko - Suggest',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Suggest some TV Shows and movies to watch',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://mailehereko.pramodpoudel.com.np/img/banner-suggest.png',
        },
      ],
    }
  },
  data() {
    return {
      searchTerm: null,
      searchResults: [],
      loading: false,
      moreAvailable: false,
      nothingFound: false,
      noResults: false,
      suggestionCompletePopupActive: false,
      manualSuggestionActive: false,
      pageCount: 1,
      btnState: 'initial',
      loadMoreBtnState: 'initial',
      btnLabel: 'Search',
      loadMoreBtnLabel: 'Load More',
      baseUrl: 'https://api.themoviedb.org/3/search/multi',
    }
  },
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
      } else if (result.page < result.total_pages) {
        this.moreAvailable = true
      } else {
        this.moreAvailable = false
        this.nothingFound = true
      }
      this.loading = false
      this.btnState = 'initial'
    },
    async loadMore() {
      this.pageCount += 1
      this.loading = true
      await this.searchQuery()
    },
    manualSuggestionCompleted() {
      this.manualSuggestionActive = false
      this.suggestionCompletePopupActive = true
    },
    suggestionPopupClosed() {
      this.suggestionCompletePopupActive = false
    },
    manualSuggestion() {
      this.manualSuggestionActive = true
    },
    suggestionCompleted() {
      this.suggestionCompletePopupActive = true
    },
    manualSuggestionPopupClosed() {
      this.manualSuggestionActive = false
    },
  },
}
</script>

<style></style>
