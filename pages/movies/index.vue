<template>
  <div class="movies-page page container">
    <div class="header">
      <div class="breadcrumb-container">
        <NuxtLink :to="{ name: 'index' }" class="breadcrumb-link-item"
          >Mailehereko</NuxtLink
        >
      </div>
      <h1>Movies</h1>
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
    </div>
    <p>{{ filteredList.length }} items</p>

    <div class="loader-container list-grid" v-if="loading">
      <CardLoader :hasAction="false" v-for="index in 8" :key="index" />
    </div>
    <!-- [ -->
    <!-- <p
      :hasAction="false"
      v-for="item in filteredList"
      :key="item.id"
      :item="item"
    >
      '/{{ item.media_type }}/{{ item.id }} ',
    </p>
    ] -->
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

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Movies - ',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'MaileHereko - Movies',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Movies watched by Pramod Poudel',
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
          content: 'MaileHereko - Movies',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Movies watched by Pramod Poudel',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://mailehereko.pramodpoudel.com.np/img/banner-movies.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://mailehereko.pramodpoudel.com.np/movies',
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
          content: 'MaileHereko - Movies',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Movies watched by Pramod Poudel',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://mailehereko.pramodpoudel.com.np/img/banner-movies.png',
        },
      ],
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
    listTitle() {
      return this.$store.state.type.listTitle
    },
    listType() {
      return this.$store.state.type.listType
    },
    lists() {
      return this.$store.state.lists.lists
    },
    loading() {
      return this.$store.state.lists.loading
    },
    filteredList() {
      return this.lists.filter((item) => {
        if (item.media_type == 'movie') {
          return item.original_title
            .toLowerCase()
            .includes(this.stateSearchTerm.toLowerCase())
        }
      })
    },
  }),
}
</script>

<style></style>
