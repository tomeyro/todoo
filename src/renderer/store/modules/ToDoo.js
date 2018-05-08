const state = {
  uid: null,
  loading: false
}

const mutations = {
  SET_LOADING (state) {
    state.loading = true
  },
  SET_NOT_LOADING (state) {
    state.loading = false
  }
}

const actions = {
  startLoading ({commit, state}) {
    commit('SET_LOADING')
    setTimeout(function () {
      commit('SET_NOT_LOADING')
      state.uid = 1
    }, 2000)
  }
}

export default {
  state,
  mutations,
  actions
}
