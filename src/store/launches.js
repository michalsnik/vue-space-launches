import api from '@app/api'

const types = {
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  PUSH_LAUNCH: 'PUSH_LAUNCH',
  SET_LOADING: 'SET_LOADING',
  SET_CURRENT_LAUNCH: 'SET_CURRENT_LAUNCH'
}

const state = {
  all: [],
  isLoading: true,
  currentLaunchId: null
}

const actions = {
  getAll({ commit, state }) {
    if (state.all.length > 1) {
      return;
    }

    commit(types.SET_LOADING, true)

    return api.launches.findNext()
      .then(data => commit(types.RECEIVE_LAUNCHES, data))
  },

  getById({ commit, getters }, id) {
    commit(types.SET_CURRENT_LAUNCH, id)

    if (getters.currentLaunch) return

    commit(types.SET_LOADING, true)

    return api.launches.find(id)
      .then(data => commit(types.PUSH_LAUNCH, data))
  }
}

const mutations = {
  [types.RECEIVE_LAUNCHES](state, launches) {
    state.isLoading = false
    state.all = launches
  },
  [types.SET_CURRENT_LAUNCH](state, launchId) {
    state.currentLaunchId = launchId
  },
  [types.PUSH_LAUNCH](state, launch) {
    state.all = [...state.all, launch]
    state.isLoading = false
  },
  [types.SET_LOADING](state, loading) {
    state.isLoading = loading
  }
}

const getters = {
  currentLaunch (state) {
    return state.all.filter(l => l.id == state.currentLaunchId)[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
