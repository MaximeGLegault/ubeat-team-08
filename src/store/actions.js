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
  },
  changeCurrentPlaylist(context, playlist) {
    if (playlist) {
      context.commit('changeCurrentPlaylist', playlist);
    }
  },
  playCurrent(context, playrequest) {
    debugger;
    if (playrequest) {
      context.commit('playCurrent', playrequest);
    }
  }
};

export default actions;
