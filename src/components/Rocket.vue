<template>
  <section>
    <h2 v-text="companyName"></h2>
    {{id | capitalize}} component Works!
  </section>
</template>

<script>
import rocketMixins from "@/mixins/rocketMixins";
export default {
  name: "Rocket",
  data() {
    return {
      id: ""
    };
  },
  mixins: [rocketMixins],
  created() {
    console.log("this is created hook");
    this.id = this.$route.params.rocketId;
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
