<template>
  <v-app id="inspire">
    <v-jumbotron>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">{{msg}}</h3>
            <v-btn dark
              class="mx-0"
              color="deep-purple"
              large>
              See more
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Vue.js & Express App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
