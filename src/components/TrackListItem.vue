<template>
  <tr>
    <td id="play_btn_column">
      <a class=" btn deep-purple accent-3" v-on:click="playRequest"><i class="material-icons md-48">play_arrow</i></a>
    </td>
    <td>{{track.trackNumber}}</td>
    <td id="song_name_column">{{track.trackName}}</td>
    <td id="duration_column">{{duration}}</td>
    <td id="add_playlist" v-on:click="addTrackToPlaylist" title="Add song to current playlist">
      <i class="material-icons md-48">add</i>
    </td>
  </tr>
</template>

<script>
  import util from '@/lib/util';

  export default {
    name: 'trackListItem',
    props: {
      track: {
        required: true,
        type: Object,
      }
    },
    computed: {
      duration() {
        return util.getLengthFromMilliseconds(this.track.trackTimeMillis);
      }
    },
    methods: {
      playRequest() {
        this.$emit('playRequest', this.track);
      },
      addTrackToPlaylist() {
        this.$emit('addTrackToPlaylist', this.track);
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
