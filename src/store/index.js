import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    token: null,
    isLoggedIn: false,
    sites: null,
    reviews: null
  },
  getters: {
    getToken(state){
      return state.token
    },
    getSites(state){
      return state.sites
    },
    getReviews(state){
      return state.reviews
    }
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
      state.isLoggedIn = true;
    },
    setSites: (state, sites) => {
      state.sites = sites;
    },
    setReviews: (state, reviews) => {
      state.reviews = reviews;
    }
  },
  actions: {
  },
  modules: {
  }
})
