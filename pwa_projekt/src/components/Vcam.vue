<template>
  <div>
    <v-easy-camera
      v-model="picture"
      :mustApprove="approved"
      output="blob"
      :reslution="{ width: 300, height: 300 }"
      :fullscreen="fullscreen"
      @approve="sendpicture()"
      @close="backToCat()">
      </v-easy-camera>
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
      fullscreen: true,
      approved: true,
    };
  },
  methods: {
    async sendpicture() {
      await {};
      const reader = new FileReader();
      reader.readAsDataURL(this.picture);
      // eslint-disable-next-line
      reader.onloadend = ()=> {
        const base64data = reader.result;
        this.picturebase64 = base64data;
        console.log(this.picturebase64);
        this.$emit('image', this.picturebase64);
        this.$router.push('/addCat');
      };
    },
    backToCat() {
      this.$router.push('/addCat');
    },
  },
};
</script>

<style lang="scss" scoped></style>
