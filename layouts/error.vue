<template>
  <NotFound v-if="error.statusCode === 404" />
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
}
</script>

<style></style>
