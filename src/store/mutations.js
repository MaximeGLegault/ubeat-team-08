/* eslint-disable no-param-reassign */
const mutations = {

  UPDATE_PLAYLIST(state, { oldPlaylist, newPlaylist }) {
    const index = state.playlists.findIndex(el => el.id === oldPlaylist.id);
    if (index !== -1) {
      state.playlists[index] = newPlaylist;
      if (state.currentPlaylist.id === oldPlaylist.id) {
        state.currentPlaylist = newPlaylist;
      }
    }
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
