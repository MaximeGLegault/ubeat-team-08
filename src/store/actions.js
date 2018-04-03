import api from '@/lib/api';

const actions = {

  addTrackToCurrentPlaylist({ commit, state }, track) {
    if (!track &&
        !(state.userCurrentSelectedPlaylist.tracks.findIndex(el =>
          el.trackId === track.trackId) !== -1)) {
      return Promise.reject(new Error('Can\'t add song to unmodifiable playlist'));
    }
    return api.addTrackToPlaylist(state.userCurrentSelectedPlaylist.id, track)
      .then((value) => {
        commit('UPDATE_PLAYLIST_NAME', value.data);
      }).catch((error) => {
        if (error.response.status === 401) {
          window.location = '#/login';
        } else if (error.response.status === 404) {
          alert('Select a playlist before');
        }
      });
  },

  switchCurrentPlaylist({ commit, state }, playlistId) {
    const playlist = state.userPlaylists.find(el => el.id === playlistId);
    if (playlist) {
      commit('SWITCH_CURRENT_PLAYLIST', playlist);
    }
  },

  createNewPlaylist({ commit, state }, playlistName) {
    return api.createPlaylist(playlistName)
      .then((value) => {
        commit('SAVE_PLAYLIST', value.data);
        return value.data.id;
      }).catch((error) => {
        if (error.response.status === 401) {
          window.location = '#/login';
        }
      });
  },

  addAlbumToCurrentPlaylistWithoutSaving({ commit }, playlist) {
    if (playlist) {
      commit('SWITCH_CURRENT_PLAYLIST', playlist);
    }
  },

  updatePlaylistName({ commit, state }, { playlistId, newName }) {
    const index = state.userPlaylists.findIndex(el => el.id === playlistId);
    if (index !== -1) {
      const playlistWithChanges = Object.assign({}, state.userPlaylists[index]);
      playlistWithChanges.name = newName;
      return api.updatePlaylistName(playlistWithChanges)
        .then((value) => {
          commit('UPDATE_PLAYLIST_NAME', value.data);
        }).catch((error) => {
          if (error.response.status === 401) {
            window.location = '#/login';
          }
        });
    }
    return Promise.reject(new Error('unmodifiable playlist'));
  }
};

export default actions;
