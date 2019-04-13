<template>
  <div id="app">
    <Header v-once :msg="message">
      <template v-slot:header>
        <div>Custom Header</div>
      </template>
    </Header>
    <!-- <Header :msg="message"/> -->
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from "./views/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data: function() {
    return {
      message: "Hello Vue!"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
