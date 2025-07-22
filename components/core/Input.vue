<template>
  <div class="input-group" :class="state">
    <div class="left-icon icon-wrapper">
      <Icon :name="leftIcon" />
    </div>
    <input
      :type="newType"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :value="modelValue"
      @input="onInput"
    />
    <label :for="name">{{ label }}</label>
    <div
      class="right-icon icon-wrapper"
      v-if="rightIcon"
      :class="{ 'cursor-pointer': clickable }"
    >
      <Icon
        :name="newRightIcon"
        @click.native="togglePassword"
        v-if="isPassword"
      />
      <Icon :name="newRightIcon" v-else />
    </div>
    <div class="input-feedback" v-if="hasFeedback">
      <p class="small feedback">{{ feedback }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: String,
  type: String,
  name: String,
  isPassword: Boolean,
  autocomplete: String,
  label: String,
  placeholder: String,
  required: [String, Boolean],
  leftIcon: String,
  rightIcon: String,
  hasFeedback: Boolean,
  feedback: String,
  state: String,
})
const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)
watch(
  () => props.modelValue,
  (val) => {
    value.value = val
  }
)

function onInput(e) {
  emit('update:modelValue', e.target.value)
}

const clickable = ref(false)
const newRightIcon = ref(props.rightIcon)
const newType = ref(props.type)

if (props.isPassword) clickable.value = true

function togglePassword() {
  if (newType.value === 'password') {
    newType.value = 'text'
    newRightIcon.value = 'eye-close'
  } else {
    newType.value = 'password'
    newRightIcon.value = 'eye-open'
  }
}
</script>

<style></style>
