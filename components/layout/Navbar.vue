<template>
  <nav>
    <div class="navbar container">
      <div class="brand">
        <NuxtLink :to="{ name: 'index' }"><Logo /> </NuxtLink>
      </div>
      <div class="menu">
        <ul class="menu-items">
          <li>
            <NuxtLink class="nav-link" :to="{ name: 'movies' }"
              >Movies
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav-link" :to="{ name: 'tvshows' }"
              >TV Shows
            </NuxtLink>
          </li>
          <li v-if="user">
            <NuxtLink class="nav-link has-icon" :to="{ name: 'suggest' }">
              <Icon name="logout" />
              <span>Logout</span>
            </NuxtLink>
          </li>
          <li v-if="user">
            <NuxtLink class="nav-link cta" :to="{ name: 'suggest' }">
              <span>Dashboard </span>
            </NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink class="nav-link has-icon" :to="{ name: 'suggest' }">
              <span>Suggest me</span>
              <Icon name="arrow-right" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      user: false,
    }
  },
}
</script>

<style></style>
