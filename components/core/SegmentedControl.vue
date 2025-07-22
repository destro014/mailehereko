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
    <div class="segmented-group" :ref="label1">
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
    <div class="segmented-group" :ref="label2">
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
    <div class="segmented-group" :ref="label3">
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
import { ref, computed, onMounted } from 'vue'
import { useTypeStore } from '~/stores/type'

const typeStore = useTypeStore()

const listType = computed({
  get: () => typeStore.listType,
  set: (value) => typeStore.setListType(value),
})

const label1 = ref(null)
const label2 = ref(null)
const label3 = ref(null)
const indicatorWidth = ref(null)
const width1 = ref(null)
const width2 = ref(null)
const width3 = ref(null)
const leftValue = ref(null)

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

onMounted(() => {
  width1.value = label1.value?.clientWidth
  width2.value = label2.value?.clientWidth
  width3.value = label3.value?.clientWidth
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
