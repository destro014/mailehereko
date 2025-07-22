<template>
  <div class="card-wrapper">
    <div class="card-content">
      <div class="card-rating">
        <Icon name="star" />
        <p>{{ item.vote_average }}</p>
      </div>
      <NuxtLink v-if="routeTo" class="card-image image" :to="routeTo">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
          :alt="item.original_title || item.original_name"
        />
      </NuxtLink>
      <div class="card-info">
        <NuxtLink v-if="routeTo" class="title" :to="routeTo"
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

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useListsStore } from '~/stores/lists'

const listsStore = useListsStore()
const lists = computed(() => listsStore.lists)

const props = defineProps({
  hasAction: Boolean,
  action: String,
  actionName: String,
  item: Object,
  admin: Boolean,
})

const successClass = ref(null)
const actionPending = ref(false)
const newAction = ref(props.action)
const newActionName = ref(props.actionName)

onMounted(() => {
  if (props.action === 'thumbs-up' || props.action === 'plus') {
    lists.value.forEach((item) => {
      if (props.item.id === item.id) {
        successClass.value = 'success'
        newActionName.value = 'Already watched'
        newAction.value = 'watched'
      }
    })
  }
})

const routeTo = computed(() => {
  if (
    props.item &&
    props.item.media_type &&
    props.item.id &&
    (props.item.media_type === 'tv' || props.item.media_type === 'movie')
  ) {
    return {
      name: props.item.media_type + '-id',
      params: { id: props.item.id },
    }
  }
  // Debug logging for invalid route
  if (props.item) {
    console.warn('Invalid route for item:', props.item)
  }
  return null
})

// Note: buttonAction and Firestore logic left as-is for now
</script>

<style></style>
