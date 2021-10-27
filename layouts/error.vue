<template>
  <div class="page">
    <NotFound v-if="error.statusCode === 404" />
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
}
</script>

<style></style>
