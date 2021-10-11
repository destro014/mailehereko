<template>
  <div class="index page container">
    <div class="header">
      <h1>MaileHereko</h1>
      <p>
        List of movies and TV Shows, I,
        <a
          href="https://pramodpoudel.com.np"
          class="external-links"
          target="_blank"
          >Pramod Poudel</a
        >
        have watched till date. Explore what I have watched and also feel free
        to make a
        <NuxtLink :to="{ name: 'suggest' }" class="external-links">
          suggestion.
        </NuxtLink>
        😉
      </p>
      <div class="search-wrapper">
        <Input
          type="text"
          name="search"
          label="Search movies or tv shows"
          placeholder="eg. Avenger"
          leftIcon="search"
          v-bind:value.sync="searchTerm"
        />
      </div>
      <div class="segmented-control-wrapper">
        <SegmentedControl />
      </div>
      <div class="category-title">
        <h3>
          {{ listTitle }}
          <span>({{ filteredList.length }})</span>
        </h3>
      </div>
    </div>
    <div class="loader-container list-grid" v-if="loading">
      <CardLoader :hasAction="false" v-for="index in 8" :key="index" />
    </div>
    <div class="lists-container list-grid">
      <Card
        :hasAction="false"
        v-for="item in filteredList"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  head() {
    return {
      title: '',
    }
  },
  data() {
    return {
      searchTerm: null,
    }
  },
  mounted() {
    if (this.lists.length < 1) {
      this.$store.dispatch('lists/getLists')
    }
  },
  watch: {
    searchTerm: function (val, oldVal) {
      this.$store.dispatch('search/setSearchTerm', this.searchTerm)
    },
  },
  computed: mapState({
    stateSearchTerm() {
      return this.$store.state.search.searchTerm
    },
    listTitle() {
      return this.$store.state.type.listTitle
    },
    listType() {
      return this.$store.state.type.listType
    },
    lists() {
      return this.$store.state.lists.lists
    },
    loading() {
      return this.$store.state.lists.loading
    },
    filteredList() {
      let mediaType
      if (this.listType == 'all') {
        mediaType = ''
      } else mediaType = this.listType
      return this.lists.filter((item) => {
        if (item.media_type == 'movie') {
          return (
            item.original_title
              .toLowerCase()
              .includes(this.stateSearchTerm.toLowerCase()) &&
            item.media_type.includes(mediaType)
          )
        } else {
          return (
            item.original_name
              .toLowerCase()
              .includes(this.stateSearchTerm.toLowerCase()) &&
            item.media_type.includes(mediaType)
          )
        }
      })
    },
  }),
}
</script>
