<template>
  <div class="movie-details-page page container">
    <div>
      <DetailsHeader :details="item" type="movie" />
      <DetailsWrapper :details="item" type="movie" />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAsyncData, useHead, useRuntimeConfig, navigateTo } from 'nuxt/app'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

const { data: item, error } = await useAsyncData('movie-details', async () => {
  const res = await $fetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}`,
    {
      params: {
        api_key: config.public.TMDB_API_KEY,
      },
    }
  )
  return res
})

if (error.value) {
  navigateTo('/404')
}

useHead(() => {
  if (!item.value) return {}
  return {
    title: item.value.original_title + ' - ',
    meta: [
      { hid: 'title', name: 'title', content: item.value.original_title },
      { hid: 'description', name: 'description', content: item.value.overview },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: item.value.original_title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: item.value.overview,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://image.tmdb.org/t/p/w1280' + item.value.backdrop_path,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://mailehereko.pramodpoudel.com.np/movie/${route.params.id}`,
      },
      { hid: 'og:locale', property: 'og:locale', content: 'en_EN' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: item.value.original_title,
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
        content: item.value.original_title,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: item.value.overview,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://image.tmdb.org/t/p/w1280' + item.value.backdrop_path,
      },
    ],
  }
})
</script>

<style></style>
