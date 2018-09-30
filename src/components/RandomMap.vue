<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <form v-on:submit.prevent="randomize">
        <v-radio-group v-model="gametype">
          <p>Game Type</p>
          <v-radio label="All" value=""></v-radio>
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
            <span class="tag" v-for="tag in randomMap.tags" :key=tag>[{{ tag }}]</span>
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
      gametype: 'ca',
      randomMap: '',
    }
  },
  computed: {
    validMaps() {
      return maps
        .filter(map => map !== this.randomMap)
        .filter(map => !map.tags.includes('custom'))
        .filter(map => this.gametype === '' || map.tags.includes(this.gametype))
    }
  },
  methods: {
    randomize() {
      this.randomMap = ''

      setTimeout(
        () => this.randomMap = this.validMaps[Math.floor(Math.random() * this.validMaps.length)], 
        200
      )
    },
  },
}
</script>
<style>
.tag {
  margin-right: 5px;
}
</style>
