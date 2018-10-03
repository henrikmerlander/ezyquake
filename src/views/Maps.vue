<template>
  <v-layout row wrap>
    <v-flex class="map" flex v-for="(map, index) in maps" :key="index">
      <Map :map="map" />
    </v-flex>
  </v-layout>
</template>

<script>
import maps from '@/data/maps'
import Map from '@/components/Map'

export default {
  components: {
    Map,
  },
  data() {
    return {
      maps: maps.sort((a, b) => a.name.localeCompare(b.name)),
    }
  },
}
</script>

<style scoped>
.map {
  width: 350px;
  margin: 0 10px 10px 0;
}
</style>
