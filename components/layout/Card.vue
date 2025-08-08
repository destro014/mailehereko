<template>
  <div class="card-wrapper">
    <div class="card-content">
      <div class="card-rating">
        <Icon name="star" />
        <p>{{ Number(item.vote_average).toFixed(1) }}</p>
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
import { computed, onMounted, ref, watch } from 'vue'
import { useListsStore } from '~/stores/lists'
import { useNuxtApp } from 'nuxt/app'
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'

const listsStore = useListsStore()
const lists = computed(() => listsStore.lists)

const emit = defineEmits(['suggested'])

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

// Function to check if item is already watched
function checkIfWatched() {
  if (props.action === 'thumbs-up' || props.action === 'plus') {
    const isWatched = lists.value.some((watchedItem) => {
      // More robust comparison - handle different data structures
      const currentId = props.item.id
      const currentType = props.item.media_type
      const watchedId =
        watchedItem.id || watchedItem.movie_id || watchedItem.tv_id
      const watchedType = watchedItem.media_type || watchedItem.type

      const matches = currentId == watchedId && currentType == watchedType
      return matches
    })

    if (isWatched) {
      successClass.value = 'success'
      newActionName.value = 'Already watched'
      newAction.value = 'watched'
      return true
    }
  }
  return false
}

onMounted(() => {
  checkIfWatched()
})

// Watch for changes in lists to update the state
watch(
  lists,
  () => {
    checkIfWatched()
  },
  { immediate: true }
)

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
  return null
})

async function buttonAction() {
  if (actionPending.value || successClass.value === 'success') return

  actionPending.value = true
  try {
    const { $db } = useNuxtApp()
    const db = $db

    // Check if already suggested
    const suggestionsQuery = query(
      collection(db, 'suggestions'),
      where('id', '==', props.item.id),
      where('media_type', '==', props.item.media_type)
    )
    const existingSuggestions = await getDocs(suggestionsQuery)

    if (!existingSuggestions.empty) {
      successClass.value = 'success'
      newActionName.value = 'Already suggested!'
      newAction.value = 'added'
      return
    }

    // Add to 'suggestions' collection
    await addDoc(collection(db, 'suggestions'), {
      ...props.item,
      suggestedAt: new Date().toISOString(),
      suggestedBy: 'user', // You can add user ID here if you have auth
    })

    successClass.value = 'success'
    newActionName.value = 'Suggested!'
    newAction.value = 'added'
    emit('suggested')
  } catch (e) {
    console.error('Error suggesting item:', e)
    newActionName.value = 'Error'
    newAction.value = 'close'
    // Reset after showing error
    setTimeout(() => {
      newActionName.value = props.actionName
      newAction.value = props.action
    }, 2000)
  } finally {
    actionPending.value = false
  }
}
</script>

<style></style>
