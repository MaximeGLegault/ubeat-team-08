/* eslint-disable no-param-reassign */
const mutations = {

  UPDATE_PLAYLIST(state, { playlistIndex, playlist }) {
    state.playlists[playlistIndex] = playlist;
  },

  SWITCH_CURRENT_PLAYLIST(state, playlist) {
    state.currentPlaylist = playlist;
  },

  SET_MODIFIABLE_CURRENT_PLAYLIST(state, isModifiable) {
    state.isCurrentPlaylistModifiable = isModifiable;
  },

  SAVE_PLAYLIST(state, playlist) {
    state.playlists.push(playlist);
  },

};

export default mutations;
