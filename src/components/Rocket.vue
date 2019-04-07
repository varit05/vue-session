<template>
  <section class="rockets">
    Rocket component Works!
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Rocket',
  data() {
    return {
      rockets: []
    }
  },
  created() {
    console.log("this is created hook");
  },
}
</script>
