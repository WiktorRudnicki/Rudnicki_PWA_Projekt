<template>
    <div>
      <v-btn to="/">Home</v-btn>
      <br>
      <v-text-field label="Name" solo v-model="name"></v-text-field>
      <v-textarea v-model="description" label="Description">
      </v-textarea>
    </div>
</template>

<script lang="ts">

export default ({
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
});
</script>

<style lang="scss" scoped>

</style>
