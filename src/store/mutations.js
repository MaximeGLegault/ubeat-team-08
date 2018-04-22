/* eslint-disable no-param-reassign */
const mutations = {

  UPDATE_PLAYLIST_NAME(state, newPlaylist) {
    const index = state.userPlaylists.findIndex(el => el.id === newPlaylist.id);
    if (index !== -1) {
      state.userPlaylists.splice(index, 1, newPlaylist);
      if (state.userCurrentSelectedPlaylist.id === newPlaylist.id) {
        state.userCurrentSelectedPlaylist = newPlaylist;
      }
    }
  },

  SWITCH_USER_CURRENT_PLAYLIST(state, playlist) {
    state.userCurrentSelectedPlaylist = playlist;
  },

  SWITCH_CURRENTLY_PLAYING_PLAYLIST(state, playlist) {
    state.currentlyPlayingPlaylist = playlist;
  },

  SWITCH_CURRENTLY_PLAYING_TRACK(state, track) {
    state.currentlyPlayingTrack = track;
  },

  SAVE_PLAYLIST(state, playlist) {
    state.userPlaylists.push(playlist);
  },

  UPDATE_PLAYLIST(state, { oldPlaylist, newPlaylist }) {
    const index = state.userPlaylists.findIndex(el => el.id === oldPlaylist.id);
    if (index !== -1) {
      state.userPlaylists[index] = newPlaylist;
      if (state.userCurrentSelectedPlaylist.id === oldPlaylist.id) {
        state.userCurrentSelectedPlaylist = newPlaylist;
      }
    }
  },

  UPDATE_USER(state, newUser) {
    state.connectedUser = newUser;
  }
};

export default mutations;
