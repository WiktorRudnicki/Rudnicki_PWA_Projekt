<template>
    <v-app>
        <v-row class="d-flex flex-wrap justify-center">
            <v-card v-for="(cat, id) in this.cats" :key="id"
            style="max-width:300px;  max-height:500px"
            class="ma-3 d-flex flex-column justify-center padding: 10px">
                <v-img :src="cat.image" height="300"
                width="300"></v-img>
                <h2> {{cat.name}} </h2>
                <span>{{cat.description}}</span>
                <a :href="`https://maps.google.com/maps?&amp;z=15&amp;q=${cat.lat}+${cat.long}&amp;ll=${cat.lat}+${cat.long}`" target="_blank" rel="noopener">{{cat.lat}} {{cat.long}}</a>
                <v-btn @click=DeleteCat(cat.id) class="red">Delete Cat :(</v-btn>
            </v-card>
        </v-row>
    </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    cats: [],

  }),
  async created() {
    const response = await axios.get('/cats');
    this.cats = response.data;
    console.log(this.cats);
    console.log(this.response);
  },
  methods: {
    async DeleteCat(id) {
      await axios.delete(`/cats/${id}`);
      window.location.reload();
    },
  },
};
</script>
