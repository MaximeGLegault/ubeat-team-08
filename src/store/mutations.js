
const mutations = {
  addSongToCurrentPlaylist(state, payload) {
    if (state.current_playlist.isModifiable) {
      state.current_playlist.tracks.push(payload);
    }
  },
};

export default mutations;
