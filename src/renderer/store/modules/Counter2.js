const state = {
  main: 0
}

const mutations = {
  DECREMENT_MAIN_COUNTER2 (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER2 (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER2')
  },
  show ({ commit }) {
    console.log(state)
  }
}

export default {
  state,
  mutations,
  actions
}
