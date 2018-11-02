<template>
  <v-toolbar fixed flat dense class="deep-purple darken-3" dark>
    <v-toolbar-title @click="navigateTo({name : 'home'})">V&E</v-toolbar-title>
    <v-btn flat>Songs</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="navigateTo({name : 'login'})" v-if="$store.state.isUserLoggedIn">Login</v-btn>
      <v-btn flat @click="navigateTo({name : 'register'})" v-if="$store.state.isUserLoggedIn">
        Register
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
    export default {
        name: "Header",
        methods: {
          navigateTo (route) {
            this.$router.push(route)
          }
        }
    }
</script>

<style scoped>

</style>
