<template>
  <tr>

    <td id="play_btn_column">
      <a class=" btn deep-purple accent-3" v-on:click="$emit('playRequest', track)">
        <i class="material-icons md-48">play_arrow</i>
      </a>
    </td>

    <td v-if="showTrackNumber">{{track.trackNumber}}</td>

    <td id="song_name_column">{{track.trackName}}</td>

    <td id="artist_name_column"
        v-if="showArtist">
      {{track.artistName}}
    </td>

    <td v-if="showAlbum">{{track.collectionName}}</td>

    <td id="duration_column">{{duration}}</td>

    <td id="add_playlist"
        v-if="showAddToPlaylistButton"
        v-on:click="addTrackToPlaylist"
        title="Add song to current playlist">
      <i class="material-icons md-48">add</i>
    </td>

    <td id="delete_track_from_playlist"
        v-if="showRemoveTrackButton"
        v-on:click="$emit('removeTrack', track.trackId)"
        title="Remove song from current playlist">
      <i class="material-icons md-48">remove</i>
    </td>

  </tr>
</template>

<script>
  import util from '@/lib/util';
  import { mapActions } from 'vuex';

  export default {
    name: 'trackListItem',
    props: {
      track: {
        required: true,
        type: Object,
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
    computed: {
      duration() {
        return util.getLength(this.track.trackTimeMillis);
      }
    },
    methods: {
      ...mapActions([
        'addTrackToCurrentPlaylist',
      ]),
      async addTrackToPlaylist() {
        await this.addTrackToCurrentPlaylist(this.track);
          // .catch(reason => console.log('add some toast or something when this pop: ', reason));
      }
    },
  };
</script>

<style scoped>
  #play_btn_column {
    width: 80px;
  }

  #song_name_column {
    text-align: left;
  }

  td {
    text-align: center;
  }

  #duration_column {
    width: 5em;
  }

  #add_playlist {
    padding: 0;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    width: auto;
  }
</style>
