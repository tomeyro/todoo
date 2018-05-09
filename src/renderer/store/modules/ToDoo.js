const state = localStorage.ToDooDB ? JSON.parse(
  localStorage.ToDooDB
) : {
  uid: null,
  loading: false
}

const mutations = {
  SET_LOADING (state) {
    state.loading = true
  },
  SET_NOT_LOADING (state) {
    state.loading = false
  },
  SET_USER (state, uid) {
    state.uid = uid
  }
}

const actions = {
  startLoading ({commit, state}) {
    commit('SET_LOADING')
    setTimeout(function () {
      commit('SET_NOT_LOADING')
      commit('SET_USER', 1)
    }, 2000)
  }
}

const plugins = [
  store => {
    store.subscribe((mutation, state) => {
      localStorage.ToDooDB = JSON.stringify(state.ToDoo)
    })
  }
]

export default {
  state,
  mutations,
  actions,
  plugins
}
