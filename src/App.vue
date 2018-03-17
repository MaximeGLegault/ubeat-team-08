<template>
  <div id="app">
    <nav-menu />
    <player-bar v-if="player_visibility"
                :tracks="tracks"/>
    <router-view/>
  </div>
</template>

<script>
  import api from '@/lib/api';
  import Navigation from '@/components/Navigation';

  import Player from '@/components/Player';

  export default {
    name: 'app',

    components: {
      'nav-menu': Navigation,
      'player-bar': Player
    },

    data() {
      return {
        player_visibility: true,
        tracks: [],
        playlist_visibility: false
      };
    },
    async created() {
      await api.getTracksOfAlbum(1125488753)
        .then((value) => { this.tracks = value.results; });
    }
  };

</script>

<style>
  body{
    background-color: black;
    color: #fff;
    padding: 0;
    margin: 0;
  }
</style>
