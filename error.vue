<template>
  <div class="page error-layout">
    <NotFound v-if="error.statusCode === 404" />
    <div v-else class="generic-error container">
      <h2>Oops! Something went wrong.</h2>
      <p v-if="error.statusCode">Error {{ error.statusCode }}</p>
      <p v-if="error.message">{{ error.message }}</p>
      <NuxtLink to="/" class="btn">Go Home</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
}
</script>

<style scoped>
.page {
  margin-top: 0px;
}
.generic-error {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.btn {
  margin-top: 24px;
  padding: 10px 24px;
  background: var(--primary-400, #007bff);
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
}
</style>
