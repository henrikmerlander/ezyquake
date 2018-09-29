<template>
  <div>
    <form v-on:submit.prevent="randomize">
      <v-layout column align-center>
        <v-radio-group v-model="gametype">
          <p>Game Type</p>
          <v-radio label="All" value=""></v-radio>
          <v-radio label="Clan Arena" value="ca"></v-radio>
          <v-radio label="Free For All" value="ffa"></v-radio>
          <v-radio label="Capture The Flag" value="ctf"></v-radio>
          <v-radio label="Duel" value="duel"></v-radio>
        </v-radio-group>
      </v-layout>
      <v-btn type="submit">Randomize</v-btn>
    </form>
    <template v-if="randomMap">
      <h2>{{ randomMap.name }}</h2>
      <v-img contain :max-height="500" :src="'http://epsy46.free.fr/qlmaps/levelshots/' + randomMap.key + '.jpg'" />
    </template>
  </div>
</template>

<script>
import maps from '@/data/maps'

export default {
  data() {
    return {
      gametype: 'ca',
      randomMap: '',
    }
  },
  methods: {
    randomize() {
      const validMaps = maps
        .filter(map => map !== this.map)
        .filter(map => !map.tags.includes('custom'))
        .filter(map => this.gametype === '' || map.tags.includes(this.gametype))

      this.randomMap = validMaps[Math.floor(Math.random() * validMaps.length)]
    },
  },
}
</script>
