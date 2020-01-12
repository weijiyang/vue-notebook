import Vue from 'vue'
import Vuex from 'vuex'
import utils from '@/utils'

Vue.use(Vuex)

const state = {
    index: 0,
    noteList: []
}

const mutations = {
//   GET_NOTE_LIST (state, val) {
//     state.noteList = val || []
//   },
  GET_NOTE_LIST (state) {
    let data = utils.getLocalData() || []
    state.index = data.length
    state.noteList = data
  },
  SET_LOCALSTORAGE (state) {
    utils.setLocalData(state.noteList)
  },
  ADD_NOTE (state, val) {
    let data = Object.assign({}, val, { id: ++state.index })
    state.noteList.push(data)
  },
  DELETE_NOTE (state, val) {
    state.noteList = state.noteList.filter(item => item.id !== val)
  },
  DELETE_ALL (state) {
    state.noteList = []
  }
}

const actions = {
  getNoteList ({ commit }) {
    return  new Promise((resolve) => {
      let data = utils.getLocalData()
      resolve(data)
    }).then(res => {
      commit('GET_NOTE_LIST', res)
    })
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
