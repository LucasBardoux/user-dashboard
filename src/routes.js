import Vue from 'vue'
import VueRouter from 'vue-router'
import User from './components/User.vue'
import Roles from './components/Roles.vue'
import Rights from './components/Rights.vue'

Vue.use(VueRouter)

Vue.component('router-link', Vue.options.components.RouterLink)
Vue.component('router-view', Vue.options.components.RouterView)

export default new VueRouter({
  routes: [
    {path: '/', component: User},
    {path: '/roles', component: Roles},
    {path: '/rights', component: Rights}
  ]
})
