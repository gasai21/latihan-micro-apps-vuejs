import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import Page1Module from "./modules/page1";
import Page2Module from "./modules/page2";

import { registerModules } from "./register-modules";
// import vuetify from "./plugins/vuetify";

registerModules({
  page1: Page1Module,
  page2: Page2Module
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
