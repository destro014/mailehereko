<template>
  <div class="not-found container">
    <img src="~/assets/img/404.svg" alt="" />
    <h2>Lost your way?</h2>
    <p>
      Oops! This is awkward. You are looking for something that doesn't actually
      exist.
    </p>
    <nuxt-link to="/" class="btn">Go Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  head() {
    return {
      title: '',
    }
  },
}
</script>

<style lang="scss">
.not-found {
  min-height: calc(100vh - 184px);
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    margin-bottom: 24px;
  }
  p {
    margin-bottom: 16px;
  }
  .error-visual {
    margin: 24px auto;
  }
  img {
    width: 100%;
    margin-bottom: 40px;
    height: auto;
  }
}
</style>
