<template>
  <section class="rocket">
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
                :class="{ 'active': idx==0 }"
              >
                <img :src="image" class="img-fluid" :alt="image">
              </div>
            </div>
            <a class="carousel-control-prev" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="ml-5 text-center">{{rocketData.cost_per_launch | currency}}</p>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </section>
</template>

<script>
export default {
  name: "Rocket",
  props: {
    rocketData: Object
  },
  mounted() {
    // console.log(this.rocketData);
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
