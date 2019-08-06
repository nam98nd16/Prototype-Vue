// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';
import 'vue-awesome/icons/calendar-alt'
import 'vue-awesome/icons/cubes'
import 'vue-awesome/icons/chart-bar'
import 'vue-awesome/icons/retweet'
import 'vue-awesome/icons/regular/newspaper'
import 'vue-awesome/icons/bell'
import 'vue-awesome/icons/regular/hand-point-up'
import 'vue-awesome/icons/trash-alt'
import 'vue-awesome/icons/save'
import 'vue-awesome/icons/sync-alt'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, 'v-icon': Icon },
  template: '<App/>'
})
