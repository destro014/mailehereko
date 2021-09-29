<template>
  <div class="tv-shows-page page container">
    <h1>TV Shows</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'TV Shows - ',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'MaileHereko - TV Shows',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'TV Shows watched by Pramod Poudel',
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
          content: 'MaileHereko - TV Shows',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'TV Shows watched by Pramod Poudel',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://mailehereko.pramodpoudel.com.np/img/banner-tvshows.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://mailehereko.pramodpoudel.com.np/tvshows',
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
          content: 'MaileHereko - TV Shows',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'TV Shows watched by Pramod Poudel',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://mailehereko.pramodpoudel.com.np/img/banner-tvshows.png',
        },
      ],
    }
  },
}
</script>

<style></style>
