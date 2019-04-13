<template>
  <section class="rockets">
    <h2 v-text="companyName"></h2>Rocket component Works!
  </section>
</template>

<script>
import rocketMixins from "@/mixins/rocketMixins";
export default {
  name: "Rocket",
  data() {
    return {
      rockets: []
    };
  },
  mixins: [rocketMixins],
  created() {
    console.log("this is created hook");
  }
};
</script>
