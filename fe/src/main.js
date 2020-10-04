// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App'

// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from "./store/index";
import VueRouter from "vue-router";
import "./filters"
import routes from "./router/index";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
