<template>
  <div class="movies-page page container">
    <h1>Movies</h1>
  </div>
</template>

<script>
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
}
</script>

<style></style>
