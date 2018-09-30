<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <form v-on:submit.prevent="randomize">
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
    </v-flex>
    <v-flex xs12 sm6>
      <v-dialog-transition>
        <v-card class="random-map" v-if="randomMap" max-width="500">
          <v-img class="white--text" :height="500" :src="'http://epsy46.free.fr/qlmaps/levelshots/' + randomMap.key + '.jpg'">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ randomMap.name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <v-chip label small :outline="true" v-for="tag in randomMap.tags" :key="tag">{{ tag }}</v-chip>
          </v-card-title>
        </v-card>
      </v-dialog-transition>
    </v-flex>
  </v-layout>
</template>

<script>
import maps from '@/data/maps'

export default {
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
