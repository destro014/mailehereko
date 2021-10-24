<template>
  <div class="popup manual-suggestion-popup" @click="clickOutside">
    <div class="popup-wrapper">
      <div class="popup-close" @click="closePopup">
        <Icon name="close" />
      </div>
      <h4>Suggest something to watch</h4>
      <form @submit.prevent="suggest" class="login" id="login">
        <Input
          type="text"
          name="title"
          label="Title"
          placeholder="eg. Avenger"
          leftIcon="movie"
          v-bind:value.sync="suggestion.title"
          required="required"
        />
        <Input
          type="text"
          name="link"
          label="Link (if available)"
          placeholder="https://example.com"
          leftIcon="link"
          v-bind:value.sync="suggestion.link"
        />
        <div class="button-container">
          <Button type="submit" :label="btnLabel" :state="btnState" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggestionCompletePopup',
  data() {
    return {
      popupOpen: true,
      suggestion: {
        title: null,
        link: null,
      },
      btnState: 'initial',
      btnLabel: 'Suggest',
    }
  },
  methods: {
    closePopup() {
      this.$emit('closed')
    },
    async suggest() {
      this.btnState = 'loading'
      await this.$fire.firestore
        .collection('manualsuggestions')
        .add(this.suggestion)
        .then((doc) => {
          this.$emit('suggested')
          this.btnState = 'initial'
          this.btnLabel = 'Suggested'
          this.actionPending = false
        })
    },
    clickOutside() {
      console.log('click outsie')
    },
  },
}
</script>

<style></style>
