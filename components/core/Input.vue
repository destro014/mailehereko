<template>
  <div class="input-group">
    <div class="left-icon icon-wrapper">
      <Icon :name="leftIcon" />
    </div>
    <input
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="value"
      @input="$emit('update:value', value)"
    />
    <label :for="name">{{ label }}</label>
    <div class="right-icon icon-wrapper" v-if="rightIcon">
      <Icon :name="leftIcon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['type', 'name', 'label', 'placeholder', 'leftIcon', 'rightIcon'],
  data() {
    return {
      value: null,
    }
  },
}
</script>

<style></style>
