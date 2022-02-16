<template>
    <div>
        <input v-model="name">
        <input v-model="description">
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
