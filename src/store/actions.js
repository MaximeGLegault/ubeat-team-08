import api from '@/lib/api';

const actions = {

  addSongToCurrentPlaylist({ commit, state }, track) {
    if (track && state.isCurrentPlaylistModifiable) {
      return api.addTrackToPlaylist(state.currentPlaylist.id, this.track)
        .then((value) => {
          const oldPlaylist = state.playlists.find(el => el.id === value.data.id);
          commit('UPDATE_PLAYLIST', { oldPlaylist, newPlaylist: value.data });
        });
    }
    return Promise.reject(new Error('Can\'t add song to unmodifiable playlist'));
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

  changeCurrentPlaylist(context, playlist) {
    if (playlist) {
      context.commit('SWITCH_CURRENT_PLAYLIST', playlist);
    }
  }
};

export default actions;
