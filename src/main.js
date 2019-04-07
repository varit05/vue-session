import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";
import Rockets from "@/components/Rockets";
import Rocket from "@/components/Rocket";
import LoadingImage from "@/assets/loading.gif";
Vue.config.productionTip = false;

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
    }
  }
});

const router = new VueRouter({
  routes: [
    { path: "/", component: Rockets },
    { path: "/rocket", component: Rocket }
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
