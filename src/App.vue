<template>
  <div id="app">
    <nav-menu />
    <player-bar/>
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Navigation from '@/components/Navigation';
  import Player from '@/components/player/Player';
  import api from '@/lib/api';

  export default {
    name: 'app',

    components: {
      'nav-menu': Navigation,
      'player-bar': Player
    },
    methods: {
      ...mapActions([
        'createNewPlaylist',
        'switchCurrentPlaylist'
      ]),
    },
    async created() {
      await api.getAllPlaylists()
        .then((value) => {
          const list = value;
          const listPlUser = [];
          // const listPlUser = [];
          list.forEach((keys) => {
            if (keys.owner !== undefined) {
              // console.log(keys.owner);
              if (keys.owner.email === this.$store.state.email) {
                listPlUser.push(keys);
              }
            }
          });
          this.$store.state.playlists = listPlUser;
          if (this.$store.state.playlists[0] !== undefined) {
            this.$store.state.currentPlaylist = this.$store.state.playlists[0];
          }
          console.log(this.$store.state.playlists[0]);
        }).catch(() => {
          window.location = '#/login';
        });
      // todo search for playlist before creating an empty one
      // if (this.$store.state.playlists.size === 0) {
      //   const newPlaylistId = await this.createNewPlaylist('My playlist');
      //   this.switchCurrentPlaylist({ playlistId: newPlaylistId, isModifiable: true });
      // }
    },
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
