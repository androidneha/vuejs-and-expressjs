<template>
  <v-layout class="mt-5 pt-5">
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2">
        <v-toolbar flat dense class="deep-purple darken-3" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            name="email"
            v-model="email"
            type="email">
          </v-text-field>
          <v-text-field
            label="Password"
            name="password"
            v-model="password"
            type="password">
          </v-text-field>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn dark class="deep-purple darken-3" @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    watch: {
      email (value) {
        //console.log('email has changed', value)
      }
    },
    methods: {
      async login () {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (e) {
          this.error = e.response.data.error
        }

      }
    }
  }
</script>

<style scoped>
  .error {
    color: white;
  }
</style>
