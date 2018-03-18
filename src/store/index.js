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
};

export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations,
});
