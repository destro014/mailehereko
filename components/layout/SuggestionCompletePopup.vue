<template>
  <div class="popup">
    <div class="popup-wrapper">
      <div class="popup-close" @click="closePopup">
        <Icon name="close" />
      </div>
      <div class="icon-container">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M99.3 40.4578C99.3 41.2078 99.3 41.9578 99.25 42.6578C91.6 39.8078 82.6 41.5578 76.6 46.9578C72.55 43.3078 67.3 41.2578 61.7 41.2578C49.4 41.2578 39.4 51.308 39.4 63.708C39.4 77.858 46.5 88.208 53.3 94.908C52.75 94.858 52.3 94.758 51.9 94.608C38.95 90.158 10 71.758 10 40.4578C10 26.6578 21.0999 15.5078 34.7999 15.5078C42.95 15.5078 50.15 19.4078 54.65 25.4578C59.2 19.4078 66.4 15.5078 74.5 15.5078C88.2 15.5078 99.3 26.6578 99.3 40.4578Z"
            fill="url(#paint0_linear_780:2105)"
          />
          <path
            d="M89.9995 47.9492C84.6495 47.9492 79.7995 50.5495 76.7995 54.5495C73.7995 50.5495 68.9995 47.9492 63.5995 47.9492C54.4995 47.9492 47.0996 55.3495 47.0996 64.5495C47.0996 68.0995 47.6496 71.349 48.6496 74.349C53.3495 89.199 67.7995 98.0495 74.9495 100.5C75.9495 100.849 77.5995 100.849 78.6495 100.5C85.7995 98.0495 100.25 89.199 104.95 74.349C105.95 71.299 106.5 68.0495 106.5 64.5495C106.5 55.3495 99.0995 47.9492 89.9995 47.9492Z"
            fill="url(#paint1_linear_780:2105)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_780:2105"
              x1="54.65"
              y1="15.5078"
              x2="54.65"
              y2="94.908"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF33F7" />
              <stop offset="0.503125" stop-color="#B66DFF" />
              <stop offset="1" stop-color="#7B6EF6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_780:2105"
              x1="76.7996"
              y1="47.9492"
              x2="76.7996"
              y2="100.762"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF33F7" />
              <stop offset="0.503125" stop-color="#B66DFF" />
              <stop offset="1" stop-color="#7B6EF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h4>Thank you for your suggestion</h4>
      <p>
        Your suggestion has been succesfully added to my watchlist, I will
        manage sometime to watch your suggestion. ❤
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggestionCompletePopup',
  data() {
    return {
      popupOpen: true,
    }
  },
  methods: {
    closePopup() {
      this.$emit('closed', true)
    },
  },
}
</script>

<style></style>
