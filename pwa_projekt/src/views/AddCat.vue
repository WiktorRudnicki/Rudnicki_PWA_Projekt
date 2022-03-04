<template>
    <div>
      <v-btn to="/">Home</v-btn>
      <br>
      <br>
      <v-text-field label="Name" solo v-model="name"></v-text-field>
      <v-textarea v-model="desc" label="Description">
      </v-textarea>
      <v-btn @click="geoloc()">Get location</v-btn>
      <span>{{lat}}{{long}}</span>
      <br>
      <br>
      <v-btn to="/catcam">Camera</v-btn>
      <v-btn @click="showCat()">Show</v-btn>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default ({
  name: 'AddCat',
  data: () => ({
    lat: '',
    long: '',
    desc: '',
    name: '',
  }),
  props: {
    image: {
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
    finalcat() {
      return {
        name: this.name,
        description: this.description,
        long: this.long,
        lat: this.lat,
        image: this.image,
      };
    },
    showCat() {
      console.log(this.name);
      console.log(this.image);
      console.log(this.desc);
      console.log(this.long);
      console.log(this.lat);
    },
    async addEvent() {
      try {
        await axios({
          url: '/addCat',
          method: 'POST',
          'content-type': 'application/json',
          data: this.finalcat(),
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
