<template>
  <v-app dark id="app">
    <v-toolbar app>
      <v-toolbar-title>ezyquake</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn href="steam://rungameid/282440" flat>Play Quake Live</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
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
