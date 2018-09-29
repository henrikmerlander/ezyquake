<template>
  <div id="app">
    <img alt="Quake Live logo" src="./assets/logo.png">
    <RandomMap />
  </div>
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
