<template>
  <table id="song_list_table">
    <thead>
    <tr>
      <th id="play_btn_column"></th>
      <th>#</th>
      <th id="song_name_column">NAME</th>
      <th>Duration</th>
    </tr>
    </thead>
    <tbody v-if="tracks.length">
      <trackListItem v-for="track in tracks"
             :key="track.trackNumber"
             :id="track.trackId"
             :name="track.trackName"
             :duration="track.trackTimeMillis"
             :trackNumber="track.number"/>
    </tbody>
  </table>
</template>

<script>
  import trackListItem from './TrackListItem';

  export default {
    components: { trackListItem },
    name: 'tracklist',
    component: {
      trackListItem,
    },
    data: {
      trackListItems: []
    },
  };
</script>

<style scoped>
  #song_list_table {
    margin: 0 auto auto 0;
    font-size: 1.5rem;
  }

  #song_list_table th:not(#song_name_column){
    text-align: center;
  }

  #play_btn_column {
    width: 80px;
  }

  #song_list_table tr:nth-child(even) {
    background-color: #1e1e1e;
  }

  #song_name_column {
    text-align: left;
  }
</style>
