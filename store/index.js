import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    a: 0,
    url: 'http://47.94.16.170:3000',
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
