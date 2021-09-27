<template>
  <i class="mh-icon" :class="`icon-` + name" v-html="icon"> </i>
</template>

<script>
export default {
  name: 'Icon',
  props: ['name', 'size'],
  data() {
    return {
      icon: null,
    }
  },
  methods: {
    renderIcon() {
      if (this.name == 'arrow-right') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M14.4299 5.92999L20.4999 12L14.4299 18.07"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.5 12H20.33"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'movie') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.52002 7.10999H21.48"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.52002 2.10999V6.96999"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.48 2.10999V6.51999"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.75 14.45V13.25C9.75 11.71 10.84 11.08 12.17 11.85L13.21 12.45L14.25 13.05C15.58 13.82 15.58 15.08 14.25 15.85L13.21 16.45L12.17 17.05C10.84 17.82 9.75 17.19 9.75 15.65V14.45V14.45Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'link') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24" >
            <path d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'close') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.75732 7.75735L16.2426 16.2426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.75732 16.2426L16.2426 7.75735" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'thumbs-up') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.35003 19.58 9.35003H15.58C14.98 9.35003 14.48 8.85003 14.58 8.15003L15.08 4.95003C15.28 4.05003 14.68 3.05003 13.78 2.75003C12.98 2.45003 11.98 2.85003 11.58 3.45003L7.47998 9.55003" stroke-width="1.5" stroke-miterlimit="10"/>
            <path d="M2.37988 18.35V8.55002C2.37988 7.15002 2.97988 6.65002 4.37988 6.65002H5.37988C6.77988 6.65002 7.37988 7.15002 7.37988 8.55002V18.35C7.37988 19.75 6.77988 20.25 5.37988 20.25H4.37988C2.97988 20.25 2.37988 19.75 2.37988 18.35Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'plus') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24" >
            <path d="M6 12H18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 18V6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'watched') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24" >
            <path d="M22 9V15C22 15.22 22 15.44 21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98C15.45 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.52002 7.10999H21.48"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.52002 2.10999V6.96997"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.48 2.10999V6.52002"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23 18.5C23 19.34 22.76 20.14 22.35 20.82C22.11 21.22 21.81 21.58 21.46 21.88C20.67 22.58 19.64 23 18.5 23C17.43 23 16.44 22.62 15.67 21.98H15.66C15.26 21.66 14.92 21.27 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.08 14.65 15.81 15.69 14.99C16.46 14.37 17.44 14 18.5 14C19.91 14 21.16 14.64 21.98 15.65C22.62 16.42 23 17.42 23 18.5Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.75 18.5L17.86 19.61L20.26 17.39"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'star') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M13.7299 3.51L15.4899 7.03C15.7299 7.52 16.3699 7.99 16.9099 8.08L20.0999 8.61C22.1399 8.95 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95 3.89991 8.61L7.08991 8.08C7.61991 7.99 8.25991 7.52 8.49991 7.03L10.2599 3.51C11.2199 1.6 12.7799 1.6 13.7299 3.51Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'logout') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M17.44 14.62L20 12.06L17.44 9.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.76001 12.06H19.93"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
      if (this.name == 'search') {
        this.icon = `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 22L20 20"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      }
    },
  },
  beforeMount() {
    this.renderIcon()
  },
  watch: {
    name: function (newVal, oldVal) {
      this.name = newVal
      this.renderIcon()
    },
  },
}
</script>

<style></style>
