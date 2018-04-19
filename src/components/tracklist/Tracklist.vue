<template>
  <div id="song_list">
    <table id="song_list_table">
      <thead>
      <tr>
        <th id="play_btn_column"></th>
        <th v-if="showTrackNumber">#</th>
        <th>NAME</th>
        <th v-if="showArtist">ARTIST</th>
        <th v-if="showAlbum">ALBUM</th>
        <th>DURATION</th>
        <th class="btn_column"
            v-if="showAddToPlaylistButton"
            v-on:click="addAlbumToPlaylist">
          <i class="material-icons md-48" title="Add album to current playlist">playlist_add</i>
        </th>
        <th class="btn_column"
            v-if="showRemoveTrackButton"
            v-on:click="removeTrack">
          <i class="material-icons md-48" title="Add album to current playlist">clear_all</i>

        </th>
      </tr>
      </thead>
      <tbody v-if="tracks.length">
        <trackListItem v-for="track in tracks"
                       :track="track"
                       :showTrackNumber="showTrackNumber"
                       :showArtist="showArtist"
                       :showAlbum="showAlbum"
                       :showAddToPlaylistButton="showAddToPlaylistButton"
                       :showRemoveTrackButton="showRemoveTrackButton"
                       :key="track.trackId"
                       v-on:playRequest="emitNewPlaylistToPlay" />
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import trackListItem from './TrackListItem';

  export default {
    name: 'tracklist',
    components: { trackListItem },
    component: {
      trackListItem,
    },
    props: {
      tracks: {
        type: Array,
        required: true
      },
      showTrackNumber: {
        type: Boolean,
        required: false,
        default: false,
      },
      showArtist: {
        type: Boolean,
        required: false,
        default: false,
      },
      showAlbum: {
        type: Boolean,
        required: false,
        default: false,
      },
      showAddToPlaylistButton: {
        type: Boolean,
        required: false,
        default: false,
      },
      showRemoveTrackButton: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    methods: {
      ...mapActions([
        'addAlbumAsCurrentlyPlayingPlaylist',
        'addTrackToCurrentPlaylist',
        'addTrackAsCurrentlyPlayingTrack'
      ]),
      emitNewPlaylistToPlay(trackToPlay) {
        const newTracks = this.tracks.slice();
        const index = newTracks.findIndex(el => el.trackId === trackToPlay.trackId);
        const tracksToBePushedAtTheBackOfPlaylist = newTracks.splice(0, index);
        newTracks.push(...tracksToBePushedAtTheBackOfPlaylist);
        const newPlaylist = {
          tracks: newTracks,
          name: newTracks[0].collectionName,
          id: 0
        };
        this.addAlbumAsCurrentlyPlayingPlaylist(newPlaylist);
        this.addTrackAsCurrentlyPlayingTrack(trackToPlay);
        this.$root.$emit('newPlayRequested');
      },
      async addAlbumToPlaylist() {
        this.tracks.forEach(track => this.addTrackToCurrentPlaylist(track));
      }
    }
  };
</script>

<style scoped>
  #song_list {
    align-content: center;
    align-self: auto;
    margin: 0 auto 5vh;
    width: 80vw;
  }

  #song_list_table {
    margin: 0 auto auto 0;
    font-size: 1.5rem;
  }

  #song_list_table {
    text-align: center;
    margin-bottom: 150px;
  }

  #play_btn_column {
    width: 80px;
  }

  #song_list_table tr:nth-child(even) {
    background-color: #1e1e1e;
  }

  .btn_column {
    padding: 0;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    width: auto;
  }

  th {
    text-align: center;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait) {
    #song_list_table {
      font-size: 2rem;
    }
  }
</style>
