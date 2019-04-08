<template>
  <section class="launch">
    <section>
      <h1>{{rocketId}} Launches details</h1>
      <div></div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Launch",
  data() {
    return {
      rocketId: "",
      launches: []
    };
  },
  created() {
    this.rocketId = this.$route.params.id;
    this.getLanchesDetails();
    console.log("this is created hook", this.rocketId);
  },
  methods: {
    async getLanchesDetails() {
      const launches = await axios.get(
        `https://api.spacexdata.com/v3/launches?rocket_id=${this.rocketId}`
      );
      this.launches = launches.data;
      console.log("Launches", this.launches);
    }
  }
};
</script>
