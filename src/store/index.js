import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const state = {
  transactionStatus: 1,
  playlists: [],
  currentPlaylist: {},
  isCurrentPlaylistModifiable: true,
  bkpList: {},
  userName: '',
  email: '',
  password: ''
};

export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations,
});
