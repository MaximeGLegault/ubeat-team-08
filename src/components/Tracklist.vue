<template>
  <div id="song_list">
    <table id="song_list_table">
      <thead>
      <tr>
        <th id="play_btn_column"></th>
        <th>#</th>
        <th id="song_name_column">NAME</th>
        <th>Duration</th>
        <th id="playlist_btn_column">
          <i class="material-icons md-48" title="Add album to current playlist">playlist_add</i>
        </th>
      </tr>
      </thead>
      <tbody v-if="tracks.length">
        <trackListItem v-for="track in tracks"
                       :track="track"
                       :key="track.trackId"/>
      </tbody>
    </table>
  </div>
</template>

<script>
  import trackListItem from './TrackListItem';

  export default {
    components: { trackListItem },
    name: 'tracklist',
    component: {
      trackListItem,
    },
    props: {
      tracks: {
        type: Array,
        required: true
      },
    },
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
  }

  #play_btn_column {
    width: 80px;
  }

  #song_list_table tr:nth-child(even) {
    background-color: #1e1e1e;
  }

  #playlist_btn_column {
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
