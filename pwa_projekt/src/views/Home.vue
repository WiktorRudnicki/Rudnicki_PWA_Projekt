<template>
  <div>
    <v-btn to="/addcat">Add a Cat</v-btn>
    <CatCards></CatCards>
  </div>
</template>

<script>
import CatCards from '../components/CatCards.vue';

export default {
  name: 'Home',
  components: {
    CatCards,
  },
};
</script>
