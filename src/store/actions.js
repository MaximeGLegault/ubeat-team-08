
const actions = {
  addSongToCurrentPlaylist(context, track) {
    if (track && context.state.current_playlist.isModifiable) {
      context.commit('addSongToCurrentPlaylist', track);
    }
  },
  addAlbumToCurrentPlaylist(context, album) {
    if (album && context.state.current_playlist.isModifiable) {
      context.commit('addSongsToCurrentPlaylist', album);
    }
  },
  playPlaylistWithoutSaving(context, playlist) {
    if (playlist) {
      context.commit('changeCurrentPlaylistByPlaylist', playlist);
    }
  },
  addPlaylistToListPlaylists(context, playlist) {
    if (playlist) {
      context.commit('addPlayListToList', playlist);
    }
  },
  changeCurrentPlaylist(context, playlist) {
    if (playlist) {
      context.commit('changeCurrentPlaylist', playlist);
    }
  }
};

export default actions;
