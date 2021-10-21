<template>
  <div class="tv-show-details-page page container">
    <DetailsHeader :details="item" type="tv" />
    <DetailsWrapper :details="item" type="tv" />
  </div>
</template>

<script>
export default {
  name: 'TvDetails',
  head() {
    return {
      title: this.item.original_name + ' - ',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.item.original_name,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.item.overview,
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
          content: this.item.original_name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.item.tagline,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://image.tmdb.org/t/p/w1280' + this.item.backdrop_path,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content:
            'https://mailehereko.pramodpoudel.com.np/tv/' +
            this.$route.params.id,
        },

        { hid: 'og:locale', property: 'og:locale', content: 'en_EN' },

        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.item.original_name,
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
          content: this.item.original_name,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.item.overview,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://image.tmdb.org/t/p/w1280' + this.item.backdrop_path,
        },
      ],
    }
  },
  data() {
    return {
      item: null,
    }
  },
  async fetch() {
    this.item = await this.$axios.$get(
      'https://api.themoviedb.org/3/tv/' + this.$route.params.id,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    )
  },
}
</script>

<style></style>
