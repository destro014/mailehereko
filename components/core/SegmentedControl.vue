.
<template>
  <div class="segmented-control">
    <div
      class="active-indicator"
      :style="{
        width: indicatorWidth + 'rem',
        left: leftValue + 'rem',
      }"
    ></div>
    <div class="segmented-group" ref="label1Ref">
      <input
        type="radio"
        name="List Type"
        :id="value1"
        class="segmented-input"
        :value="value1"
        v-model="listType"
        @change="updateType"
      />
      <label :for="value1" class="segmented-label"> {{ label1Text }} </label>
    </div>
    <div class="segmented-group" ref="label2Ref">
      <input
        type="radio"
        name="List Type"
        :id="value2"
        class="segmented-input"
        :value="value2"
        v-model="listType"
        @change="updateType"
      />
      <label :for="value2" class="segmented-label"> {{ label2Text }} </label>
    </div>
    <div class="segmented-group" ref="label3Ref">
      <input
        type="radio"
        name="List Type"
        :id="value3"
        class="segmented-input"
        :value="value3"
        v-model="listType"
        @change="updateType"
      />
      <label :for="value3" class="segmented-label"> {{ label3Text }} </label>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useTypeStore } from '~/stores/type'

const typeStore = useTypeStore()

const listType = computed({
  get: () => typeStore.listType,
  set: (value) => typeStore.setListType(value),
})

const label1Ref = ref(null)
const label2Ref = ref(null)
const label3Ref = ref(null)
const indicatorWidth = ref(0)
const width1 = ref(0)
const width2 = ref(0)
const width3 = ref(0)
const leftValue = ref(0)

function updateType() {
  if (listType.value == 'all') {
    indicatorWidth.value = width1.value / 16
    leftValue.value = 8 / 16
  } else if (listType.value == 'movie') {
    indicatorWidth.value = width2.value / 16
    leftValue.value = (width1.value + 8) / 16
  } else if (listType.value == 'tv') {
    indicatorWidth.value = width3.value / 16
    leftValue.value = (width1.value + width2.value + 8) / 16
  }
}

function updateWidths() {
  if (label1Ref.value) width1.value = label1Ref.value.clientWidth
  if (label2Ref.value) width2.value = label2Ref.value.clientWidth
  if (label3Ref.value) width3.value = label3Ref.value.clientWidth
  updateType()
}

onMounted(() => {
  // Wait for next tick to ensure DOM is rendered
  nextTick(() => {
    updateWidths()
  })
})

// Watch for changes in listType to update indicator
watch(listType, () => {
  updateType()
})

const label1Text = 'All'
const label2Text = 'Movies'
const label3Text = 'TV Shows'
const value1 = 'all'
const value2 = 'movie'
const value3 = 'tv'
</script>

<style></style>
