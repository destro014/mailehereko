<template>
  <div class="default-view">
    <div class="status-bar"></div>
    <Navbar />
    <Nuxt keep-alive />
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'default',
  mounted() {
    this.$store.dispatch('lists/getLists')
  },
}
</script>
<style></style>
