import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    a: 0
  },
  mutations: {
    increment (state) {
      state.a++
    }
  },
  actions: {
    jia ({commit}) {
      commit('increment')
    }
  }
})

export default store
