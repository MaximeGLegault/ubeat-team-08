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
  },
  addPlaylistToListPlaylists(context, playlist) {
    if (playlist) {
      // console.log(playlist);
      context.commit('addPlayListToList', playlist);
    }
  }
};

export default actions;
