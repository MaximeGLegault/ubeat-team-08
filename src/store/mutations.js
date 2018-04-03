/* eslint-disable no-param-reassign */
const mutations = {

  UPDATE_PLAYLIST(state, newPlaylist) {
    const index = state.userPlaylists.findIndex(el => el.id === newPlaylist.id);
    if (index !== -1) {
      state.userPlaylists[index] = newPlaylist;
      if (state.userCurrentPlaylist.id === newPlaylist.id) {
        state.userCurrentPlaylist = newPlaylist;
        // TODO check if we can separate this in a different mutations functions
        // TODO and add the thing if currentlyPlaying
      }
    }
  },

  SWITCH_CURRENT_PLAYLIST(state, playlist) {
    state.userCurrentPlaylist = playlist;
  },

  SWITCH_CURRENTLY_PLAYING_PLAYLIST(state, playlist) {
    state.currentlyPlaying = playlist;
  },

  SET_CURRENT_REQUEST(state, trackIndex) {
    state.userCurrentPlaylist.selectedTrack = trackIndex;
  },

  SET_MODIFIABLE_CURRENT_PLAYLIST(state, isModifiable) {
    state.isCurrentPlaylistModifiable = isModifiable;
  },

  SAVE_PLAYLIST(state, playlist) {
    state.userPlaylists.push(playlist);
  },
  changeCurrentPlaylist(state, payload) {
    state.current_playlist = payload;
  },

  playCurrent(state, payload) {
    state.current_playlist.current_request = payload;
  },

  EDIT_NAME(state, payload) {
    state.userCurrentPlaylist = payload;
  }
};

export default mutations;
