<template>
  <div class="details-wrapper">
    <div class="poster image">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + details.poster_path"
        :alt="details.original_title || details.original_name"
      />
    </div>
    <div class="details-container">
      <div class="tagline-container detail">
        <h2 class="tagline">
          {{ details.tagline }}
        </h2>
      </div>
      <div class="description-container detail">
        <p class="label">
          {{ details.overview }}
        </p>
      </div>
      <div class="rating detail">
        <Icon name="star" />
        <p>{{ details.vote_average }}</p>
      </div>
      <div class="type-status details-row">
        <div class="type detail">
          <p class="label">Type</p>
          <p class="large" v-if="type == 'movie'">Movie</p>
          <p class="large" v-if="type == 'tv'">TV Shows</p>
        </div>
        <div class="status detail" v-if="type == 'tv'">
          <p class="label">Status</p>
          <p class="large">{{ details.status }}</p>
        </div>
      </div>
      <div class="dates details-row">
        <div class="release-date detail" v-if="type == 'movie'">
          <p class="label">Release date</p>
          <p class="large">{{ details.release_date }}</p>
        </div>
        <div class="first-air-date detail" v-if="type == 'tv'">
          <p class="label">First air date</p>
          <p class="large">{{ details.first_air_date }}</p>
        </div>
        <div class="last-air-date detail" v-if="type == 'tv'">
          <p class="label">Last air date</p>
          <p class="large">{{ details.last_air_date }}</p>
        </div>
      </div>
      <div class="season-episodes details-row" v-if="type == 'tv'">
        <div class="seasons detail">
          <p class="label">No. of seasons</p>
          <p class="large">{{ details.number_of_seasons }}</p>
        </div>
        <div class="episodes detail">
          <p class="label">No. of episodes</p>
          <p class="large">{{ details.number_of_episodes }}</p>
        </div>
      </div>
      <div class="run-time detail">
        <p class="label" v-if="type == 'movie'">Run time</p>
        <p class="label" v-if="type == 'tv'">Episode run time</p>
        <p class="large" v-if="type == 'movie'">
          {{ details.runtime }} minutes
        </p>
        <p class="runtime-wrapper" v-if="type == 'tv'">
          <span
            class="run-time large"
            v-for="item in details.episode_run_time"
            :key="item"
          >
            {{ item }}
          </span>
          minutes
        </p>
      </div>
      <div class="genres detail">
        <p class="label">Genres</p>
        <p class="genre-wrapper">
          <span
            class="genre large"
            v-for="item in details.genres"
            :key="item.id"
          >
            {{ item.name }}
          </span>
        </p>
      </div>
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
