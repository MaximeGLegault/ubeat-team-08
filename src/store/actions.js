const actions = {
  addSongToCurrentPlaylist(context, track) {
    if (track) {
      context.commit('addSongToCurrentPlaylist', track);
    }
  },
  addAlbumToCurrentPlaylist(context, album) {
    if (album) {
      context.commit('addSongsToCurrentPlaylist', album);
    }
  },
  playPlaylistWithoutSaving(context, playlist) {
    if (playlist) {
      context.commit('changeCurrentPlaylistByPlaylist', playlist);
    }
  }
};

export default actions;
