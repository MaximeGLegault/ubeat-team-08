/* eslint-disable no-param-reassign */
const mutations = {
  addSongToCurrentPlaylist(state, payload) {
    state.current_playlist.tracks.push(payload);
  },
  addSongsToCurrentPlaylist(state, payload) {
    state.current_playlist.tracks.push(...payload);
  },
  changeCurrentPlaylistByPlaylist(state, payload) {
    state.current_playlist.isModifiable = false;
    state.current_playlist.tracks.length = 0;
    state.current_playlist.tracks.push(...payload);
  },
  addPlayListToList(state, payload) {
    console.log(payload);
    state.playlists.push(payload);
  }
};

export default mutations;
