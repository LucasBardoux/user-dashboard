// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import Routes from './routes'
import VueRouter from 'vue-router'

Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.component('router-link', Vue.options.components.RouterLink)
Vue.component('router-view', Vue.options.components.RouterView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: Routes
})
