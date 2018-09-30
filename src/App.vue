<template>
  <v-app dark id="app">
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
