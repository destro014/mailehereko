<template>
  <div class="card-wrapper">
    <div class="card-bg image">
      <img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path" alt="" />
    </div>
    <div class="card-content">
      <div class="card-rating">
        <Icon name="star" />
        <p>{{ item.vote_average }}</p>
      </div>
      <div class="card-image image">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
          alt=""
        />
      </div>
      <div class="card-info">
        <NuxtLink
          class="title"
          :to="{
            name: this.item.media_type + '-id',
            params: { id: this.item.id },
          }"
          >{{ item.original_title }}
        </NuxtLink>
        <button
          class="btn card-action"
          v-if="hasAction"
          :class="{ success: action == 'watched' }"
        >
          <div class="btn-icon icon-left">
            <Icon :name="action" />
          </div>
          <div class="action-name">{{ actionName }}</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['hasAction', 'action', 'actionName', 'item'],
  data() {
    return {
      media_type: 'movie',
      id: '123',
    }
  },
}
</script>

<style></style>
