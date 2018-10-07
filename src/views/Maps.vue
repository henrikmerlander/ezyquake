<template>
  <v-container grid-list-md>
    <v-text-field v-model="searchTerm" clearable :placeholder="placeholder"></v-text-field>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 xl3 v-for="(map, index) in maps" :key="index">
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
      placeholder: 'Campgrounds...',
      searchTerm: '',
    }
  },
  created() {
    setInterval(() => {
      this.placeholder = maps[Math.floor(Math.random() * maps.length)].name + '...'
    }, 1300);
  },
  computed: {
    maps() {
      const validMaps = this.searchTerm
        ? maps.filter(map =>
            map.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
          )
        : maps
      return validMaps.sort((a, b) => a.name.localeCompare(b.name))
    },
  },
}
</script>
