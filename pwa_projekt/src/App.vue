<template>
  <v-app>
    <LogoBar></LogoBar>
    <v-main>
      <v-container class="#FF9E80">
        <router-view
        :image="image"
        @image="getImage"
        @goback="goback"></router-view>
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
      this.image = picturebase64;
    },
    goback() {
      this.$router.push('/');
    },
  },
};
</script>
