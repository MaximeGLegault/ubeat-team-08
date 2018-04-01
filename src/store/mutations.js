/* eslint-disable no-param-reassign */
const mutations = {

  UPDATE_PLAYLIST(state, newPlaylist) {
    const index = state.playlists.findIndex(el => el.id === newPlaylist.id);
    if (index !== -1) {
      state.playlists[index] = newPlaylist;
      if (state.currentPlaylist.id === newPlaylist.id) {
        state.currentPlaylist = newPlaylist;
        // TODO check if we can separate this in a different mutations functions
        // TODO and add the thing if currentlyPlaying
      }
    }
  },

  SWITCH_CURRENT_PLAYLIST(state, playlist) {
    state.currentPlaylist = playlist;
  },

  SWITCH_CURRENTLY_PLAYING_PLAYLIST(state, playlist) {
    state.currentlyPlaying = playlist;
  },

  SET_CURRENT_REQUEST(state, trackIndex) {
    state.currentPlaylist.selectedTrack = trackIndex;
  },

  SET_MODIFIABLE_CURRENT_PLAYLIST(state, isModifiable) {
    state.isCurrentPlaylistModifiable = isModifiable;
  },

  SAVE_PLAYLIST(state, playlist) {
    state.playlists.push(playlist);
  },
  changeCurrentPlaylist(state, payload) {
    state.current_playlist = payload;
  },

  playCurrent(state, payload) {
    state.current_playlist.current_request = payload;
  },

  EDIT_NAME(state, payload) {
    state.currentPlaylist = payload;
  }
};

export default mutations;
