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
          window.location = '#/playlist';
        }
      });
  },

  switchUserCurrentPlaylist({ commit, state }, playlistId) {
    const playlist = state.userPlaylists.find(el => el.id === playlistId);
    if (playlist) {
      commit('SWITCH_USER_CURRENT_PLAYLIST', playlist);
    }
  },

  createNewPlaylist({ commit, state }, playlistName, userName) {
    return api.createPlaylist(playlistName, userName)
      .then((value) => {
        commit('SAVE_PLAYLIST', value.data);
        return value.data.id;
      }).catch((error) => {
        if (error.response.status === 401) {
          window.location = '#/login';
        }
      });
  },

  addAlbumAsCurrentlyPlayingPlaylist({ commit }, playlist) {
    if (playlist) {
      commit('SWITCH_CURRENTLY_PLAYING_PLAYLIST', playlist);
    }
  },

  addTrackAsCurrentlyPlayingTrack({ commit, state }, track) {
    if (track &&
      state.currentlyPlayingPlaylist.tracks.findIndex(el => el.trackId === track.trackId) !== -1) {
      commit('SWITCH_CURRENTLY_PLAYING_TRACK', track);
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
  },
  editPlaylistName(context, { playlistId, newName }) {
    if (playlistId) {
      return api.editNamePlaylist(playlistId, newName)
        .then((value) => {
          context.commit('EDIT_NAME', value.data);
        });
    }
    return Promise.reject(new Error('unmodifiable playlist'));
  },
  addSongToCurrentPlaylist({ commit, state }, track) {
    return api.addTrackToPlaylist(state.userCurrentSelectedPlaylist.id, track)
      .then((value) => {
        const oldPlaylist = state.userPlaylists.find(el => el.id === value.data.id);
        commit('UPDATE_PLAYLIST', { oldPlaylist, newPlaylist: value.data });
      });
  },
};

export default actions;
