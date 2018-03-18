const actions = {
  addSongToCurrentPlaylist(context, track) {
    console.log(track);
    if (track) {
      context.commit('addSongToCurrentPlaylist', track);
    }
  }
};

export default actions;
