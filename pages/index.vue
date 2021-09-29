<template>
  <div class="index page container">
    <div class="header">
      <h1>MaileHereko</h1>
      <p>
        List of movies and TV Shows, I,
        <a href="https://pramodpoudel.com.np">Pramod Poudel</a> have watched
        till date. Explore what I have watched and also feel free to make a
        suggestion. 😉
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
          <span>(120)</span>
        </h3>
      </div>
    </div>
    <div class="loader-container list-grid" v-if="loading">
      <CardLoader :hasAction="false" v-for="index in 8" :key="index" />
    </div>
    <div class="lists-container list-grid">
      <Card
        :hasAction="false"
        v-for="item in lists"
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
      loading: true,
      lists: [],
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
  }),
  mounted() {
    this.$fire.firestore
      .collection('lists')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.lists.push(doc.data())
        })
        this.loading = false
      })
  },
}
</script>
