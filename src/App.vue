<template>
  <div id="app">
    <nav-menu />
    <player-bar v-if="player_visibility" />
    <router-view/>
  </div>
</template>

<script>
  // import api from '@/lib/api';
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
        playlist_visibility: false
      };
    },
    // async created() {
    //   await api.createPlaylist('My Playlist')
    //     .then((value) => {
    //       this.$store.state.currentPlaylist = value.data;
    //       this.$store.state.playlists.push(value.data);
    //     }).catch((error) => {
    //       if (error.response.status === 401) {
    //         window.location = '#/login';
    //       }
    //     });
    // }
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
