import Vue from "vue";
import Vuex from "vuex";

import templateModule from './template';
import productsModule from './products';
import discountsModule from './discounts';
import ordersModule from './orders';

import snackbarModule from "./snackbar";
import usersModule from "./users";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: productsModule,
    discounts: discountsModule,
    orders: ordersModule,
    template: templateModule,
    snackbar: snackbarModule,
    users: usersModule
  },
  // plugins: [createPersistedState()]
});
