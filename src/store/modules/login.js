const state = {
  user: {}
}
const mutations = {
  saveUser (state, data) {
    state.user = data
  }
}
const actions = {
  saveUser: ({commit}, data) => {
    commit('saveUser', data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}