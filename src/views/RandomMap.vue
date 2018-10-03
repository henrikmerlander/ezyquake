<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <form @submit.prevent="randomize">
        <v-radio-group v-model="gameType">
          <p>Game Type</p>
          <v-radio label="All" value="all"></v-radio>
          <v-radio label="Clan Arena" value="ca"></v-radio>
          <v-radio label="Free For All" value="ffa"></v-radio>
          <v-radio label="Capture The Flag" value="ctf"></v-radio>
          <v-radio label="Duel" value="duel"></v-radio>
        </v-radio-group>
        <v-btn type="submit">Randomize</v-btn>
      </form>
      <p>Some maps are only available in the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=539421606">Quake Live Extras Pack</a></p>
    </v-flex>
    <v-flex xs12 sm6>
      <Map :map="randomMap" />
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
      gameType: 'all',
      randomMap: '',
    }
  },
  computed: {
    validMaps() {
      return maps
        .filter(map => !map.tags.includes('custom'))
        .filter(
          map => this.gameType === 'all' || map.tags.includes(this.gameType),
        )
    },
  },
  methods: {
    randomize() {
      const timeout = this.randomMap === '' ? 0 : 200

      this.randomMap = ''

      setTimeout(
        () =>
          (this.randomMap = this.validMaps[
            Math.floor(Math.random() * this.validMaps.length)
          ]),
        timeout,
      )
    },
  },
}
</script>
