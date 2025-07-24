<template>
  <NuxtErrorBoundary>
    <div class="default-view">
      <div class="status-bar"></div>
      <Navbar />
      <NuxtPage keep-alive />
      <Footer />
    </div>
  </NuxtErrorBoundary>
</template>
<script setup>
import { onMounted } from 'vue'
import { useListsStore } from '~/stores/lists'

const listsStore = useListsStore()
onMounted(() => {
  listsStore.fetchLists()
})
</script>
<style></style>
