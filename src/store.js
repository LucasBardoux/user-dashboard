import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersStore: [],
    rolesStore: [],
    rightsStore: []
  },
  mutations: {
    ADD_USER: (state, user) => {
      state.usersStore.push(user);
    },
    ADD_ROLE: (state, role) => {
      state.rolesStore.push(role);
    },
    ADD_RIGHT: (state, right) => {
      state.rightsStore.push(right);
    }
  },
  actions: {

  }
})
