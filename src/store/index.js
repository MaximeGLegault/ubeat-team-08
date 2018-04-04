import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const state = {
  userPlaylists: [],
  userCurrentPlaylist: {},
  currentlyPlaying: {},
  isCurrentPlaylistModifiable: true,
  bkpList: {},
  userName: '',
  email: '',
  password: '',
  PageUserFriends: '',
  PageUserFollow: '',
  PageUserUnfollow: '',
  PageUserPlayListFromPlaylist: ''
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
