import createPersistedState from 'vuex-persistedstate'

export const plugins = [createPersistedState({
  storage: window.sessionStorage
})];

export const state = () => ({
  email: null,
  userIdx: null,
  loginState: false,
  printIdx: null,
  projectUrl: null,
  tempEmail: null
});

export const mutations = {
  LOGIN (state, info) {
    this.state.email = info.email;
    this.state.userIdx = info.idx;
    this.state.loginState = true;
  },
  LOGOUT (state) {
    this.state.email = null;
    this.state.userIdx = null;
    this.state.loginState = false;
    this.state.printIdx = null;
    this.state.projectUrl = null;
  },
  setPrintIdx (state, projectIdx) {
    this.state.printIdx = projectIdx;
  },
  setProjectUrl (state, url) {
    this.state.projectUrl = url;
  },
  setTempEmail (state, email) {
    this.state.tempEmail = email;
  }
};

export const actions = {
  async login ({ commit, state }, { email, pw }) {
    const { data } = await this.$axios.post('/client/login', { email, pw });
    if (data.items) { commit('LOGIN', data.items[0]); }
    return data;
  },
  async logout ({ commit, state }) {
    const { data } = await this.$axios.get('/client/logout');
    commit('LOGOUT');
    return data;
  },
  async clientAuth ({ commit, state }) {
    const { data } = await this.$axios.get('/client/checkSession');
    if (!data.items) {
      commit('LOGOUT');
      this.$router.push('/login');
    }
  }
};

export const getter = {

};
