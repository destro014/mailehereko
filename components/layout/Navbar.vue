<template>
  <nav>
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

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      menuOpened: false,
      actionActive: false,
      blah: '0',
      windowWidth: null,
    }
  },
  methods: {
    menuClick() {
      this.menuOpened = !this.menuOpened
      if (this.menuOpened) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'visible'
      }
    },
    menuClose() {
      this.menuOpened = false
      document.body.style.overflowY = 'visible'
    },
    handleResize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth < 767) {
        this.menuOpened = false
        document.body.style.overflowY = 'visible'
        this.actionActive = true
      } else {
        this.menuOpened = true
        this.actionActive = false
      }
    },
    async logout() {
      await this.$fire.auth
        .signOut()
        .then(() => {
          this.$router.push('/login')
        })
        .catch((error) => {
          // An error happened.
        })
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth
    if (this.windowWidth < 767) {
      this.menuOpened = false
      this.actionActive = true

      document.body.style.overflowY = 'visible'
    } else {
      this.menuOpened = true
      this.actionActive = false
    }
    window.addEventListener('resize', this.handleResize)
  },
  watch: {
    $route(to, from) {
      this.menuOpened = false
      this.actionActive = false
      document.body.style.overflowY = 'visible'
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    ...mapState({
      authUser: (state) => state.users.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'users/isLoggedIn',
    }),
  },
}
</script>

<style></style>
