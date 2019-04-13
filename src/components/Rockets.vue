<template>
  <section class="rockets">
    <div class="row" v-if="rockets.length">
      <div class="col-12 col-sm-6" v-for="rocket in rockets" :key="rocket.id">
        <RocketView :rocket-data="rocket"/>
      </div>
    </div>
    <div v-else>
      <Loading></Loading>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import RocketView from "@/views/RocketView";
export default {
  name: "Rockets",
  components: {
    RocketView
  },
  data() {
    return {
      rockets: []
    };
  },
  beforeCreate() {
    console.log("this is beforeCreate hook");
  },
  created() {
    console.log("this is created hook");
  },
  mounted() {
    console.log("This is mounted hook");
    setTimeout(() => {
      this.getRockets();
    }, 5000);
  },
  methods: {
    async getRockets() {
      const rocketsData = await axios.get(
        "https://api.spacexdata.com/v3/rockets"
      );
      this.rockets = rocketsData.data;
      console.log("rockets", this.rockets);
    }
  },
  destroyed() {
    console.log("component is destroyed");
  }
};
</script>
