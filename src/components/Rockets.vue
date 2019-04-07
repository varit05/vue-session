<template>
  <section class="rockets" >
    <div v-if="rockets.length">
      <div v-for="rocket in rockets" :key="rocket.id">
        <RocketView :rocket-data="rocket" />
      </div>
    </div>
    <div v-else>
      Loading... 
      <Loading />
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import RocketView from '@/views/RocketView';
export default {
  name: 'Rockets',
  components:{
    RocketView
  },
  data() {
    return {
      rockets: []
    }
  },
  created() {
    console.log("this is created hook");
  },
  async mounted() {
    console.log('This is mounted hook');
    setTimeout(() => {
    this.getRockets();
    // Timeout Logic
    }, 10000);
    
  },
  methods: {
    async getRockets() {
      const rocketsData = await axios.get('https://api.spacexdata.com/v3/rockets');
      this.rockets = rocketsData.data;
      console.log("rockets", this.rockets);
    }
  }
}
</script>
