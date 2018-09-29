<template>
  <div>
    <form v-on:submit.prevent="randomize">
      <div class="gametype">
        <label>
          <input v-model="gametype" type="radio" name="gametype" value="" />
          All
        </label>
        <label>
          <input v-model="gametype" type="radio" name="gametype" value="ca" />
          Clan Arena
        </label>
        <label>
          <input v-model="gametype" type="radio" name="gametype" value="ffa" />
          Free For All
        </label>
        <label>
          <input v-model="gametype" type="radio" name="gametype" value="ctf" />
          Capture The Flag
        </label>
        <label>
          <input v-model="gametype" type="radio" name="gametype" value="duel" />
          Duel
        </label>
      </div>
      <button type="submit">Randomize</button>
    </form>
    <template v-if="randomMap">
      <p>{{ randomMap.name }}</p>
      <img :src="'http://epsy46.free.fr/qlmaps/levelshots/' + randomMap.key + '.jpg'" />
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

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gametype {
  text-align: left;
}

label {
  display: block;
  margin: 5px;
}

img {
  max-width: 100%;
}
</style>
