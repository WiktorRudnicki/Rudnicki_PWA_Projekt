<template>
  <v-app>
    <LogoBar></LogoBar>
    <v-main>
      <v-container class="#FF9E80">
        <router-view
        :image="image"
        @image="getImage"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LogoBar from './components/LogoBar.vue';

export default {
  name: 'App',
  data: () => ({
    cats: [],
    image: '',
  }),
  created() {

  },
  components: {
    LogoBar,
  },
  methods: {
    getImage(picturebase64) {
      console.log('oich tuhe deine mutter ####################################');
      this.image = picturebase64;
      console.log(picturebase64);
      console.log(this.image);
    },
  },
};
</script>
