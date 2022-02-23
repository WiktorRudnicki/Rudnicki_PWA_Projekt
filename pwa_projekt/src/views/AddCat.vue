<template>
    <div>
      <v-btn to="/">Home</v-btn>
      <br>
      <v-text-field label="Name" solo v-model="name"></v-text-field>
      <v-textarea v-model="description" label="Description">
      </v-textarea>
      <v-btn @click="geoloc()">Get location</v-btn>
      <vcam></vcam>
      <span>{{lat}}{{long}}</span>
    </div>
</template>

<script lang="ts">
import vcam from '../components/Vcam.vue';

export default ({
  name: 'AddCat',
  data: () => ({
    lat: '',
    long: '',
  }),
  components: {
    vcam,
  },
  props: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  methods: {
    async geoloc() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.long = position.coords.longitude;
          this.lat = position.coords.latitude;
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
