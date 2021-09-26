<template>
  <div class="not-found">
    <!-- <img src="~/assets/img/404.png" alt="" /> -->
    <p class="large">
      Oops! This is awkward. You are looking for something that doesn't actually
      exist.
    </p>
    <nuxt-link to="/" class="btn">Go Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style lang="scss">
.not-found {
  min-height: calc(100vh - 184px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
  p {
    margin-bottom: 16px;
  }
  .error-visual {
    margin: 24px auto;
  }
  img {
    width: 100%;
    height: auto;
  }
}
</style>
