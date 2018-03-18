/* eslint-disable no-param-reassign */
const mutations = {
  addSongToCurrentPlaylist(state, payload) {
    if (state.current_playlist.isModifiable) {
      state.current_playlist.tracks.push(payload);
    }
  },
  addSongsToCurrentPlaylist(state, payload) {
    if (state.current_playlist.isModifiable) {
      state.current_playlist.tracks.push(...payload);
    }
  },
  changeCurrentPlaylistByPlaylist(state, payload) {
    state.current_playlist.isModifiable = false;
    state.current_playlist.tracks.length = 0;
    state.current_playlist.tracks.push(...payload);
  }
};

export default mutations;
