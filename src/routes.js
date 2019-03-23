import User from './components/User.vue'
import Roles from './components/Roles.vue'
import Rights from './components/Rights.vue'

export default [
  {path: '/', component: User},
  {path: '/roles', component: Roles},
  {path: '/rights', component: Rights}
]
