import Vue from "vue";
import App from "./App.vue";
import { sync } from "vuex-router-sync";
import {
  configureVuetify,
  getRouter,
  getStore,
  getApolloProvider
} from "@/core";

Vue.config.productionTip = false;

const buildApp = () => {
  configureVuetify();
  const apolloProvider = getApolloProvider();
  const router = getRouter();
  const store = getStore();
  sync(store, router);

  return new Vue({
    apolloProvider,
    router,
    store,
    render: h => h(App)
  });
};

buildApp().$mount("#app");
