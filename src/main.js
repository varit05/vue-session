import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";
import Rockets from "@/components/Rockets";
import Rocket from "@/components/Rocket";
import Launch from "@/components/Launch";
import Dragon from "@/components/Dragon";
import LoadingImage from "@/assets/loading.gif";
Vue.config.productionTip = false;

// Install a Vue.js plugin.
// This method has to be called before calling new Vue()
// When this method is called on the same plugin multiple times, the plugin will be installed only once.
Vue.use(VueRouter);

// Global Filter
Vue.filter("currency", value => {
  return `$ ${value}`;
});
// Global component
Vue.component("Loading", {
  template: '<img :src="loadingImage" />',
  data() {
    return {
      loadingImage: LoadingImage
    };
  }
});

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Rockets },
    { path: "/rocket/:rocketId", component: Rocket },
    { path: "/dragon", component: Dragon },
    { path: "/lanches/:id", component: Launch }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
