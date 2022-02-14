<template>
  <v-app>
    <LogoBar></LogoBar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LogoBar from './components/LogoBar';
import axios from "axios";
export default {
  name: 'App',
  data: () => ({
    cars: [],
  }),
   async created() {
      
    },
  components: {
    LogoBar,
  }
};
</script>