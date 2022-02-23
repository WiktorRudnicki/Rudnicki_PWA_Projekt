<template>
  <v-app>
    <LogoBar></LogoBar>
    <v-main>
      <v-container class="#FF9E80">
        <router-view></router-view>
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
  }),
  created() {

  },
  components: {
    LogoBar,
  },
};
</script>
