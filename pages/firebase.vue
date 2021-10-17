<template>
  <div class="redirect-page page">
    <div class="container redirect-container page">
      <h3>Redirecting you to another page.</h3>
      <p class="large">
        Please wait some time.
        <a href="https://mailehereko.pramodpoudel.com.np">Click here</a> if you
        are not redirected.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.location.href = 'https://mailehereko.pramodpoudel.com.np'
  },
}
</script>

<style lang="scss" scoped>
.redirect-container {
  margin-top: 200px;
  text-align: center;
  p {
    margin-top: 24px;
  }
  a {
    font-size: 20px;
    line-height: 32px;
  }
}
</style>
