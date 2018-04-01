import api from '@/lib/api';

const actions = {

  addSongToCurrentPlaylist({ commit, state }, track) {
    if (!track &&
        !state.isCurrentPlaylistModifiable &&
        !(state.currentPlaylist.tracks.findIndex(el => el.trackId === track.trackId) !== -1)) {
      return Promise.reject(new Error('Can\'t add song to unmodifiable playlist'));
    }
    return api.addTrackToPlaylist(state.currentPlaylist.id, track)
      .then((value) => {
        const oldPlaylist = state.playlists.find(el => el.id === value.data.id);
        commit('UPDATE_PLAYLIST', { oldPlaylist, newPlaylist: value.data });
      }).catch((error) => {
        if (error.response.status === 401) {
          window.location = '#/login';
        } else if (error.response.status === 404) {
          alert('Create a playlist before');
        }
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
      }).catch((error) => {
        if (error.response.status === 401) {
          window.location = '#/login';
        }
      });
  },

  addAlbumToCurrentPlaylist({ commit, state }, album) {
    if (album && state.isCurrentPlaylistModifiable) {
      return api.addTrackToPlaylist(state.currentPlaylist.id, this.track)
        .then((value) => {
          state.playlists.find(el => el.id === value.data.id);
          commit('UPDATE_PLAYLIST', value.data);
        });
    }
    return Promise.reject(new Error('Can\'t add song to unmodifiable playlist'));
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

  addTracksToCurrentPlaylist({ commit, state }, tracks) {
    if (tracks && state.isCurrentPlaylistModifiable) {
      return new Promise(() => {
        tracks.forEach(async (el) => {
          if (state.currentPlaylist.tracks.findIndex(tr => tr.trackId === el.trackId) === -1) {
            await api.addTrackToPlaylist(state.currentPlaylist.id, el)
              .then((value) => {
                const oldPlaylist = state.playlists.find(pl => pl.id === value.data.id);
                commit('UPDATE_PLAYLIST', { oldPlaylist, newPlaylist: value.data });
              });
          }
        });
      });
    }
    return Promise.reject(new Error('Can\'t add song to unmodifiable playlist'));
  },

  editName(context, { playlistId, newName }) {
    if (playlistId) {
      return api.editNamePlaylist(playlistId, newName)
        .then((value) => {
          context.commit('EDIT_NAME', value.data);
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
