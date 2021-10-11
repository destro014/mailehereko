<template>
  <button class="btn">
    <span v-if="state == 'loading'" class="loader">
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
    </span>
    <span v-if="state != 'loading'" class="label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['label', 'state'],
}
</script>

<style></style>
