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
      <v-btn @click="addCat()">Add</v-btn>
    </div>
</template>

<script>
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
    showCat() {
      console.log(this.name);
      console.log(this.image);
      console.log(this.desc);
      console.log(this.long);
      console.log(this.lat);
    },
    async addCat() {
      try {
        await axios({
          url: '/cats',
          method: 'POST',
          'content-type': 'application/json',
          data: {
            name: this.name,
            image: this.image,
            description: this.desc,
            lat: this.lat,
            long: this.long,
          },
        });
      } catch (error) {
        console.log(error);
      }
      this.$router.push({ path: '/' });
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
