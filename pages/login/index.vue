<template>
  <div class="login-page page container">
    <div class="page-wrapper">
      <div class="image-container">
        <img
          src="~assets/img/login-illustration.png"
          alt="3d Man with computer on hand"
        />
      </div>
      <div class="form-container">
        <div class="form-wrapper">
          <h1>Login</h1>
          <form @submit.prevent="login" class="login" id="login">
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="eg. hello@example.com"
              autocomplete="username"
              leftIcon="email"
              :state="state.email"
              :hasFeedback="true"
              :feedback="feedbacks.email"
              v-bind:value.sync="loginCredentials.email"
            />
            <Input
              type="password"
              name="password"
              label="Password"
              :isPassword="true"
              autocomplete="current-password"
              placeholder="********"
              leftIcon="password"
              rightIcon="eye-open"
              :state="state.password"
              :hasFeedback="true"
              :feedback="feedbacks.password"
              v-bind:value.sync="loginCredentials.password"
            />
            <div class="button-container">
              <Button type="submit" :label="btnLabel" :state="btnState" />
            </div>
            <div class="form-feedback has-error">
              <p>{{ formFeedback }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUsersStore } from '~/stores/users'
import { useRouter } from 'vue-router'

const usersStore = useUsersStore()
const router = useRouter()

const loginCredentials = ref({
  email: '',
  password: '',
})
const feedbacks = ref({
  email: '',
  password: '',
})
const state = ref({
  email: '',
  password: '',
})
const formError = ref(false)
const formFeedback = ref('')
const btnLabel = ref('Login')
const btnState = ref('initial')

function validation() {
  let valid = true
  if (!loginCredentials.value.email) {
    feedbacks.value.email = 'Email address is required'
    state.value.email = 'has-error'
    valid = false
  }
  if (!loginCredentials.value.password) {
    feedbacks.value.password = 'Password is required'
    state.value.password = 'has-error'
    valid = false
  }
  return valid
}

async function login() {
  btnState.value = 'loading'
  feedbacks.value.email = ''
  state.value.email = ''
  feedbacks.value.password = ''
  state.value.password = ''
  if (validation()) {
    formError.value = false
    formFeedback.value = ''
    btnLabel.value = 'Logging in'
    await usersStore.login(
      loginCredentials.value.email,
      loginCredentials.value.password
    )
    if (usersStore.error) {
      btnState.value = 'initial'
      btnLabel.value = 'Login'
      formFeedback.value = usersStore.error
    } else if (usersStore.isLoggedIn) {
      btnState.value = 'initial'
      btnLabel.value = 'Logged In'
      setTimeout(() => {
        router.push('/admin')
      }, 1000)
    }
  } else {
    formError.value = true
    formFeedback.value = 'Please provide email and password'
  }
}
</script>

<style></style>
