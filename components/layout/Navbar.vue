<template>
  <nav class="bg-blur">
    <div class="navbar container">
      <div class="brand">
        <NuxtLink :to="{ name: 'index' }"><Logo /> </NuxtLink>
      </div>
      <div class="menu-wrapper" :class="{ active: menuOpened }">
        <div class="menu-container">
          <div class="menu-close menu-item" @click="menuClick">
            <Icon name="close" />
          </div>
          <ul class="menu">
            <li v-if="!isLoggedIn">
              <NuxtLink class="nav-link" :to="{ name: 'movies' }"
                >Movies
              </NuxtLink>
            </li>
            <li v-if="!isLoggedIn">
              <NuxtLink class="nav-link" :to="{ name: 'tvshows' }"
                >TV Shows
              </NuxtLink>
            </li>
            <li v-if="!isLoggedIn">
              <NuxtLink class="nav-link has-icon" :to="{ name: 'suggest' }">
                <span>Suggest me</span>
                <Icon name="arrow-right" />
              </NuxtLink>
            </li>
            <li v-if="isLoggedIn">
              <NuxtLink class="nav-link cta" :to="{ name: 'admin' }">
                <span>Dashboard </span>
              </NuxtLink>
            </li>
            <li v-if="isLoggedIn">
              <NuxtLink
                class="nav-link cta"
                :to="{ name: 'admin-suggestions' }"
              >
                <span>Suggestions </span>
              </NuxtLink>
            </li>

            <li v-if="isLoggedIn">
              <NuxtLink class="nav-link cta" :to="{ name: 'admin-add' }">
                <span>Add </span>
              </NuxtLink>
            </li>
            <li v-if="isLoggedIn">
              <a href="#" class="nav-link has-icon" @click="logout">
                <Icon name="logout" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="hamburger menu-item" @click="menuClick">
        <Icon name="menu" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useUsersStore } from '~/stores/users'

const usersStore = useUsersStore()
const isLoggedIn = computed(() => usersStore.isLoggedIn)
const authUser = computed(() => usersStore.authUser)

const menuOpened = ref(false)
const actionActive = ref(false)
const windowWidth = ref(null)

function menuClick() {
  menuOpened.value = !menuOpened.value
  document.body.style.overflowY = menuOpened.value ? 'hidden' : 'visible'
}
function menuClose() {
  menuOpened.value = false
  document.body.style.overflowY = 'visible'
}
function handleResize() {
  windowWidth.value = window.innerWidth
  if (windowWidth.value < 767) {
    menuOpened.value = false
    document.body.style.overflowY = 'visible'
    actionActive.value = true
  } else {
    menuOpened.value = true
    actionActive.value = false
  }
}
onMounted(() => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value < 767) {
    menuOpened.value = false
    actionActive.value = true
    document.body.style.overflowY = 'visible'
  } else {
    menuOpened.value = true
    actionActive.value = false
  }
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style></style>
