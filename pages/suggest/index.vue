<template>
  <div class="suggest-page page container">
    <h1>Suggest</h1>
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
}
</script>

<style></style>
