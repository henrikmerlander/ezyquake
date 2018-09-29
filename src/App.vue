<template>
  <v-app id="app">
    <v-toolbar app><v-toolbar-title>ezyquake</v-toolbar-title></v-toolbar>
    <v-content>
      <v-container fluid>
        <RandomMap />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import RandomMap from './components/RandomMap.vue'

export default {
  name: 'app',
  components: {
    RandomMap,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
