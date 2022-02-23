<template>
    <div>
      <v-btn to="/">Home</v-btn>
      <br>
      <v-text-field label="Name" solo v-model="name"></v-text-field>
      <v-textarea v-model="description" label="Description">
      </v-textarea>
      <v-btn @click="geoloc()">Get location</v-btn>
      <span>{{lat}}{{long}}</span>
    </div>
</template>

<script lang="ts">

export default ({
  name: 'AddCat',
  data: () => ({
    lat: '',
    long: '',
  }),
  components: {
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
