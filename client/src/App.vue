<template>
  <div id="app">
    <page-header/>
    <main>
      <v-container>
        <router-view/>
      </v-container>
    </main>
  </div>
</template>

<script>

import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
