<template>
  <div class="number-card">
    <h3 class="number">{{ number }}</h3>
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'NumberCard',
  props: ['number', 'name'],
}
</script>

<style></style>
