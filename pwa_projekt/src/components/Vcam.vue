<template>
  <div>
    <v-easy-camera
      v-model="picture"
      :mustApprove="approved"
      output="blob"
      :fullscreen="fullscreen"
      @approve="sendpicture()"
      @close="backToCat()"
    ></v-easy-camera>
  </div>
</template>

<script>
import EasyCamera from 'easy-vue-camera';

export default {
  components: {
    'v-easy-camera': EasyCamera,
  },
  data() {
    return {
      picture: Blob,
      picturebase64: '',
      fullscreen: false,
      approved: true,
    };
  },
  methods: {
    async sendpicture() {
      await {};
      const reader = new FileReader();
      reader.readAsDataURL(this.picture);
      // eslint-disable-next-line
      reader.onloadend = function () {
        const base64data = reader.result;
        console.log(base64data);
        this.picturebase64 = base64data;
      };
      this.$emit('image', this.picturebase64);
    },
    backToCat() {
      this.$router.push('/addCat');
    },
  },
};
</script>

<style lang="scss" scoped></style>
