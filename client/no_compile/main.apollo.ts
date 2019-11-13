import Vue from "vue";
import App from "./App.vue";
import { sync } from "vuex-router-sync";
import {
  configureVuetify,
  getApolloProvider,
  getStore,
  getRouter
} from "no_compile";

Vue.config.productionTip = false;

const buildApp = () => {
  configureVuetify();
  const apolloProvider = getApolloProvider();
  const store = getStore();
  const router = getRouter();
  sync(store, router);

  return new Vue({
    apolloProvider,
    store,
    router,
    render: h => h(App)
  });
};

buildApp().$mount("#app");
