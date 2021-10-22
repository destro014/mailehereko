<template>
  <nav>
    <div class="navbar container">
      <div class="brand">
        <NuxtLink :to="{ name: 'index' }"><Logo /> </NuxtLink>
      </div>
      <div class="menu">
        <ul class="menu-items">
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
            <NuxtLink class="nav-link cta" :to="{ name: 'prasasan' }">
              <span>Dashboard </span>
            </NuxtLink>
          </li>
          <li v-if="isLoggedIn">
            <NuxtLink
              class="nav-link cta"
              :to="{ name: 'prasasan-suggestions' }"
            >
              <span>Suggestions </span>
            </NuxtLink>
          </li>

          <li v-if="isLoggedIn">
            <NuxtLink class="nav-link cta" :to="{ name: 'prasasan-add' }">
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
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import { getAuth, signOut } from 'firebase/auth'

export default {
  computed: {
    ...mapState({
      authUser: (state) => state.users.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'users/isLoggedIn',
    }),
  },
  name: 'Navbar',
  data() {
    return {
      // user: false,
    }
  },
  methods: {
    async logout() {
      await this.$fire.auth
        .signOut()
        .then(() => {
          this.$router.push('/bhitra')
        })
        .catch((error) => {
          // An error happened.
        })
    },
  },
}
</script>

<style></style>
