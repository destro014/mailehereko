<template>
  <div class="card-wrapper small-card">
    <div class="card-content">
      <h6 class="title">{{ item.title }}</h6>
      <a :href="item.link" class="link small">{{ item.link }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['item'],
  data() {
    return {}
  },
}
</script>

<style></style>
