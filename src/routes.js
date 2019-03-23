import VueRouter from 'vue-router'
import User from './components/User.vue'
import Roles from './components/Roles.vue'
import Rights from './components/Rights.vue'

export default new VueRouter({
  routes: [
    {path: '/', component: User},
    {path: '/roles', component: Roles},
    {path: '/rights', component: Rights}
  ]
})
