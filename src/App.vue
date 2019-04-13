<template>
  <div id="app">
    <Header v-once :msg="message">
      <template v-slot:header="{group}">
        <div>Hello {{group}}</div>
      </template>
    </Header>
    <!-- <Header :msg="message"/> -->
    <transition name="slide-fade" mode="out-in">
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
</style>
