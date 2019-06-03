import Vue from "vue";
import VueApollo from "vue-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

const APP_ENV = process.env.APP_ENV || "development";
const PROD = APP_ENV === "production";
const PROTOCOL = PROD ? "https://" : "http://";

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 4000;
const uri = PROTOCOL + HOST + ":" + PORT;

export const getApolloProvider = () => {
  Vue.use(VueApollo);

  const link = createHttpLink({ uri });
  const cache = new InMemoryCache();

  const defaultClient = new ApolloClient({
    cache,
    link,
    connectToDevTools: true
    // ...(ssr ? { ssrMode: true } : { ssrForceFetchDelay: 100 })
  });

  return new VueApollo({
    defaultClient
  });
};

// const apiLinkAuth = setContext((_, { headers }) => {
//   const {
//     AUTH: { token }
//   } = cache.readQuery({
//     query: gql`
//       {
//         AUTH @client {
//           token
//         }
//       }
//     `
//   });
//   return {
//     headers: {
//       ...headers,
//       Authorization: !!token || token === "" ? "" : `Bearer ${token}`
//     }
//   };
// });
//
// const link = ApolloLink.from([stateLink, apiLinkAuth.concat(apiLink)]);

// if (typeof window !== undefined) {
//   if (window.hasOwnProperty("__APOLLO_STATE__")) {
//     // SSR state transfer
//     cache.restore((window as any).__APOLLO_STATE__.defaultClient);
//   } else {
//     // needed to get apollo-dev-tools to recognize client
//     (window as any).__APOLLO_STATE__ = { booger: "eater" };
//   }
// }

// #### need to make sure cache doesn't persist for changes
// persistCache({
//     cache,
//     storage: window.localStorage,
// });

// // @ts-ignore - bug in .d.ts file i think
// client.onResetStore(stateLink.writeDefaults);
//
// return client;
