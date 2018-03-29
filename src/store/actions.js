import api from '@/lib/api';

const actions = {

  addTrackToCurrentPlaylist({ commit, state }, track) {
    if (!track &&
        !state.isCurrentPlaylistModifiable &&
        !(state.currentPlaylist.tracks.findIndex(el => el.trackId === track.trackId) !== -1)) {
      return Promise.reject(new Error('Can\'t add song to unmodifiable playlist'));
    }
    return api.addTrackToPlaylist(state.currentPlaylist.id, track)
      .then((value) => {
        commit('UPDATE_PLAYLIST', value.data);
      });
  },

  switchCurrentPlaylist({ commit, state }, { playlistId, isModifiable }) {
    const playlist = state.playlists.find(el => el.id === playlistId);
    if (playlist) {
      commit('SWITCH_CURRENT_PLAYLIST', playlist);
      commit('SET_MODIFIABLE_CURRENT_PLAYLIST', isModifiable);
    }
  },

  createNewPlaylist({ commit, state }, playlistName) {
    return api.createPlaylist(playlistName)
      .then((value) => {
        commit('SAVE_PLAYLIST', value.data);
        return value.data.id;
      });
  },

  addAlbumToCurrentPlaylistWithoutSaving({ commit }, playlist) {
    if (playlist) {
      commit('SWITCH_CURRENT_PLAYLIST', playlist);
      commit('SET_MODIFIABLE_CURRENT_PLAYLIST', false);
    }
  },

  addPlaylistToListPlaylists(context, playlist) {
    if (playlist) {
      context.commit('addPlayListToList', playlist);
    }
  },

  updatePlaylist({ commit, state }, playlistWithChanges) {
    if (playlistWithChanges &&
      state.playlists.findIndex(el => el.id === playlistWithChanges.id) !== -1) {
      return api.updatePlaylist(playlistWithChanges)
        .then((value) => {
          commit('UPDATE_PLAYLIST', value.data);
        });
    }
    return Promise.reject(new Error('unmodifiable playlist'));
  }
};

export default actions;
