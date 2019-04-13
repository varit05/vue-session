<template>
  <section class="rockets row">
    <div class="col-4 offset-1" v-for="dragon in dragons" :key="dragon.id">
      <h2 v-text="dragon.name"></h2>
      <h4>Capacity : {{dragon.crew_capacity}}</h4>
      <div class="row">
        <div class="col-6 mt-3" v-for="image in dragon.flickr_images" :key="image.name">
          <img class="img-fluid" :src="image" :alt="image" width="500px">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Dragon",
  data() {
    return {
      dragons: []
    };
  },
  created() {
    console.log("this is created hook");
  },
  mounted() {
    this.getDragonDetails();
  },
  methods: {
    async getDragonDetails() {
      const dragonData = await axios.get(
        "https://api.spacexdata.com/v3/dragons"
      );
      this.dragons = dragonData.data;
      console.log(this.dragons);
    }
  }
};
</script>
