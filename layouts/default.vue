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
import { useUsersStore } from '~/stores/users'

const listsStore = useListsStore()
const usersStore = useUsersStore()

onMounted(() => {
  listsStore.fetchLists()
  usersStore.initAuthListener()
})
</script>
<style></style>
