<template>
  <div id="app">
    <nav-menu v-on:changePlaylistVisibility="toggle"/>
    <player-bar v-if="player_visibility"
                :tracks="tracks"/>
    <playlist-page v-if="playlist_visibility"/>
    <router-view/>
  </div>
</template>

<script>
  import api from '@/lib/api';
  import Navigation from '@/components/Navigation';

  import Player from '@/components/Player';
  import Playlist from '@/components/Playlist';

  export default {
    name: 'app',

    components: {
      'nav-menu': Navigation,
      'player-bar': Player,
      'playlist-page': Playlist,
    },

    data() {
      return {
        player_visibility: true,
        tracks: [],
        playlist_visibility: false
      };
    },
    methods: {
      toggle() {
        console.log(this.playlist_visibility);
        this.playlist_visibility = true;
      }
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
