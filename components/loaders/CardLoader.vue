<template>
  <div class="card-skeleton">
    <div class="rating-skeleton"></div>
    <div class="image-skeleton"></div>
    <div class="info-skeleton">
      <div class="title-skeleton"></div>
      <div class="action-skeleton">
        <div class="icon-skeleton"></div>
        <div class="action-name-skeleton"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardLoader',
  props: ['hasAction'],
}
</script>

<style></style>
