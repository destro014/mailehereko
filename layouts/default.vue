<template>
  <div class="default-view">
    <div class="status-bar"></div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'default',
  mounted() {
    if (this.lists.length < 1) {
      this.$store.dispatch('lists/getLists')
    }
  },
}
</script>
<style></style>
