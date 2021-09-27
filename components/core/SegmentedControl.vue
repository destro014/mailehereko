.
<template>
  <div class="segmented-control">
    <div
      class="active-indicator"
      :style="{
        width: indicatorWidth + 'px',
        left: leftValue + 'px',
      }"
    ></div>
    <div class="segmented-group" ref="label1">
      <input
        type="radio"
        name="List Type"
        :id="value1"
        class="segmented-input"
        :value="value1"
        v-model="listType"
        @change="updateType"
      />
      <label :for="value1" class="segmented-label"> {{ label1 }} </label>
    </div>
    <div class="segmented-group" ref="label2">
      <input
        type="radio"
        name="List Type"
        :id="value2"
        class="segmented-input"
        :value="value2"
        v-model="listType"
        @change="updateType"
      />
      <label :for="value2" class="segmented-label"> {{ label2 }} </label>
    </div>
    <div class="segmented-group" ref="label3">
      <input
        type="radio"
        name="List Type"
        :id="value3"
        class="segmented-input"
        :value="value3"
        v-model="listType"
        @change="updateType"
      />
      <label :for="value3" class="segmented-label"> {{ label3 }} </label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SegmentedControl',
  data() {
    return {
      label1: 'All',
      label2: 'Movies',
      label3: 'TV Shows',
      value1: 'all',
      value2: 'movie',
      value3: 'tv',
      // listType: 'all',
      indicatorWidth: null,
      width1: null,
      width2: null,
      width3: null,
      leftValue: null,
    }
  },
  methods: {
    updateType() {
      if (this.listType == this.value1) {
        this.indicatorWidth = this.width1
        this.leftValue = 8
      } else if (this.listType == this.value2) {
        this.indicatorWidth = this.width2
        this.leftValue = this.width1 + 8
      } else if (this.listType == this.value3) {
        this.indicatorWidth = this.width3
        this.leftValue = this.width1 + this.width2 + 8
      }
    },
  },
  mounted() {
    this.width1 = this.$refs.label1.clientWidth
    this.width2 = this.$refs.label2.clientWidth
    this.width3 = this.$refs.label3.clientWidth
    this.updateType()
  },
  computed: {
    listType: {
      get() {
        return this.$store.state.type.listType
      },
      set(value) {
        this.$store.dispatch('type/setListType', value)
      },
    },
  },
}
</script>

<style></style>
