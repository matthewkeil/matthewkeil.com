import Vue from "vue";
import Vuetify from "vuetify";
// import '@babel/polyfill';  // vuetify added this not sure if needed?
import "vuetify/dist/vuetify.min.css";

export const configureVuetify = () => {
  Vue.use(Vuetify, {
    theme: {
      primary: "#43033D",
      secondary: "#9B287B",
      accent: "#CC9621",
      error: "#FF5252",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FFC107"
    }
  });

  // // @ts-ignore
  // import Vuetify from 'vuetify/es5/components/Vuetify';
  // // @ts-ignore
  // import VApp from 'vuetify/es5/components/VApp';
  // // @ts-ignore
  // import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer';
  // // @ts-ignore
  // import VFooter from 'vuetify/es5/components/VFooter';
  // // @ts-ignore
  // import VList from 'vuetify/es5/components/VList';
  // // @ts-ignore
  // import VBtn from 'vuetify/es5/components/VBtn';
  // // @ts-ignore
  // import VIcon from 'vuetify/es5/components/VIcon';
  // // @ts-ignore
  // import VGrid from 'vuetify/es5/components/VGrid';
  // // @ts-ignore
  // import VToolbar from 'vuetify/es5/components/VToolbar';
  // // @ts-ignore
  // import transitions from 'vuetify/es5/components/transitions';
  // // @ts-ignore
  // import transitions from 'vuetify/es5/components/spacer';
  // // @ts-ignore
  // import { Ripple } from 'vuetify/es5/directives';

  // Vue.use(Vuetify, {
  //   components: {
  //     VApp, // required
  //     VNavigationDrawer,
  //     VFooter,
  //     VList,
  //     VBtn,
  //     VIcon,
  //     VGrid,
  //     VToolbar,
  //     transitions,
  //   },
  //   directives: {
  //     Ripple,
  //   },
  //   theme: {
  //     primary: '#ee44aa',
  //     secondary: '#424242',
  //     accent: '#82B1FF',
  //     error: '#FF5252',
  //     info: '#2196F3',
  //     success: '#4CAF50',
  //     warning: '#FFC107',
  //   },
  // });
};
