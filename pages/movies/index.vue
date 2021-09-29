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
          content: 'MaileHereko - Movies watched by Pramod Poudel',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'MaileHereko - Movies watched by Pramod Poudel',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'MaileHereko - Movies watched by Pramod Poudel',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'MaileHereko - Movies watched by Pramod Poudel',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://mailehereko.pramodpoudel.com.np/img/banner-movies.jpg',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'MaileHereko - Movies watched by Pramod Poudel',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'MaileHereko - Movies watched by Pramod Poudel',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://mailehereko.pramodpoudel.com.np/img/banner-movies.jpg',
        },
      ],
    }
  },
}
</script>

<style></style>
