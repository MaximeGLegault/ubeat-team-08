/* eslint-disable no-param-reassign */
const mutations = {

  UPDATE_PLAYLIST_NAME(state, newPlaylist) {
    const index = state.userPlaylists.findIndex(el => el.id === newPlaylist.id);
    if (index !== -1) {
      state.userPlaylists[index] = newPlaylist;
      if (state.userCurrentSelectedPlaylist.id === newPlaylist.id) {
        state.userCurrentSelectedPlaylist = newPlaylist;
        // TODO check if we can separate this in a different mutations functions
        // TODO and add the thing if currentlyPlayingPlaylist
      }
    }
  },

  SWITCH_CURRENT_PLAYLIST(state, playlist) {
    state.userCurrentSelectedPlaylist = playlist;
  },

  SWITCH_CURRENTLY_PLAYING_PLAYLIST(state, playlist) {
    state.currentlyPlayingPlaylist = playlist;
  },

  SET_CURRENT_REQUEST(state, trackIndex) {
    state.userCurrentSelectedPlaylist.selectedTrack = trackIndex;
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
    state.userCurrentSelectedPlaylist = payload;
  }
};

export default mutations;
