import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    a: 0,
    url: 'http://127.0.0.1:3111',
    show:false,
    musiclist:[],
    music:[]
  },
  mutations: {
    musiclist (state,data) {
      state.musiclist = data
    },
    addlist(state,data){
      state.music = data
      state.show = true
    }
  },
  actions: {
    musiclist ({commit,state}) {
      axios.get(`${state.url}/top/list?idx=1`).then(e=>{
        commit('musiclist',e.data.result.tracks)
      })
    },
    addlist({commit,state},data){
        commit('addlist',data)
    }
  }
})

export default store
