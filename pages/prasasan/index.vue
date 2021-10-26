<template>
  <div class="admin-page page container">
    <h2>Welcome</h2>
    <div class="list-grid info-container">
      <NumberCard number="64" name="Movies" />
      <NumberCard number="21" name="TV Shows" />
      <NumberCard number="1" name="Suggestions" />
      <NumberCard number="3" name="Manual Suggestions" />
    </div>
    <div class="links-container">
      <h5>Quick links</h5>
      <div class="links">
        <div class="suggestion-link-container link-container">
          <NuxtLink class="quick-link" :to="{ name: 'prasasan-suggestions' }">
            <span>Suggestions </span>
          </NuxtLink>
        </div>
        <div class="add-link-container link-container">
          <NuxtLink class="quick-link" :to="{ name: 'prasasan-add' }">
            <span>Add </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prasasan',
  head() {
    return {
      title: 'Prasasan - ',
    }
  },
}
</script>

<style></style>
