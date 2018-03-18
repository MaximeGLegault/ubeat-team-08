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
  },
  changeCurrentPlaylist(state, payload) {
    state.current_playlist.isModifiable = true;
    state.current_playlist.tracks.length = 0;
    state.current_playlist.tracks.push(...payload);
    state.current_playlist.name = payload.name;
  }
};

export default mutations;
