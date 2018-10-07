<template>
  <v-card max-width="500">
    <v-img class="white--text" :height="400" :src="'http://epsy46.free.fr/qlmaps/levelshots/' + map.key + '.jpg'">
      <v-container>
        <v-layout>
          <v-flex>
            <span class="headline">{{ map.name }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-title>
      <v-chip label small disabled outline v-for="tag in map.tags" :key="tag">{{ tag }}</v-chip>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    map: { required: true },
  },
}
</script>
