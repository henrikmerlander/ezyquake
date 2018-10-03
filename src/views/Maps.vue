<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 class="map" flex v-for="(map, index) in maps" :key="index">
        <Map :map="map" />
      </v-flex>
    </v-layout>
  </v-container>
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
