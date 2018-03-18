/* eslint-disable no-param-reassign */
const mutations = {

  UPDATE_PLAYLIST(state, { playlistIndex, playlist }) {
    state.playlists[playlistIndex] = playlist;
  },

  addSongsToCurrentPlaylist(state, payload) {
    state.currentPlaylist.tracks.push(...payload);
  },

  SWITCH_CURRENT_PLAYLIST(state, playlistId) {
    state.currentPlaylist = playlistId;
  },

  SET_MODIFIABLE_CURRENT_PLAYLIST(state, isModifiable) {
    state.isCurrentPlaylistModifiable = isModifiable;
  },

  SAVE_PLAYLIST(state, playlist) {
    state.playlists.push(playlist);
  },

  changeCurrentPlaylist(state, payload) {
    state.currentPlaylist = payload;
  }
};

export default mutations;
