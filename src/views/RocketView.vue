<template>
  <section class="rocket text-center mt-3">
    <div v-if="rocketData.id">
      <div class="row">
        <h3 class="col-12" v-text="rocketData.rocket_name"></h3>
      </div>
      <div class="row">
        <div class="col-10 offset-1">
          <div
            id="carouselExample"
            class="carousel slide"
            data-ride="carousel"
            data-interval="1200"
          >
            <div class="carousel-inner text-center">
              <div
                class="carousel-item"
                v-for="(image, idx) in img"
                :key="image.index"
                :class="{ 'active': idx == activeIndex }"
              >
                <img :src="image" height="360px" class="w-100" :alt="image">
              </div>
            </div>
            <a class="carousel-control-prev" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" @click="changeSlides(-1)" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" role="button" data-slide="next">
              <span class="carousel-control-next-icon" @click="changeSlides(1)" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="ml-5 text-center">{{rocketData.cost_per_launch | currency}}</p>
        </div>
        <div class="col-8 offset-2">
          <h6 v-once v-text="rocketData.description"></h6>
          <button
            class="btn btn-outline-success"
            @click="launches(rocketData.rocket_id)"
          >View Launches</button>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </section>
</template>

<script>
export default {
  name: "Rocket",
  data() {
    return {
      activeIndex: 0,
      prevDisable: true
    };
  },
  props: {
    rocketData: Object
  },
  mounted() {
    // console.log(this.rocketData);
  },
  methods: {
    changeSlides(index) {
      console.log("Index", this.activeIndex);
      if (this.activeIndex >= 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex += index;
      }
    },
    launches(rocketId) {
      console.log(rocketId);
      console.log(this);
      this.$router.push({ path: `/lanches/${rocketId}` });
    }
  },
  computed: {
    // a computed getter
    img: function() {
      return this.rocketData.flickr_images.filter(function(image, index) {
        if (index >= 4) {
          return false;
        } else {
          return image;
        }
      });
    }
  }
};
</script>
