<template>
  <div class="card-wrapper">
    <div class="card-content">
      <div class="card-rating">
        <Icon name="star" />
        <p>{{ item.vote_average }}</p>
      </div>
      <NuxtLink
        class="card-image image"
        :to="{
          name: this.item.media_type + '-id',
          params: { id: this.item.id },
        }"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
          :alt="item.original_title || item.original_name"
        />
      </NuxtLink>
      <div class="card-info">
        <NuxtLink
          class="title"
          :to="{
            name: this.item.media_type + '-id',
            params: { id: this.item.id },
          }"
          >{{ item.original_title || item.original_name }}
        </NuxtLink>
        <button
          class="btn card-action"
          v-if="hasAction"
          :class="[successClass]"
          @click="buttonAction"
        >
          <span v-if="actionPending" class="loader">
            <div class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
            </div>
          </span>
          <div class="btn-icon icon-left" :class="{ hidden: actionPending }">
            <Icon :name="newAction" />
          </div>
          <div class="action-name">{{ newActionName }}</div>
        </button>
      </div>
    </div>
    <!-- <div class="card-bg image">
      <img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path" alt="" />
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Card',
  props: ['hasAction', 'action', 'actionName', 'item', 'admin'],
  data() {
    return {
      successClass: null,
      actionPending: false,
      newAction: null,
      newActionName: null,
    }
  },
  mounted() {
    this.newAction = this.action
    this.newActionName = this.actionName
    if (this.action == 'thumbs-up' || this.action == 'add') {
      this.lists.forEach((item) => {
        if (this.item.id == item.id) {
          this.successClass = 'success'
          this.newActionName = 'Already watched'
          this.newAction = 'watched'
        }
      })
    }
  },
  methods: {
    async buttonAction() {
      if (this.action == 'watched') {
        console.log('No action required')
      }
      if (this.action == 'plus') {
        this.newActionName = 'Adding'
        this.actionPending = true
        this.newAction = ''
        let data = this.item
        await this.$fire.firestore
          .collection('lists')
          .doc(this.item.id + this.item.media_type)
          .set(data)
          .then((doc) => {
            if (this.admin) {
              this.$fire.firestore
                .collection('suggestions')
                .doc(this.item.id + this.item.media_type)
                .delete()
                .then(() => {})
            }
            this.newActionName = 'Added'
            this.newAction = 'added'
            this.actionPending = false
            this.successClass = 'success'
          })
      }
      if (this.newAction == 'thumbs-up') {
        this.newActionName = 'Suggesting'
        this.actionPending = true
        this.newAction = ''
        let data = this.item
        await this.$fire.firestore
          .collection('suggestions')
          .doc(this.item.id + this.item.media_type)
          .set(data)
          .then((doc) => {
            this.$emit('suggested', true)
            this.newActionName = 'Suggested'
            this.newAction = 'added'
            this.successClass = 'success'
            this.actionPending = false
          })
      }
    },
  },
  computed: mapState({
    lists() {
      return this.$store.state.lists.lists
    },
  }),
}
</script>

<style></style>
