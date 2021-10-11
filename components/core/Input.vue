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
      v-model="value"
      @input="$emit('update:value', value)"
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

<script>
export default {
  name: 'Input',
  props: [
    'type',
    'name',
    'isPassword',
    'autocomplete',
    'label',
    'placeholder',
    'required',
    'leftIcon',
    'rightIcon',
    'hasFeedback',
    'feedback',
    'state',
  ],
  data() {
    return {
      value: null,
      className: null,
      newRightIcon: null,
      newType: null,
      clickable: null,
    }
  },
  beforeMount() {
    if (this.isPassword) {
      this.clickable = true
    }
    if (this.valid) {
      this.className = 'success'
    } else if (this.valid == null) {
      this.className = ''
    } else {
      this.className = 'error'
    }
    this.newType = this.type
    this.newRightIcon = this.rightIcon
  },
  methods: {
    togglePassword() {
      if (this.newType == 'password') {
        this.newType = 'text'
        this.newRightIcon = 'eye-close'
      } else {
        this.newType = 'password'
        this.newRightIcon = 'eye-open'
      }
    },
  },
}
</script>

<style></style>
