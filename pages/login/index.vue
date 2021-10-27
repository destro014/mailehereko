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

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginCredentials: {
        email: null,
        password: null,
      },
      feedbacks: {
        email: null,
        password: null,
      },
      state: {
        email: null,
        password: null,
      },
      formError: false,
      formFeedback: null,
      btnLabel: 'Login',
      btnState: 'initial',
    }
  },
  methods: {
    validation() {
      let validationValue
      if (!this.loginCredentials.email) {
        this.feedbacks.email = 'Email address is required'
        this.state.email = 'has-error'
        validationValue = false
      }
      if (!this.loginCredentials.password) {
        this.feedbacks.password = 'Password is required'
        this.state.password = 'has-error'
        validationValue = false
      } else {
        validationValue = true
      }
      return validationValue
    },
    async login() {
      this.btnState = 'loading'
      this.feedbacks.email = ' '
      this.state.email = ''
      this.feedbacks.password = ' '
      this.state.password = ''
      if (this.validation()) {
        this.formError = false
        this.formFeedback = ''
        this.btnLabel = 'Logging in'
        await this.$fire.auth
          .signInWithEmailAndPassword(
            this.loginCredentials.email,
            this.loginCredentials.password
          )
          .then(() => {
            this.btnState = 'initial'
            this.btnLabel = 'Logged In'
            setTimeout(() => {
              this.$router.push('/admin')
            }, 1000)
          })
          .catch((error) => {
            this.btnState = 'initial'
            if (error.code == 'auth/too-many-requests') {
              this.state.email = 'has-error'
              this.feedbacks.email =
                'Access to this account has been temporarily disabled due to many failed login attempts. Try again later'
            } else if (error.code == 'auth/user-not-found') {
              this.state.email = 'has-error'
              this.feedbacks.email =
                'There is no account associated with this email'
            } else if (error.code == 'auth/wrong-password') {
              this.state.password = 'has-error'
              this.feedbacks.password =
                'You have entered the wrong password please try again'
            } else {
              this.formError = false
              this.formFeedback = error.msg
            }
            this.btnLabel = 'Login'
          })
      } else {
        this.hasFeedback = true
        this.success = false
        this.feedback = 'Please provide email and password'
      }
    },
  },
}
</script>

<style></style>
