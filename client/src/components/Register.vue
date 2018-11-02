<template>
  <v-layout class="mt-5 pt-5">
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2">
        <v-toolbar flat dense class="deep-purple darken-3" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <div class="error pa-2" v-html="error"></div>
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
          <br>
          <v-btn dark class="deep-purple darken-3" @click="register">Register</v-btn>
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
            async register () {
                try {
                  const response = await AuthenticationService.register({
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
  color: red;
}
</style>
