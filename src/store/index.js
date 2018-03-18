import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const state = {
  playlists: [],
  current_playlist: {
    tracks: [],
    isModifiable: true
  }
};


export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations,
});
