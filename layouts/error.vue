<template>
  <NotFound v-if="error.statusCode === 404" />
</template>

<script>
export default {
  props: ['error'],
  layout: 'error-layout',
}
</script>

<style></style>
