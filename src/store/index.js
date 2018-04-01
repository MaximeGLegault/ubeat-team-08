import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const state = {
  playlists: [],
  currentPlaylist: {},
  currentlyPlaying: {},
  isCurrentPlaylistModifiable: true,
  bkpList: {},
  userName: '',
  email: '',
  password: ''
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
