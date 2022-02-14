<template>
    <v-app>
        <v-row class="d-flex flex-wrap justify-center">
            <v-card v-for="(cat, id) in this.cats" :key="id" style="width: 300px" class="ma-3 d-flex flex-column padding: 10px">
                <v-img :src="cat.image"></v-img>
                <h2> {{cat.name}} </h2>
                <span>{{cat.description}}</span>
            </v-card>
        </v-row>
    </v-app>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        cats: [],
        
    }),
    async created() {
        let response = await axios.get('http://localhost:3000/cats');
        this.cars = response.data;
        console.log(this.cats);
        console.log(this.response);
    },
}    
</script>