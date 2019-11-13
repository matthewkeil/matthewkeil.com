import Vue from "vue";
import Vuex from "vuex";

export const getStore = () => {
  Vue.use(Vuex);

  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {}
  });
};
