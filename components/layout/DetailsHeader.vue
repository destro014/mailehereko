<template>
  <div class="details-header">
    <div class="banner image">
      <img
        :src="'https://image.tmdb.org/t/p/w1280' + details.backdrop_path"
        :alt="details.original_title || details.original_name"
      />
    </div>
    <div class="header-title-container">
      <div class="breadcrumb-container">
        <NuxtLink :to="{ name: 'index' }" class="breadcrumb-link-item"
          >MaileHereko</NuxtLink
        >
        <p class="small breadcrumb-seperator">/</p>
        <NuxtLink
          class="breadcrumb-link-item"
          :to="{ name: 'tvshows' }"
          v-if="type == 'tv'"
          >TV Shows
        </NuxtLink>
        <NuxtLink
          class="breadcrumb-link-item"
          :to="{ name: 'movies' }"
          v-if="type == 'movie'"
          >Movies
        </NuxtLink>
      </div>
      <h1 class="title">
        {{ details.original_title || details.original_name }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsHeader',
  props: ['details', 'type'],
}
</script>

<style></style>
