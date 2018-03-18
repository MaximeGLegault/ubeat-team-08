/* eslint-disable no-param-reassign */
const mutations = {
  addSongToCurrentPlaylist(state, payload) {
    state.currentPlaylist.tracks.push(payload);
  },
  addSongsToCurrentPlaylist(state, payload) {
    state.currentPlaylist.tracks.push(...payload);
  },
  changeCurrentPlaylistByPlaylist(state, payload) {
    state.isCurrentPlaylistModifiable = false;
    state.currentPlaylist = payload;
  },
  addPlayListToList(state, payload) {
    state.playlists.push(payload);
  },
  changeCurrentPlaylist(state, payload) {
    state.isCurrentPlaylistModifiable = true;
    state.currentPlaylist.tracks = payload;
    state.currentPlaylist.name = payload.name;
  }
};

export default mutations;
